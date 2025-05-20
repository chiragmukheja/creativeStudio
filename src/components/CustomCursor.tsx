import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorType } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  // Check if we're on a touch device
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    setIsVisible(!isTouchDevice());
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          backgroundColor: cursorType === 'hover' ? 'white' : 'transparent',
          border: cursorType === 'default' ? '1px solid white' : 'none',
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: cursorType === 'hover' ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 300,
          damping: 20,
          ease: 'linear',
        }}
      />
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorType === 'hover' ? 0 : 1,
        }}
        transition={{
          ease: 'linear',
          duration: 0.15,
        }}
      />
    </>
  );
};

export default CustomCursor;