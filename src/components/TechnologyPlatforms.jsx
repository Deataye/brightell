import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaBuilding } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TechnologyPlatforms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.fade-up');
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-8 px-6">
      <div className="max-w-[1152px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 fade-up">
          Choose Your Service Track
        </h2>

        <div className="grid md:grid-cols-2 gap-10 fade-up">
          {/* Private Business Services */}
          <div className="bg-[#192335] text-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-left">
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-white text-xl mb-1" />
              <h3 className="ml-3 text-xl font-bold">Private Business</h3>
            </div>
            <h4 className="text-white font-semibold mb-2">End-to-End Business Enablement</h4>
            <p className="text-white/90 mb-4">
              We help small to mid-size businesses modernize, stay compliant, and scale using smart tech, automation, legal support, and workforce development.
            </p>
            <a
              href="/private-services"
              className="inline-block border border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#192335] transition"
            >
              Explore Business Services
            </a>
          </div>

          {/* Government Contracting Services */}
          <div className="bg-[#192335] text-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-left">
            <div className="flex items-center mb-4">
              <FaBuilding className="text-white text-xl mb-1" />
              <h3 className="ml-3 text-xl font-bold">Government Contracting</h3>
            </div>
            <h4 className="text-white font-semibold mb-2">Compliant, Scalable Solutions</h4>
            <p className="text-white/90 mb-4">
              Brightel supports federal, state, and local agencies with certified capability statements, digitization, security, and training support.
            </p>
            <a
              href="/government-services"
              className="inline-block border border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#192335] transition"
            >
              View Gov Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatforms;
