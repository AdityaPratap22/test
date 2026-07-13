'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

/**
 * CTASection Component
 * Reusable Call-to-Action section
 * 
 * @param {Object} props
 * @param {string} props.title - CTA title
 * @param {string} props.description - CTA description
 * @param {string} props.primaryText - Primary button text
 * @param {string} props.primaryLink - Primary button link
 * @param {string} props.secondaryText - Secondary button text (optional)
 * @param {string} props.secondaryLink - Secondary button link (optional)
 * @param {string} props.variant - Style variant: 'default', 'dark', 'gradient'
 * @param {string} props.className - Additional CSS classes
 */
const CTASection = ({
  title,
  description,
  primaryText = 'Get Started',
  primaryLink = '/contact',
  secondaryText,
  secondaryLink,
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-background border-2 border-border',
    dark: 'bg-dark text-white',
    gradient: 'bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10',
  };

  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">
        <AnimationWrapper animation="fade-up">
          <div className={`rounded-lg p-12 md:p-16 text-center ${variants[variant]}`}>
            <div className="max-w-3xl mx-auto">
              {/* Title */}
              <h2 className={`heading-xl mb-6 ${variant === 'dark' ? 'text-white' : 'text-heading'}`}>
                {title}
              </h2>

              {/* Description */}
              {description && (
                <p className={`body-lg mb-8 ${variant === 'dark' ? 'text-white/90' : 'text-text/80'}`}>
                  {description}
                </p>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Primary Button */}
                <Link 
                  href={primaryLink}
                  className="btn-primary inline-flex items-center group"
                >
                  {primaryText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Secondary Button */}
                {secondaryText && secondaryLink && (
                  <Link 
                    href={secondaryLink}
                    className={`btn-secondary ${variant === 'dark' ? 'border-white text-white hover:bg-white hover:text-dark' : ''}`}
                  >
                    {secondaryText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default CTASection;
