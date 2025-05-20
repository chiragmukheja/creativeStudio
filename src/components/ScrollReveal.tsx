import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  threshold = 0.1,
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const getInitialY = () => {
    switch (direction) {
      case 'up': return distance;
      case 'down': return -distance;
      default: return 0;
    }
  };

  const getInitialX = () => {
    switch (direction) {
      case 'left': return distance;
      case 'right': return -distance;
      default: return 0;
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: getInitialY(),
      x: getInitialX(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;