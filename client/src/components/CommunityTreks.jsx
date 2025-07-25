import React from "react";
import communityTreks from "../utils/communitytreks";

const CommunityTreks = () => (
  <div className="pt-22 px-2 sm:px-4 md:px-16" id="community-treks">
    <h2 className="text-2xl font-bold mb-12">Community Treks</h2>
    <div className="flex flex-col px-6 gap-8">
      {communityTreks.map((trek, idx) => (
        <div
          key={idx}
          className="relative bg-black rounded-2xl overflow-hidden shadow-lg min-h-[180px] flex items-end group"
        >
          {/* Background Image with overlay */}
          <img
            src={trek.image}
            alt={trek.title}
            className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Tags */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-20">
            {trek.tags && trek.tags.length > 0 && (
              <span className="bg-blue-500 text-white text-sm font-bold px-5 py-1 rounded-xl shadow mb-1">{trek.tags[0]}</span>
            )}
            <span className="bg-teal-400 text-white text-sm font-bold px-5 py-1 rounded-xl shadow">{trek.duration}</span>
          </div>

          {/* Title and Price */}
          <div className="relative z-20 flex flex-col items-start justify-end p-8 w-full">
            <span className="text-white text-3xl font-bold mb-2 drop-shadow-lg">{trek.title}</span>
            <div className="flex flex-col text-white text-xl font-bold">
              <span className="line-through text-gray-200 text-lg">₹ {trek.oldPrice}/-</span>
              <span>₹ {trek.price}/-</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CommunityTreks; 