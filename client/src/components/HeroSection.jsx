import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaPhoneAlt, FaStar } from "react-icons/fa";
import testimonials from "../utils/reviews";

const HeroSection = () => (
  <div
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden p-5"
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray bg-opacity-60"></div>
    </div>

    {/* Main Content */}
    <div className="relative z-10 flex flex-col md:flex-row w-full h-full items-center justify-between px-4 sm:px-8 lg:px-20">
      {/* Left: Heading and Button */}
      <div className="flex-1 flex flex-col justify-center items-start mt-24 md:mt-0">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Start Your <span className="text-yellow-400">Safar</span> Today
        </h1>
        <p className="text-white text-lg sm:text-xl mb-8 font-semibold">
          Adventure <span className="mx-2">|</span> Community <span className="mx-2">|</span> Connection
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg mb-8">
          Explore Trips
        </button>
        {/* Call Us pill */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm">
            <FaPhoneAlt className="mr-2" />
            Call Us: <span className="ml-2 font-bold">+91 7747906173</span>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 ml-4">
            <a href="https://wa.me/917747906173" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-400 bg-white rounded-full p-1" size={32} />
            </a>
            <a href="https://t.me/+jF54AchTRxg4OGNl" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-blue-400 bg-white rounded-full p-1" size={32} />
            </a>
            <a href="https://www.instagram.com/suhane__safar/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 bg-white rounded-full p-1" size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Right: Testimonials */}
      <div className="flex-1 flex flex-col items-end justify-center mt-12 md:mt-0 space-y-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 shadow-lg flex items-start gap-4 border border-white border-opacity-20"
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${t.color}`}>
              {t.name}
            </div>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" size={16} />
                ))}
              </div>
              <p className="text-black text-sm font-semibold">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HeroSection; 