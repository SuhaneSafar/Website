import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { uploadImageToCloudinary } from '../api/cloudinary';
import { addGalleryItem, updateGalleryItem } from '../api/events';

const GalleryFormModal = ({ isOpen, onClose, initialData, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [items, setItems] = useState([{
    id: Date.now(),
    label: '',
    mainImageFile: null,
    mainImagePreview: null,
  }]);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setItems([{
          id: initialData.id,
          label: initialData.label || '',
          mainImageFile: null,
          mainImagePreview: initialData.src || null,
        }]);
      } else {
        setItems([{
          id: Date.now(),
          label: '',
          mainImageFile: null,
          mainImagePreview: null,
        }]);
      }
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const addAnotherItem = () => {
    setItems([...items, {
      id: Date.now(),
      label: '',
      mainImageFile: null,
      mainImagePreview: null,
    }]);
  };

  const removeItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    for (let i = 0; i < items.length; i++) {
      if (!items[i].mainImageFile && !items[i].mainImagePreview) {
        toast.error(`Image missing for item #${i + 1}`);
        return;
      }
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading(initialData ? 'Updating gallery item...' : 'Adding gallery items...');

    try {
      if (initialData) {
        // Single Edit
        let mainImageUrl = items[0].mainImagePreview;
        if (items[0].mainImageFile) {
          toast.loading('Uploading image...', { id: loadingToast });
          mainImageUrl = await uploadImageToCloudinary(items[0].mainImageFile);
        }

        toast.loading('Saving database changes...', { id: loadingToast });
        const { error } = await updateGalleryItem(initialData.id, {
          label: items[0].label,
          src: mainImageUrl,
        });
        if (error) throw error;
      } else {
        // Bulk Add
        const finalDataPayload = [];
        for (let i = 0; i < items.length; i++) {
          toast.loading(`Uploading image ${i + 1}/${items.length}...`, { id: loadingToast });
          const item = items[i];
          let imgUrl = item.mainImagePreview;
          if (item.mainImageFile) {
            imgUrl = await uploadImageToCloudinary(item.mainImageFile);
          }
          finalDataPayload.push({
            label: item.label,
            src: imgUrl,
          });
        }
        toast.loading('Saving database records...', { id: loadingToast });
        const { error } = await addGalleryItem(finalDataPayload);
        if (error) throw error;
      }

      toast.success(initialData ? 'Gallery item updated!' : 'Gallery items added!', { id: loadingToast });
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center py-10 px-4 sm:px-6">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={() => !isSubmitting && onClose()}
      ></div>

      <div className="relative w-full max-w-2xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl flex flex-col max-h-full">
        <div className="bg-slate-800/80 px-6 py-4 flex justify-between items-center border-b border-white/5 shrink-0">
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
            {initialData ? 'Edit Gallery Item' : 'Add Gallery Items'}
          </h2>
          <button 
            onClick={onClose} 
            disabled={isSubmitting}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-transparent">
          <form id="gallery-form" onSubmit={handleSubmit} className="space-y-6">
            
            {items.map((item, index) => (
              <div key={item.id} className="relative bg-slate-800/40 p-5 rounded-xl border border-white/5 space-y-4">
                {items.length > 1 && (
                  <button type="button" onClick={() => removeItem(index)} className="absolute top-4 right-4 text-red-400 hover:text-red-300 text-xs font-bold bg-red-400/10 px-2 py-1 rounded">Remove</button>
                )}
                <h4 className="font-bold text-slate-300">Image #{index + 1}</h4>
                
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold">Image Label / Title</label>
                  <input required type="text" value={item.label} onChange={(e) => handleItemChange(index, 'label', e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="e.g. Hiking in the Alps" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold">Upload Image</label>
                  <input type="file" accept="image/*" onChange={(e) => handleItemChange(index, 'mainImageFile', e.target.files[0])} className="w-full text-slate-400 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-sky-500/20 file:text-sky-300 hover:file:bg-sky-500/30" />
                  {item.mainImagePreview && !item.mainImageFile && (
                    <div className="text-xs text-sky-400 mt-1 truncate">Current: {item.mainImagePreview}</div>
                  )}
                </div>
              </div>
            ))}

            {!initialData && (
              <button type="button" onClick={addAnotherItem} className="w-full border-2 border-dashed border-sky-500/30 text-sky-400 font-bold hover:bg-sky-500/10 transition-colors py-3 rounded-xl flex items-center justify-center gap-2">
                <span>+</span> Add Another Image
              </button>
            )}

          </form>
        </div>

        <div className="bg-slate-800/80 px-6 py-4 flex justify-end gap-3 border-t border-white/5 shrink-0">
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
            form="gallery-form"
            disabled={isSubmitting}
            className="px-6 py-2 rounded-lg bg-sky-500 text-white font-bold shadow-lg hover:bg-sky-400 transition duration-200 disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? 'Saving...' : (initialData ? 'Update Image' : `Upload ${items.length} Image(s)`)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryFormModal;
