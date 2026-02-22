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
  FaCampground,
  FaInstagram,
  FaPhone,
  FaGlobe,
  FaShieldAlt,
  FaExclamationTriangle,
  FaMoneyBillWave,
  FaUserShield,
  FaHandshake,
  FaBan
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
    gform: "https://docs.google.com/forms/d/e/1FAIpQLSdnTEEPIp27DgPtWgOY-y1sOKK4s2qh4iTmvBCCIw4eU4E4cw/viewform?usp=header",
    subtitle: "Uniting explorers from all IITs for an epic journey",
    mainImage: "/Images/manali-main.png",
    price: "₹7,000 per person",
    prizePool: "₹50,000 worth",
    participatingIITs: ["IIT Delhi", "IIT Roorkee", "IIT Chandigarh"],
    contact: {
      phone1: "+91 9870380591",
      phone2: "+91 9406935202",
      website: "www.suhanesafar.com",
      instagram: "@interiit_adventure_carnival"
    },
    organizingTeam: {
      leadership: [
        { role: "Chief Explorer", name: "Rakesh Rathia", iit: "IIT Roorkee" },
        { role: "Adventure & Activity Head", name: "Sasa Mardi", iit: "IIT Hyderabad" },
        { role: "Trekking Captain", name: "Yuvraj Kharte", iit: "IIT Kanpur" },
        { role: "Creators Head", name: "Anushka Patel", iit: "IIT Delhi" }
      ],
      operations: [
        { role: "Sponsorship Head", name: "Aditya Basanwal", iit: "IIT Roorkee" },
        { role: "Logistics & Hospitality Head", name: "Sanjay Lohar", iit: "IIT Delhi" },
        { role: "Campus Operations Head", name: "Riddhi Nautiyal", iit: "IIT Madras" }
      ]
    },
    squadGames: [
      "Group Dance",
      "Musical Chair",
      "Balloon Pyramid",
      "Human Tic-Tac-Toe",
      "Head, Shoulder & Knee"
    ],
    soloEvents: [
      "Singing",
      "Dancing",
      "Open Mic",
      "Cat Walk",
      "Nerf Shooting",
      "Magic Carpet Ride",
      "Drawing & Sketching"
    ],
    sightseeingLocations: [
      "Sissu",
      "Mall Road",
      "Old Manali",
      "Atal Tunnel",
      "Manu Temple",
      "Solang Valley",
      "Anjani Mahadev",
      "Jogini Waterfalls",
      "Hadimba Devi Temple"
    ],
    gallery: [
      "/Images/in1.jpeg",
      "/Images/in2.jpeg",
      "/Images/in3.jpeg",
      "/Images/in4.jpeg",
      "/Images/in5.jpeg",
      "/Images/in6.jpeg",
      "/Images/in7.jpeg",
      "/Images/in8.jpeg",
      "/Images/in9.jpeg",
      "/Images/in10.jpeg",
      "/Images/in11.jpeg",

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
    duration: "5 Days / 4 Nights",
    inclusions: [
      "4 Nights Stay in Manali",
      "Dinner, Breakfast & Snacks",
      "Local Sightseeing (Sissu, Mall Road, Old Manali, Atal Tunnel, Manu Temple, Solang Valley, Anjani Mahadev, Jogini Waterfalls, Hadimba Devi Temple)",
      "Transportation from pickup points to Manali",
      "Squad Games: Group Dance, Musical Chair, Balloon Pyramid, Human Tic-Tac-Toe, Head Shoulder & Knee",
      "Solo Events: Singing, Dancing, Open Mic, Cat Walk, Nerf Shooting, Magic Carpet Ride, Drawing & Sketching",
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
      "Entrance fees not mentioned in inclusions",
    ],
    overview:
      "The Inter IIT Adventure Carnival 2026 is a student-only adventure and cultural festival, uniting explorers from all IITs for an epic journey. Hosted by Suhane Safar, this 4-day carnival blends adventure, sightseeing, cultural events, and bonding activities – set against the breathtaking backdrop of Manali, Himachal Pradesh. A unique opportunity for IITians to connect, compete, and create memories!",
    itinerary: [
      {
        day: 1,
        title: "22nd January - Departure & Journey",
        description:
          "Departure from pickup points (IIT Delhi, IIT Roorkee, Chandigarh) at 8:00 PM. Overnight journey to Manali with group interactions and ice-breaking activities.",
      },
      {
        day: 2,
        title: "23rd January - Manali Exploration",
        description:
          "Arrival in Manali and check-in. Visit Hadimba Devi Temple (Ancient wooden temple surrounded by deodar forests). Explore Jogini Waterfall (A scenic trek with mesmerizing views). Visit Mall Road and Old Manali. Evening cultural events and open mic sessions. Overnight stay in Manali.",
      },
      {
        day: 3,
        title: "24th January - Adventure & Culture",
        description:
          "Morning visit to Solang Valley (Activities and scenic beauty). Explore Atal Tunnel (World's longest highway tunnel). Visit Sissu Village (Charming spot in Lahaul Valley with snow views). Visit Manu Temple and Anjani Mahadev. Evening competitions, performances, and bonding games. Bonfire night with trekking activities. Overnight stay in Manali.",
      },
      {
        day: 4,
        title: "25th January - Competitions & Activities",
        description:
          "Full day of squad games (Group Dance, Musical Chair, Balloon Pyramid, Human Tic-Tac-Toe, Head Shoulder & Knee) and solo events (Singing, Dancing, Open Mic, Cat Walk, Nerf Shooting, Magic Carpet Ride, Drawing & Sketching). Team building activities and cultural performances. Overnight stay in Manali.",
      },
      {
        day: 5,
        title: "26th January - Closing Ceremony & Return",
        description:
          "Morning leisure activities and final group interactions. Awards ceremony with cash prizes worth ₹50,000, gifts & exclusive merchandise. Departure for return journey. Arrival at pickup points on 27th January early morning.",
      },
    ],
    eligibility: "Only current IIT students (UG, PG, PhD)",
    teamSize: "Maximum 15 students per campus",
    joiningProcess: "First come, first serve basis",
    alumniRole: "Chief Guests, Jury & Prize Distribution",
    registrationDates: {
      open: "1st December 2025",
      close: "1st January 2026",
      carnivalDates: "22nd - 26th January 2026"
    },
    awards: "Cash Prizes worth ₹50,000, Gifts & Exclusive Merchandise for winners. Alumni Guests to felicitate winners during the Closing Ceremony",
    specialNote: "This is a students' initiative powered by Suhane Safar, creating unity and adventure among IITians.",
    codeOfConduct: {
      general: [
        "Respect organizers, volunteers & locals",
        "No harassment, bullying, or misconduct",
        "Strictly follow trek leader & safety instructions"
      ],
      substances: [
        "Alcohol & substances strictly prohibited",
        "Violation = Immediate removal without refund"
      ]
    },
    safetyRules: {
      general: [
        "Follow all safety gear requirements",
        "No wandering alone",
        "Weather-based route changes possible"
      ],
      accommodation: [
        "Triple/quad room sharing",
        "Maintain cleanliness & respect property"
      ],
      trek: [
        "Follow trek schedule strictly",
        "Stay with assigned group & leader",
        "No littering in mountains"
      ]
    },
    refundPolicy: {
      general: "As per official refund policy",
      noRefund: [
        "Rule violations",
        "Missed bus",
        "Personal issues after trip starts"
      ]
    },
    medicalGuidelines: [
      "Medical conditions must be declared",
      "High-altitude unfit participants may be restricted"
    ],
    photography: [
      "Photos/videos may be used for promotion",
      "Group photography participation required"
    ],
    responsibility: [
      "Organizers not responsible for personal loss",
      "Property damage = participant pays"
    ],
    environment: [
      "No plastic dumping",
      "No graffiti",
      "Follow eco-friendly travel policy"
    ],
    emergency: [
      "Emergency protocols mandatory",
      "Final authority lies with Event Directors"
    ]
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
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-sky-900/80 to-slate-900/80"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-sky-400/40 text-sky-200 px-6 py-3 rounded-full text-sm font-medium mb-8 hover:bg-white/15 transition-all duration-300">
              <FaGraduationCap className="text-sky-400" />
              <span>Students' Initiative • Powered by Suhane Safar</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                Inter IIT
              </span>
              <span className="block mt-2">Adventure Carnival</span>
              <span className="text-6xl md:text-3xl lg:text-4xl block mt-2 text-sky-300 font-bold">
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
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Register Now
              </a>
              <a
                href="https://www.instagram.com/interiit_adventure_carnival?igsh=MTE2NzRrajE5bDRuZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-sky-300/70 hover:bg-white/15 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <FaInstagram className="text-xl" />
                Follow Us
              </a>
              <a href="#details" className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-sky-300/70 text-white hover:bg-white/15 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300">
                Explore Details
              </a>
            </div>

            {/* Key Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaCalendarAlt className="text-3xl text-sky-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Event Dates</h3>
                <p className="text-sky-200">{eventData.registrationDates.carnivalDates}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaClock className="text-3xl text-sky-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Duration</h3>
                <p className="text-sky-200">{eventData.duration}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaMapMarkerAlt className="text-3xl text-sky-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-sky-200">Manali, Himachal Pradesh</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaMoneyBillWave className="text-3xl text-sky-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Total Cost</h3>
                <p className="text-sky-200">{eventData.price}</p>
              </div>
            </div>

            {/* Prize Pool Badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-sky-600/20 backdrop-blur-xl border-2 border-sky-400/50 text-sky-200 px-8 py-4 rounded-full text-lg font-bold">
              <FaTrophy className="text-2xl text-sky-400" />
              <span>Prize Pool: {eventData.prizePool}</span>
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
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-sky-500 to-sky-400 rounded-full opacity-80"></div>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {eventData.overview}
                </p>

                {/* Participating IITs */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Participating IITs:</h3>
                  <div className="flex flex-wrap gap-3">
                    {eventData.participatingIITs.map((iit, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                        {iit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Features */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-sky-500 rounded-full p-2">
                      <FaGraduationCap className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Exclusive for IIT Students (UG, PG, PhD)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-sky-500 rounded-full p-2">
                      <FaUsers className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Maximum 15 students per campus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-sky-500 rounded-full p-2">
                      <FaTrophy className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Prize Pool: {eventData.prizePool}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-sky-500 rounded-full p-2">
                      <FaCheckCircle className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Registration: First come, first serve basis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-sky-500 rounded-full p-2">
                      <FaMoneyBillWave className="text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Total Cost: {eventData.price}</span>
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
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-sky-500">
                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-2xl text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Registration Opens</h3>
                <p className="text-2xl font-bold text-sky-600 mb-2">{eventData.registrationDates.open}</p>
                <p className="text-gray-600">Get ready to register!</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-sky-500">
                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-2xl text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Registration Closes</h3>
                <p className="text-2xl font-bold text-sky-600 mb-2">{eventData.registrationDates.close}</p>
                <p className="text-gray-600">Don't miss the deadline!</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-sky-500">
                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaMountain className="text-2xl text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Carnival Begins</h3>
                <p className="text-2xl font-bold text-sky-600 mb-2">{eventData.registrationDates.carnivalDates}</p>
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
              <FaCamera className="text-sky-500" />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Carnival Activities & Games</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Experience the perfect blend of adventure, culture, and competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-sky-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Squad (Team) Games</h3>
              <ul className="space-y-2 text-gray-600">
                {eventData.squadGames.map((game, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-sky-500 flex-shrink-0" />
                    {game}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-sky-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaMusic className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Solo Events</h3>
              <ul className="space-y-2 text-gray-600">
                {eventData.soloEvents.map((event, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-sky-500 flex-shrink-0" />
                    {event}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-sky-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaMountain className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Adventure & Sightseeing</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-sky-500 flex-shrink-0" />
                  Trekking & Mountain Exploration
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-sky-500 flex-shrink-0" />
                  Bonfire Night Celebrations
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-sky-500 flex-shrink-0" />
                  Visit all 9 Manali locations
                </li>
              </ul>
            </div>
          </div>

          {/* Manali Sightseeing Locations */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-sky-500" />
              Manali Sightseeing Locations
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {eventData.sightseeingLocations.map((location, idx) => (
                <div key={idx} className="bg-sky-50 rounded-xl p-4 text-center border border-sky-200">
                  <FaCheckCircle className="text-sky-500 mx-auto mb-2" />
                  <span className="font-semibold text-gray-800">{location}</span>
                </div>
              ))}
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
                <FaListUl className="text-sky-500" />
                5-Day Itinerary
              </h2>
              <p className="text-gray-600 text-xl">
                Your complete adventure schedule from departure to return
              </p>
            </div>

            <div className="space-y-8">
              {eventData.itinerary.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.day}
                    </div>
                    {i < eventData.itinerary.length - 1 && (
                      <div className="w-1 h-20 bg-sky-300 mx-auto mt-4 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-200 group-hover:border-sky-300 transition-colors shadow-lg">
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
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-sky-500">
                <div className="flex items-center gap-3 font-bold text-gray-800 mb-6 text-2xl">
                  <div className="bg-sky-500 rounded-full p-3">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  What's Included
                </div>
                <div className="space-y-3">
                  {eventData.inclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-700">
                      <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-gray-400">
                <div className="flex items-center gap-3 font-bold text-gray-800 mb-6 text-2xl">
                  <div className="bg-gray-500 rounded-full p-3">
                    <FaTimesCircle className="text-white text-2xl" />
                  </div>
                  Not Included
                </div>
                <div className="space-y-3">
                  {eventData.exclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-700">
                      <FaTimesCircle className="text-gray-500 mt-1 flex-shrink-0" />
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
              <div key={i} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <FaQuoteLeft className="text-3xl text-sky-500 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.split('(')[0].trim().charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, idx) => (
                        <FaStar key={idx} className="text-sky-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Organizing Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaUsers className="text-purple-500" />
                Core Organizing Team
              </h2>
              <p className="text-gray-600 text-xl">
                Meet the passionate IITians making this event possible
              </p>
            </div>

            {/* Leadership Team */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Leadership Team</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {eventData.organizingTeam.leadership.map((member, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h4>
                        <p className="text-sky-600 font-semibold mb-2">{member.role}</p>
                        <p className="text-gray-600">{member.iit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Team */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Operations Team</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {eventData.organizingTeam.operations.map((member, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                      <p className="text-sky-600 font-semibold mb-2 text-sm">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.iit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Contact Details</h2>
              <p className="text-gray-600 text-xl">
                Get in touch with us for any queries
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <a href={`tel:${eventData.contact.phone1.replace(/\s/g, '')}`} className="flex items-center gap-4 bg-sky-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-sky-200">
                  <div className="bg-sky-500 rounded-full p-4">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone 1</p>
                    <p className="text-gray-800 font-bold text-lg">{eventData.contact.phone1}</p>
                  </div>
                </a>

                <a href={`tel:${eventData.contact.phone2.replace(/\s/g, '')}`} className="flex items-center gap-4 bg-sky-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-sky-200">
                  <div className="bg-sky-500 rounded-full p-4">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone 2</p>
                    <p className="text-gray-800 font-bold text-lg">{eventData.contact.phone2}</p>
                  </div>
                </a>

                <a href={`https://${eventData.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-sky-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-sky-200">
                  <div className="bg-sky-500 rounded-full p-4">
                    <FaGlobe className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Website</p>
                    <p className="text-gray-800 font-bold text-lg">{eventData.contact.website}</p>
                  </div>
                </a>

                <a href="https://www.instagram.com/interiit_adventure_carnival?igsh=MTE2NzRrajE5bDRuZA==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-sky-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-sky-200">
                  <div className="bg-sky-500 rounded-full p-4">
                    <FaInstagram className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Instagram</p>
                    <p className="text-gray-800 font-bold text-lg">{eventData.contact.instagram}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Registration Rules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaCheckCircle className="text-green-500" />
                Eligibility & Registration Rules
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-sky-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaGraduationCap className="text-sky-600" />
                  Eligibility
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Only currently enrolled IIT students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Valid college ID mandatory</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-sky-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaUsers className="text-sky-600" />
                  Registration
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">First-come, first-serve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Seats are limited per IIT</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Full payment required to confirm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaTimesCircle className="text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">No on-spot registration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct & Discipline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaShieldAlt className="text-sky-500" />
                Code of Conduct & Discipline
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <FaHandshake className="text-sky-600" />
                  Code of Conduct
                </h3>
                <ul className="space-y-3">
                  {eventData.codeOfConduct.general.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <FaBan className="text-gray-600" />
                  Alcohol & Substances
                </h3>
                <ul className="space-y-3">
                  {eventData.codeOfConduct.substances.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaTimesCircle className="text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety, Stay & Trek Rules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaShieldAlt className="text-sky-500" />
                Safety, Stay & Trek Rules
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-sky-500">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-sky-600" />
                  Safety Rules
                </h3>
                <ul className="space-y-2">
                  {eventData.safetyRules.general.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-sky-500">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaCampground className="text-sky-600" />
                  Accommodation
                </h3>
                <ul className="space-y-2">
                  {eventData.safetyRules.accommodation.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-sky-500">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaMountain className="text-sky-600" />
                  Trek & Activity Discipline
                </h3>
                <ul className="space-y-2">
                  {eventData.safetyRules.trek.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund, Medical & Emergency */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaExclamationTriangle className="text-sky-500" />
                Refund, Medical & Emergency
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Refund & Cancellation */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-sky-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <FaMoneyBillWave className="text-sky-600" />
                  Refund & Cancellation
                </h3>
                <p className="text-gray-700 mb-4 font-semibold">{eventData.refundPolicy.general}</p>
                <div className="space-y-2">
                  <p className="text-gray-800 font-bold mb-2">No refund for:</p>
                  {eventData.refundPolicy.noRefund.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaTimesCircle className="text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medical Guidelines */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-sky-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <FaUserShield className="text-sky-600" />
                  Medical Guidelines
                </h3>
                <ul className="space-y-3">
                  {eventData.medicalGuidelines.map((guideline, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaExclamationTriangle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Policies */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Photography & Media */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaCamera className="text-sky-600" />
                  Photography & Media
                </h3>
                <ul className="space-y-2">
                  {eventData.photography.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibility */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-sky-600" />
                  Responsibility
                </h3>
                <ul className="space-y-2">
                  {eventData.responsibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaExclamationTriangle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Environment Responsibility */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaMountain className="text-sky-600" />
                  Environment Responsibility
                </h3>
                <ul className="space-y-2">
                  {eventData.environment.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaTimesCircle className="text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Decisions */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle className="text-sky-600" />
                  Emergency Decisions
                </h3>
                <ul className="space-y-2">
                  {eventData.emergency.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FaTrophy className="text-sky-500" />
                Awards & Recognition
              </h2>
              <p className="text-gray-600 text-xl">
                Compete, perform, and win exciting prizes and recognition
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-sky-500">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {eventData.awards}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
                  <FaTrophy className="text-3xl text-sky-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Cash Prizes</h3>
                  <p className="text-gray-600 font-semibold text-lg">{eventData.prizePool}</p>
                  <p className="text-gray-600 text-sm mt-1">For competition winners</p>
                </div>
                <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
                  <FaHeart className="text-3xl text-sky-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Exclusive Gifts</h3>
                  <p className="text-gray-600">Special merchandise & goodies</p>
                </div>
                <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
                  <FaGraduationCap className="text-3xl text-sky-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">Alumni Recognition</h3>
                  <p className="text-gray-600">Felicitation by IIT alumni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Note */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-8 border-sky-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Note</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {eventData.specialNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white overflow-hidden">
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
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"></div>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join hundreds of IITians for an unforgettable journey of adventure, culture, and camaraderie
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={eventData.gform}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl"
              >
                <FaCalendarAlt className="mr-3 text-xl" />
                Register Now
              </a>
              <a
                href="https://www.instagram.com/interiit_adventure_carnival?igsh=MTE2NzRrajE5bDRuZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-sky-300/70 hover:bg-white/15 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl"
              >
                <FaInstagram className="mr-3 text-xl" />
                Follow Instagram
              </a>
              <a
                href={`https://api.whatsapp.com/send/?phone=${eventData.contact.phone1.replace(/\s/g, '').replace('+', '')}&text=Hi, I'm interested in Inter IIT Adventure Carnival 2026`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-sky-300/70 hover:bg-white/15 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl"
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
