import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { uploadImageToCloudinary } from '../api/cloudinary';
import { addCommunityTrip, updateCommunityTrip } from '../api/events';

const CommunityTripFormModal = ({ isOpen, onClose, initialData, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    price: '',
    registrationLink: '',
  });

  const [mainImageFile, setMainImageFile] = useState(null); 
  const [mainImagePreview, setMainImagePreview] = useState(null);
  
  // Dynamic tags
  const [tags, setTags] = useState(['']);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          title: initialData.title || '',
          duration: initialData.duration || '',
          price: initialData.price || '',
          registrationLink: initialData.registrationLink || '',
        });
        setMainImagePreview(initialData.image || null);
        setMainImageFile(null);
        setTags(initialData.tags?.length ? initialData.tags : ['']);
      } else {
        setFormData({
          title: '', duration: '', price: '', registrationLink: ''
        });
        setMainImageFile(null);
        setMainImagePreview(null);
        setTags(['']);
      }
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDynamicListChange = (index, value) => {
    setTags(prev => {
      const newList = [...prev];
      newList[index] = value;
      return newList;
    });
  };

  const addTag = () => setTags(prev => [...prev, '']);
  const removeTag = (index) => setTags(prev => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mainImageFile && !mainImagePreview) {
      toast.error('Trip image is required!');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading(initialData ? 'Updating trip...' : 'Creating trip...');

    try {
      let mainImageUrl = mainImagePreview;

      if (mainImageFile) {
        toast.loading('Uploading image...', { id: loadingToast });
        mainImageUrl = await uploadImageToCloudinary(mainImageFile);
      }

      toast.loading('Saving to database...', { id: loadingToast });

      const cleanedTags = tags.filter(t => t.trim() !== '');

      const newTripData = {
        ...formData,
        image: mainImageUrl,
        tags: cleanedTags,
      };

      let errorResult;
      if (initialData) {
        const { error } = await updateCommunityTrip(initialData.id, newTripData);
        errorResult = error;
      } else {
        const { error } = await addCommunityTrip(newTripData);
        errorResult = error;
      }

      if (errorResult) throw errorResult;

      toast.success(initialData ? 'Trip updated!' : 'Trip created!', { id: loadingToast });
      onSuccess();
      onClose();
      
    } catch (err) {
      toast.error(`Error: ${err.message}`, { id: loadingToast });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pt-20 px-4 sm:px-6">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={() => !isSubmitting && onClose()}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-800/80 px-6 py-4 flex justify-between items-center border-b border-white/5">
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
            {initialData ? 'Edit Community Trip' : 'Add New Community Trip'}
          </h2>
          <button 
            onClick={onClose} 
            disabled={isSubmitting}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-transparent">
          <form id="community-trip-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Title</label>
                <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="e.g. Manali" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Duration</label>
                <input required type="text" name="duration" value={formData.duration} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="e.g. 3N/4D" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Price</label>
                <input required type="number" name="price" value={formData.price} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="e.g. 5999" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Registration Link</label>
                <input type="text" name="registrationLink" value={formData.registrationLink} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="URL or 'Not aviable'" />
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label className="text-slate-300 text-xs font-bold">Tags</label>
              {tags.map((tag, idx) => (
                <div key={`tag-${idx}`} className="flex gap-2">
                  <input type="text" value={tag} onChange={(e) => handleDynamicListChange(idx, e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:border-sky-500" placeholder="e.g. Best Seller" />
                  <button type="button" onClick={() => removeTag(idx)} className="text-red-400/70 hover:text-red-400 px-1">✕</button>
                </div>
              ))}
              <button type="button" onClick={addTag} className="text-sky-400 text-xs hover:underline">+ Add Tag</button>
            </div>

            {/* Main Image */}
            <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5 space-y-1 mt-4">
              <label className="text-slate-300 text-xs font-bold">Trip Image {initialData && '(Leave empty to keep current)'}</label>
              <input type="file" accept="image/*" onChange={(e) => setMainImageFile(e.target.files[0])} className="w-full text-slate-400 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-sky-500/20 file:text-sky-300 hover:file:bg-sky-500/30" />
              {mainImagePreview && !mainImageFile && (
                <div className="text-xs text-sky-400 mt-1 truncate">Current: {mainImagePreview}</div>
              )}
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-800/80 px-6 py-4 flex justify-end gap-3 border-t border-white/5">
          <button 
            type="button" 
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-lg text-slate-300 font-medium hover:bg-slate-700 transition duration-200"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            form="community-trip-form"
            disabled={isSubmitting}
            className="px-6 py-2 rounded-lg bg-sky-500 text-white font-bold shadow-lg hover:bg-sky-400 transition duration-200 disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? 'Saving...' : (initialData ? 'Update Trip' : 'Publish Trip')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityTripFormModal;
