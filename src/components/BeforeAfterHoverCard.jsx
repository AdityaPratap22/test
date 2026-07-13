import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

/**
 * BeforeAfterHoverCard Component
 * Displays a luxury project card with a smooth hover crossfade
 * between the After and Before images.
 */
export default function BeforeAfterHoverCard({
  beforeImage,
  afterImage,
  title,
  description,
  location,
  year,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // Combine hover and tap states to determine if we should show the "Before" image
  const showBefore = isHovered || isTapped;

  const handleToggle = () => {
    setIsTapped(!isTapped);
  };

  return (
    <motion.div
      className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-[#E4DED7] transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsTapped(false); // Reset tap on mouse leave for desktop
      }}
      onClick={handleToggle}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F5] cursor-pointer">
        {/* AFTER IMAGE (Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={`${title} - After`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>

        {/* BEFORE IMAGE (Overlay Fade) */}
        <motion.div
          className="absolute inset-0 w-full h-full z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: showBefore ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={beforeImage}
            alt={`${title} - Before`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </motion.div>

        {/* Dynamic Badges */}
        {/* AFTER BADGE - Fades out on hover/tap */}
        <motion.div
          className="absolute top-4 right-4 z-20 bg-[#C9A76F] text-white px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider shadow-md"
          animate={{ opacity: showBefore ? 0 : 1, y: showBefore ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          After
        </motion.div>

        {/* BEFORE BADGE - Fades in on hover/tap */}
        <motion.div
          className="absolute top-4 left-4 z-20 bg-[#1E2A36] text-white px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: showBefore ? 1 : 0, y: showBefore ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          Before
        </motion.div>

        {/* Help Tip Overlay (Glassmorphic Strip) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-dark/40 backdrop-blur-xs py-2 px-4 flex items-center justify-between text-white/90 text-xs">
          <span className="flex items-center gap-1.5 font-medium tracking-wide">
            <Info className="w-3.5 h-3.5 text-[#C9A76F]" />
            {showBefore ? "Viewing Before photo" : "Viewing Completed space"}
          </span>
          <span className="text-white/60 hidden md:inline">
            Hover to see Before
          </span>
          <span className="text-white/60 md:hidden">
            Tap to see Before
          </span>
        </div>
      </div>

      {/* Project Details Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C9A76F] font-semibold">
              {location}
            </span>
            <h3 className="text-xl font-serif text-[#2B2B2B] mt-1 group-hover:text-[#C9A76F] transition-colors duration-300">
              {title}
            </h3>
          </div>
          <span className="text-sm font-medium text-[#7E7E7E] bg-[#FAF9F6] border border-[#E4DED7] px-2.5 py-1 rounded-sm">
            {year}
          </span>
        </div>
        <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed mt-2 flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
