import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import communityTrips from "../utils/communitytrips";

const CommunityTrips = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = (registrationLink) => {
    if (registrationLink === "Not aviable") {
      setShowModal(true);
    } else {
      window.open(registrationLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="py-8 px-2 mx-8 sm:px-4 md:px-8 " id="community-trips">
      <h2 className="text-2xl font-bold my-14 mb-10 ">Community Trips</h2>
      <div className="grid grid-cols-1 mx-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {communityTrips.map((trip, idx) => (
          <div
            key={idx}
            className="relative bg-black rounded-3xl overflow-hidden shadow-lg flex flex-col items-center justify-end min-h-[340px] group"
          >
            {/* Background Image with overlay */}
            <img
              src={trip.image}
              alt={trip.title}
              className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            {/* Duration and Tag */}
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <span className="bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-lg shadow">{trip.duration}</span>
              {trip.tags && trip.tags.length > 0 && (
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow">{trip.tags[0]}</span>
              )}
            </div>

            {/* Title */}
            <div className="absolute top-8 left-0 w-full flex justify-center z-20">
              <span className="text-white text-3xl font-cursive font-bold drop-shadow-lg tracking-wide">
                {trip.title}
              </span>
            </div>

            {/* Price and Register */}
            <div className="relative z-20 flex flex-col items-center mb-8 mt-32 w-full">
              <div className="bg-white/95 rounded-xl px-6 py-3 shadow-lg flex flex-col items-center mb-3 border-2 border-dotted border-yellow-400">
                <span className="text-gray-700 text-xs font-semibold mb-1">Starting from</span>
                <span className="text-2xl font-bold text-yellow-700">₹ {trip.price}/-</span>
              </div>
              <button
                onClick={() => handleRegisterClick(trip.registrationLink)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full shadow-lg text-base transition-colors duration-300"
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gradient-to-br from-blue-100 via-yellow-50 to-pink-100 border-4 border-yellow-400 rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center relative animate-scaleIn">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-4">
              <span className="text-5xl mb-2 animate-bounce"><FaCar className="inline text-blue-500" /></span>
              <h3 className="text-3xl font-extrabold text-blue-700 mb-1 text-center font-cursive tracking-wider drop-shadow-lg">Currently Not Available</h3>
            </div>
            <p className="text-gray-700 text-center mb-4 text-lg font-medium">
              Please wait for <span className="text-yellow-600 font-bold">Suhane Safar</span> to start the trip.<br/>
              <span className="italic text-blue-500">Stay tuned for updates and new adventures!</span>
            </p>
            <button
              className="mt-2 bg-gradient-to-r from-blue-500 to-yellow-400 hover:from-blue-600 hover:to-yellow-500 text-white font-bold px-8 py-2 rounded-full shadow-lg text-lg transition-all duration-300"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
          <style>{`
            @keyframes scaleIn {
              0% { transform: scale(0.7); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-scaleIn {
              animation: scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default CommunityTrips; 