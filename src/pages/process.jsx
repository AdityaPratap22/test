import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

/**
 * Process Page
 * Detailed overview of the 6-step design process with client testimonials
 */
export default function Process() {
  const processSteps = [
    {
      number: "01",
      title: "CONSULTATION & CONCEPT",
      description:
        "We begin by understanding your lifestyle, preferences, and vision. Every design starts with a conversation — your ideas lead the way.",
    },
    {
      number: "02",
      title: "SPACE PLANNING & LAYOUT",
      description:
        "We analyze your space and create functional layouts that balance beauty, comfort, and flow — ensuring every corner serves a purpose.",
    },
    {
      number: "03",
      title: "DESIGN DEVELOPMENT",
      description:
        "From mood boards to material palettes, we craft a cohesive concept that reflects your personality and enhances your everyday living.",
    },
    {
      number: "04",
      title: "MATERIAL SELECTION",
      description:
        "We handpick high-quality finishes, fixtures, and furnishings — combining textures, tones, and details for timeless elegance.",
    },
    {
      number: "05",
      title: "EXECUTION & SUPERVISION",
      description:
        "Our team ensures seamless coordination and precise workmanship throughout the renovation and installation process.",
    },
    {
      number: "06",
      title: "FINAL STYLING & HANDOVER",
      description:
        "We add the finishing touches that bring your space to life — refined, balanced, and ready to live beautifully.",
    },
  ];

  const testimonials = [
    {
      name: "A. Azhdarinia",
      quote:
        "It was an absolute pleasure to work with Sonya on remodeling projects in our home. She was incredible at blending our existing decor with our desire for a new look. She knows her stuff and helped us transform our house into a more modern and cozy space.",
    },
    {
      name: "Kalyani",
      quote:
        "Sonya and her team were absolutely amazing! They did paneling in our master, our staircase wall and the floating shelves in our living room and the entire team's attention to detail was phenomenal. Sonya was always attentive, responsive and guided my choices in a respectful and welcoming way.",
    },
    {
      name: "Ravi T",
      quote:
        "She understood our design sensibilities and preferences and provided us with alternatives that we are excited to pick from. The best part is that she not only provided us with excellent designs but also had a high quality team that could bring the design to reality within expected timelines and budget!",
    },
    {
      name: "R. Malani",
      quote:
        "We hired Sonya for our home remodel and it was a great experience. She is hardworking, has good taste and always responsive to our needs. We would recommend Sonya to anyone looking for any kind of design or remodel projects for their home.",
    },
  ];

  return (
    <>
      <NextSeo
        title="Our Process | Decor'em by Sonya Mehta — Interior Design & Renovation in Houston"
        description="Discover the 6-step design process of Decor'em by Sonya Mehta, Houston's leading interior designer — from concept to handover, every step crafted with detail and care."
        openGraph={{
          title: "Our Process | Decor'em by Sonya Mehta",
          description:
            "From vision to reality — every step crafted with precision and passion.",
          images: [{ url: "/images/hero/process.jpg" }],
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Interior Design and Renovation Process",
            provider: {
              "@type": "Organization",
              name: "Decor'em by Sonya Mehta",
              url: "https://www.decoremsonya.com",
              telephone: "+1 (281) 701-6041",
              email: "decorembysonyamehta@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "US",
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            className="display-1 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Design Journey
          </motion.h1>
          <motion.h2
            className="display-2 text-accent max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Six seamless steps to your dream space
          </motion.h2>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#FAF9F6]" id="process-steps">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Large Background Number */}
                <div className="absolute -top-8 -left-4 text-[120px] font-bold text-[#E4DED7] opacity-40 leading-none pointer-events-none select-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative pt-8">
                  <h3 className="heading-lg font-bold text-[#2B2B2B] mb-4">
                    {step.number} — {step.title}
                  </h3>
                  <p className="body-lg text-[#3E3E3E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SEO Keywords (hidden) */}
          <div className="sr-only">
            interior design process Houston, design development, material
            selection, renovation steps, consultation concept, space planning
            layout, execution supervision, final styling handover
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-[#C3B8A7] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C9A76F] text-2xl">
                  ★
                </span>
              ))}
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif italic text-white drop-shadow-sm">
              Client Testimonials
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-white/95 text-lg italic mb-6 leading-relaxed drop-shadow-sm">
                  "{testimonial.quote}"
                </p>
                <p className="text-white font-semibold tracking-wide">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* SEO Keywords (hidden) */}
          <div className="sr-only">
            client testimonials Houston interior designer, renovation reviews,
            customer experience Decor'em
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#C9A76F] to-[#A88650]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2xl text-[#FAF9F6] mb-4">
              Ready to Start Your Design Journey?
            </h2>
            <p className="body-xl text-[#FAF9F6]/90 mb-10">
              Schedule a consultation to explore possibilities.
            </p>

            {/* Button */}
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#FAF9F6] text-[#2B2B2B] font-semibold rounded-sm hover:bg-white transition-all duration-300 shadow-lg"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
