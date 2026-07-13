'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * TestimonialCarousel Component
 * Elegant carousel for client testimonials
 * 
 * @param {Object} props
 * @param {Array} props.testimonials - Array of testimonial objects
 * @param {boolean} props.autoPlay - Enable auto-play
 * @param {number} props.interval - Auto-play interval in ms
 */
const TestimonialCarousel = ({ 
  testimonials = [],
  autoPlay = true,
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Testimonial Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          {/* Rating Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5 fill-accent text-accent" 
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="quote mb-8 px-4 md:px-12">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Client Info */}
          <div className="space-y-2">
            <p className="font-heading text-xl text-heading">
              {currentTestimonial.name}
            </p>
            <p className="text-sm text-text/70">
              {currentTestimonial.project}
            </p>
            <p className="text-sm text-accent">
              {currentTestimonial.location}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {testimonials.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-accent w-8' 
                    : 'bg-border hover:bg-accent/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialCarousel;
