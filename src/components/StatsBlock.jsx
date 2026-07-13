'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * StatsBlock Component
 * Animated statistics counter
 */
const StatsBlock = () => {
  const stats = [
    { label: 'Projects Completed', value: 150, suffix: '+' },
    { label: 'Years Experience', value: 10, suffix: '+' },
    { label: 'On-time Delivery', value: 98, suffix: '%' }
  ];

  return (
    <section className="py-24 bg-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatItem 
              key={stat.label} 
              stat={stat} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 800;
    const steps = 60;
    const stepValue = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(stepValue * currentStep), stat.value));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-6xl md:text-7xl font-heading font-semibold text-text mb-2">
        {count}{stat.suffix}
      </div>
      <div className="body-base text-heading/80 font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default StatsBlock;
