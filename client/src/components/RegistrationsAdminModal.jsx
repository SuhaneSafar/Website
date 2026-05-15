import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { supabase } from '../supabaseClient';
import { fetchAllRegistrations, deleteRegistrationRecord } from '../api/events';
import { FaTimes, FaTrash, FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';

const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const RegistrationsAdminModal = ({ isOpen, onClose }) => {
  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadRegistrations();
    }
  }, [isOpen]);

  const loadRegistrations = async () => {
    setIsLoading(true);
    const { data, error } = await fetchAllRegistrations();
    if (!error && data) {
      setRegistrations(data);
    } else {
      toast.error('Failed to load registrations');
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this registration?')) return;
    
    const loadingToast = toast.loading('Deleting...');
    const { error } = await deleteRegistrationRecord(id);
    if (error) {
      toast.error('Failed to delete', { id: loadingToast });
    } else {
      toast.success('Deleted successfully', { id: loadingToast });
      setRegistrations(prev => prev.filter(reg => reg.id !== id));
    }
  };

  const formatDateIST = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return dateFormatter.format(new Date(dateString));
    } catch {
      return 'Invalid Date';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center py-6 px-4 sm:px-6">
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-6xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl flex flex-col h-full max-h-[95vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-800/80 px-6 py-4 flex justify-between items-center border-b border-white/5 shrink-0 z-10 shadow-md">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
              All Registrations
            </h2>
            <p className="text-sky-400 text-sm font-medium mt-1">Total Registrations: {registrations.length}</p>
          </div>
          <div className="flex gap-4 items-center">
            <button 
              onClick={loadRegistrations}
              className="text-sm font-semibold text-sky-400 hover:text-white transition-colors"
            >
              Refresh
            </button>
            <button 
              onClick={onClose} 
              className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full hover:bg-slate-700"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-transparent p-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : registrations.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-slate-400">
              <p className="text-lg font-semibold">No registrations yet.</p>
              <p className="text-sm mt-1">When users book a trip, they will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {registrations.map((reg) => (
                <div key={reg.id} className="bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 rounded-xl p-5 flex flex-col transition-colors">
                  
                  {/* Trip Header */}
                  <div className="flex justify-between items-start mb-3 border-b border-slate-700/50 pb-3">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${reg.trip_type === 'adventure' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`}>
                        {reg.trip_type}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 leading-tight">{reg.trip_title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{formatDateIST(reg.created_at)}</p>
                    </div>
                    <button 
                      onClick={() => handleDelete(reg.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors p-1.5 hover:bg-slate-800 rounded-md"
                      title="Delete Registration"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>

                  {/* User Details */}
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Name:</span>
                      <span className="text-white font-medium">{reg.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Age / Gender:</span>
                      <span className="text-white">{reg.age} / {reg.gender}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Email:</span>
                      <span className="text-sky-300 truncate ml-2">{reg.email}</span>
                    </div>
                    <div className="flex justify-between text-sm items-center">
                      <span className="text-slate-400">WhatsApp:</span>
                      <a href={`https://wa.me/${reg.whatsapp ? reg.whatsapp.replace(/\D/g,'') : ''}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-400 hover:text-green-300">
                        <FaWhatsapp /> {reg.whatsapp || 'N/A'}
                      </a>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Emergency:</span>
                      <span className="text-white">{reg.emergency_contact}</span>
                    </div>
                    
                    <div className="mt-3 pt-2 border-t border-slate-700/50">
                      <div className="flex flex-col gap-0.5 text-xs">
                        <span className="text-slate-400">Institution: <span className="text-slate-300">{reg.institution} ({reg.course})</span></span>
                        <span className="text-slate-400">Dept/Year: <span className="text-slate-300">{reg.department}</span></span>
                        <span className="text-slate-400">Pickup: <span className="text-slate-300 font-medium">{reg.pickup_drop}</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="mt-4 pt-3 border-t border-sky-500/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-400">Transaction No:</span>
                      <span className="text-xs font-mono text-yellow-400">{reg.transaction_no}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedImage(reg.payment_screenshot)}
                      className="w-full flex items-center justify-center gap-2 py-2 bg-slate-950/50 hover:bg-sky-500/10 border border-slate-700 hover:border-sky-500/50 rounded-lg text-sm font-medium text-sky-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> View Payment Screenshot
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Popup Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={28} />
            </button>
            <img 
              src={selectedImage} 
              alt="Payment Screenshot" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationsAdminModal;
