import React, { useState } from 'react';
import OrbBackground from './components/OrbBackground';
import LogoCenter from './components/LogoCenter';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <OrbBackground isContactOpen={isContactOpen} />
      <LogoCenter onContactToggle={setIsContactOpen} />
    </div>
  );
}

export default App; 