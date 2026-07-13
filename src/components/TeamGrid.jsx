'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

/**
 * TeamGrid Component
 * Team member showcase with photos and roles
 */
const TeamGrid = () => {
  const team = [
    {
      name: 'Sonya Mehta',
      role: 'Founder & Lead Designer',
      bio: 'Visionary designer with a passion for creating personalized spaces.',
      image: '/images/team/sonya-mehta.jpg',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Project Manager',
      bio: 'Ensures seamless coordination from concept to completion.',
      image: '/images/team/project-manager.jpg',
      linkedin: '#'
    },
    {
      name: 'Aisha Patel',
      role: '3D Visualizer',
      bio: 'Brings designs to life with stunning visual renderings.',
      image: '/images/team/visualizer.jpg',
      linkedin: '#'
    },
    {
      name: 'James Rodriguez',
      role: 'Renovation Lead',
      bio: 'Expert craftsman overseeing construction and installation.',
      image: '/images/team/renovation-lead.jpg',
      linkedin: '#'
    },
    {
      name: 'Contractor Network',
      role: 'Trusted Partners',
      bio: 'Vetted contractors and artisans ensuring quality execution.',
      image: '/images/team/contractors.jpg',
      linkedin: null
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container-custom">
        <AnimationWrapper animation="fade-up">
          <h2 className="heading-xl mb-4 text-text text-center">Meet Our Team</h2>
          <p className="body-base text-heading/80 text-center mb-16 max-w-2xl mx-auto">
            A dedicated group of professionals committed to bringing your vision to life
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="160px"
                />
              </div>
              
              <h3 className="heading-sm mb-1 text-text">
                {member.name}
              </h3>
              
              <p className="body-sm text-accent font-medium mb-3">
                {member.role}
              </p>
              
              <p className="body-sm text-heading/70 mb-4">
                {member.bio}
              </p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
