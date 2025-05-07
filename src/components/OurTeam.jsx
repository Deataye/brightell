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
    name: "Sabeen Saeed",
    position: "President and CEO",
    bio: "Founder with healthcare and IT expertise. Nursing degree from Brookhaven College and Microsoft Certified professional."
  },
  {
    name: "Imad Rehman",
    position: "Executive Vice President",
    bio: "Transforms enterprises with 20+ years experience. Holds degrees from CSU and University of Virginia."
  },
  {
    name: "David E. Morgan",
    position: "VP Public Sector",
    bio: "25+ years in federal business development, specializing in DoD and Homeland Security initiatives."
  },
  {
    name: "Rick Sage",
    position: "Chief Marketing Officer",
    bio: "Former Director at Sonata Services and HPE, developed innovative logistics solutions."
  },
  {
    name: "Chris Hill",
    position: "Chief Technology Officer",
    bio: "Technology solutions expert with 20+ years experience. Specializes in Microsoft stack."
  },
  {
    name: "John R. Ale",
    position: "VP State and Local Government",
    bio: "25+ years in government business development. Georgetown University graduate."
  }
];

export default OurTeam;