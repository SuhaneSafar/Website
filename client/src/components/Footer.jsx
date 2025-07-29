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
    <footer className="bg-[#001d3d] text-white px-4 py-12 sm:px-8 md:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Quick Links */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Quick Links</h2>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-3xl mb-6">
            <a
              href="https://www.instagram.com/suhane__safar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            </a>
            
            <a
              href="https://t.me/+jF54AchTRxg4OGNl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="hover:text-blue-400 cursor-pointer" />
            </a>
            
            <a
              href="https://www.facebook.com/share/1ERppvXKma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            </a>
            <a
              href="https://wa.me/917747906173"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            </a>
          </div>

          {/* Links */}
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="#" className="hover:text-white">
                Community Trips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community Treks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Amenities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Join Community */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Join Community</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="bg-white text-black px-4 py-2 rounded-md outline-none w-full"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Contact Number"
              className="bg-white text-black px-4 py-2 rounded-md outline-none w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Id"
              className="bg-white text-black px-4 py-2 rounded-md outline-none w-full"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1f61ff] hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold py-2 rounded-md"
            >
              {isSubmitting ? "Connecting..." : "Connect With Us"}
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm">Thank you! We'll connect with you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
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
