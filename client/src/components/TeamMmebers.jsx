import React from "react";

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
      desc: "B-Tech student who loves travel, inspired by my college trips in Uttarakhand and Himachal. At Suhane Safar, I focus on planning smooth, safe, and budget-friendly trips, helping students explore and connect through meaningful travel experiences.",
      img: "/Images/cofounder.png",
    },
    {
      name: "SAURAV KUMAR",
      role: "CO-FOUNDER",
      desc: "B-Tech student from IIT Roorkee and co-founder of Suhane Safar. I handle marketing, sponsorships, and connecting with students, alumni, and youth communities. My focus is on creating impact through creative campaigns and meaningful partnerships.",
      img: "/Images/cofounder2.png",
    },
  ];

  return (
    <div className="flex flex-col px-4 py-28 pt-0 bg-white max-w-7xl mx-auto">
      {/* Responsive Heading */}
      <h2 className="text-4xl font-extrabold mb-12 text-center md:text-left">
        Who We Are
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col items-center text-center w-full"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 mb-6 rounded-xl overflow-hidden ">
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
            <p className="text-sm text-gray-700 leading-relaxed">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
