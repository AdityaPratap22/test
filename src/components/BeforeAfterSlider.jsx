'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * BeforeAfterSlider Component
 * Interactive slider to compare before/after images
 * 
 * @param {Object} props
 * @param {string} props.beforeImage - Path to before image
 * @param {string} props.afterImage - Path to after image
 * @param {string} props.title - Slider title
 * @param {number} props.initialPosition - Initial slider position (0-100)
 */
const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  title,
  initialPosition = 50 
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging && e.type !== 'click') return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    
    // Get x position based on event type
    let x;
    if (e.type.includes('touch') && e.touches && e.touches[0]) {
      x = e.touches[0].clientX - rect.left;
    } else if (e.clientX !== undefined) {
      x = e.clientX - rect.left;
    } else {
      return; // Invalid event, exit early
    }
    
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative w-full">
      {title && (
        <h3 className="heading-md text-center mb-6">{title}</h3>
      )}
      
      <div
        className="relative w-full aspect-[16/10] overflow-hidden rounded-sm cursor-col-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onClick={handleMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Full Width) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          {/* After Label */}
          <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-sm text-sm font-medium">
            After
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <motion.div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          transition={{ duration: 0 }}
        >
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          {/* Before Label */}
          <div className="absolute top-4 left-4 bg-dark text-white px-4 py-2 rounded-sm text-sm font-medium">
            Before
          </div>
        </motion.div>

        {/* Slider Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
          transition={{ duration: 0 }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-0.5 h-6 bg-accent rounded-full" />
              <div className="w-0.5 h-6 bg-accent rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Instructions */}
      <p className="text-center text-sm text-text/70 mt-4">
        Drag the slider to compare before and after
      </p>
    </div>
  );
};

export default BeforeAfterSlider;
