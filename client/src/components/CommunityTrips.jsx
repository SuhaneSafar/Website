import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaCar, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import communityTrips from "../utils/communitytrips";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const CommunityTrips = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = (registrationLink) => {
    if (registrationLink === "Not aviable") {
      setShowModal(true);
    } else {
      window.open(registrationLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 py-20 px-4 mx-4 sm:mx-8 mt-16 overflow-hidden rounded-3xl" id="community-trips">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-sky-400/40 text-sky-200 px-6 py-3 rounded-full text-sm font-medium mb-6 hover:bg-white/15 transition-all duration-300">
            <FaCar className="animate-pulse text-yellow-400" />
            <span>Explore Together</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative inline-block">
            Community 
            <span className="bg-gradient-to-r from-sky-400 via-yellow-400 to-sky-400 bg-clip-text text-transparent ml-3">
              Trips
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-sky-500 via-yellow-400 to-sky-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community and explore incredible destinations together with like-minded adventurers
          </p>
        </div>
        
        <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.trips-button-prev',
            nextEl: '.trips-button-next',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet trips-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active trips-bullet-active',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="trips-swiper pb-12"
        >
          {communityTrips.map((trip, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 min-h-[420px] group transform hover:scale-105">
                {/* Background Image with overlay */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10" />

                {/* Duration and Tag */}
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                  <div className="flex items-center bg-teal-500/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    <FaClock className="mr-2" />
                    {trip.duration}
                  </div>
                  {trip.tags && trip.tags.length > 0 && (
                    <div className="bg-sky-500/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      {trip.tags[0]}
                    </div>
                  )}
                </div>

                {/* Title with enhanced styling */}
                <div className="absolute top-1/3 left-6 right-6 z-20">
                  <h3 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg tracking-wide mb-2 leading-tight">
                    {trip.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>India's Most Beautiful Destination</span>
                  </div>
                </div>

                {/* Price and Register */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl mb-4">
                    <div className="text-center">
                      <span className="text-gray-600 text-sm font-medium block mb-1">Starting from</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
                        ₹ {trip.price}/-
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRegisterClick(trip.registrationLink)}
                    className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-semibold py-3 rounded-xl shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
          {/* Enhanced Navigation Buttons */}
          <div className="trips-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 shadow-xl rounded-full p-4 cursor-pointer transition-all duration-300 hover:scale-110">
            <FaChevronLeft className="text-white text-xl" />
          </div>
          <div className="trips-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 shadow-xl rounded-full p-4 cursor-pointer transition-all duration-300 hover:scale-110">
            <FaChevronRight className="text-white text-xl" />
          </div>
        </div>
      </div>
      
      {/* Enhanced Custom styles for pagination */}
      <style jsx>{`
        .trips-bullet {
          width: 16px !important;
          height: 16px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          border-radius: 50% !important;
        }
        .trips-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #eab308) !important;
          transform: scale(1.3) !important;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4) !important;
        }
        .trips-swiper .swiper-pagination {
          bottom: 8px !important;
        }
      `}</style>

      {/* Enhanced Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-slate-900/95 via-sky-900/95 to-slate-900/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center relative animate-scaleIn">
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-yellow-400 text-2xl font-bold bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-6">
              <div className="bg-sky-500/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <FaCar className="text-5xl text-yellow-400 animate-bounce" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-2 text-center tracking-wider drop-shadow-lg">Currently Not Available</h3>
            </div>
            <p className="text-gray-300 text-center mb-6 text-lg font-medium leading-relaxed">
              Please wait for <span className="text-yellow-400 font-bold">Suhane Safar</span> to start the trip.<br/>
              <span className="italic text-blue-300">Stay tuned for updates and new adventures!</span>
            </p>
            <button
              className="bg-gradient-to-r from-sky-500 via-sky-600 to-yellow-400 hover:from-sky-600 hover:via-sky-700 hover:to-yellow-500 text-white font-bold px-8 py-3 rounded-full shadow-xl text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
          <style>{`
            @keyframes scaleIn {
              0% { transform: scale(0.7); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-scaleIn {
              animation: scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default CommunityTrips; 