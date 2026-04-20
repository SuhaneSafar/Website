import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TeamMembers = () => {
  const team = [
    {
      name: "RAKESH RATHIA",
      role: "FOUNDER & CEO",
      desc: "A B-Tech student from IIT Roorkee and a passionate traveller. I started Suhane Safar to make travel safer, more personalized, and budget-friendly for students, solo travellers, and alumni. Our goal is to create memorable experiences and meaningful connections through every journey.",
      img: "/Images/founder.jpg",
    },
    {
      name: "GAURAV ARYA",
      role: "CO-FOUNDER",
      desc: "IIT Roorkee Alumni. B-Tech student who loves travel, inspired by my college trips in Uttarakhand and Himachal. At Suhane Safar, I focus on planning smooth, safe, and budget-friendly trips, helping students explore and connect through meaningful travel experiences.",
      img: "/Images/cofounder.png",
    },
    {
      name: "SAURAV KUMAR",
      role: "CO-FOUNDER",
      desc: "IIT Roorkee Alumni | Co-Founder – Suhane Safar. Driving growth through marketing and sponsorship, Saurav plays a key role in building partnerships and brand presence for Suhane Safar. With strong dedication and a clear vision, he began this journey to create meaningful travel experiences for students and young communities.",
      img: "/Images/saurav.jpeg",
    },
  ];

  return (
    <div className="flex flex-col px-4 py-28 pt-0 bg-white max-w-7xl mx-auto">
      {/* Responsive Heading */}
      <h2 className="text-4xl font-extrabold mb-12 text-center md:text-left">
        Who We Are
      </h2>

      <div className="relative w-full">
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
              spaceBetween: 40,
            },
          }}
          className="pb-16"
        >
          {team.map((member, idx) => (
            <SwiperSlide key={idx} className="h-auto flex justify-center pb-4">
              <div
                className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col items-center text-center w-full h-full max-w-[400px]"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 mb-6 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-fill"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold uppercase">
                  {member.role}
                </h3>
                <p className="text-sm sm:text-base font-semibold mt-1 mb-4">
                  {member.name}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed max-w-sm flex-grow">
                  {member.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default TeamMembers;
