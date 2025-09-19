import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, X } from 'lucide-react';
import logo from '../assets/kairosenterprises-logo.png';

const LogoCenter = ({ onContactToggle }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    const newState = !isContactOpen;
    setIsContactOpen(newState);
    onContactToggle?.(newState);
  };

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block relative z-10 h-full w-full">
        {/* Logo centered in orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="Kairos Enterprises Logo"
              className="w-full max-w-[300px] h-auto"
            />
          </motion.div>
        </div>
        
        {/* Contact Button positioned below logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative top-40">
            <div className="relative z-50 min-h-[60px] flex items-start justify-center">
              <div className="relative">
                {/* Contact Button with subtle colors */}
                <motion.button
                  onClick={handleContactClick}
                  className="group relative bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-blue-500/20 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:from-blue-800/50 hover:via-purple-800/50 hover:to-blue-800/50 hover:border-blue-400/30 focus:outline-none focus:ring-1 focus:ring-blue-500/50 shadow-lg shadow-blue-900/20"
                  aria-label="Contact Us"
                  animate={{ 
                    opacity: isContactOpen ? 0 : 1,
                    scale: isContactOpen ? 0.95 : 1,
                    pointerEvents: isContactOpen ? "none" : "auto"
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    Contact
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details - Icons under the logo with vertical spacing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative top-40 flex items-center space-x-6 z-50"
            animate={{ 
              opacity: isContactOpen ? 1 : 0,
              pointerEvents: isContactOpen ? "auto" : "none"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Email Icon */}
            <motion.a 
              href="mailto:office@kairosenterprises.co.nz" 
              className="group flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 relative z-50 cursor-pointer"
              animate={{ 
                opacity: isContactOpen ? 1 : 0,
                y: isContactOpen ? 0 : 10,
                pointerEvents: isContactOpen ? "auto" : "none"
              }}
              transition={{ duration: 0.25, delay: isContactOpen ? 0.1 : 0 }}
            >
              <Mail size={20} className="text-blue-400" />
            </motion.a>

            {/* Phone Icon */}
            <motion.a 
              href="tel:+642108736242" 
              className="group flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-all duration-300 hover:scale-110 relative z-50 cursor-pointer"
              animate={{ 
                opacity: isContactOpen ? 1 : 0,
                y: isContactOpen ? 0 : 10,
                pointerEvents: isContactOpen ? "auto" : "none"
              }}
              transition={{ duration: 0.25, delay: isContactOpen ? 0.15 : 0 }}
            >
              <Phone size={20} className="text-green-400" />
            </motion.a>

            {/* Close Button */}
            <motion.button
              onClick={handleContactClick}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-full transition-all duration-300 hover:scale-110 relative z-50 cursor-pointer"
              aria-label="Close contact details"
              animate={{ 
                opacity: isContactOpen ? 1 : 0,
                y: isContactOpen ? 0 : 10,
                pointerEvents: isContactOpen ? "auto" : "none"
              }}
              transition={{ duration: 0.25, delay: isContactOpen ? 0.2 : 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 h-full w-full">
        {/* Logo centered in orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="Kairos Enterprises Logo"
              className="w-full max-w-[180px] h-auto"
            />
          </motion.div>
        </div>
        
        {/* Contact Button positioned below orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative top-60">
            <div className="relative z-50 min-h-[60px] flex items-start justify-center">
              <div className="relative">
                {/* Contact Button with subtle colors */}
                <motion.button
                  onClick={handleContactClick}
                  className="group relative bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-blue-500/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:from-blue-800/50 hover:via-purple-800/50 hover:to-blue-800/50 hover:border-blue-400/30 focus:outline-none focus:ring-1 focus:ring-blue-500/50 min-h-[48px] shadow-lg shadow-blue-900/20"
                  aria-label="Contact Us"
                  animate={{ 
                    opacity: isContactOpen ? 0 : 1,
                    scale: isContactOpen ? 0.95 : 1,
                    pointerEvents: isContactOpen ? "none" : "auto"
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    Contact
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details - Icons brought up with bottom space */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative top-60 flex items-center space-x-8 z-50"
            animate={{ 
              opacity: isContactOpen ? 1 : 0,
              pointerEvents: isContactOpen ? "auto" : "none"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Email Icon */}
            <motion.a 
              href="mailto:office@kairosenterprises.co.nz" 
              className="group flex flex-col items-center space-y-2 relative z-50 cursor-pointer"
              animate={{ 
                opacity: isContactOpen ? 1 : 0,
                y: isContactOpen ? 0 : 10,
                pointerEvents: isContactOpen ? "auto" : "none"
              }}
              transition={{ duration: 0.25, delay: isContactOpen ? 0.1 : 0 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-all duration-300 active:scale-95">
                <Mail size={24} className="text-blue-400" />
              </div>
              <span className="text-xs text-white/80 text-center leading-tight">Email</span>
            </motion.a>

            {/* Phone Icon */}
            <motion.a 
              href="tel:+642108736242" 
              className="group flex flex-col items-center space-y-2 relative z-50 cursor-pointer"
              animate={{ 
                opacity: isContactOpen ? 1 : 0,
                y: isContactOpen ? 0 : 10,
                pointerEvents: isContactOpen ? "auto" : "none"
              }}
              transition={{ duration: 0.25, delay: isContactOpen ? 0.15 : 0 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-all duration-300 active:scale-95">
                <Phone size={24} className="text-green-400" />
              </div>
              <span className="text-xs text-white/80 text-center leading-tight">Call</span>
            </motion.a>

            {/* Close Button */}
            <motion.button
              onClick={handleContactClick}
              className="flex flex-col items-center space-y-2 relative z-50 cursor-pointer"
              aria-label="Close contact details"
              animate={{ 
                opacity: isContactOpen ? 1 : 0,
                y: isContactOpen ? 0 : 10,
                pointerEvents: isContactOpen ? "auto" : "none"
              }}
              transition={{ duration: 0.25, delay: isContactOpen ? 0.2 : 0 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex items-center justify-center w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-full transition-all duration-300 active:scale-95">
                <X size={20} />
              </div>
              <span className="text-xs text-white/80 text-center leading-tight">Close</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LogoCenter; 