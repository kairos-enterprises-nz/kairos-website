import React, { useState } from 'react';
import Orb from './Orb';

const OrbBackground = ({ isContactOpen }) => {
  const [isOrbHovered, setIsOrbHovered] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Single centered orb - responsive sizing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]"
            onMouseEnter={() => setIsOrbHovered(true)}
            onMouseLeave={() => setIsOrbHovered(false)}
          >
            <Orb
              hoverIntensity={isContactOpen ? 1.2 : (isOrbHovered ? 0.8 : 0.3)}
              rotateOnHover={true}
              hue={isContactOpen ? 180 : (isOrbHovered ? 220 : 240)}
              forceHoverState={isContactOpen || isOrbHovered}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbBackground; 