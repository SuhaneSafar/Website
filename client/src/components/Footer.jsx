import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001d3d] text-white px-4 py-12 sm:px-8 md:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Quick Links */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Quick Links</h2>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-3xl mb-6">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </div>

          {/* Links */}
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-white">Community Trips</a></li>
            <li><a href="#" className="hover:text-white">Community Treks</a></li>
            <li><a href="#" className="hover:text-white">Amenities</a></li>
            <li><a href="#" className="hover:text-white">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-white">Reviews</a></li>
          </ul>
        </div>

        {/* Right Side - Join Community */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Join Community</h2>
          <form className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Name"
              className="bg-white text-black px-4 py-2 rounded-md outline-none w-full"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="bg-white text-black px-4 py-2 rounded-md outline-none w-full"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="bg-white text-black px-4 py-2 rounded-md outline-none w-full"
            />
            <button
              type="submit"
              className="bg-[#1f61ff] hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Connect With Us
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} SuhaneSafar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
