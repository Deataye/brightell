import React, { useEffect, useState } from 'react';

const MovingIcons = () => {
  const icons = [
    { img: '/assets/logo.png', bg: 'bg-blue-100' },
    { img: '/assets/logo-1.png', bg: 'bg-orange-100' },
    { img: '/assets/fabric.png', bg: 'bg-blue-100' },
    { img: '/assets/dynamics.png', bg: 'bg-orange-100' },
    { img: '/assets/logo.png', bg: 'bg-blue-100' },
    { img: '/assets/logo-1.png', bg: 'bg-orange-100' },
    { img: '/assets/fabric.png', bg: 'bg-blue-100' },
    { img: '/assets/dynamics.png', bg: 'bg-orange-100' }
  ];

  const doubledIcons = [...icons, ...icons];
  const [offset, setOffset] = useState(0);
  const containerWidth = 180 * doubledIcons.length;

  useEffect(() => {
    let animationId;
    const speed = 50;

    const animate = () => {
      setOffset(prevOffset => (prevOffset + speed / 60) % containerWidth);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [containerWidth]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted Partners
        </h3>

        <div className="relative h-40">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="flex absolute left-0"
              style={{
                transform: `translateX(-${offset}px)`,
                width: `${containerWidth}px`
              }}
            >
              {doubledIcons.map((icon, index) => (
                <div
                  key={`icon-${index}`}
                  className={`flex items-center justify-center p-6 rounded-xl shadow-sm ${icon.bg} mx-4 min-w-[180px] h-full`}
                >
                  <img
                    src={icon.img}
                    alt={`partner-${index}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default MovingIcons;
