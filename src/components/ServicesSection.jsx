import React, { useState, useEffect } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const services = [
  {
    icon: "/assets/image11.png",
    title: 'Business Transformation',
    description: 'Strategic consulting, and data solutions to modernize operations. Ideal for organizations driving innovation and digital transformation.',
  },
  {
    icon: "/assets/smarttech.png",
    title: 'Smart Tech & IT Services',
    description: 'Reliable tech support and scalable infrastructure to power your business. Perfect for growing teams needing dependable IT solutions.',
  },
  {
    icon: "/assets/digitaloperation.png",
    title: 'Digital Operations Hub',
    description: 'Securely digitize, store, and manage documents for better efficiency. Designed for firms looking to streamline records and compliance.',
  },
  {
    icon: "/assets/ChatGPT-Image-Apr-25-2025-02_00_37-AM.png",
    title: 'Legal & Financial Compliance Hub',
    description: 'Legal, tax, and bookkeeping services to keep your business compliant. Support for startups and small businesses with complex needs.',
  },
  {
    icon: "/assets/workforce.png",
    title: 'Workforce & Talent Growth Platform',
    description: 'Customized training, LMS setup, and employee development programs. Empower your team with skills to grow and adapt in today\'s market.',
  },
  {
    icon: "/assets/turnkey.png",
    title: 'Turnkey Business Launchpad',
    description: 'End-to-end startup services from strategy to tech and legal advice. Made for entrepreneurs ready to launch with confidence.',
  },
  {
    icon: "/assets/document.png",
    title: 'Document Digitization',
    description: 'Convert paper files into searchable, organized digital formats. Secure cloud storage and easy access for modern workflows.',
  },
  {
    icon: "/assets/web.png",
    title: 'Website Design, Build & Maintenance',
    description: 'Custom websites with full support, from design to performance. Ideal for brands needing a modern, mobile-friendly presence.',
  },
];

const ServicesSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view based on screen width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Clamp index on resize
  useEffect(() => {
    if (startIndex > services.length - cardsPerView) {
      setStartIndex(0);
    }
  }, [cardsPerView]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (startIndex < services.length - cardsPerView) {
        setStartIndex((prev) => prev + 1);
      } else {
        setStartIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [cardsPerView, startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev > 0 ? prev - 1 : services.length - cardsPerView
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev < services.length - cardsPerView ? prev + 1 : 0
    );
  };

  const totalSlides = services.length - cardsPerView + 1;

  return (
    <div className="bg-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-2 font-sans">
            Our Services
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 font-display">
            Empowering Business Success Through Integrated Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-sans">
            From IT infrastructure to legal compliance and talent development, we help organizations thrive in a rapidly changing world.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden" role="region" aria-roledescription="carousel">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 text-blue-700 p-2 hover:text-blue-800 bg-white/80 rounded-full shadow-md"
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 text-blue-700 p-2 hover:text-blue-800 bg-white/80 rounded-full shadow-md"
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Wrapper */}
          {/* Cards Wrapper */}
<div className="overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(0%)`, // No transform needed when slicing data
    }}
  >
    {services.slice(startIndex, startIndex + cardsPerView).map((service, index) => (
      <div
        key={index}
        className="p-4"
        style={{ flex: `0 0 ${100 / cardsPerView}%` }}
      >
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300 h-full">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 object-contain"
            />
            <h3 className="text-lg font-bold text-blue-900 font-sans">
              {service.title}
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-sans">
            {service.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Screen reader description */}
          <div aria-live="polite" className="sr-only">
            Showing services {startIndex + 1} to{'totalSlides/2 '}
            {Math.min(startIndex + cardsPerView, services.length)}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides/2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === startIndex ? 'w-6 bg-blue-700' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;