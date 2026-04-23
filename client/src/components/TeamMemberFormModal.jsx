import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { uploadImageToCloudinary } from '../api/cloudinary';
import { addTeamMember, updateTeamMember } from '../api/events';

const TeamMemberFormModal = ({ isOpen, onClose, initialData, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dept, setDept] = useState('Core');
  const [members, setMembers] = useState([{
    id: Date.now(),
    name: '',
    role: '',
    desc: '',
    mainImageFile: null,
    mainImagePreview: null,
  }]);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setDept(initialData.dept || 'Core');
        setMembers([{
          id: initialData.id,
          name: initialData.name || '',
          role: initialData.role || '',
          desc: initialData.desc || '',
          mainImageFile: null,
          mainImagePreview: initialData.img || null,
        }]);
      } else {
        setDept('Management Team'); // Default suggestion from user
        setMembers([{
          id: Date.now(),
          name: '',
          role: '',
          desc: '',
          mainImageFile: null,
          mainImagePreview: null,
        }]);
      }
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const addAnotherMember = () => {
    setMembers([...members, {
      id: Date.now(),
      name: '',
      role: '',
      desc: '',
      mainImageFile: null,
      mainImagePreview: null,
    }]);
  };

  const removeMember = (index) => {
    const updated = [...members];
    updated.splice(index, 1);
    setMembers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    for (let i = 0; i < members.length; i++) {
      if (!members[i].mainImageFile && !members[i].mainImagePreview) {
        toast.error(`Profile image missing for member #${i + 1}`);
        return;
      }
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading(initialData ? 'Updating member...' : 'Adding members...');

    try {
      if (initialData) {
        // Single Edit
        let mainImageUrl = members[0].mainImagePreview;
        if (members[0].mainImageFile) {
          toast.loading('Uploading image...', { id: loadingToast });
          mainImageUrl = await uploadImageToCloudinary(members[0].mainImageFile);
        }

        toast.loading('Saving database changes...', { id: loadingToast });
        const { error } = await updateTeamMember(initialData.id, {
          name: members[0].name,
          role: members[0].role,
          desc: members[0].desc,
          img: mainImageUrl,
          dept: dept
        });
        if (error) throw error;
      } else {
        // Bulk Add
        const finalDataPayload = [];
        for (let i = 0; i < members.length; i++) {
          toast.loading(`Uploading image ${i + 1}/${members.length}...`, { id: loadingToast });
          const mem = members[i];
          let imgUrl = mem.mainImagePreview;
          if (mem.mainImageFile) {
            imgUrl = await uploadImageToCloudinary(mem.mainImageFile);
          }
          finalDataPayload.push({
            name: mem.name,
            role: mem.role,
            desc: mem.desc,
            img: imgUrl,
            dept: dept
          });
        }
        toast.loading('Saving database records...', { id: loadingToast });
        const { error } = await addTeamMember(finalDataPayload);
        if (error) throw error;
      }

      toast.success(initialData ? 'Member updated!' : 'Members added!', { id: loadingToast });
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
            {initialData ? 'Edit Team Member' : 'Add Team Members'}
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
          <form id="team-member-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="bg-sky-900/20 p-4 rounded-xl border border-sky-500/20">
              <label className="text-sky-300 text-sm font-bold block mb-1">Department</label>
              <p className="text-xs text-slate-400 mb-2">Assign this department to all members below (e.g., Core, Technical Team, Management Team)</p>
              <input required type="text" value={dept} onChange={(e) => setDept(e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="Department Name" />
            </div>

            {members.map((mem, index) => (
              <div key={mem.id} className="relative bg-slate-800/40 p-5 rounded-xl border border-white/5 space-y-4">
                {members.length > 1 && (
                  <button type="button" onClick={() => removeMember(index)} className="absolute top-4 right-4 text-red-400 hover:text-red-300 text-xs font-bold bg-red-400/10 px-2 py-1 rounded">Remove</button>
                )}
                <h4 className="font-bold text-slate-300">Member #{index + 1}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-300 text-xs font-bold">Name</label>
                    <input required type="text" value={mem.name} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="e.g. John Doe" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-slate-300 text-xs font-bold">Role</label>
                    <input required type="text" value={mem.role} onChange={(e) => handleMemberChange(index, 'role', e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none" placeholder="e.g. Software Engineer" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold">Description</label>
                  <textarea required value={mem.desc} onChange={(e) => handleMemberChange(index, 'desc', e.target.value)} rows="3" className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 focus:outline-none resize-none" placeholder="Enter biography..." />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold">Profile Image</label>
                  <input type="file" accept="image/*" onChange={(e) => handleMemberChange(index, 'mainImageFile', e.target.files[0])} className="w-full text-slate-400 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-sky-500/20 file:text-sky-300 hover:file:bg-sky-500/30" />
                  {mem.mainImagePreview && !mem.mainImageFile && (
                    <div className="text-xs text-sky-400 mt-1 truncate">Current: {mem.mainImagePreview}</div>
                  )}
                </div>
              </div>
            ))}

            {!initialData && (
              <button type="button" onClick={addAnotherMember} className="w-full border-2 border-dashed border-sky-500/30 text-sky-400 font-bold hover:bg-sky-500/10 transition-colors py-3 rounded-xl flex items-center justify-center gap-2">
                <span>+</span> Add Another Member to {dept || 'this department'}
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
            form="team-member-form"
            disabled={isSubmitting}
            className="px-6 py-2 rounded-lg bg-sky-500 text-white font-bold shadow-lg hover:bg-sky-400 transition duration-200 disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? 'Saving...' : (initialData ? 'Update Member' : `Save ${members.length} Member(s)`)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberFormModal;
