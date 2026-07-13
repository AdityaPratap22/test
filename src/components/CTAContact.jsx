'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * CTAContact Component
 * Personal invitation CTA for About page
 */
const CTAContact = () => {
  return (
    <section className="py-32 bg-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-2xl mb-6 text-text">
            Ready to start your design story?
          </h2>
          
          <p className="body-xl text-heading mb-12">
            Schedule a complimentary discovery call to discuss ideas, budget, and timeline.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-accent text-background font-semibold rounded-sm hover:bg-secondary transition-all duration-400 group shadow-lg hover:shadow-xl"
            >
              Schedule a Discovery Call
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="mt-12 flex items-center justify-center gap-2 text-heading/60">
            <div className="w-16 h-px bg-accent/50" />
            <span className="body-sm">Let's create something beautiful together</span>
            <div className="w-16 h-px bg-accent/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAContact;
