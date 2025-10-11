import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import UpcomingAdventures from "../components/UpcomingAdventures";
import CommunityTrips from "../components/CommunityTrips";
import CommunityTreks from "../components/CommunityTreks";
import Amenities from "../components/Amenities";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMmebers";
import MetaData from "../container/MetaData";
import { FaWhatsapp, FaRobot, FaTimes } from "react-icons/fa";

const Home = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
  <div className="cursor-default">
    <MetaData 
      title="Suhane Safar - Adventure Travel Community | Best Travel Trips in India"
      description="Join India's fastest-growing youth travel community. Adventure trips, community treks, and unforgettable experiences in Manali, Shimla, Udaipur, and more. Built by IIT Roorkee students."
      keywords="travel community, adventure trips, youth travel, trekking, Manali, Shimla, Udaipur, Dharamshala, Kareri Lake, IIT Roorkee, student travel, group trips, solo travel, female safety, travel India"
      image="https://suhanesafar.com/Images/hero-bg.jpg"
      url="https://suhanesafar.com/"
    />
    <Navbar />
    <HeroSection />
    <UpcomingAdventures />
    <CommunityTrips />
    <CommunityTreks />
    <Amenities />
    <WhyChooseUs />
    <Reviews />
    <TeamMembers />
    <Footer />
    
    {/* Chatbot Iframe */}
    {isChatbotOpen && (
      <iframe
        src="https://app.vectorshift.ai/chatbots/embedded/68ea576d27a1e3044bd01b4c?openChatbot=true"
        width="500px"
        height="600px"
        style={{
          border: 'none',
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          zIndex: 1001,
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
        allow="clipboard-read; clipboard-write; microphone"
        title="AI Chatbot"
      />
    )}

    {/* Chatbot Toggle Button */}
    <button
      onClick={toggleChatbot}
      aria-label={isChatbotOpen ? "Close AI Chatbot" : "Open AI Chatbot"}
      style={{
        position: 'fixed',
        right: '50px',
        bottom: '120px',
        zIndex: 1002,
        width: '60px',
        height: '60px',
        backgroundColor: isChatbotOpen ? '#DC2626' : '#4F46E5',
        color: '#fff',
        border: 'none',
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        fontWeight: 700,
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = isChatbotOpen ? '#B91C1C' : '#3730A3';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = isChatbotOpen ? '#DC2626' : '#4F46E5';
        e.target.style.transform = 'scale(1)';
      }}
    >
      {isChatbotOpen ? (
        <FaTimes color="white" size={30} />
      ) : (
        <FaRobot color="white" size={30} />
      )}
    </button>

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/917747906173"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        right: '50px',
        bottom: '50px',
        zIndex: 1000,
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        textDecoration: 'none',
        fontWeight: 700,
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#128C7E';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#25D366';
        e.target.style.transform = 'scale(1)';
      }}
    >
      <FaWhatsapp color="white" size={40} />
    </a>
  </div>
  );
};

export default Home;