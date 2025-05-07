import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    description: 'Customized training, LMS setup, and employee development programs. Empower your team with skills to grow and adapt in today’s market.',
  },
  {
    icon: "/assets/turnkey.png",
    title: 'Turnkey Business Launchpad',
    description: 'End-to-end startup services from strategy to tech and legal setup. Made for entrepreneurs ready to launch with confidence.',
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

  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Text entry animations
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 90%',
      },
    });

    gsap.from(subheadingRef.current, {
      y: 20,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: subheadingRef.current,
        start: 'top 90%',
      },
    });

    // Nav arrow hover animation
    const animateHover = (el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, { scale: 1.2, duration: 0.3, ease: 'power2.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    };

    if (leftBtnRef.current && rightBtnRef.current) {
      animateHover(leftBtnRef.current);
      animateHover(rightBtnRef.current);
    }

    // Card entry animations
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode,
          start: 'top 80%',
        },
      }
    );

    return () => {
      if (leftBtnRef.current && rightBtnRef.current) {
        leftBtnRef.current.removeEventListener('mouseenter', null);
        rightBtnRef.current.removeEventListener('mouseenter', null);
      }
    };
  }, [startIndex, cardsPerView]);

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

  useEffect(() => {
    if (startIndex > services.length - cardsPerView) {
      setStartIndex(0);
    }
  }, [cardsPerView]);

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
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 font-display"
          >
            Empowering Business Success Through Integrated Services
          </h2>
          <p
            ref={subheadingRef}
            className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-sans"
          >
            From IT infrastructure to legal compliance and talent development, we help organizations thrive in a rapidly changing world.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden" role="region" aria-roledescription="carousel">
          {/* Navigation Buttons */}
          <button
            ref={leftBtnRef}
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 text-blue-700 p-2 bg-white/80 rounded-full shadow-md"
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>
          <button
            ref={rightBtnRef}
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 text-blue-700 p-2 bg-white/80 rounded-full shadow-md"
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(0%)` }}
            >
              {services.slice(startIndex, startIndex + cardsPerView).map((service, index) => (
                <div
                  key={index}
                  className="p-4"
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transform transition duration-300 hover:scale-[1.03] h-full"
                  >
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

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides / 2 }).map((_, index) => (
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
