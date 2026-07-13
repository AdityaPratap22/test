'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Hammer, Calendar, ArrowRight } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

/**
 * PhilosophyCards Component
 * Three-column design approach cards
 */
const PhilosophyCards = () => {
  const principles = [
    {
      icon: User,
      title: 'Personalized Design',
      description: 'Made-to-measure concepts that reflect you.',
      detail: 'Every design begins with understanding your lifestyle, preferences, and vision for your space.'
    },
    {
      icon: Hammer,
      title: 'Craftsmanship First',
      description: 'Trusted contractors, curated materials, and rigorous quality control.',
      detail: 'We partner with Houston\'s finest craftsmen to ensure exceptional execution.'
    },
    {
      icon: Calendar,
      title: 'Transparent Execution',
      description: 'Clear budgets, timelines, and weekly progress updates.',
      detail: 'You\'ll always know where we are in the process and what comes next.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <AnimationWrapper animation="fade-up">
          <h2 className="heading-xl mb-4 text-text text-center">Design Philosophy & Approach</h2>
          <p className="body-base text-heading/80 text-center mb-16 max-w-2xl mx-auto">
            Our process is built on three core principles that guide every project
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <AnimationWrapper key={principle.title} animation="fade-up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.25 }}
                  className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-colors h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="heading-md mb-3 text-text">
                    {principle.title}
                  </h3>
                  
                  <p className="body-base text-accent mb-3 font-medium">
                    {principle.description}
                  </p>
                  
                  <p className="body-sm text-heading/70">
                    {principle.detail}
                  </p>
                </motion.div>
              </AnimationWrapper>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            href="/process"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium group"
          >
            See how we work
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyCards;
