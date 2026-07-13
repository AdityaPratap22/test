'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

/**
 * ServiceCard Component
 * Reusable card for displaying service offerings
 * 
 * @param {Object} props
 * @param {string} props.title - Service title
 * @param {string} props.description - Brief description
 * @param {string} props.image - Image path
 * @param {string} props.link - Link to service details
 * @param {number} props.delay - Animation delay
 * @param {string} props.className - Additional CSS classes
 */
const ServiceCard = ({ 
  title, 
  description, 
  image, 
  link,
  delay = 0,
  className = '' 
}) => {
  return (
    <AnimationWrapper animation="fade-up" delay={delay}>
      <div className={`group relative overflow-hidden bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 ${className}`}>
        {/* Image Container */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-heading text-2xl md:text-3xl mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-white/90 mb-4 line-clamp-2">
            {description}
          </p>
          
          {link && (
            <Link 
              href={link}
              className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
            >
              Explore
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors pointer-events-none" />
      </div>
    </AnimationWrapper>
  );
};

export default ServiceCard;
