import React from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { setCursorType } = useCursor();

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0,
      y: 20 
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div 
            className="absolute top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-xl flex flex-col overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex justify-end p-4">
              <button 
                onClick={onClose}
                className="text-gray-800 hover:text-primary-600 transition-colors duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col px-8 pt-8 pb-16 space-y-8 flex-1">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) => 
                      `text-2xl font-medium uppercase ${isActive ? 'text-primary-600' : 'text-gray-800'} hover:text-primary-600 transition-colors duration-300`
                    }
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            
            <motion.div variants={itemVariants} className="px-8 pb-12">
              <p className="text-sm text-gray-500">© 2025 Creative Studio. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;