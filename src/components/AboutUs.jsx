import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFEFF]">
      {/* Attractive separator with gradient */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400"></div>
      
      <div className="flex items-center justify-center p-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
          {/* Left: Image */}
          <div className="flex items-center justify-center">
          <img
  src="/assets/Screenshot 2025-05-07 163428.png"
  alt="Team working"
  className="w-full h-auto max-h-[400px] object-contain"
/>
          </div>

          {/* Right: About Us Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Driving Smart Growth Through Technology, Compliance & Strategy
            </h2>
            <p className="text-gray-700">
              Brightel LLC is a women-owned small business committed to enabling sustainable growth for organizations through tailored, forward-thinking solutions in technology, compliance, legal support, and strategic consulting.
            </p>
            
            <ul className="space-y-3">
              {[
                "Scalable, Flexible Solutions Aligned with Budget and Growth Goals",
                "Expertise Spanning Tech Modernization, Legal Support & Strategic Planning",
                "Inclusive, Women-Led Leadership Focused on Equity and Impact"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats section */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-orange-500">75+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-blue-500">97%</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;