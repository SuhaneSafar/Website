import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviewCards from "../utils/reviewCards";

const CARDS_TO_SHOW = 3;

const Reviews = () => {
  const [start, setStart] = useState(0);

  const handlePrev = () => {
    setStart((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStart((prev) => Math.min(prev + 1, reviewCards.length - CARDS_TO_SHOW));
  };

  const visibleReviews = reviewCards.slice(start, start + CARDS_TO_SHOW);

  return (
    <div className="py-22 px-2 sm:px-4 md:px-16" id="reviews">
      <h2 className="text-2xl font-bold mb-10">Reviews</h2>
      <div className="flex flex-col items-center">
        <div className="flex gap-12 justify-center mb-6 flex-wrap">
          {visibleReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 w-96 flex flex-col border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${review.color}`}
                >
                  {review.initial}
                </div>
                <div>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={18} />
                    ))}
                  </div>
                  <div className="font-semibold text-gray-800 text-lg">
                    {review.name}
                  </div>
                </div>
              </div>

              <div className="text-gray-700 text-base mb-4">{review.text}</div>

              <div className="flex items-center  gap-3 mb-4">
                <img
                  src={review.tripImage}
                  alt={review.trip}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
                <span className="text-sm font-semibold text-blue-700">
                  {review.trip}
                </span>
              </div>

              {/* Spacer pushes button to bottom */}
              <div className="mt-auto">
                <a
                  href={review.link}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-md font-medium px-3 py-1 rounded-xl shadow inline-block text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Yourself
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-2">
          <button
            onClick={handlePrev}
            disabled={start === 0}
            className={`p-3 rounded-full bg-blue-100 hover:bg-blue-300 transition-colors ${
              start === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronLeft size={28} className="text-blue-600" />
          </button>
          <button
            onClick={handleNext}
            disabled={start >= reviewCards.length - CARDS_TO_SHOW}
            className={`p-3 rounded-full bg-blue-100 hover:bg-blue-300 transition-colors ${
              start >= reviewCards.length - CARDS_TO_SHOW
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <FaChevronRight size={28} className="text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
