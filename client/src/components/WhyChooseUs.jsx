import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import { supabase } from '../supabaseClient';
import { fetchGallery, deleteGalleryItem } from '../api/events';
import GalleryFormModal from './GalleryFormModal';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaShieldAlt, 
  FaHeart, 
  FaStar, 
  FaMapMarkerAlt,
  FaCheck,
  FaPlay,
  FaTimesCircle
} from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap className="text-3xl text-sky-400" />,
    title: "Built by IIT Students",
    description: "Created by IIT Roorkee students who live and breathe travel"
  },
  {
    icon: <FaUsers className="text-3xl text-yellow-400" />,
    title: "Youth-Focused Team",
    description: "A young, passionate team that truly understands student and youth travelers"
  },
  {
    icon: <FaShieldAlt className="text-3xl text-sky-400" />,
    title: "Female Safety First",
    description: "Strong focus on female safety with verified stays and women-led coordination"
  },
  {
    icon: <FaHeart className="text-3xl text-yellow-400" />,
    title: "Community Building",
    description: "Not just trips — we create unforgettable stories and lifelong friendships"
  }
];

const benefits = [
  "From college trips to alumni tours, corporate outings to family vacations — we do it all",
  "Solo travelers feel at home — make new friends, bond, and explore together",
  "Trusted local partners ensure authentic, comfortable, and safe experiences",
  "100% customized trips based on your group, budget, and interests",
  "One of India's fastest-growing youth travel communities"
];

const WhyChooseUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItemId, setDeletingItemId] = useState(null);

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });

    loadGallery();

    return () => subscription.unsubscribe();
  }, []);

  const loadGallery = async () => {
    setLoading(true);
    const { gallery, error } = await fetchGallery();
    if (!error && gallery) {
      setGalleryData(gallery);
    }
    setLoading(false);
  };

  const openAddModal = () => {
    setEditingItem(null);
    setIsFormModalOpen(true);
  };

  const openEditModal = (e, item) => {
    e.stopPropagation();
    setEditingItem(item);
    setIsFormModalOpen(true);
  };

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    setDeletingItemId(id);
  };

  const confirmDelete = async () => {
    if (!deletingItemId) return;
    const loadingToast = toast.loading('Deleting gallery item...');
    const { error } = await deleteGalleryItem(deletingItemId);
    
    if (error) {
      toast.error(`Error deleting item: ${error}`, { id: loadingToast });
    } else {
      toast.success('Gallery item deleted successfully', { id: loadingToast });
      loadGallery();
    }
    setDeletingItemId(null);
  };

  const cancelDelete = () => {
    setDeletingItemId(null);
  };

  return (
    <section
      className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white py-20 px-4 sm:px-6 md:px-12 mt-16 overflow-hidden"
      id="why-choose-us"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-sky-400/40 text-sky-200 px-6 py-3 rounded-full text-sm font-medium mb-6 hover:bg-white/15 transition-all duration-300">
            <FaStar className="animate-pulse text-yellow-400" />
            <span>Trusted by 10,000+ Travelers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative inline-block">
            Why Choose 
            <span className="bg-gradient-to-r from-sky-400 via-yellow-400 to-sky-400 bg-clip-text text-transparent ml-3">
              Suhane Safar
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-sky-500 via-yellow-400 to-sky-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            More than just a travel company - we're your companions in creating unforgettable adventures and lifelong memories.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Features Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-yellow-400 rounded-full flex items-center justify-center">
                <FaCheck className="text-white text-sm" />
              </div>
              What Makes Us Special
            </h3>
            
            {/* Feature Cards Desktop */}
            <div className="hidden md:grid gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-sky-500/20 to-yellow-400/20 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Cards Mobile Slider */}
            <div 
              className="md:hidden relative h-[380px] overflow-hidden rounded-2xl" 
              style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
            >
              <div 
                className="flex flex-col gap-6 active:[animation-play-state:paused]"
                style={{ animation: 'slideUpCards 12s linear infinite' }}
              >
                {[...features, ...features].map((feature, idx) => (
                  <div key={`mobile-${idx}`} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-sky-500/20 to-yellow-400/20 rounded-xl p-3">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes slideUpCards {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(calc(-50% - 12px)); }
                }
              `}</style>
            </div>

            {/* Additional Benefits */}
            <div className="bg-gradient-to-br from-sky-500/10 to-yellow-400/10 backdrop-blur-sm border border-sky-400/20 rounded-2xl p-6 mt-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaHeart className="text-yellow-400" />
                Why Travelers Love Us
              </h4>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 w-2 h-2 bg-gradient-to-r from-sky-400 to-yellow-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Enhanced Gallery */}
          <div className="space-y-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-sky-500 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                Our Adventure Gallery
              </h3>
              {isAdmin && (
                <button 
                  onClick={openAddModal}
                  className="bg-white/10 hover:bg-sky-500 text-sky-300 hover:text-white border border-sky-400/30 hover:border-transparent px-4 py-2 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  <span>+</span> <span className="hidden sm:inline">Add Image</span><span className="sm:hidden">Add</span>
                </button>
              )}
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
              </div>
            ) : galleryData.length > 0 ? (
              <>
                {/* Gallery Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryData.map((img, idx) => (
                <div
                  key={img.id || idx}
                  className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500/20 to-yellow-400/20 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedImage(img)}
                >
                  {isAdmin && (
                    <div className="absolute top-2 right-2 flex gap-1 z-30 bg-slate-900/50 p-1 rounded-full border border-white/10 backdrop-blur-sm">
                      <button onClick={(e) => openEditModal(e, img)} className="bg-slate-900/80 hover:bg-slate-800 text-sky-400 p-2 rounded-full shadow-md transition-transform hover:scale-110 border border-white/10" title="Edit Image">✏️</button>
                      <button onClick={(e) => handleDeleteClick(e, img.id)} className="bg-slate-900/80 hover:bg-slate-800 text-red-400 p-2 rounded-full shadow-md transition-transform hover:scale-110 border border-white/10" title="Delete Image">🗑️</button>
                    </div>
                  )}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.label || `gallery-${idx}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-lg mb-1">{img.label}</h4>
                      <div className="flex items-center gap-2">
                        <FaPlay className="text-yellow-400 text-sm" />
                        <span className="text-gray-200 text-sm">View Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator (hide on admin hover to prevent crowding) */}
                  {!isAdmin && (
                    <div className="absolute top-4 right-4 bg-yellow-400/90 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Gallery Mobile Vertical Slider */}
            <div 
              className="md:hidden relative overflow-hidden rounded-2xl h-[480px]"
              style={{ maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)' }}
            >
              <div 
                className="flex flex-col gap-4 active:[animation-play-state:paused]"
                style={{ animation: 'slideUpGallery 25s linear infinite' }}
              >
                {[1, 2].map((chunk) => (
                  <div key={`gallery-chunk-${chunk}`} className="grid grid-cols-2 gap-4">
                    {galleryData.map((img, idx) => (
                      <div
                        key={`gallery-img-${chunk}-${img.id || idx}`}
                        className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500/20 to-yellow-400/20 border border-white/20 transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        {isAdmin && chunk === 1 && (
                          <div className="absolute top-2 right-2 flex gap-1 z-30 bg-slate-900/80 p-1 rounded-full border border-white/10">
                            <button onClick={(e) => openEditModal(e, img)} className="text-sky-400 p-1 hover:scale-110" title="Edit Image">✏️</button>
                            <button onClick={(e) => handleDeleteClick(e, img.id)} className="text-red-400 p-1 hover:scale-110" title="Delete Image">🗑️</button>
                          </div>
                        )}
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.label || `gallery-${idx}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        
                        {/* Overlay remains active on touch */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h4 className="text-white font-bold text-sm mb-1">{img.label}</h4>
                            <div className="flex items-center gap-1">
                              <FaPlay className="text-yellow-400 text-xs" />
                              <span className="text-gray-200 text-xs whitespace-nowrap">View Details</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover indicator */}
                        {!isAdmin && (
                          <div className="absolute top-2 right-2 bg-yellow-400/90 text-black rounded-full p-1.5 opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300">
                            <FaMapMarkerAlt className="text-xs" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes slideUpGallery {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(calc(-50% - 8px)); }
                }
              `}</style>
            </div>
            </>
            ) : (
              <div className="text-center py-10 text-gray-500 italic">No gallery images found.</div>
            )}
            
            <div className="text-center">
              <p className="text-gray-400 italic text-lg font-medium">
                "Captured moments from our incredible journeys"
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl mx-auto">
              <button
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-2xl font-bold bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
                <h4 className="font-bold text-lg">{selectedImage.label}</h4>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Admin Modals */}
      <GalleryFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        initialData={editingItem}
        onSuccess={() => loadGallery()}
      />

      {deletingItemId && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={cancelDelete}></div>
          <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
              <FaTimesCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Delete Image?</h3>
            <p className="text-slate-400 text-sm mb-6">Are you sure you want to continuously remove this image from the gallery? This action cannot be undone.</p>
            <div className="flex gap-3 justify-center">
              <button 
                onClick={cancelDelete}
                className="px-4 py-2 rounded-lg text-slate-300 font-medium hover:bg-slate-700 transition duration-200 border border-slate-600 w-full"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold transition duration-200 shadow-lg w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;
