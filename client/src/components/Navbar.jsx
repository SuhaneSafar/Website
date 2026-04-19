import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { logoutAdmin } from "../api/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for active session upon mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await logoutAdmin();
    if (error) {
      toast.error('Failed to log out: ' + error);
    } else {
      toast.success('Logged out successfully');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="backdrop-blur-xl bg-gradient-to-br from-slate-900/95 via-sky-900/95 to-slate-900/95 border-b border-white/10 w-full h-20 flex justify-start text-xl font-semibold top-0 px-4 sm:px-6 lg:px-10 fixed z-50 shadow-2xl">
      {/* Enhanced background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-sky-900/60 to-slate-900/60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative flex items-center justify-between h-20 w-full">
        <a href="/" className="flex items-center gap-3 justify-start group transition-all duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-yellow-400 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <img
              src="/logo.png"
              alt="Suhane Safar Logo"
              className="relative h-30 w-30 sm:h-16 sm:w-16 lg:h-16 lg:w-16 object-cover transition-transform duration-300 group-hover:rotate-12"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-sky-100 to-yellow-100 bg-clip-text text-transparent">
              Suhane Safar
            </span>
            <span className="text-sky-200 text-xs sm:text-sm font-medium opacity-80 -mt-1">
              Adventure Awaits
            </span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2 xl:gap-4 items-center justify-around">
          {/* <a href="#community-trips" className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium">
            <span className="relative z-10">Community Trips</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#community-treks" className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium">
            <span className="relative z-10">Community Treks</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a> */}
            <a href="/inter-iit-carnival" className="relative group px-3 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium bg-gradient-to-r from-purple-600/20 to-yellow-500/20 rounded-lg border border-yellow-400/30 hover:border-yellow-400/60">
            <span className="relative z-10 font-semibold">🏆 Inter IIT Carnival</span>
            {/* Enhanced NEW Badge with glow effect */}
            <div className="absolute -top-2 -right-2 z-30">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-xs font-black px-2 py-1 rounded-full shadow-xl border border-white/50 animate-bounce">
                  NEW
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-yellow-500/10 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="/work-from-hills" className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium">
            <span className="relative z-10">Work From Hills</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a>
        
          <a href="/college-ambassador" className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium">
            <span className="relative z-10">College Ambassador</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSez-ccadPhOlmRMgAns9XV9EAH6vyScxgOXpPJIlAGHn04xDg/viewform?usp=header" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium"
          >
            <span className="relative z-10">Feedback</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          
          {user ? (
            <button onClick={handleLogout} className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium flex items-center gap-2">
                <span className="relative z-10">Logout</span>
              <svg className="relative z-10 w-5 h-5 text-red-500/80 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-full transition-all duration-300"></div>
            </button>
          ) : (
            <a href="/admin/login" className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium flex items-center gap-2">
              <span className="relative z-10">Admin Login</span>
              <span className="relative z-10 text-lg">🔒</span>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-full transition-all duration-300"></div>
            </a>
          )}
          {/* <a href="#amenities" className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium">
            <span className="relative z-10">Amenities</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a> */}
          {/* <a href="#reviews" className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium">
            <span className="relative z-10">Reviews</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a> */}
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden relative group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Toggle mobile menu"
        >
          <div className="flex flex-col justify-center items-center w-6 h-6 text-white">
            <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'} rounded-full`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} rounded-full`}></span>
            <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'} rounded-full`}></span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Enhanced Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-20 left-0 w-full backdrop-blur-xl bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95 border-t border-white/10 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        
        <nav className="relative flex flex-col items-center py-6 space-y-2">
          <a 
            href="#community-trips" 
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Community Trips</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
          <a 
            href="#community-treks" 
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Community Treks</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
          <a 
            href="/work-from-hills" 
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Work From Hills</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
          <a 
            href="/inter-iit-carnival" 
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium bg-gradient-to-r from-purple-600/20 to-yellow-500/20 rounded-xl border border-yellow-400/40 hover:border-yellow-400/70"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10 font-semibold">🏆 Inter IIT Carnival</span>
            {/* Enhanced NEW Badge for Mobile */}
            <div className="absolute -top-3 -right-3 z-30">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-xl border border-white/50 animate-bounce">
                  NEW
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-yellow-500/10 backdrop-blur-sm rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
          <a 
            href="/college-ambassador" 
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">College Ambassador</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
          <a 
            href="#amenities" 
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Amenities</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
          <a 
            href="#reviews" 
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Reviews</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
           <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSez-ccadPhOlmRMgAns9XV9EAH6vyScxgOXpPJIlAGHn04xDg/viewform?usp=header" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Feedback</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
          </a>
          
          {user ? (
            <button 
              onClick={() => { handleLogout(); closeMobileMenu(); }} 
              className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium flex items-center justify-center gap-2"
            >
                <span className="relative z-10">Logout</span>
              <svg className="relative z-10 w-5 h-5 text-red-500/80 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-16 transition-all duration-300"></div>
            </button>
          ) : (
            <a 
              href="/admin/login" 
              className="relative group w-full max-w-xs text-center py-3 px-6 text-white/90 hover:text-white transition-all duration-300 text-lg font-medium flex items-center justify-center gap-2"
              onClick={closeMobileMenu}
            >
              <span className="relative z-10">Admin Login</span>
              <span className="relative z-10">🔒</span>
              <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-16 transition-all duration-300"></div>
            </a>
          )}
          
          {/* Decorative element */}
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </nav>
      </div>
      
    </header>
  );
};

export default Navbar;
