import React, { useState } from "react";
import { 
  FaGraduationCap, 
  FaUsers, 
  FaShieldAlt, 
  FaHeart, 
  FaStar, 
  FaMapMarkerAlt,
  FaCheck,
  FaPlay
} from "react-icons/fa";

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

const features = [
  {
    icon: <FaGraduationCap className="text-3xl text-sky-400" />,
    title: "Built by IIT Students",
    description: "Created by IIT Roorkee students who live and breathe travel"
  },
  {
    icon: <FaUsers className="text-3xl text-yellow-400" />,
    title: "Youth-Focused Team",
    description: "A young, passionate team that truly understands student and youth travelers"
  },
  {
    icon: <FaShieldAlt className="text-3xl text-sky-400" />,
    title: "Female Safety First",
    description: "Strong focus on female safety with verified stays and women-led coordination"
  },
  {
    icon: <FaHeart className="text-3xl text-yellow-400" />,
    title: "Community Building",
    description: "Not just trips — we create unforgettable stories and lifelong friendships"
  }
];

const benefits = [
  "From college trips to alumni tours, corporate outings to family vacations — we do it all",
  "Solo travelers feel at home — make new friends, bond, and explore together",
  "Trusted local partners ensure authentic, comfortable, and safe experiences",
  "100% customized trips based on your group, budget, and interests",
  "One of India's fastest-growing youth travel communities"
];

const WhyChooseUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white py-20 px-4 sm:px-6 md:px-12 mt-16 overflow-hidden"
      id="why-choose-us"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-sky-400/40 text-sky-200 px-6 py-3 rounded-full text-sm font-medium mb-6 hover:bg-white/15 transition-all duration-300">
            <FaStar className="animate-pulse text-yellow-400" />
            <span>Trusted by 10,000+ Travelers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative inline-block">
            Why Choose 
            <span className="bg-gradient-to-r from-sky-400 via-yellow-400 to-sky-400 bg-clip-text text-transparent ml-3">
              Suhane Safar
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-sky-500 via-yellow-400 to-sky-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            More than just a travel company - we're your companions in creating unforgettable adventures and lifelong memories.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Features Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-yellow-400 rounded-full flex items-center justify-center">
                <FaCheck className="text-white text-sm" />
              </div>
              What Makes Us Special
            </h3>
            
            {/* Feature Cards */}
            <div className="grid gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-sky-500/20 to-yellow-400/20 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Benefits */}
            <div className="bg-gradient-to-br from-sky-500/10 to-yellow-400/10 backdrop-blur-sm border border-sky-400/20 rounded-2xl p-6 mt-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaHeart className="text-yellow-400" />
                Why Travelers Love Us
              </h4>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 w-2 h-2 bg-gradient-to-r from-sky-400 to-yellow-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Enhanced Gallery */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-sky-500 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              Our Adventure Gallery
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500/20 to-yellow-400/20 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.label || `gallery-${idx}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-lg mb-1">{img.label}</h4>
                      <div className="flex items-center gap-2">
                        <FaPlay className="text-yellow-400 text-sm" />
                        <span className="text-gray-200 text-sm">View Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 bg-yellow-400/90 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 italic text-lg font-medium">
                "Captured moments from our incredible journeys"
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl mx-auto">
              <button
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-2xl font-bold bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
                <h4 className="font-bold text-lg">{selectedImage.label}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
