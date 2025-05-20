import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface NavBarProps {
  toggleMobileMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-xl md:text-2xl font-bold tracking-tighter"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            <span className="text-primary-600">CREATIVE</span>
            <span className="text-gray-800">.STUDIO</span>
          </NavLink>
          
          <nav className="hidden md:flex space-x-8">
            {['/', '/projects', '/about', '/contact'].map((path, index) => {
              const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2);
              return (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) => 
                    `text-sm font-medium uppercase tracking-wider transition-colors relative ${
                      isActive ? 'text-primary-600' : scrolled ? 'text-gray-800 hover:text-primary-600' : 'text-gray-800 hover:text-primary-600'
                    } pb-1 cursor-none`
                  }
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                          layoutId="navbar-underline"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
          
          <button 
            className="md:hidden text-gray-800"
            onClick={toggleMobileMenu}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;