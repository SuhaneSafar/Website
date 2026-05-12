import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useFeedback } from '../context/FeedbackContext';
import { submitFeedback, fetchAllFeedback, deleteFeedbackRecord } from '../api/events';
import { supabase } from '../supabaseClient';
import { FaStar, FaTimes, FaTrash } from 'react-icons/fa';

const FeedbackFormModal = () => {
  const { isFeedbackModalOpen, closeFeedbackModal } = useFeedback();
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('submit'); // 'submit' | 'manage'
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoadingFeedbacks, setIsLoadingFeedbacks] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rating: 0,
    message: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auth Listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session?.user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch feedbacks when switching to 'manage' tab
  useEffect(() => {
    if (activeTab === 'manage' && isAdmin && isFeedbackModalOpen) {
      loadFeedbacks();
    }
  }, [activeTab, isAdmin, isFeedbackModalOpen]);

  const loadFeedbacks = async () => {
    setIsLoadingFeedbacks(true);
    const { data, error } = await fetchAllFeedback();
    if (!error && data) {
      setFeedbacks(data);
    } else {
      toast.error('Failed to load feedback');
    }
    setIsLoadingFeedbacks(false);
  };

  if (!isFeedbackModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRating = (value) => {
    setFormData(prev => ({ ...prev, rating: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast.error('Name and Message are required.');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Submitting feedback...');

    try {
      // 1. Save to Supabase
      const { error: dbError } = await submitFeedback({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        rating: formData.rating,
        message: formData.message
      });

      if (dbError) throw dbError;

      // 2. Send directly to your email via FormSubmit
      try {
        await fetch("https://formsubmit.co/ajax/suhanesafar28@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email || 'Not provided',
            Phone: formData.phone || 'Not provided',
            Rating: formData.rating > 0 ? `${formData.rating} Stars` : 'Not provided',
            Message: formData.message,
            _subject: "New Feedback Submission from Suhane Safar!"
          })
        });
      } catch (emailErr) {
        console.error("Email delivery failed:", emailErr);
      }

      toast.success('Thank you for your feedback!', { id: loadingToast });
      setFormData({ name: '', email: '', phone: '', rating: 0, message: '' });
      
      // If admin, maybe stay on modal. If not, close.
      if (!isAdmin) {
        closeFeedbackModal();
      }

    } catch (err) {
      toast.error('Failed to submit feedback. Please try again.', { id: loadingToast });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this feedback?')) return;
    
    const loadingToast = toast.loading('Deleting...');
    const { error } = await deleteFeedbackRecord(id);
    if (error) {
      toast.error('Failed to delete', { id: loadingToast });
    } else {
      toast.success('Deleted successfully', { id: loadingToast });
      setFeedbacks(prev => prev.filter(fb => fb.id !== id));
    }
  };

  const formatDateIST = (dateString) => {
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleString('en-IN', options);
  };

  const renderStars = (rating) => {
    if (!rating) return <span className="text-slate-500 text-sm">No rating</span>;
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" size={14} />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center py-10 px-4 sm:px-6">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={() => !isSubmitting && closeFeedbackModal()}
      ></div>

      {/* Modal Content - Dynamic Width based on tab */}
      <div className={`relative w-full ${activeTab === 'manage' ? 'max-w-5xl' : 'max-w-lg'} bg-slate-900 border border-sky-500/30 rounded-2xl shadow-2xl flex flex-col max-h-full transition-all duration-300`}>
        
        {/* Header */}
        <div className="bg-slate-800/80 px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-white/5 shrink-0 rounded-t-2xl">
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
            {activeTab === 'manage' ? 'Feedback Dashboard' : 'Share Your Feedback'}
          </h2>
          
          <div className="flex items-center gap-4">
            {isAdmin && (
              <div className="flex bg-slate-950/50 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('submit')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'submit' 
                      ? 'bg-sky-500 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Submit
                </button>
                <button
                  onClick={() => setActiveTab('manage')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'manage' 
                      ? 'bg-sky-500 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Manage
                </button>
              </div>
            )}
            
            <button 
              onClick={closeFeedbackModal} 
              disabled={isSubmitting}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Form Body - SUBMIT TAB */}
        {activeTab === 'submit' && (
          <>
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-transparent">
              <form id="feedback-form" onSubmit={handleSubmit} className="space-y-5">
                
                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Full Name *</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent focus:outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Email (Optional)</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent focus:outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent focus:outline-none transition-all" 
                      placeholder="+91 9876543210" 
                    />
                  </div>
                </div>

                {/* Rating Selector */}
                <div className="space-y-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">How was your experience?</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => handleRating(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <FaStar 
                          size={28} 
                          className={`${(hoveredRating || formData.rating) >= star ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]' : 'text-slate-600'} transition-colors duration-200`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Your Message *</label>
                  <textarea 
                    required 
                    name="message"
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="4"
                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent focus:outline-none transition-all resize-none" 
                    placeholder="Tell us about your experience or suggestions..." 
                  ></textarea>
                </div>

              </form>
            </div>

            {/* Footer Actions */}
            <div className="bg-slate-800/80 px-6 py-4 flex justify-end gap-3 border-t border-white/5 shrink-0 rounded-b-2xl">
              <button 
                type="button" 
                onClick={closeFeedbackModal}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-lg text-slate-300 font-bold hover:bg-slate-700 transition duration-200"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                form="feedback-form"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 flex items-center justify-center min-w-[120px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : 'Submit'}
              </button>
            </div>
          </>
        )}

        {/* Form Body - MANAGE TAB */}
        {activeTab === 'manage' && isAdmin && (
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-transparent">
            {isLoadingFeedbacks ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"></div>
              </div>
            ) : feedbacks.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <p>No feedback found in the database.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-slate-700/50">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                    <tr>
                      <th className="px-4 py-3">Date (IST)</th>
                      <th className="px-4 py-3">User</th>
                      <th className="px-4 py-3">Rating</th>
                      <th className="px-4 py-3">Message</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbacks.map((fb) => (
                      <tr key={fb.id} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                        <td className="px-4 py-4 whitespace-nowrap text-slate-400 text-xs">
                          {formatDateIST(fb.created_at)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-bold text-white">{fb.name}</div>
                          <div className="text-xs text-slate-400">{fb.email || 'No email'}</div>
                          <div className="text-xs text-slate-400">{fb.phone || 'No phone'}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {renderStars(fb.rating)}
                        </td>
                        <td className="px-4 py-4 max-w-xs">
                          <p className="line-clamp-3 hover:line-clamp-none transition-all leading-relaxed">{fb.message}</p>
                        </td>
                        <td className="px-4 py-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(fb.id)}
                            className="text-red-400 hover:text-red-300 bg-red-400/10 hover:bg-red-400/20 p-2 rounded-lg transition-colors"
                            title="Delete Feedback"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default FeedbackFormModal;
