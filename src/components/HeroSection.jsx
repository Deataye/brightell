import React, { useMemo } from 'react';

function App() {
  // Stable random stars using useMemo
  const stars = useMemo(() =>
    [...Array(50)].map(() => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 8 + 3
    })), []
  );

  // IT service related orbit icons with different paths and colors
  const orbitIcons = [
    { 
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z', 
      color: 'bg-purple-500',
      title: 'Cloud Computing'
    },
    { 
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', 
      color: 'bg-green-500',
      title: 'Mobile Solutions'
    },
    { 
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', 
      color: 'bg-red-500',
      title: 'Security'
    },
    { 
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', 
      color: 'bg-yellow-500',
      title: 'DevOps'
    },
    { 
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z', 
      color: 'bg-indigo-500',
      title: 'Data Analytics'
    },
    { 
      icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', 
      color: 'bg-pink-500',
      title: 'AI/ML'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center overflow-hidden relative">
      {/* Enhanced stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${star.width}px`,
              height: `${star.height}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Section */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            <span className="text-orange-400">IT SERVICES</span> & 
            <span className="text-blue-300"> DIGITAL TRANSFORMATION</span>
          </h2>
          <h3 className="text-xl font-medium text-blue-200 mb-6">
            Comprehensive Technology Solutions for Your Business
          </h3>
          <p className="text-base text-blue-100 mb-8 leading-relaxed">
            Brightel LLC delivers cutting-edge IT services that drive innovation and efficiency. 
            From cloud migration to AI implementation, our expert team provides end-to-end solutions 
            tailored to your unique business needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition-all duration-300 font-medium hover:scale-105">
              Explore Services
            </button>
            <button className="px-8 py-3 border-2 border-blue-400 hover:bg-blue-900/30 text-blue-100 rounded-lg transition-all duration-300 font-medium hover:scale-105">
              Case Studies
            </button>
          </div>
        </div>

        {/* Right Section - Enhanced Orbiting System */}
        <div className="relative h-[500px] w-[500px] mx-auto">
          {/* Central Planet with gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-2xl flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Orbiting Icons with tooltips */}
          {orbitIcons.map((item, index) => (
            <div
              key={index}
              className={`absolute w-14 h-14 ${item.color} rounded-full flex flex-col items-center justify-center shadow-xl animate-orbit group`}
              style={{
                animationDuration: `${8 + index}s`,
                animationDelay: `${index * 0.5}s`,
                top: '50%',
                left: '50%',
                transform: `rotate(${index * 60}deg) translateX(180px) rotate(-${index * 60}deg)`
              }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium whitespace-nowrap">
                {item.title}
              </span>
            </div>
          ))}

          {/* Inner orbit ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-400/30 rounded-full w-64 h-64"></div>
          {/* Outer orbit ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-400/20 rounded-full w-[400px] h-[400px]"></div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit linear infinite;
          transform-origin: center;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default App;