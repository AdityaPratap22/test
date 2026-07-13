"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";

/**
 * TimelineStrip Component
 * Visual milestones timeline
 */
const TimelineStrip = () => {
  const milestones = [
    {
      year: "2023",
      title: "Expanded to Commercial Projects",
      detail: "Growing portfolio in commercial interior design",
    },
  ];

  return (
    <section className="py-32 bg-border">
      <div className="container-custom">
        <AnimationWrapper animation="fade-up">
          <h2 className="heading-xl mb-4 text-text text-center">Our Journey</h2>
          <p className="body-base text-heading/80 text-center mb-16 max-w-2xl mx-auto">
            Expanding our expertise and creating beautiful spaces
          </p>
        </AnimationWrapper>

        {/* Desktop: Horizontal */}
        <div className="hidden md:block overflow-x-auto pb-8">
          <div className="flex gap-8 min-w-max px-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-heading font-semibold text-accent mb-3">
                  {milestone.year}
                </div>
                <h3 className="heading-sm mb-2 text-text">{milestone.title}</h3>
                <p className="body-sm text-heading/70">{milestone.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden space-y-6">
          {milestones.map((milestone, index) => (
            <AnimationWrapper
              key={milestone.year}
              animation="fade-up"
              delay={index * 0.1}
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-heading font-semibold text-accent mb-2">
                  {milestone.year}
                </div>
                <h3 className="heading-sm mb-2 text-text">{milestone.title}</h3>
                <p className="body-sm text-heading/70">{milestone.detail}</p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineStrip;
