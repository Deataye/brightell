import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-blue-400 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.2,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Section */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            <span className="text-orange-400">STRATEGIC CONSULTING</span> | 
            <span className="text-white">&nbsp;& ENTERPRISE SERVICES</span>
          </h2>
          <h3 className="text-xl font-medium text-blue-200 mb-4">
            Your Partner in Growth, Compliance, and Innovation
          </h3>
          <p className="text-base text-blue-100 mb-6 leading-relaxed">
            At Brightel LLC, we specialize in helping organizations thrive through strategic transformation and innovation. 
            Whether it’s implementing dependable IT solutions, streamlining operations, or navigating regulatory compliance, 
            our services are designed to move businesses forward—efficiently and confidently.
          </p>
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md transition-all duration-300 font-medium">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-blue-400 hover:bg-blue-900/30 text-blue-100 rounded-lg transition-all duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Orbiting Icons */}
        <div className="relative h-96 w-96 mx-auto">
          {/* Central Planet */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-20"></div>
              <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl flex items-center justify-center">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Orbiting Icons */}
          {[
            { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', color: 'bg-blue-400', size: 'w-12 h-12' },
            { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', color: 'bg-blue-500', size: 'w-12 h-12' },
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'bg-blue-600', size: 'w-12 h-12' },
            { icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z', color: 'bg-blue-300', size: 'w-12 h-12' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`absolute ${item.size} ${item.color} rounded-full flex items-center justify-center shadow-lg animate-orbit`}
              style={{
                animationDuration: `${5 + index * 2}s`,
                top: '50%',
                left: '50%',
                transform: `rotate(${index * 90}deg) translateX(160px) rotate(-${index * 90}deg)`
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(160px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}

export default App;
