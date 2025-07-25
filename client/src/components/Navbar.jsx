import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#001220] w-full h-16 flex justify-start text-xl font-semibold top-0 px-4 sm:px-6 lg:px-10 fixed z-50">
      <div className="flex items-center justify-between h-16 w-full">
        <div className="flex items-center gap-1 justify-start">
          <img
            src="/logo.png"
            alt="Suhane Safar Logo"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-[90px] lg:w-[90px] text-primary object-contain"
          />
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
            Suhane Safar
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-10 items-center justify-around">
          <a href="#community-trips" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base">
            Community Trips
          </a>
          <a href="#community-treks" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base">
            Community Treks
          </a>
          <a href="#amenities" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base">
            Amenities
          </a>
          <a href="#why-choose-us" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base">
            Why Choose Us
          </a>
          <a href="#reviews" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base">
            Reviews
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 text-white hover:text-yellow-400 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-16 left-0 w-full bg-[#001220] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          <a 
            href="#community-trips" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            Community Trips
          </a>
          <a 
            href="#community-treks" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            Community Treks
          </a>
          <a 
            href="#amenities" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            Amenities
          </a>
          <a 
            href="#why-choose-us" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            Why Choose Us
          </a>
          <a 
            href="#reviews" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            Reviews
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
