import React, { useState } from 'react';
import { FaMountain, FaWifi,FaWhatsapp, FaLaptop, FaCoffee, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaCheck, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MetaData from '../container/MetaData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WorkFromHills = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const destinations = [
    {
      id: 1,
      name: "Manali",
      image: "/Images/manali-main.png",
      duration: "7-30 days",
      price: "15,999",
      description: "Perfect blend of work and adventure in the heart of Himachal",
      features: ["High-speed WiFi", "Co-working spaces", "Mountain views", "Adventure activities"]
    },
    {
      id: 2,
      name: "Dharamshala",
      image: "/Images/dharamsala-main.png",
      duration: "7-30 days",
      price: "12,999",
      description: "Work in the peaceful mountains with Tibetan culture influence",
      features: ["Monastery visits", "Peaceful environment", "Great connectivity", "Trekking opportunities"]
    },
    {
      id: 3,
      name: "Shimla",
      image: "/Images/shimla-main.png",
      duration: "7-30 days",
      price: "13,999",
      description: "Colonial charm meets modern workspace in the queen of hills",
      features: ["Historic architecture", "Cool climate", "Mall Road nearby", "Professional spaces"]
    },
    {
      id: 4,
      name: "Spiti Valley",
      image: "/Images/spiti-main.png",
      duration: "14-30 days",
      price: "18,999",
      description: "Ultimate remote work experience in the land of lamas",
      features: ["Complete digital detox", "Stunning landscapes", "Monastery culture", "Photography paradise"]
    }
  ];

  const packages = [
    {
      id: 1,
      name: "Essential",
      duration: "7 Days",
      price: "12,999",
      description: "Perfect for a week-long workation",
      features: [
        "Accommodation in co-living space",
        "High-speed WiFi",
        "Dedicated workspace",
        "2 meals per day",
        "Airport transfers",
        "Basic adventure activity"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      duration: "15 Days",
      price: "24,999",
      description: "Extended stay for serious remote workers",
      features: [
        "Premium accommodation",
        "Private workspace",
        "High-speed WiFi + backup",
        "3 meals per day",
        "Airport transfers",
        "Multiple adventure activities",
        "Networking events",
        "Laundry service"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Explorer",
      duration: "30 Days",
      price: "45,999",
      description: "Month-long adventure with work-life balance",
      features: [
        "Luxury accommodation",
        "Private office space",
        "Premium WiFi + dedicated line",
        "All meals included",
        "Airport transfers",
        "All adventure activities",
        "Weekly networking events",
        "Laundry service",
        "Local exploration tours",
        "Photography sessions"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer",
      company: "Tech Corp",
      image: "/Images/founder.jpg",
      rating: 5,
      text: "Working from Manali for 2 weeks was life-changing. The perfect balance of productivity and adventure. The WiFi was excellent and the views were breathtaking!"
    },
    {
      name: "Rohit Kumar",
      role: "Marketing Manager", 
      company: "Digital Agency",
      image: "/Images/cofounder.png",
      rating: 5,
      text: "Dharamshala workation exceeded all expectations. The peaceful environment boosted my creativity, and the team activities were amazing. Highly recommend!"
    },
    {
      name: "Anjali Patel",
      role: "Freelance Designer",
      company: "Independent",
      image: "/Images/cofounder2.png",
      rating: 5,
      text: "Spiti Valley workation was surreal. Working surrounded by such natural beauty was inspiring. The networking opportunities were also great!"
    }
  ];

  const amenities = [
    {
      icon: <FaWifi className="text-3xl text-sky-500" />,
      title: "High-Speed Internet",
      description: "Reliable 100+ Mbps WiFi with backup connections"
    },
    {
      icon: <FaLaptop className="text-3xl text-green-500" />,
      title: "Dedicated Workspaces",
      description: "Ergonomic setups with mountain views"
    },
    {
      icon: <FaCoffee className="text-3xl text-yellow-500" />,
      title: "Cafe & Meals",
      description: "Fresh local cuisine and unlimited coffee"
    },
    {
      icon: <FaUsers className="text-3xl text-purple-500" />,
      title: "Networking Events",
      description: "Connect with fellow remote workers and entrepreneurs"
    },
    {
      icon: <FaMountain className="text-3xl text-red-500" />,
      title: "Adventure Activities",
      description: "Trekking, rafting, and local exploration"
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-indigo-500" />,
      title: "Flexible Duration",
      description: "Stay from 7 days to 3 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaData 
        title="Work From Hills - Remote Work in Mountains | Suhane Safar"
        description="Experience the ultimate workation in India's beautiful hill stations. Work remotely with high-speed WiFi, stunning mountain views, and adventure activities. Perfect work-life balance in nature."
        keywords="work from hills, workation, remote work, digital nomad, hill stations, manali workation, dharamshala work, mountain office, co-working hills"
        image="https://suhanesafar.com/Images/manali-main.png"
        url="https://suhanesafar.com/work-from-hills"
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
              <FaMountain className="animate-pulse text-yellow-400" />
              <span>Digital Nomad Paradise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Work From
              <span className="block bg-gradient-to-r from-sky-400 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
                The Hills
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
              Escape the city chaos and work from breathtaking mountain destinations with perfect WiFi, workspaces, and adventures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#packages" className="bg-gradient-to-r from-sky-500 via-sky-600 to-yellow-400 hover:from-sky-600 hover:via-sky-700 hover:to-yellow-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                View Packages
              </a>
              <a href="#destinations" className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-yellow-400/70 text-white hover:bg-white/15 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300">
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work From Hills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Why Work From Hills?
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Transform your work routine with the perfect blend of productivity and adventure. 
              Our workation programs offer everything you need to maintain your professional life 
              while experiencing the serenity and inspiration of mountain living.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6">
                <FaLaptop className="text-4xl text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Enhanced Productivity</h3>
                <p className="text-gray-600">Fresh mountain air and peaceful environment boost focus and creativity</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <FaMountain className="text-4xl text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">Perfect balance between professional commitments and adventure activities</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Networking</h3>
                <p className="text-gray-600">Connect with like-minded professionals and entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Slider */}
      <section id="destinations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Destinations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our carefully selected hill stations that offer the perfect environment for remote work
          </p>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-2">{destination.name}</h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="space-y-2 mb-6">
                      {destination.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-500 text-sm">Starting from</span>
                        <div className="text-2xl font-bold text-sky-600">₹{destination.price}</div>
                      </div>
                      <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What We Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Choose Your Package
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Flexible packages designed for different needs and durations
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${pkg.popular ? 'ring-4 ring-sky-500 ring-opacity-50' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-sky-600">₹{pkg.price}</span>
                    <span className="text-gray-500">/{pkg.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 ${pkg.popular ? 'bg-sky-600 hover:bg-sky-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                  >
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Digital Nomads Say
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-sky-50 to-purple-50 rounded-2xl p-8 h-full">
                  <FaQuoteLeft className="text-3xl text-sky-500 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative inline-block">
              Ready to Transform Your Work Life?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-sky-500 via-yellow-400 to-sky-500 rounded-full"></div>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join hundreds of professionals who have discovered the perfect work-life balance in the mountains
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://api.whatsapp.com/send/?phone=917747906173&text=Hi, I'm interested in Work From Hills packages" 
                 className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl">
                <FaWhatsapp className="mr-3 text-xl" />
                WhatsApp Us
              </a>
              <a href="#packages" className="bg-white/10 backdrop-blur-xl border-2 border-sky-400/50 hover:border-yellow-400/70 text-white hover:bg-white/15 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300">
                View All Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkFromHills;
