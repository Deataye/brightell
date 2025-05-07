import React from 'react';

const OurTeam = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Leadership</h2>
          <p className="mt-2 text-lg text-gray-600">The talented people behind our success</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-white-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Animated left border that expands on hover */}
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 ease-out"></div>
              
              <div className="relative p-5 z-10">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium group-hover:text-blue-300 transition-colors duration-200">
                    {member.position}
                  </p>
                  <div className="w-12 h-0.5 bg-gray-200 my-2 group-hover:bg-blue-400 transition-colors duration-300"></div>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Ava Thompson",
    position: "Chief Executive Officer",
    bio: "With a decade of leadership in digital strategy, Ava drives innovation and growth across global teams."
  },
  {
    name: "Liam Carter",
    position: "Chief Technology Officer",
    bio: "Liam architects scalable solutions and oversees product development with a focus on emerging tech trends."
  },
  {
    name: "Maya Patel",
    position: "Chief Operating Officer",
    bio: "Maya ensures operational excellence and drives organizational performance through strategic alignment."
  },
  {
    name: "Noah Kim",
    position: "Chief Marketing Officer",
    bio: "Noah brings brand vision to life with creative campaigns and data-driven marketing initiatives."
  },
  {
    name: "Sophia Martinez",
    position: "VP of Product",
    bio: "Sophia leads product innovation and user-centric design, transforming ideas into powerful digital experiences."
  },
  {
    name: "Ethan Rogers",
    position: "VP of Finance",
    bio: "Ethan guides financial planning and analysis, maintaining fiscal responsibility and maximizing ROI."
  }
];

export default OurTeam;
