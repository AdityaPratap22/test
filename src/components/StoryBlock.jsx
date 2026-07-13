'use client';

import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';

/**
 * StoryBlock Component
 * Founder narrative with pull quote
 */
const StoryBlock = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper animation="fade-up">
            <h2 className="heading-xl mb-12 text-text text-center">Our Story</h2>
          </AnimationWrapper>

          <div className="space-y-8">
            <AnimationWrapper animation="fade-up" delay={0.1}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="body-lg text-heading leading-relaxed"
              >
                Decor'em began with a simple belief: design should feel personal. I started as an 
                architecture graduate with a love for materiality and light. Over the last decade, 
                I've worked with Houston families and businesses to convert everyday spaces into 
                tailored, functional, and beautiful homes.
              </motion.p>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={0.2}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="body-lg text-heading leading-relaxed"
              >
                Each project is a collaboration. I believe in understanding not just what you want, 
                but how you live. This approach has led to lasting relationships with clients who 
                trust me to bring their vision to life while adding touches they never knew they needed.
              </motion.p>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={0.3}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-lg text-heading leading-relaxed"
              >
                From selecting the perfect finish to coordinating with trusted craftsmen, every detail 
                matters. My goal is to create spaces that feel effortlessly elegant and authentically yours.
              </motion.p>
            </AnimationWrapper>

            {/* Pull Quote */}
            <AnimationWrapper animation="fade-up" delay={0.4}>
              <div className="my-16 py-12 border-l-4 border-accent pl-8">
                <blockquote className="quote text-accent italic">
                  "Design is emotion — it's how a home makes you feel."
                </blockquote>
                <cite className="block mt-4 text-heading font-medium not-italic">
                  — Sonya Mehta
                </cite>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBlock;
