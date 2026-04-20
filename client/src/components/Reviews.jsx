import React from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import reviewCards from "../utils/reviewCards";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  return (
    <div className="py-22 px-2 sm:px-4 md:px-16" id="reviews">
      <h2 className="text-2xl font-bold mb-10 text-center">Reviews</h2>
      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.review-swiper-button-prev',
            nextEl: '.review-swiper-button-next',
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-16"
        >
          {reviewCards.map((review, idx) => (
            <SwiperSlide key={idx} className="h-auto pb-4 flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-[380px] flex flex-col border border-gray-200 h-full mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${review.color}`}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" size={18} />
                      ))}
                    </div>
                    <div className="font-semibold text-gray-800 text-lg">
                      {review.name}
                    </div>
                  </div>
                </div>

                <div className="text-gray-700 text-base mb-4 flex-grow">{review.text}</div>

                <div className="flex items-center mt-auto gap-3 mb-2">
                  <img
                    src={review.tripImage}
                    alt={review.trip}
                    className="w-16 h-16 object-cover rounded-lg border shrink-0"
                  />
                  <span className="text-sm font-semibold text-blue-700">
                    {review.trip}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex review-swiper-button-prev absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 transition-colors shadow-lg rounded-full p-4 cursor-pointer">
          <FaChevronLeft size={24} className="text-blue-600" />
        </div>
        <div className="hidden md:flex review-swiper-button-next absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 transition-colors shadow-lg rounded-full p-4 cursor-pointer">
          <FaChevronRight size={24} className="text-blue-600" />
        </div>
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
    </div>
  );
};

export default Reviews;
