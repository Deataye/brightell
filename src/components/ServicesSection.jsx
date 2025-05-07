import React from 'react';
import iconTransform from '/assets/logo.png';
import iconTech from '/assets/logo-1.png';

const ServicesSection = () => {
  const services = [
    {
      icon: iconTransform,
      title: 'Business Transformation',
      description:
        'Strategic consulting, and data solutions to modernize operations. Ideal for organizations driving innovation and digital transformation.',
    },
    {
      icon: iconTech,
      title: 'Smart Tech & IT Services',
      description:
        'Reliable tech support and scalable infrastructure to power your business. Perfect for growing teams needing dependable IT solutions.',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-2">Our Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Empowering Business Success Through Integrated Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            From IT infrastructure to legal compliance and talent development, we help organizations thrive in a rapidly changing world.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={service.icon} alt="" className="w-14 h-14 object-contain" />
                <h3 className="text-lg font-bold text-blue-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
