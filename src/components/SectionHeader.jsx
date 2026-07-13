'use client';

import AnimationWrapper from './AnimationWrapper';

/**
 * SectionHeader Component
 * Reusable header for page sections
 * 
 * @param {Object} props
 * @param {string} props.overline - Small text above title (optional)
 * @param {string} props.title - Main section title
 * @param {string} props.subtitle - Subtitle/description (optional)
 * @param {string} props.align - Text alignment: 'left', 'center', 'right'
 * @param {string} props.className - Additional CSS classes
 */
const SectionHeader = ({ 
  overline, 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <AnimationWrapper animation="fade-up">
      <div className={`max-w-3xl ${alignmentClasses[align]} ${className}`}>
        {overline && (
          <div className="overline mb-4">
            {overline}
          </div>
        )}
        
        <h2 className="heading-xl mb-6">
          {title}
        </h2>
        
        {subtitle && (
          <p className="subtitle text-text/80">
            {subtitle}
          </p>
        )}
      </div>
    </AnimationWrapper>
  );
};

export default SectionHeader;
