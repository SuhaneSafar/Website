import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaTimesCircle } from "react-icons/fa";
import toast from 'react-hot-toast';

import { supabase } from '../supabaseClient';
import { fetchTeamMembers, deleteTeamMember } from '../api/events';
import TeamMemberFormModal from './TeamMemberFormModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TeamMembers = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [deletingMemberId, setDeletingMemberId] = useState(null);

  const loadTeam = async () => {
    setLoading(true);
    const { members, error } = await fetchTeamMembers();
    if (!error && members) setTeamData(members);
    setLoading(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });

    loadTeam();

    return () => subscription.unsubscribe();
  }, []);

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    setDeletingMemberId(id);
  };

  const confirmDelete = async () => {
    if (!deletingMemberId) return;
    const toastId = toast.loading("Deleting member...");
    const { error } = await deleteTeamMember(deletingMemberId);
    if (error) {
      toast.error("Failed to delete", { id: toastId });
    } else {
      toast.success("Successfully deleted", { id: toastId });
      loadTeam();
    }
    setDeletingMemberId(null);
  };

  const cancelDelete = () => setDeletingMemberId(null);

  const openAddModal = () => {
    setEditingMember(null);
    setIsFormModalOpen(true);
  };

  const openEditModal = (e, member) => {
    e.stopPropagation();
    setEditingMember(member);
    setIsFormModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-28 min-h-[400px]">
        <div className="w-12 h-12 border-4 border-sky-400/20 border-t-sky-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (teamData.length === 0 && !isAdmin) return null;

  return (
    <div className="flex flex-col px-4 py-28 pt-0 bg-white max-w-7xl mx-auto relative">
      {/* Responsive Heading */}
      <div className="flex flex-row justify-center md:justify-between items-center mb-12 relative w-full mb-8">
        <h2 className="text-4xl font-extrabold text-center md:text-left m-0 flex-1 md:flex-none">
          Who We Are
        </h2>
        
        {isAdmin && (
          <button 
            onClick={openAddModal}
            className="bg-slate-700 hover:bg-slate-600 text-sky-100 px-4 py-2 rounded-full shadow-lg font-bold transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base absolute right-0 z-10"
          >
            <span>+</span> <span className="hidden sm:inline">Add Member</span><span className="sm:hidden">Add</span>
          </button>
        )}
      </div>

      <div className="relative w-full">
        {teamData.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="pb-16"
          >
            {/* Render Processed Slides */}
            {(() => {
              const coreMembers = [];
              const deptGroups = {};

              teamData.forEach(member => {
                const isCore = !member.dept || member.dept.toLowerCase() === 'core';
                if (isCore) {
                  coreMembers.push(member);
                } else {
                  if (!deptGroups[member.dept]) deptGroups[member.dept] = [];
                  deptGroups[member.dept].push(member);
                }
              });

              const slides = [];
              coreMembers.forEach(mem => slides.push({ type: 'core', data: mem }));

              Object.keys(deptGroups).forEach(deptName => {
                let members = deptGroups[deptName];
                for (let i = 0; i < members.length; i += 4) {
                  slides.push({ type: 'dept', deptName, data: members.slice(i, i + 4) });
                }
              });

              return slides.map((slide, slideIdx) => {
                if (slide.type === 'core') {
                  const member = slide.data;
                  return (
                    <SwiperSlide key={`core-${member.id}`} className="h-auto flex justify-center pb-4">
                      <div className="relative flex flex-col items-center text-center w-full h-full max-w-[400px] p-6 sm:p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-transparent hover:border-sky-100 group">
                        {isAdmin && (
                          <div className="absolute top-4 right-4 flex gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button onClick={(e) => openEditModal(e, member)} className="bg-white/90 hover:bg-white text-sky-600 p-2 rounded-full shadow-md transition-transform hover:scale-110 border border-slate-100" title="Edit Member">✏️</button>
                            <button onClick={(e) => handleDeleteClick(e, member.id)} className="bg-white/90 hover:bg-white text-red-600 p-2 rounded-full shadow-md transition-transform hover:scale-110 border border-slate-100" title="Delete Member">🗑️</button>
                          </div>
                        )}
                        <div className="w-64 h-64 sm:w-72 sm:h-72 mb-6 rounded-xl overflow-hidden shrink-0 shadow-inner">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold uppercase text-sky-600">{member.role}</h3>
                        <p className="text-sm sm:text-base font-extrabold mt-1 mb-4 text-slate-800 tracking-wide">{member.name}</p>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-sm flex-grow">{member.desc}</p>
                      </div>
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <SwiperSlide key={`dept-${slideIdx}`} className="h-auto flex justify-center pb-4">
                      <div className="relative bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4 sm:p-6 flex flex-col w-full h-full max-w-[460px] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-transparent hover:border-sky-100">
                        <div className="w-full text-center border-b border-sky-100/50 pb-3 mb-5 shrink-0">
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 uppercase tracking-widest">{slide.deptName}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full flex-grow content-start">
                          {slide.data.map((member) => (
                            <div key={member.id} className="relative group flex flex-col items-center text-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
                              {isAdmin && (
                                <div className="absolute -top-1 -right-1 flex gap-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white shadow-lg rounded-full px-2 py-1 border border-slate-100">
                                  <button onClick={(e) => openEditModal(e, member)} className="text-sky-600 hover:scale-110 text-xs" title="Edit Member">✏️</button>
                                  <button onClick={(e) => handleDeleteClick(e, member.id)} className="text-red-600 hover:scale-110 text-xs ml-1" title="Delete Member">🗑️</button>
                                </div>
                              )}
                              <div className="w-full aspect-square mb-4 rounded-xl overflow-hidden shrink-0 shadow-sm border-[3px] border-sky-50 bg-slate-100">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-110" />
                              </div>
                              <h4 className="text-[10px] sm:text-xs font-bold uppercase text-sky-600 mb-1 leading-tight">{member.role}</h4>
                              <p className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-wide leading-tight">{member.name}</p>
                              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-2 line-clamp-2 px-1 text-center" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{member.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              });
            })()}
          </Swiper>
        ) : (
           <div className="text-center py-10 text-gray-500 italic">No team members found.</div>
        )}
      </div>

      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #93c5fd;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
          opacity: 1;
        }
      `}</style>
      
      {/* Admin Modals */}
      <TeamMemberFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        initialData={editingMember}
        onSuccess={() => loadTeam()}
      />

      {deletingMemberId && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={cancelDelete}></div>
          <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
              <FaTimesCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Remove Member?</h3>
            <p className="text-slate-500 text-sm mb-6">Are you sure you want to continuously remove this team member? This action cannot be undone.</p>
            <div className="flex gap-3 justify-center">
              <button 
                onClick={cancelDelete}
                className="px-4 py-2 rounded-lg text-slate-600 font-medium hover:bg-slate-100 transition duration-200 border border-slate-200 w-full"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold transition duration-200 shadow-lg w-full"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
