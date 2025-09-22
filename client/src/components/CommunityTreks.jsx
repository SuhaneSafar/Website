import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaClock, FaMapMarkerAlt, FaMountain } from "react-icons/fa";
import communityTreks from "../utils/communitytreks";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CommunityTreks = () => (
  <div className="py-12 px-4 mx-4 sm:mx-8" id="community-treks">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
        Community Treks
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Challenge yourself with our expertly guided trekking adventures through India's most spectacular mountain ranges
      </p>
    </div>
    
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: '.treks-button-prev',
          nextEl: '.treks-button-next',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet treks-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active treks-bullet-active',
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        className="treks-swiper pb-12"
      >
        {communityTreks.map((trek, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 min-h-[280px] group transform hover:scale-105">
              {/* Background Image with overlay */}
              <img
                src={trek.image}
                alt={trek.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />

              {/* Tags */}
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-20">
                {trek.tags && trek.tags.length > 0 && (
                  <div className="flex items-center bg-blue-500/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    <FaMountain className="mr-2" />
                    {trek.tags[0]}
                  </div>
                )}
                <div className="flex items-center bg-teal-500/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  <FaClock className="mr-2" />
                  {trek.duration}
                </div>
              </div>

              {/* Title and Price */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="mb-4">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg leading-tight">
                    {trek.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Himalayan Adventure</span>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm line-through">₹ {trek.oldPrice}/-</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        ₹ {trek.price}/-
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Save ₹{trek.oldPrice - trek.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <div className="treks-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 cursor-pointer transition-all duration-300 hover:scale-110">
        <FaChevronLeft className="text-blue-600 text-xl" />
      </div>
      <div className="treks-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 cursor-pointer transition-all duration-300 hover:scale-110">
        <FaChevronRight className="text-blue-600 text-xl" />
      </div>
    </div>
    
    {/* Custom styles for pagination */}
    <style jsx>{`
      .treks-bullet {
        width: 12px !important;
        height: 12px !important;
        background: #cbd5e0 !important;
        opacity: 1 !important;
        transition: all 0.3s ease !important;
      }
      .treks-bullet-active {
        background: linear-gradient(to right, #3b82f6, #eab308) !important;
        transform: scale(1.2) !important;
      }
      .treks-swiper .swiper-pagination {
        bottom: 0 !important;
      }
    `}</style>
  </div>
);

export default CommunityTreks; 