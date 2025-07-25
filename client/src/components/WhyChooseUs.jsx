import React from "react";

const gallery = [
  { src: "/Images/shimla.png", label: "Shimla", highlight: true },
  { src: "/Images/manali.png", label: "Manali", highlight: true },
  { src: "/Images/dharamshala.png", label: "Dharamshala", highlight: true },
  { src: "/Images/mussorie.png", label: "Mussorie", highlight: true },
  { src: "/Images/kareriLake.png", label: "Kareri Lake", highlight: true },
  { src: "/Images/manali1.png", label: "Manali", highlight: true },
  { src: "/Images/kareriLake1.png", label: "Kareri Lake", highlight: true },
  { src: "/Images/kareriTrek.png", label: "Kareri Trek", highlight: true },
];

const WhyChooseUs = () => (
  <div
    className="bg-[#0a1a3a] text-white py-16 px-4 sm:px-6 md:px-12 mt-24"
    id="why-choose-us"
  >
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      {/* Left: Text */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <ul className="text-base sm:text-lg leading-relaxed text-gray-200 list-disc list-inside space-y-2">
          <li>Built by IIT ROORKEE students who live and breathe travel</li>
          <li>A young, passionate team that truly understands student and youth travelers</li>
          <li>From college trips to alumni tours, corporate outings to family vacations — we do it all</li>
          <li>Solo travelers feel at home — make new friends, bond, and explore together</li>
          <li>Strong focus on female safety with verified stays and women-led coordination</li>
          <li>Trusted local partners ensure authentic, comfortable, and safe experiences</li>
          <li>100% customized trips based on your group, budget, and interests</li>
          <li>One of India’s fastest-growing youth travel communities</li>
          <li>Not just trips — we create unforgettable stories and lifelong friendships</li>
        </ul>
      </div>

      {/* Right: Gallery */}
      <div className="flex-1 flex flex-col items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {gallery.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden group ${
                img.highlight
                  ? "border-4 border-yellow-400"
                  : "border-2 border-white/20"
              } shadow-md w-full h-32 sm:h-40 md:h-44 flex items-center justify-center`}
            >
              <img
                src={img.src}
                alt={img.label || `gallery-${idx}`}
                className="w-full h-full object-cover"
              />
              {img.label && (
                <span
                  className={`absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-lg font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    img.highlight ? "bg-yellow-400/70" : "bg-blue-900/70"
                  }`}
                >
                  {img.label}
                </span>
              )}
            </div>
          ))}
        </div>
        <span className="text-xs text-gray-300 mt-4 italic text-center">
          "Captured Moments from Our Suhane Safar"
        </span>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;
