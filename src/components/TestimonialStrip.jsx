'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

/**
 * TestimonialStrip Component
 * Highlighted client testimonials for About page
 */
const TestimonialStrip = () => {
  const testimonials = [
    {
      quote: "She was incredible at blending our existing decor with our desire for a new look in multiple living room areas. She knows her stuff and helped us transform our house into a more modern and cozy space.",
      name: "A. Azhdarinia",
      location: "Houston, TX",
      project: "Home Remodeling",
      image: "/images/team/client-1.jpg"
    },
    {
      quote: "Sonya and her team were absolutely amazing! The entire team's attention to detail was phenomenal. Sonya was always attentive, responsive and guided my choices in a respectful and welcoming way.",
      name: "Kalyani",
      location: "Houston, TX",
      project: "Master Bedroom & Living Room",
      image: "/images/team/client-2.jpg"
    },
    {
      quote: "She understood our design sensibilities and preferences and provided us with alternatives that we are excited to pick from. She not only provided us with excellent designs but also had a high quality team that could bring the design to reality.",
      name: "Ravi T",
      location: "Houston, TX",
      project: "Contemporary Home Design",
      image: "/images/team/client-3.jpg"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <AnimationWrapper animation="fade-up">
          <h2 className="heading-xl mb-4 text-text text-center">Client Stories</h2>
          <p className="body-base text-heading/80 text-center mb-16 max-w-2xl mx-auto">
            Hear from homeowners who've experienced the Decor'em difference
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={index} animation="fade-up" delay={index * 0.1}>
              <div className="bg-background rounded-xl p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-accent mb-6" />

                {/* Quote Text */}
                <p className="body-base text-heading italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-accent mb-6" />

                {/* Client Info */}
                <div>
                  <p className="heading-sm text-text mb-1">
                    {testimonial.name}
                  </p>
                  <p className="body-sm text-accent mb-1">
                    {testimonial.location}
                  </p>
                  <p className="body-sm text-heading/60">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialStrip;
