import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { uploadImageToCloudinary } from '../api/cloudinary';
import { addAdventure, updateAdventure } from '../api/events';

const AdventureFormModal = ({ isOpen, onClose, initialData, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    gform: '',
    price: '',
    pickupDrop: '',
    duration: '',
    overview: '',
    lastDate: '',
  });

  const [mainImageFile, setMainImageFile] = useState(null); 
  const [mainImagePreview, setMainImagePreview] = useState(null); // To show existing image
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [existingGallery, setExistingGallery] = useState([]);

  // Dynamic Array States
  const [inclusions, setInclusions] = useState(['']);
  const [exclusions, setExclusions] = useState(['']);
  const [itinerary, setItinerary] = useState([{ day: 1, title: '', description: '' }]);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        // Edit mode - populate with existing data
        setFormData({
          title: initialData.title || '',
          subtitle: initialData.subtitle || '',
          gform: initialData.gform || '',
          price: initialData.price || '',
          pickupDrop: initialData.pickupDrop || '',
          duration: initialData.duration || '',
          overview: initialData.overview || '',
          lastDate: initialData.lastDate || '',
        });
        setMainImagePreview(initialData.mainImage || null);
        setMainImageFile(null);
        setGalleryFiles([]);
        setExistingGallery(initialData.gallery || []);
        setInclusions(initialData.inclusions?.length ? initialData.inclusions : ['']);
        setExclusions(initialData.exclusions?.length ? initialData.exclusions : ['']);
        setItinerary(initialData.itinerary?.length ? initialData.itinerary : [{ day: 1, title: '', description: '' }]);
      } else {
        // Add mode - reset
        setFormData({
          title: '', subtitle: '', gform: '', price: '', pickupDrop: '', duration: '', overview: '', lastDate: ''
        });
        setMainImageFile(null);
        setMainImagePreview(null);
        setGalleryFiles([]);
        setExistingGallery([]);
        setInclusions(['']);
        setExclusions(['']);
        setItinerary([{ day: 1, title: '', description: '' }]);
      }
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDynamicListChange = (setter, index, value) => {
    setter(prev => {
      const newList = [...prev];
      newList[index] = value;
      return newList;
    });
  };

  const addDynamicListItem = (setter, defaultVal) => {
    setter(prev => [...prev, defaultVal]);
  };

  const removeDynamicListItem = (setter, index) => {
    setter(prev => prev.filter((_, i) => i !== index));
  };

  const handleItineraryChange = (index, field, value) => {
    setItinerary(prev => {
      const newItinerary = [...prev];
      newItinerary[index] = { ...newItinerary[index], [field]: value };
      return newItinerary;
    });
  };

  const handleItineraryAdd = () => {
    setItinerary(prev => [...prev, { day: prev.length + 1, title: '', description: '' }]);
  };

  const handleItineraryRemove = (index) => {
    setItinerary(prev => {
      const newItinerary = prev.filter((_, i) => i !== index);
      return newItinerary.map((item, i) => ({ ...item, day: i + 1 }));
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mainImageFile && !mainImagePreview) {
      toast.error('Main image is required!');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading(initialData ? 'Updating adventure...' : 'Creating adventure...');

    try {
      let mainImageUrl = mainImagePreview;

      // 1. Upload new main image if selected
      if (mainImageFile) {
        toast.loading('Uploading main image...', { id: loadingToast });
        mainImageUrl = await uploadImageToCloudinary(mainImageFile);
      }

      // 2. Upload new gallery images and append to existing
      let galleryUrls = [...existingGallery];
      if (galleryFiles.length > 0) {
        toast.loading('Uploading new gallery images...', { id: loadingToast });
        for (const file of galleryFiles) {
          const url = await uploadImageToCloudinary(file);
          galleryUrls.push(url);
        }
      }

      toast.loading('Saving to database...', { id: loadingToast });

      const cleanedInclusions = inclusions.filter(i => i.trim() !== '');
      const cleanedExclusions = exclusions.filter(e => e.trim() !== '');

      const newEventData = {
        ...formData,
        mainImage: mainImageUrl,
        gallery: galleryUrls,
        inclusions: cleanedInclusions,
        exclusions: cleanedExclusions,
        itinerary,
      };

      if (!initialData) {
        // Provide empty array for reviews if creating new
        newEventData.reviews = [];
      }

      let errorResult;
      if (initialData) {
        const { error } = await updateAdventure(initialData.id, newEventData);
        errorResult = error;
      } else {
        const { error } = await addAdventure(newEventData);
        errorResult = error;
      }

      if (errorResult) throw errorResult;

      toast.success(initialData ? 'Adventure updated!' : 'Adventure created!', { id: loadingToast });
      onSuccess(); // Refresh parent component logic
      onClose(); // Hide modal
      
    } catch (err) {
      toast.error(`Error: ${err.message}`, { id: loadingToast });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pt-20 px-4 sm:px-6">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={() => !isSubmitting && onClose()}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-slate-800/80 px-6 py-4 flex justify-between items-center border-b border-white/5">
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
            {initialData ? 'Edit Adventure' : 'Add New Adventure'}
          </h2>
          <button 
            onClick={onClose} 
            disabled={isSubmitting}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-transparent">
          <form id="adventure-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Title</label>
                <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Subtitle</label>
                <input required type="text" name="subtitle" value={formData.subtitle} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Google Form Link</label>
                <input type="url" name="gform" value={formData.gform} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Price</label>
                <input required type="text" name="price" placeholder="4499" value={formData.price} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Pickup/Drop Points</label>
                <input type="text" name="pickupDrop" placeholder="IIT Roorkee | Delhi" value={formData.pickupDrop} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Duration</label>
                <input type="text" name="duration" placeholder="3 Days / 2 Nights" value={formData.duration} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" />
              </div>
               <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Last Date</label>
                <input type="text" name="lastDate" placeholder="26 March 2026" value={formData.lastDate} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 text-xs font-bold">Overview</label>
              <textarea name="overview" rows={2} value={formData.overview} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none"></textarea>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-800/40 p-4 rounded-xl border border-white/5">
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Main Image {initialData && '(Leave empty to keep current)'}</label>
                <input type="file" accept="image/*" onChange={(e) => setMainImageFile(e.target.files[0])} className="w-full text-slate-400 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-sky-500/20 file:text-sky-300 hover:file:bg-sky-500/30" />
                {mainImagePreview && !mainImageFile && (
                  <div className="text-xs text-sky-400 mt-1 truncate">Current: {mainImagePreview}</div>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-slate-300 text-xs font-bold">Gallery Images (Add more without replacing)</label>
                <input type="file" multiple accept="image/*" onChange={(e) => setGalleryFiles(prev => [...prev, ...Array.from(e.target.files)])} className="w-full text-slate-400 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-sky-500/20 file:text-sky-300 hover:file:bg-sky-500/30" />
                
                {existingGallery.length > 0 && (
                  <div className="text-xs text-sky-400 mt-2">
                    <span className="font-semibold text-slate-300">Existing:</span> {existingGallery.map(url => url.split('/').pop()).join(', ')}
                    <button type="button" onClick={() => setExistingGallery([])} className="ml-2 text-red-400 hover:underline">Clear</button>
                  </div>
                )}
                
                {galleryFiles.length > 0 && (
                  <div className="text-xs text-green-400 mt-2 break-words">
                    <span className="font-semibold text-slate-300">New Files:</span> {galleryFiles.map(f => f.name).join(', ')}
                    <button type="button" onClick={() => setGalleryFiles([])} className="ml-2 text-red-400 hover:underline">Clear</button>
                  </div>
                )}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-300 text-xs font-bold mb-2 block">Inclusions</label>
                {inclusions.map((item, idx) => (
                  <div key={`inc-${idx}`} className="flex gap-2 mb-2">
                    <input type="text" value={item} onChange={(e) => handleDynamicListChange(setInclusions, idx, e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:border-sky-500" />
                    <button type="button" onClick={() => removeDynamicListItem(setInclusions, idx)} className="text-red-400/70 hover:text-red-400 px-1">✕</button>
                  </div>
                ))}
                <button type="button" onClick={() => addDynamicListItem(setInclusions, '')} className="text-sky-400 text-xs hover:underline">+ Add Inclusion</button>
              </div>

              <div>
                <label className="text-slate-300 text-xs font-bold mb-2 block">Exclusions</label>
                {exclusions.map((item, idx) => (
                  <div key={`exc-${idx}`} className="flex gap-2 mb-2">
                    <input type="text" value={item} onChange={(e) => handleDynamicListChange(setExclusions, idx, e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:border-sky-500" />
                    <button type="button" onClick={() => removeDynamicListItem(setExclusions, idx)} className="text-red-400/70 hover:text-red-400 px-1">✕</button>
                  </div>
                ))}
                <button type="button" onClick={() => addDynamicListItem(setExclusions, '')} className="text-sky-400 text-xs hover:underline">+ Add Exclusion</button>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5 space-y-3">
              <label className="text-slate-300 text-sm font-bold block">Itinerary Days</label>
              {itinerary.map((item, idx) => (
                <div key={`itinerary-${idx}`} className="p-3 border border-slate-700/50 bg-slate-900/50 rounded-lg relative">
                  <button type="button" onClick={() => handleItineraryRemove(idx)} className="absolute top-2 right-2 text-red-500/70 hover:text-red-400">✕</button>
                  <div className="font-bold text-sky-400/80 text-xs mb-2">Day {item.day}</div>
                  <div className="grid grid-cols-1 gap-2">
                    <input type="text" placeholder="Title (e.g. SPIRITUAL JOURNEY STARTS)" value={item.title} onChange={(e) => handleItineraryChange(idx, 'title', e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:border-sky-500" />
                    <textarea placeholder="Description of the day..." value={item.description} onChange={(e) => handleItineraryChange(idx, 'description', e.target.value)} rows={2} className="w-full bg-slate-950 border border-slate-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:border-sky-500"></textarea>
                  </div>
                </div>
              ))}
              <button type="button" onClick={handleItineraryAdd} className="text-sky-400 text-xs hover:underline">+ Add New Day</button>
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
            form="adventure-form"
            disabled={isSubmitting}
            className="px-6 py-2 rounded-lg bg-sky-500 text-white font-bold shadow-lg hover:bg-sky-400 transition duration-200 disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? 'Saving...' : (initialData ? 'Update Adventure' : 'Publish Adventure')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureFormModal;
