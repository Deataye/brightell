import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollBorder, setShowScrollBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBorder(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', to: 'hero' },
    { name: 'SERVICES', to: 'services' },
    { name: 'SUCCESS STORIES', to: 'ai-platform' },
    { name: 'ABOUT', to: 'about' },
    { name: 'TEAM', to: 'team' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 font-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-3xl font-extrabold text-[#4338ca] tracking-tight font-heading">Brightel</span>
            <span className="text-sm font-semibold text-slate-500">LLC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-slate-700 relative font-medium transition duration-300 ease-in-out hover:text-[#4338ca] hover:underline underline-offset-8"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#4338ca] hover:bg-gray-100 transition"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} px-6 pt-4 pb-6`}>
        <div className="space-y-2">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block cursor-pointer text-slate-700 hover:text-[#4338ca] px-3 py-2 rounded-md transition font-medium hover:underline underline-offset-4"
            >
              {name}
            </Link>
          ))}

          <a
            href="#"
            className="block text-center mt-4 px-4 py-2 rounded-full bg-[#4338ca] text-white hover:bg-[#3730a3] transition shadow hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Demo
            </div>
          </a>
        </div>
      </div>

      {/* Scroll-triggered gradient border */}
      {showScrollBorder && (
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 transition-all duration-300"></div>
      )}
    </nav>
  );
};

export default Header;
