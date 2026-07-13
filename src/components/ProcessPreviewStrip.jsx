'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Palette, ShoppingBag, Hammer, Sparkles, ArrowRight } from 'lucide-react';

/**
 * ProcessPreviewStrip Component
 * Horizontal process overview with icons - Updated to match new 6-step process
 */
const ProcessPreviewStrip = () => {
  const steps = [
    { icon: MessageSquare, label: 'Consultation' },
    { icon: Ruler, label: 'Planning' },
    { icon: Palette, label: 'Development' },
    { icon: ShoppingBag, label: 'Selection' },
    { icon: Hammer, label: 'Execution' },
    { icon: Sparkles, label: 'Styling' }
  ];

  return (
    <section className="py-32 bg-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-xl mb-4 text-text">How We Work</h2>
          <p className="body-lg text-heading/80 max-w-2xl mx-auto">
            Our process ensures clarity, creativity, and craftsmanship from start to finish.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-3 hover:bg-accent/20 transition-colors">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <span className="body-sm font-medium text-text">{step.label}</span>
                </motion.div>
                
                {/* Arrow connector (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-accent/40 mx-2" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link 
            href="/process"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium group"
          >
            See Our Full Process
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessPreviewStrip;
