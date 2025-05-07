import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/about_right.png"
            alt="Team working"
            className="w-full h-auto max-h-80 object-contain rounded-lg"
          />
        </div>

        {/* Right: About Us Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Driving Smart Growth Through Technology, Compliance & Strategy
          </h2>
          <p className="text-gray-700 mb-4">
            Brightel LLC is a women-owned small business committed to enabling sustainable growth for organizations through tailored, forward-thinking solutions in technology, compliance, legal support, and strategic consulting. Our mission is to help clients—from startups to government agencies—modernize infrastructure, navigate regulatory complexity, and build resilient, high-performing teams.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Scalable, Flexible Solutions Aligned with Budget and Growth Goals</li>
            <li>Expertise Spanning Tech Modernization, Legal Support & Strategic Planning</li>
            <li>Inclusive, Women-Led Leadership Focused on Equity and Impact</li>
          </ul>

          {/* Stats section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-500">75+</div>
              <div className="text-sm text-gray-700">Projects Completed</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-500">97%</div>
              <div className="text-sm text-gray-700">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;