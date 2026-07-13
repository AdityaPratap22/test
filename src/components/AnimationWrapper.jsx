'use client';

import { motion } from 'framer-motion';

/**
 * AnimationWrapper Component
 * Reusable wrapper for Framer Motion animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type: 'fade-up', 'fade-in', 'slide-left', 'slide-right', 'scale-in'
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {string} props.className - Additional CSS classes
 */
const AnimationWrapper = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const animations = {
    'fade-up': {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    'fade-in': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    'fade-down': {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
    },
    'slide-left': {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
    },
    'slide-right': {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
    },
    'scale-in': {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
    'zoom-in': {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration, 
        delay,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
