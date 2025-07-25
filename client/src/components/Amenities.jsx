import React from "react";
import { FaBus, FaUtensils, FaHotel, FaBiking, FaFire } from "react-icons/fa";

// Example images (replace with your actual image paths)
const galleryImages = [
  "/Images/food1.png",
  "/Images/food2.png",
  "/Images/food3.png",
  "/Images/transport.png",
  "/Images/dorm.png",
  "/Images/room1.png",
  "/Images/room2.png",
  "/Images/mountain.png",
  "/Images/group.png",
];

const amenities = [
  { icon: <FaBus size={48} />, label: "Transport" },
  { icon: <FaUtensils size={48} />, label: "Meals" },
  { icon: <FaHotel size={48} />, label: "Accomodation" },
  { icon: <FaBiking size={48} />, label: "Sightseeing" },
  { icon: <FaFire size={48} />, label: "Bonfire" },
];

const Amenities = () => (
  <div className="pt-22 px-2 sm:px-4 md:px-16" id="amenities">
    <h2 className="text-2xl font-bold mb-8">Amenities</h2>
    {/* Amenities Icons */}
    <div className="flex flex-wrap justify-center  gap-8 mb-8">
      {amenities.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-blue-500 text-blue-600 bg-white shadow-md mb-2">
            {item.icon}
          </div>
          <span className="text-blue-700 font-semibold text-base">{item.label}</span>
        </div>
      ))}
    </div>
    {/* Gallery */}
    <div className="grid grid-cols-2 sm:grid-cols-3 mx-6 md:grid-cols-4 gap-4">
      {galleryImages.map((img, idx) => (
        <div
          key={idx}
          className="overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white"
        >
          <img
            src={img}
            alt={`amenity-${idx}`}
            className="w-full h-32 sm:h-36 md:h-40 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Amenities; 