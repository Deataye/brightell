import React from 'react';

const TechnologyPlatforms = () => {
  const platforms = [
    "/assets/techno-logo10.png",
    "/assets/techno-logo9.png",
    "/assets/techno-logo8.png",
    "/assets/techno-logo7.png",
    "/assets/techno-logo6.png",
    "/assets/techno-logo5.png",
    "/assets/techno-logo4.png",
    "/assets/techno-logo3.png",
    "/assets/techno-logo2.png",
    "/assets/techno-logo1.png",
    "/assets/power_section.png",
    "/assets/fabric.png",
    "/assets/dynamics.png",
    "/assets/azure.png",
   
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Technology Platforms
        </h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          {platforms.map((icon, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={icon} 
                alt="" 
                className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPlatforms;