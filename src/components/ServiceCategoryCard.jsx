'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * ServiceCategoryCard Component
 * Expandable service category with icon and feature list
 */
const ServiceCategoryCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  keywords,
  delay = 0,
  animationDirection = 'fade-up'
}) => {
  const getAnimation = () => {
    switch (animationDirection) {
      case 'fade-left':
        return { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } };
      case 'fade-right':
        return { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } };
      case 'slide-up':
        return { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
      default:
        return { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
    }
  };

  const animation = getAnimation();

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-600 border-l-4 border-transparent hover:border-accent"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors"
      >
        <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
      </motion.div>

      {/* Title */}
      <h3 className="heading-md mb-4 text-text group-hover:text-accent transition-colors">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="body-base text-heading/80 mb-6">
          {description}
        </p>
      )}

      {/* Features List */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + (index * 0.05) }}
            className="flex items-start"
          >
            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 mr-3" />
            <span className="body-sm text-heading/80">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* SEO Keywords (hidden, for SEO) */}
      <div className="sr-only">{keywords}</div>
    </motion.div>
  );
};

export default ServiceCategoryCard;
