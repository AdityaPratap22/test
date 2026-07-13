"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * HeroSection Component
 * Elegant hero section with parallax and animations
 *
 * @param {Object} props
 * @param {string} props.title - Main hero title
 * @param {string} props.subtitle - Hero subtitle
 * @param {string} props.description - Hero description
 * @param {string} props.image - Background image path
 * @param {string} props.primaryCTA - Primary CTA text
 * @param {string} props.primaryLink - Primary CTA link
 * @param {string} props.secondaryCTA - Secondary CTA text (optional)
 * @param {string} props.secondaryLink - Secondary CTA link (optional)
 * @param {boolean} props.overlay - Show dark overlay
 * @param {string} props.height - Hero height class
 */
const HeroSection = ({
  title,
  subtitle,
  description,
  image,
  primaryCTA = "Start Your Project",
  primaryLink = "/contact",
  secondaryCTA,
  secondaryLink,
  overlay = true,
  height = "min-h-screen",
}) => {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Subtitle/Overline */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="overline text-white mb-6"
            >
              {subtitle}
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="display-1 text-white mb-8"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="body-xl text-accent mb-12 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={primaryLink}
              className="btn-primary inline-flex items-center group"
            >
              {primaryCTA}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            {secondaryCTA && secondaryLink && (
              <Link
                href={secondaryLink}
                className="btn-secondary border-white text-white hover:bg-white hover:text-dark"
              >
                {secondaryCTA}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
