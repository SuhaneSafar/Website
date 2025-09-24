import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaStar, 
  FaListUl, 
  FaCamera, 
  FaCalendarAlt, 
  FaUsers, 
  FaWhatsapp,
  FaMountain,
  FaGraduationCap,
  FaTrophy,
  FaHeart,
  FaQuoteLeft,
  FaChevronRight,
  FaMusic,
  FaGamepad,
  FaCampground
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MetaData from '../container/MetaData';
import upcomingEvents from '../utils/upcomingEvents';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InterIITCarnival = () => {

  const eventData = {
    id: 4,
    title: "Inter IIT Adventure Carnival 2026",
    gform: "https://forms.gle/InterIITCarnival2026", // Replace with actual form link
    subtitle: "Uniting explorers from all IITs for an epic journey",
    mainImage: "/Images/manali-main.png", // Using Manali image as it's closest to the location
    gallery: [
      "/Images/manali.png",
      "/Images/manali1.png",
      "/Images/mountain.png",
    ],
    reviews: [
      {
        name: "Arjun (IIT Delhi)",
        rating: 5,
        text: "Amazing initiative bringing all IITs together for adventure!",
      },
      {
        name: "Priya (IIT Bombay)",
        rating: 5,
        text: "Perfect blend of adventure, culture, and networking opportunities.",
      },
    ],
    pickupDrop: "IIT Delhi, IIT Roorkee, Chandigarh - Manali - Return",
    duration: "4 Days / 3 Nights",
    inclusions: [
      "3 Nights Stay in Manali",
      "Dinner, Breakfast & Snacks",
      "Local Sightseeing (Hadimba Temple, Jogini Waterfall, Solang Valley, Atal Tunnel, Sissu Village)",
      "Transportation from pickup points to Manali",
      "Open Mic - Music, stand-up & free performances",
      "Singing & Dancing Competitions",
      "Cultural Events & Activities",
      "Catwalk, Solo & Group Performances",
      "Bonding Games, Badminton & Cards",
      "Trekking & Bonfire Night Celebrations",
      "Suhane Safar Goodies (T-shirt, Hoodie, Team Gadgets)",
      "All kinds of permits",
      "Driver allowance, toll tax and parking",
      "First aid kits",
    ],
    exclusions: [
      "Any personal expenses (laundry, shopping, tips, etc.)",
      "Any adventure activities not mentioned",
      "Travel insurance",
      "Lunch (self arrangement)",
      "Entrance fees not mentioned in inclusions",
    ],
    overview:
      "The Inter IIT Adventure Carnival 2026 is a student-only adventure and cultural festival, uniting explorers from all IITs for an epic journey. Hosted by Suhane Safar, this 4-day carnival blends adventure, sightseeing, cultural events, and bonding activities – set against the breathtaking backdrop of Manali, Himachal Pradesh. A unique opportunity for IITians to connect, compete, and create memories!",
    itinerary: [
      {
        day: 1,
        title: "23rd January - Departure & Journey",
        description:
          "Departure from pickup points (IIT Delhi, IIT Roorkee, Chandigarh). Overnight journey to Manali with group interactions and ice-breaking activities.",
      },
      {
        day: 2,
        title: "24th January - Manali Exploration",
        description:
          "Arrival in Manali and check-in. Visit Hadimba Temple (Ancient wooden temple surrounded by deodar forests). Explore Jogini Waterfall (A scenic trek with mesmerizing views). Evening cultural events and open mic sessions. Overnight stay in Manali.",
      },
      {
        day: 3,
        title: "25th January - Adventure & Culture",
        description:
          "Morning visit to Solang Valley (Activities and scenic beauty). Explore Atal Tunnel (World's longest highway tunnel). Visit Sissu Village (Charming spot in Lahaul Valley with snow views). Evening competitions, performances, and bonding games. Bonfire night with trekking activities. Overnight stay in Manali.",
      },
      {
        day: 4,
        title: "26th January - Closing Ceremony & Return",
        description:
          "Morning leisure activities and final group interactions. Awards ceremony with cash prizes, gifts & exclusive merchandise. Departure for return journey. Arrival at pickup points by evening/night.",
      },
    ],
    eligibility: "Only current IIT students (UG, PG, PhD)",
    teamSize: "Maximum 15 students per campus",
    alumniRole: "Chief Guests, Jury & Prize Distribution",
    // price: "TBA",
    registrationDates: {
      open: "1st December 2025",
      close: "1st January 2026",
      carnivalDates: "23rd - 26th January 2026"
    },
    awards: "Cash Prizes, Gifts & Exclusive Merchandise for winners. Alumni Guests to felicitate winners during the Closing Ceremony",
    specialNote: "This is a students' initiative powered by Suhane Safar, creating unity and adventure among IITians.",
  };
  
  if (!eventData) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <MetaData 
        title="Inter IIT Adventure Carnival 2026 - Suhane Safar"
        description="Join the Inter IIT Adventure Carnival 2026 - A students' initiative hosted by Suhane Safar. Unite with explorers from all IITs for an epic 4-day journey in Manali with adventure, culture, and competitions."
        keywords="Inter IIT, adventure carnival, IIT students, Manali trip, student initiative, adventure travel, cultural events, IIT competition, Suhane Safar"
        image="https://suhanesafar.com/Images/interiit.png"
        url="https://suhanesafar.com/inter-iit-carnival"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-sky-900 to-purple-900 text-white overflow-hidden">
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

        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img
            src="/Images/interiit.png"
            alt="Inter IIT Background"
            className="w-full h-full object-contain opacity-30"
            style={{ 
              filter: 'brightness(1.2) contrast(1.1)',
              objectPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-sky-900/80 to-purple-900/80"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-sky-400/40 text-sky-200 px-6 py-3 rounded-full text-sm font-medium mb-8 hover:bg-white/15 transition-all duration-300">
              <FaGraduationCap className="animate-pulse text-yellow-400" />
              <span>Students' Initiative • Powered by Suhane Safar</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-sky-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                Inter IIT
              </span>
              <span className="block mt-2">Adventure Carnival</span>
              <span className="text-2xl md:text-3xl lg:text-4xl block mt-2 text-yellow-400 font-bold">
                2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {eventData.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href={eventData.gform}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500 via-purple-600 to-yellow-500 hover:from-sky-600 hover:via-purple-700 hover:to-yellow-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Register Now
              </a>
              <a href="#details" className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-yellow-400/70 text-white hover:bg-white/15 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300">
                Explore Details
              </a>
            </div>
            
            {/* Key Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaCalendarAlt className="text-3xl text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Event Dates</h3>
                <p className="text-sky-200">{eventData.registrationDates.carnivalDates}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaClock className="text-3xl text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Duration</h3>
                <p className="text-sky-200">{eventData.duration}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaMapMarkerAlt className="text-3xl text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-sky-200">Manali, Himachal Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                Event Overview
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-400 rounded-full opacity-80"></div>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {eventData.overview}
                </p>
                
                {/* Special Features */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-sky-500 to-purple-600 rounded-full p-2">
                      <FaGraduationCap className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Exclusive for IIT Students (UG, PG, PhD)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full p-2">
                      <FaUsers className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Maximum 15 students per campus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-yellow-500 to-green-500 rounded-full p-2">
                      <FaTrophy className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Cash prizes, gifts & exclusive merchandise</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={eventData.mainImage}
                  alt="Inter IIT Carnival"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Timeline */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-12">Registration Timeline</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-green-500">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Registration Opens</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">{eventData.registrationDates.open}</p>
                <p className="text-gray-600">Get ready to register!</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-yellow-500">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-2xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Registration Closes</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-2">{eventData.registrationDates.close}</p>
                <p className="text-gray-600">Don't miss the deadline!</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-purple-500">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaMountain className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Carnival Begins</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">{eventData.registrationDates.carnivalDates}</p>
                <p className="text-gray-600">The adventure awaits!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
              <FaCamera className="text-purple-500" />
              Gallery
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Glimpse into the breathtaking destinations and experiences awaiting you
            </p>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="gallery-swiper pb-12"
          >
            {eventData.gallery.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Event Highlights</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Experience the perfect blend of adventure, culture, and competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-sky-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaMountain className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Adventure Activities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Trekking & Mountain Exploration
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Solang Valley Activities
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Atal Tunnel Visit
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaMusic className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Cultural Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Open Mic Performances
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Singing & Dancing Competitions
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Catwalk & Group Performances
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaGamepad className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Fun Activities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Bonding Games & Badminton
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Bonfire Night Celebrations
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Cards & Team Building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaListUl className="text-purple-500" />
                4-Day Itinerary
              </h2>
              <p className="text-gray-600 text-xl">
                Your complete adventure schedule from departure to return
              </p>
            </div>
            
            <div className="space-y-8">
              {eventData.itinerary.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 via-purple-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.day}
                    </div>
                    {i < eventData.itinerary.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-sky-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-6 border border-sky-100 group-hover:border-sky-200 transition-colors shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">What's Included & Excluded</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-green-500">
                <div className="flex items-center gap-3 font-bold text-green-800 mb-6 text-2xl">
                  <div className="bg-green-500 rounded-full p-3">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  What's Included
                </div>
                <div className="space-y-3">
                  {eventData.inclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-green-700">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-red-500">
                <div className="flex items-center gap-3 font-bold text-red-800 mb-6 text-2xl">
                  <div className="bg-red-500 rounded-full p-3">
                    <FaTimesCircle className="text-white text-2xl" />
                  </div>
                  Not Included
                </div>
                <div className="space-y-3">
                  {eventData.exclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-red-700">
                      <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-6">What IITians Say</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Hear from fellow IIT students about their adventure experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {eventData.reviews.map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-sky-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-sky-100">
                <FaQuoteLeft className="text-3xl text-sky-500 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.split('(')[0].trim().charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, idx) => (
                        <FaStar key={idx} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaTrophy className="text-yellow-500" />
                Awards & Recognition
              </h2>
              <p className="text-gray-600 text-xl">
                Compete, perform, and win exciting prizes and recognition
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-yellow-500">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {eventData.awards}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6">
                  <FaTrophy className="text-3xl text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Cash Prizes</h3>
                  <p className="text-gray-600">For competition winners</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
                  <FaHeart className="text-3xl text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Exclusive Gifts</h3>
                  <p className="text-gray-600">Special merchandise & goodies</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl p-6">
                  <FaGraduationCap className="text-3xl text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Alumni Recognition</h3>
                  <p className="text-gray-600">Felicitation by IIT alumni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Note */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-8 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Note</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {eventData.specialNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-purple-900 text-white overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative inline-block">
              Ready for the Ultimate IIT Adventure?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-sky-500 via-yellow-400 to-purple-500 rounded-full"></div>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join hundreds of IITians for an unforgettable journey of adventure, culture, and camaraderie
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={eventData.gform}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500 via-purple-600 to-yellow-500 hover:from-sky-600 hover:via-purple-700 hover:to-yellow-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl"
              >
                <FaCalendarAlt className="mr-3 text-xl" />
                Register Now
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=917747906173&text=Hi, I'm interested in Inter IIT Adventure Carnival 2026" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl"
              >
                <FaWhatsapp className="mr-3 text-xl" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InterIITCarnival;
