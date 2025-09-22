import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaPhoneAlt, FaStar, FaPlay, FaYoutube } from "react-icons/fa";
import testimonials from "../utils/reviews";

const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const words = ["Adventure", "Community", "Connection"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Primary Theme */}
      <div className="absolute inset-0">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('/Images/hero-bg.jpg')",
          }}
        ></div>
        
        {/* Primary Theme Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-sky-900/80 to-slate-900/85"></div>
        
        {/* Additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-sky-900/40"></div>
        
        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Glassmorphism overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-full items-center justify-between px-4 sm:px-8 lg:px-20 py-12">
        {/* Left: Enhanced Heading and Content */}
        <div className="flex-1 flex flex-col justify-center items-start mt-20 lg:mt-0 max-w-3xl">
          {/* Enhanced Animated Badge */}
          <div className={`
            inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-sky-400/30 
            text-sky-200 px-6 py-3 rounded-full text-sm font-medium mb-6 
            transition-all duration-1000 transform hover:bg-white/15 hover:scale-105
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>Live Your Adventure Dreams</span>
          </div>

          {/* Main Heading with Animation */}
          <h1 className={`
            text-white text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight
            transition-all duration-1000 delay-300 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            Start Your   Safar
            {/* <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
            </span>{" "} */}
            <br />
            
              Today
      
          </h1>

          {/* Animated Subtitle */}
          <div className={`
            text-white text-lg sm:text-xl mb-8 font-semibold flex items-center gap-4
            transition-all duration-1000 delay-500 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
          `}>
            <span className="text-blue-300">Discover</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <span 
              className="text-yellow-400 transition-all duration-500 transform"
              key={currentWordIndex}
            >
              {words[currentWordIndex]}
            </span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-purple-300">Unforgettable</span>
          </div>

          {/* Enhanced Description */}
          <p className={`
            text-white/90 text-lg mb-10 leading-relaxed max-w-2xl
            transition-all duration-1000 delay-700 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            Join thousands of adventurers who have discovered their passion for travel. 
            From serene mountain peaks to vibrant cultural experiences, every journey is crafted to inspire.
          </p>

          {/* Enhanced Action Buttons */}
          <div className={`
            flex flex-col sm:flex-row gap-4 mb-10
            transition-all duration-1000 delay-900 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <button className="group bg-white/10 backdrop-blur-xl border-2 border-blue-400/50 hover:border-yellow-400/70 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-500 shadow-2xl transform hover:scale-105 hover:shadow-blue-500/25 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <FaPlay className="group-hover:translate-x-1 transition-transform duration-300" />
                Explore Trips
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-yellow-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Enhanced Contact Section */}
          <div className={`
            flex flex-col sm:flex-row items-start sm:items-center gap-6
            transition-all duration-1000 delay-1100 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            {/* Enhanced Call Us Section */}
            <div className="flex items-center bg-white/10 backdrop-blur-xl border border-blue-400/30 text-white px-6 py-3 rounded-2xl shadow-xl text-sm hover:shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-blue-500/30 backdrop-blur-sm rounded-full p-2 mr-3">
                <FaPhoneAlt className="animate-pulse text-blue-300" />
              </div>
              <div>
                <div className="text-xs text-blue-200 opacity-80">Call Us Now</div>
                <span className="font-bold text-lg text-white">+91 7747906173</span>
              </div>
            </div>
            
            {/* Enhanced Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://wa.me/917747906173" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 hover:-rotate-3">
                  <FaWhatsapp size={24} />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Chat on WhatsApp
                </div>
              </a>
              
              <a 
                href="https://youtube.com/@suhane_safar28?si=1WdhrzWzCJEkBgRG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="bg-gradient-to-br from-red-400 to-red-600 text-white rounded-2xl p-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 transform hover:scale-110 hover:rotate-3">
                  <FaYoutube size={24} />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Join Youtube
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/suhane__safar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 text-white rounded-2xl p-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-110 hover:-rotate-3">
                  <FaInstagram size={24} />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Follow on Instagram
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Enhanced Testimonials */}
        <div className="flex-1 flex flex-col items-center lg:items-end justify-center mt-16 lg:mt-0 max-w-lg">
          {/* Testimonials Header */}
          <div className={`
            text-center lg:text-right mb-8
            transition-all duration-1000 delay-1300 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-yellow-400/40 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-3 hover:bg-white/15 transition-all duration-300">
              <FaStar className="animate-pulse text-yellow-400" />
              <span>Trusted by 10,000+ Travelers</span>
            </div>
            <h3 className="text-white text-2xl font-bold">What Our Travelers Say</h3>
          </div>

          {/* Animated Testimonial Carousel */}
          <div className="relative w-full max-w-md">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`
                  absolute w-full transition-all duration-700 transform
                  ${idx === currentTestimonial 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : idx < currentTestimonial 
                      ? '-translate-x-full opacity-0 scale-95' 
                      : 'translate-x-full opacity-0 scale-95'
                  }
                `}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`
                      flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center 
                      text-white font-bold text-xl shadow-lg ${testimonial.color}
                      ring-4 ring-white/20
                    `}>
                      {testimonial.name}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className="text-yellow-400 mr-1 animate-pulse" 
                            size={18}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <div className="text-white/80 text-sm font-medium">Verified Traveler</div>
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-white text-base font-medium leading-relaxed relative">
                    <span className="text-4xl text-yellow-400/50 absolute -top-2 -left-1">"</span>
                    <span className="relative z-10">{testimonial.text}</span>
                    <span className="text-4xl text-yellow-400/50 absolute -bottom-4 -right-1">"</span>
                  </blockquote>
                </div>
              </div>
            ))}
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${idx === currentTestimonial 
                      ? 'bg-yellow-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                    }
                  `}
                />
              ))}
            </div>
          </div>

          
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-blue-200/80 text-sm mb-3 font-medium">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-blue-400/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5 hover:border-yellow-400/60 transition-colors duration-300">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-yellow-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        /* Custom text gradient animation */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        /* Typewriter effect */
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;