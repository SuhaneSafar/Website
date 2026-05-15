import React, { useState, useRef, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useRegistration } from '../context/RegistrationContext';
import { submitRegistration } from '../api/events';
import { uploadImageToCloudinary } from '../api/cloudinary';
import { FaTimes, FaCloudUploadAlt, FaQrcode, FaRegCopy, FaCheck } from 'react-icons/fa';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// UPI and QR CODE
const UPI_ID = "9635181037@apl";
const QR_IMAGE = "/qr.png";

const RegistrationModal = () => {
  const { isRegistrationModalOpen, closeRegistrationModal, selectedTrip } = useRegistration();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    course: '',
    institution: '',
    department: '',
    whatsapp: '',
    emergency_contact: '',
    email: '',
    medical_issue: '',
    friends_joining: '',
    pickup_drop: '',
    transaction_no: ''
  });

  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Memoize to prevent recalculation on every form keystroke
  const pickupOptions = useMemo(() => {
    return selectedTrip?.pickupDrop 
      ? selectedTrip.pickupDrop.split(/[,|/]/).map(s => s.trim()).filter(Boolean)
      : [];
  }, [selectedTrip]);

  if (!isRegistrationModalOpen || !selectedTrip) return null;

  const actualPrice = selectedTrip.price ? parseInt(selectedTrip.price.toString().replace(/[^0-9]/g, '')) : 0;
  const payableAmount = 2000; // Fixed registration amount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    toast.success('UPI ID copied!');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image must be less than 5MB");
        return;
      }
      setPaymentScreenshot(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePDFReceipt = (registrationData, logoImg) => {
    const doc = new jsPDF();
    
    if (logoImg) {
      doc.addImage(logoImg, 'PNG', 15, 10, 30, 30, 'logo', 'FAST');
    }

    // Suhane Safar Branding
    doc.setFontSize(22);
    doc.setTextColor(14, 165, 233); // Sky Blue
    doc.text("Suhane Safar", 105, 20, null, null, "center");
    
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text("Trip Registration Receipt", 105, 30, null, null, "center");
    
    doc.setFontSize(10);
    doc.text(`Receipt Generated: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`, 105, 40, null, null, "center");

    doc.line(20, 45, 190, 45);

    // Trip Details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Trip Details", 20, 55);
    
    autoTable(doc, {
      startY: 60,
      head: [['Trip Name', 'Type', 'Duration', 'Start Date', 'End Date', 'Amount Paid']],
      body: [
        [
          registrationData.trip_title, 
          registrationData.trip_type === 'adventure' ? 'Upcoming Adventure' : 'Community Trip', 
          selectedTrip.duration || 'N/A',
          selectedTrip.startDate ? new Date(selectedTrip.startDate).toLocaleDateString() : 'TBA',
          selectedTrip.endDate ? new Date(selectedTrip.endDate).toLocaleDateString() : 'TBA',
          `₹${payableAmount || 'N/A'}`
        ]
      ],
      theme: 'grid',
      headStyles: { fillColor: [14, 165, 233] },
      styles: { fontSize: 9 }, // slightly smaller font to fit 6 columns easily
    });

    let finalY = doc.lastAutoTable.finalY || 80;
    // User Details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Traveler Information", 20, finalY + 15);

    autoTable(doc, {
      startY: finalY + 20,
      body: [
        ['Full Name', registrationData.name],
        ['Age / Gender', `${registrationData.age} / ${registrationData.gender}`],
        ['Email', registrationData.email],
        ['WhatsApp', registrationData.whatsapp],
        ['Emergency Contact', registrationData.emergency_contact],
        ['Medical Issues', registrationData.medical_issue],
        ['Friends Joining', registrationData.friends_joining],
        ['Institution', `${registrationData.institution} (${registrationData.course})`],
        ['Pickup Location', registrationData.pickup_drop],
        ['Payment Transaction No.', registrationData.transaction_no],
      ],
      theme: 'striped',
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 60 } },
    });

    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Thank you for choosing Suhane Safar! For any queries, please contact us.", 105, pageHeight - 20, null, null, "center");

    doc.save(`Suhane_Safar_Registration_${formData.name.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!paymentScreenshot) {
      toast.error('Please upload a payment screenshot');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Processing Registration...');

    try {
      // 1. Upload Screenshot to Cloudinary
      const imageUrl = await uploadImageToCloudinary(paymentScreenshot, 'registrations');

      // 2. Prepare Data for Supabase
      const registrationData = {
        trip_type: selectedTrip.type || 'adventure',
        trip_id: selectedTrip.id,
        trip_title: selectedTrip.title,
        name: formData.name,
        age: parseInt(formData.age),
        gender: formData.gender,
        course: formData.course,
        institution: formData.institution,
        department: formData.department,
        whatsapp: formData.whatsapp,
        emergency_contact: formData.emergency_contact,
        email: formData.email,
        medical_issue: formData.medical_issue || 'None',
        friends_joining: formData.friends_joining || 'None',
        pickup_drop: formData.pickup_drop,
        transaction_no: formData.transaction_no,
        payment_screenshot: imageUrl
      };

      // 3. Save to Supabase
      const { error: dbError } = await submitRegistration(registrationData);

      if (dbError) throw dbError;

      // 4. Send Email Notification via Web3Forms (More reliable than FormSubmit)
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            subject: `New Trip Registration - ${formData.name}`,
            from_name: "Suhane Safar Notifications",
            Name: formData.name,
            Email: formData.email || 'Not provided',
            WhatsApp: formData.whatsapp || 'Not provided',
            Trip: selectedTrip.title,
            Amount_Paid: `₹${payableAmount}`,
            Transaction_ID: formData.transaction_no,
            Pickup_Point: formData.pickup_drop,
            Institution: `${formData.institution} (${formData.course})`,
            Medical_Issues: formData.medical_issue || 'None',
            Friends_Joining: formData.friends_joining || 'None',
            Payment_Screenshot: imageUrl
          })
        });
      } catch (emailErr) {
        console.error("Email delivery failed:", emailErr);
      }

      // 5. Load Logo and Generate PDF Receipt
      const logoImg = await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxSize = 200; // drastically shrink resolution for the PDF logo
          let w = img.width;
          let h = img.height;
          
          if (w > h) {
            if (w > maxSize) {
              h *= maxSize / w;
              w = maxSize;
            }
          } else {
            if (h > maxSize) {
              w *= maxSize / h;
              h = maxSize;
            }
          }
          
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/png', 0.7)); // compress to base64
        };
        img.onerror = () => resolve(null);
        img.src = '/image.png';
      });

      generatePDFReceipt(registrationData, logoImg);

      toast.success('Registration Successful! Receipt Downloaded.', { id: loadingToast });
      
      // Close Modal after slight delay
      setTimeout(() => {
        closeRegistrationModal();
      }, 1500);

    } catch (err) {
      toast.error('Registration failed. Please try again.', { id: loadingToast });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center py-6 px-4 sm:px-6">
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
        onClick={() => !isSubmitting && closeRegistrationModal()}
      ></div>

      <div className="relative w-full max-w-4xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl flex flex-col h-full max-h-[95vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-800/80 px-6 py-4 flex justify-between items-center border-b border-white/5 shrink-0 z-10 shadow-md">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
              Register for Trip
            </h2>
            <p className="text-sky-400 text-sm font-medium mt-1">{selectedTrip.title}</p>
          </div>
          <button 
            onClick={closeRegistrationModal} 
            disabled={isSubmitting}
            className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full hover:bg-slate-700"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-transparent">
          <form id="registration-form" onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
            
            {/* Payment Section (Shown First to establish intent) */}
            <div className="bg-slate-800/50 border border-sky-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaQrcode className="text-sky-400" /> Payment Details
              </h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-white p-2 rounded-xl shrink-0 mx-auto md:mx-0">
                  <img src={QR_IMAGE} alt="UPI QR Code" className="w-40 h-40 object-cover rounded-lg" />
                </div>
                <div className="flex-1 space-y-4 text-slate-300 w-full">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-slate-400">Total Trip Price: <span className="text-white line-through opacity-70 decoration-red-500/50">₹{selectedTrip.price || 'N/A'}</span></p>
                    <p className="text-sm text-sky-400 font-bold uppercase tracking-wider mt-1">Registration Advance</p>
                    <p className="text-4xl font-black text-white">₹{payableAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">UPI ID</p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-lg font-medium text-white tracking-wide select-all">{UPI_ID}</p>
                      <button 
                        type="button" 
                        onClick={handleCopyUPI} 
                        className="text-slate-400 hover:text-sky-400 transition-colors p-1.5 bg-slate-800/80 rounded-md hover:bg-slate-700" 
                        title="Copy UPI ID"
                      >
                        {isCopied ? <FaCheck size={16} className="text-green-500" /> : <FaRegCopy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Age *</label>
                    <input required type="number" name="age" min="16" max="100" value={formData.age} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="21" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Gender *</label>
                    <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none">
                      <option value="" disabled>Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">WhatsApp Number *</label>
                  <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="+91 9876543210" />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Emergency Contact *</label>
                  <input required type="tel" name="emergency_contact" value={formData.emergency_contact} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="+91 9123456789" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Email ID *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="john@example.com" />
              </div>
            </div>

            {/* Academic / Professional Details */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Academic / Professional Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Course *</label>
                  <select required name="course" value={formData.course} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none">
                    <option value="" disabled>Select</option>
                    <option value="UG">UG (Undergraduate)</option>
                    <option value="PG">PG (Postgraduate)</option>
                    <option value="Ph-D">Ph-D</option>
                    <option value="Other">Other / Working Professional</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">College / Company Name *</label>
                  <input required type="text" name="institution" value={formData.institution} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="IIT Delhi / Google" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Department and Year *</label>
                <input required type="text" name="department" value={formData.department} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="Computer Science, 3rd Year" />
              </div>
            </div>

            {/* Trip Logistics */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Trip Logistics</h3>
              
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Pickup/Drop Location *</label>
                <div className="relative">
                  <input 
                    required 
                    type="text" 
                    name="pickup_drop" 
                    list="pickup-options"
                    value={formData.pickup_drop} 
                    onChange={handleChange} 
                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                    placeholder={selectedTrip?.pickupDrop ? `e.g. ${selectedTrip.pickupDrop}` : "Enter preferred pickup location"} 
                  />
                  {pickupOptions.length > 0 && (
                    <datalist id="pickup-options">
                      {pickupOptions.map((opt, i) => (
                        <option key={i} value={opt} />
                      ))}
                    </datalist>
                  )}
                </div>
                {pickupOptions.length > 0 && (
                  <p className="text-xs text-slate-400 mt-1">Available options: <span className="text-sky-400 font-medium">{pickupOptions.join(' / ')}</span>. You can select one.</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Medical Issues (If Any)</label>
                <input type="text" name="medical_issue" value={formData.medical_issue} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="Asthma, Motion Sickness, etc. (Leave blank if none)" />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Friends Joining With You?</label>
                <input type="text" name="friends_joining" value={formData.friends_joining} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="List names (Leave blank if none)" />
              </div>
            </div>

            {/* Verification */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Payment Verification</h3>
              
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Transaction Number *</label>
                <input required type="text" name="transaction_no" value={formData.transaction_no} onChange={handleChange} className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="e.g. UPI Ref No: 312345678901" />
              </div>

              <div className="space-y-2">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Payment Screenshot *</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-slate-950/50 hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaCloudUploadAlt className="w-8 h-8 mb-2 text-sky-400" />
                      <p className="mb-1 text-sm text-slate-300"><span className="font-semibold text-sky-400">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-slate-500">PNG, JPG or JPEG (Max 5MB)</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} required />
                  </label>
                </div>
                {screenshotPreview && (
                  <div className="mt-4 flex justify-center">
                    <img src={screenshotPreview} alt="Screenshot Preview" className="h-32 object-contain rounded-md border border-slate-700" />
                  </div>
                )}
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-800/80 px-6 py-4 flex justify-end gap-3 border-t border-white/5 shrink-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <button 
            type="button" 
            onClick={closeRegistrationModal}
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-lg text-slate-300 font-bold hover:bg-slate-700 transition duration-200"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            form="registration-form"
            disabled={isSubmitting}
            className="px-8 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 flex items-center justify-center min-w-[150px]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : 'Submit & Get Receipt'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default RegistrationModal;
