import React, { useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycby1CrAyM572dy3ffzs8xsT7iQ7YInvBadDrs4XdSFu_H7FRO8s-X4elWwi01vfB2r-m/exec';
      form.target = 'hidden-iframe';

      // Add form fields
      const fields = ['name', 'contact', 'email'];
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field;
        input.value = formData[field];
        form.appendChild(input);
      });

      // Create hidden iframe
      let iframe = document.getElementById('hidden-iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Submit form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Simulate success (since we can't easily get response from iframe)
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: "", contact: "", email: "" });
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white px-4 py-12 sm:px-8 md:px-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Quick Links */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-black text-white mb-6 relative inline-block">
            Quick Links
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-sky-400 to-yellow-400 rounded-full"></div>
          </h2>

          {/* Enhanced Social Icons */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/suhane__safar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm hover:bg-pink-500/20 text-white hover:text-pink-400 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-pink-400/50">
                <FaInstagram className="text-xl" />
              </div>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Instagram
              </div>
            </a>
            
            <a
              href="https://t.me/+jF54AchTRxg4OGNl"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm hover:bg-sky-500/20 text-white hover:text-sky-400 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-sky-400/50">
                <FaTelegram className="text-xl" />
              </div>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Telegram
              </div>
            </a>
            
            <a
              href="https://www.facebook.com/share/1ERppvXKma/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm hover:bg-sky-600/20 text-white hover:text-sky-500 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-sky-500/50">
                <FaFacebookF className="text-xl" />
              </div>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Facebook
              </div>
            </a>
            
            <a
              href="https://wa.me/917747906173"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm hover:bg-green-500/20 text-white hover:text-green-400 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-green-400/50">
                <FaWhatsapp className="text-xl" />
              </div>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                WhatsApp
              </div>
            </a>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-yellow-400 rounded-full"></div>
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#community-trips" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-1 h-1 bg-sky-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  Community Trips
                </a>
              </li>
              <li>
                <a href="#community-treks" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-1 h-1 bg-sky-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  Community Treks
                </a>
              </li>
              <li>
                <a href="/work-from-hills" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  Work From Hills
                </a>
              </li>
              <li>
                <a href="/college-ambassador" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  College Ambassador
                </a>
              </li>
              <li>
                <a href="#amenities" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-1 h-1 bg-sky-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  Amenities
                </a>
              </li>
              <li>
                <a href="#reviews" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Join Community */}
        <div>
          <h2 className="text-4xl font-black text-white mb-6 relative inline-block">
            Join Community
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-sky-400 rounded-full"></div>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Connect with us to join thousands of adventurers and get exclusive updates on upcoming trips and events.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none w-full focus:border-sky-400 focus:bg-white/15 transition-all duration-300"
                required
              />
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Contact Number"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none w-full focus:border-sky-400 focus:bg-white/15 transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none w-full focus:border-sky-400 focus:bg-white/15 transition-all duration-300"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Connecting..." : "Connect With Us"}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-400/50 text-green-300 p-3 rounded-xl text-sm">
                  Thank you! We'll connect with you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400/50 text-red-300 p-3 rounded-xl text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Enhanced Footer bottom */}
      <div className="relative mt-16 pt-8 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} SuhaneSafar. All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-xs">
            Built with ❤️ by IIT Roorkee Students • Creating unforgettable journeys since 2023
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
