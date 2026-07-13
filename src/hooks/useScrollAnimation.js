import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for triggering animations on scroll
 * Uses IntersectionObserver for performance
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export const useScrollAnimation = ({ 
  threshold = 0.1, 
  rootMargin = '0px',
  triggerOnce = true 
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Disconnect observer if animation should only trigger once
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

/**
 * Hook for staggered animations in lists
 * 
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item animation (ms)
 * @returns {Array} Array of visibility states for each item
 */
export const useStaggerAnimation = (itemCount, staggerDelay = 100) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    if (isVisible && visibleItems.length === 0) {
      // Stagger the visibility of items
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, i * staggerDelay);
      }
    }
  }, [isVisible, itemCount, staggerDelay, visibleItems.length]);

  return [ref, visibleItems];
};

/**
 * Hook for parallax scroll effect
 * 
 * @param {number} speed - Parallax speed multiplier
 * @returns {Object} Transform style object
 */
export const useParallax = (speed = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    transform: `translateY(${offsetY * speed}px)`,
  };
};

export default useScrollAnimation;
