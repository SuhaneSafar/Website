import React, { useState } from 'react';
import { FaGraduationCap, FaUsers, FaStar, FaGift, FaHandshake, FaChevronRight, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MetaData from '../container/MetaData';

const CollegeAmbassador = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    college: '',
    year: '',
    course: '',
    experience: '',
    socialMedia: '',
    motivation: '',
    communityReason: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will get back to you soon.');
  };

  const benefits = [
    {
      icon: <FaGift className="text-4xl text-sky-500" />,
      title: "Exclusive Perks",
      description: "Free trips, merchandise, and exclusive access to events"
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      title: "Build Network",
      description: "Connect with like-minded students across India"
    },
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      title: "Leadership Skills",
      description: "Develop leadership and marketing skills"
    },
    {
      icon: <FaHandshake className="text-4xl text-purple-500" />,
      title: "Career Opportunities",
      description: "Internship and job opportunities with Suhane Safar"
    }
  ];

  const responsibilities = [
    "Promote Suhane Safar events in your college",
    "Organize and coordinate group registrations",
    "Share content on social media platforms",
    "Act as a liaison between students and Suhane Safar",
    "Collect feedback and suggestions from students",
    "Help in event planning and execution"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaData 
        title="College Ambassador Program - Suhane Safar | Join Our Student Community"
        description="Join Suhane Safar's College Ambassador Program and become a leader in your college. Get exclusive perks, free trips, and build your network while promoting adventure travel."
        keywords="college ambassador, student program, youth travel, leadership, internship, suhane safar, student community"
        image="https://suhanesafar.com/Images/group.png"
        url="https://suhanesafar.com/college-ambassador"
      />
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white overflow-hidden">
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

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-sky-400/40 text-sky-200 px-6 py-3 rounded-full text-sm font-medium mb-8 hover:bg-white/15 transition-all duration-300">
              <FaGraduationCap className="animate-pulse text-yellow-400" />
              <span>Leadership Opportunity</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              College Ambassador
              <span className="block bg-gradient-to-r from-sky-400 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
                Program
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
              Become the face of adventure in your college and lead the youth travel revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#apply" className="bg-gradient-to-r from-sky-500 via-sky-600 to-yellow-400 hover:from-sky-600 hover:via-sky-700 hover:to-yellow-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Apply Now
              </a>
              <a href="#benefits" className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-yellow-400/70 text-white hover:bg-white/15 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is College Ambassador Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              What is College Ambassador Program?
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our College Ambassador Program is designed to empower passionate students who love travel and adventure. 
              As an ambassador, you'll represent Suhane Safar in your college, help fellow students discover amazing travel 
              opportunities, and build a community of adventure enthusiasts. It's not just about promoting trips – 
              it's about creating experiences and memories that last a lifetime.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why We Started This Program</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that travel should be accessible to every student. Our founders, being from IIT Roorkee, 
                understand the student mindset and the desire for affordable, safe, and memorable travel experiences. 
                This program helps us reach more students and create a network of travel enthusiasts across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Why Become an Ambassador?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our ambassador program and unlock exclusive benefits while building your leadership skills
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Your Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <FaChevronRight className="text-sky-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Apply Now
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Fill out the form below to start your journey as a Suhane Safar College Ambassador
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">College/University *</label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your college name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Enter your complete address (House/Flat No., Street, City, State, PIN Code)"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Year of Study *</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300"
                    >
                      <option value="">Select your year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Course/Stream *</label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="e.g., B.Tech CSE, B.Com, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Social Media Handle</label>
                  <input
                    type="text"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Instagram/LinkedIn profile link"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Previous Experience (if any)</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about any leadership or marketing experience you have"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Why do you want to become an ambassador? *</label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Share your motivation and how you plan to promote Suhane Safar in your college"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Why you want to join this community? *</label>
                  <textarea
                    name="communityReason"
                    value={formData.communityReason}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us what draws you to the Suhane Safar community and what you hope to gain from being part of it"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
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

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6 relative inline-block">
              Have Questions?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-sky-500 via-yellow-400 to-sky-500 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              We're here to help! Reach out to us through any of these channels
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://api.whatsapp.com/send/?phone=917747906173" className="group relative">
                <div className="bg-white/10 backdrop-blur-xl hover:bg-green-500/20 border border-white/20 hover:border-green-400/50 text-white hover:text-green-400 rounded-full p-4 transition-all duration-300 hover:scale-110">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  WhatsApp
                </div>
              </a>
              <a href="mailto:info@suhanesafar.com" className="group relative">
                <div className="bg-white/10 backdrop-blur-xl hover:bg-red-500/20 border border-white/20 hover:border-red-400/50 text-white hover:text-red-400 rounded-full p-4 transition-all duration-300 hover:scale-110">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Email
                </div>
              </a>
              <a href="https://www.instagram.com/suhane__safar/" className="group relative">
                <div className="bg-white/10 backdrop-blur-xl hover:bg-pink-500/20 border border-white/20 hover:border-pink-400/50 text-white hover:text-pink-400 rounded-full p-4 transition-all duration-300 hover:scale-110">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Instagram
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="bg-white/10 backdrop-blur-xl hover:bg-sky-500/20 border border-white/20 hover:border-sky-400/50 text-white hover:text-sky-400 rounded-full p-4 transition-all duration-300 hover:scale-110">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  LinkedIn
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollegeAmbassador;
