import React, { useState } from "react";
import upcomingEvents from "../utils/upcomingEvents";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaListUl,
  FaCamera,
} from "react-icons/fa";

const UpcomingAdventures = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-4 px-2 mx-8 sm:px-4 md:px-8  mt-6">
      <h2 className="text-2xl font-bold my-14 mb-4">Upcoming Adventures</h2>
      {/* Scrollable Cards */}
      <div className="flex overflow-x-auto gap-8 p-2 max-h-[calc(100vh-10rem)] overflow-y-hidden scroll-px-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="
              min-w-[320px] max-w-[320px] mx-3 my-3
              sm:min-w-[400px] sm:max-w-[400px]
              md:min-w-[500px] md:max-w-[500px]
              lg:min-w-[580px] lg:max-w-[580px]
              bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer flex-shrink-0 border border-gray-200 
              hover:scale-105 transition-transform duration-300
              relative
            "
            onClick={() => setSelectedEvent(event)}
          >
            <div className="relative h-48 sm:h-60 md:h-72 lg:h-90 w-full">
              <img
                src={event.mainImage}
                alt={event.title}
                className="object-fill w-full h-full"
              />
              {/* Know more button overlayed at the bottom left */}
              <button
                className="absolute left-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full text-base shadow-lg transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEvent(event);
                }}
              >
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div
            className="
            bg-white rounded-2xl shadow-2xl
            w-full
            max-w-md
            sm:max-w-lg
            md:max-w-2xl
            lg:max-w-3xl
            p-4 sm:p-6 md:p-8
            relative animate-fadeIn overflow-y-auto max-h-[90vh]
          "
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-extrabold mb-2 text-blue-900 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> {selectedEvent.title}
            </h3>
            <p className="mb-4 text-gray-700">{selectedEvent.overview}</p>
            {/* Gallery */}
            <div className="flex gap-4 overflow-x-auto pb-2 mb-6">
              {selectedEvent.gallery.map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={img}
                    alt={`${selectedEvent.title} ${idx + 1}`}
                    className="
                      w-32 h-24
                      sm:w-40 sm:h-32
                      md:w-52 md:h-36
                      lg:w-60 lg:h-44
                      object-cover rounded-xl border border-gray-200 shadow
                    "
                  />
                  <FaCamera
                    className="absolute bottom-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                    size={22}
                  />
                </div>
              ))}
            </div>
            {/* Trip Details */}
            <div className="mb-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <FaMapMarkerAlt /> Pickup & Drop:{" "}
                <span className="font-normal text-gray-800">
                  {selectedEvent.pickupDrop}
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <FaClock /> Duration:{" "}
                <span className="font-normal text-gray-800">
                  {selectedEvent.duration}
                </span>
              </div>
            </div>
            {/* Inclusions & Exclusions */}
            <div className="flex gap-6 mb-4">
              <div className="bg-green-50 rounded-lg p-3 flex-1">
                <div className="flex items-center gap-2 font-semibold text-green-700 mb-1">
                  <FaCheckCircle /> Inclusions
                </div>
                <ul className="list-disc list-inside text-sm text-green-900">
                  {selectedEvent.inclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 flex-1">
                <div className="flex items-center gap-2 font-semibold text-red-700 mb-1">
                  <FaTimesCircle /> Exclusions
                </div>
                <ul className="list-disc list-inside text-sm text-red-900">
                  {selectedEvent.exclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Reviews */}
            <div className="mb-4 bg-blue-50 rounded-lg p-3">
              <div className="flex items-center gap-2 font-semibold text-blue-700 mb-1">
                <FaStar className="text-yellow-400" /> Reviews
              </div>
              {selectedEvent.reviews.map((review, i) => (
                <div key={i} className="mb-2 flex items-center gap-2">
                  <span className="font-bold text-blue-900">
                    {review.name}:
                  </span>
                  <span className="flex">
                    {[...Array(review.rating)].map((_, idx) => (
                      <FaStar key={idx} className="text-yellow-400" size={14} />
                    ))}
                  </span>
                  <span className="ml-2 text-gray-600">{review.text}</span>
                </div>
              ))}
            </div>
            {/* Itinerary */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
                <FaListUl /> Itinerary
              </div>
              <ul className="list-decimal list-inside text-sm text-gray-800">
                {selectedEvent.itinerary.map((item, i) => (
                  <li key={i} className="mb-1">
                    <span className="font-bold text-blue-900">
                      Day {item.day}: {item.title}
                    </span>{" "}
                    - {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
                <a
                  href={selectedEvent.gform}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-md font-medium px-3 py-1 rounded-xl shadow inline-block text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Yourself
                </a>
              </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingAdventures;
