import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import upcomingEvents from "../utils/upcomingEvents";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaListUl,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UpcomingAdventures = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-12 px-4 mx-4 sm:mx-8 mt-8 relative bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <FaCalendarAlt />
          Coming Soon
        </div>
        <h2 className="text-5xl font-black text-gray-900 mb-6 relative inline-block">
          Upcoming Adventures
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-400 rounded-full opacity-80"></div>
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Embark on extraordinary journeys that will leave you with stories to tell for a lifetime. 
          Each adventure is carefully crafted to deliver unforgettable experiences.
        </p>
      </div>
      
      {/* Enhanced Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 2.8,
              spaceBetween: 35,
            },
          }}
          className="adventure-swiper pb-20"
        >
          {upcomingEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div
                className="
                  bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer 
                  hover:shadow-2xl transition-all duration-500
                  relative group border-2 border-transparent hover:border-blue-200
                  max-w-sm mx-auto backdrop-blur-sm
                
                "
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={event.mainImage}
                    alt={event.title}
                    className="object-fill w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                    ₹{event.price || 'TBA'}
                  </div>
                  
                  {/* Title and location overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold drop-shadow-lg mb-3 leading-tight">{event.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/90 text-sm">
                        <FaMapMarkerAlt className="mr-2 text-blue-300" />
                        <span className="font-medium">{event.pickupDrop}</span>
                      </div>
                      <div className="flex items-center text-white/90 text-sm">
                        <FaClock className="mr-2 text-green-300" />
                        <span className="font-medium">{event.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Explore button - appears on hover */}
                  {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button
                      className="bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEvent(event);
                      }}
                    >
                      Explore Details
                    </button>
                  </div> */}
                </div>
                
                {/* Card footer with quick info */}
                <div className="p-4 bg-gradient-to-r from-gray-50 via-white to-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    
                      {/* Show last date if available */}
                      {event.lastDate && (
                        <div className="flex items-center text-gray-600 text-sm">
                          <span className="font-medium ml-2">
                            Last Date: <span className="text-red-500">{event.lastDate}</span>
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-sky-600 font-medium text-sm hover:text-sky-800 transition-colors">
                      View Details →
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-xl rounded-full p-4 cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-100">
          <FaChevronLeft className="text-sky-600 text-xl" />
        </div>
        <div className="swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-xl rounded-full p-4 cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-100">
          <FaChevronRight className="text-sky-600 text-xl" />
        </div>
      </div>
      
      {/* Custom styles for pagination and animations */}
      <style jsx>{`
        .custom-bullet {
          width: 16px !important;
          height: 16px !important;
          background: #e2e8f0 !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          border-radius: 50% !important;
        }
        .custom-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #eab308) !important;
          transform: scale(1.3) !important;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4) !important;
        }
        .adventure-swiper .swiper-pagination {
          bottom: 8px !important;
        }
        .adventure-swiper .swiper-slide {
          padding: 0 8px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      {/* Enhanced Modal for Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div
            className="
            bg-white rounded-3xl shadow-2xl
            w-full
            max-w-md
            sm:max-w-lg
            md:max-w-3xl
            lg:max-w-5xl
            relative animate-fadeIn overflow-hidden max-h-[95vh] flex flex-col
          "
          >
            {/* Modal Header */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedEvent.mainImage}
                alt={selectedEvent.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 text-xl font-bold transition-all duration-300 hover:scale-110"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close"
              >
                &times;
              </button>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl md:text-4xl font-black mb-2 drop-shadow-lg">{selectedEvent.title}</h3>
                <div className="flex items-center text-white/90 text-lg">
                  <FaMapMarkerAlt className="mr-2 text-blue-300" />
                  <span className="font-medium">{selectedEvent.pickupDrop}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {/* Overview */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">{selectedEvent.overview}</p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-4 text-center">
                  <FaClock className="text-sky-600 text-2xl mx-auto mb-2" />
                  <div className="font-semibold text-blue-900">Duration</div>
                  <div className="text-blue-700">{selectedEvent.duration}</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                  <FaUsers className="text-green-600 text-2xl mx-auto mb-2" />
                  <div className="font-semibold text-green-900">Group Size</div>
                  <div className="text-green-700">8-15 People</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
                  <FaStar className="text-yellow-600 text-2xl mx-auto mb-2" />
                  <div className="font-semibold text-yellow-900">Rating</div>
                  <div className="text-yellow-700 flex items-center justify-center gap-1">
                    4.8 <FaStar className="text-yellow-500 text-sm" />
                  </div>
                </div>
              </div>
              
              {/* Gallery */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaCamera className="text-purple-500" />
                  Photo Gallery
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {selectedEvent.gallery.map((img, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-xl">
                      <img
                        src={img}
                        alt={`${selectedEvent.title} ${idx + 1}`}
                        className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 font-bold text-green-800 mb-4 text-lg">
                    <div className="bg-green-500 rounded-full p-2">
                      <FaCheckCircle className="text-white" />
                    </div>
                    What's Included
                  </div>
                  <ul className="space-y-2">
                    {selectedEvent.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-green-700">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={12} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 font-bold text-red-800 mb-4 text-lg">
                    <div className="bg-red-500 rounded-full p-2">
                      <FaTimesCircle className="text-white" />
                    </div>
                    Not Included
                  </div>
                  <ul className="space-y-2">
                    {selectedEvent.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-red-700">
                        <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" size={12} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reviews */}
              <div className="mb-8 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-100">
                <div className="flex items-center gap-3 font-bold text-yellow-800 mb-4 text-lg">
                  <div className="bg-yellow-500 rounded-full p-2">
                    <FaStar className="text-white" />
                  </div>
                  Traveler Reviews
                </div>
                <div className="space-y-4">
                  {selectedEvent.reviews.map((review, i) => (
                    <div key={i} className="bg-white/70 rounded-xl p-4 border border-yellow-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-bold text-gray-900">{review.name}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, idx) => (
                              <FaStar key={idx} className="text-yellow-500" size={14} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{review.text}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 font-bold text-purple-800 mb-4 text-lg">
                  <div className="bg-purple-500 rounded-full p-2">
                    <FaListUl className="text-white" />
                  </div>
                  Trip Itinerary
                </div>
                <div className="space-y-4">
                  {selectedEvent.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {item.day}
                      </div>
                      <div className="flex-1 bg-white/70 rounded-xl p-4 border border-purple-200 group-hover:border-purple-300 transition-colors">
                        <h5 className="font-bold text-purple-900 text-lg mb-1">{item.title}</h5>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href={selectedEvent.gform}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCalendarAlt />
                  Book This Adventure
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingAdventures;