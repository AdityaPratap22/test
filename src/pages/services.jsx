import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sofa,
  Wrench,
  Briefcase,
  Grid3x3,
  Sparkles,
  Palette,
  Download,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ServiceCategoryCard from "../components/ServiceCategoryCard";
import ProcessPreviewStrip from "../components/ProcessPreviewStrip";
import TestimonialCarousel from "../components/TestimonialCarousel";
import AnimationWrapper from "../components/AnimationWrapper";
import testimonialsData from "../data/testimonials.json";

/**
 * Services Page
 * Comprehensive overview of all design and renovation services
 * Houston's premier interior design practice
 */
export default function Services() {
  const serviceCategories = [
    {
      icon: Sofa,
      title: "Interior Design & Styling",
      description: null,
      features: [
        "Concept development & space planning",
        "Mood boards and material selection",
        "Furniture layout and 3D visualizations",
        "Custom furniture & décor styling",
        "Theme-based interiors (modern, classic, minimal, luxury, boho)",
      ],
      keywords:
        "interior design Houston, home styling expert, modern interiors Texas",
      animationDirection: "fade-left",
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: null,
      features: [
        "Complete home renovation",
        "Kitchen & bathroom makeovers",
        "Flooring and wall treatments",
        "Ceiling and lighting redesign",
        "Structural and layout modifications",
        "Plumbing & electrical upgrades",
      ],
      keywords:
        "renovation expert Houston, home remodel Texas, bathroom renovation Houston",
      animationDirection: "fade-right",
    },
    {
      icon: Briefcase,
      title: "Commercial & Office Interiors",
      description: null,
      features: [
        "Office renovation & workspace design",
        "Boutique, salon, café, and showroom interiors",
        "Functional layouts with brand-specific aesthetics",
      ],
      keywords:
        "commercial interiors Houston, office renovation expert Texas, boutique design Houston",
      animationDirection: "slide-up",
    },
    {
      icon: Grid3x3,
      title: "Modular Solutions",
      description: null,
      features: [
        "Modular kitchens (custom designs & finishes)",
        "Modular wardrobes & storage solutions",
        "Vanity units, entertainment units & bar counters",
        "Space optimization for small apartments",
      ],
      keywords:
        "modular kitchen Houston, wardrobe design Texas, space optimization expert",
      animationDirection: "fade-up",
    },
    {
      icon: Sparkles,
      title: "Luxury Detailing & Customization",
      description: null,
      features: [
        "Bespoke furniture & cabinetry",
        "Designer partitions and paneling",
        "False ceilings with layered lighting",
        "Custom mirrors, accents & feature walls",
      ],
      keywords:
        "luxury detailing Houston, bespoke interiors, high-end custom design Texas",
      animationDirection: "fade-up",
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: null,
      features: [
        "Personalized expert guidance for your project",
        "Space evaluation & concept discussion",
        "Material and color selection",
        "Budget-friendly design planning",
        "Expert layout & styling advice",
      ],
      keywords:
        "design consultation Houston, space planning, interior expert Texas",
      animationDirection: "slide-up",
      showCTA: true,
    },
  ];

  return (
    <>
      <NextSeo
        title="Our Services | Decor'em by Sonya Mehta — Interior Design & Renovation in Houston"
        description="Discover the complete range of services offered by Decor'em by Sonya Mehta — Houston's trusted interior design and renovation practice. From luxury interiors and modular kitchens to bespoke furniture and commercial spaces."
        canonical="https://www.decoremsonya.com/services"
        openGraph={{
          title:
            "Our Services | Decor'em by Sonya Mehta — Interior Design & Renovation in Houston",
          description:
            "Discover the complete range of services offered by Decor'em by Sonya Mehta — Houston's trusted interior design and renovation practice. From luxury interiors and modular kitchens to bespoke furniture and commercial spaces.",
          type: "website",
          url: "https://www.decoremsonya.com/services",
        }}
      />

      {/* 1. Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Design. Renovate. Transform."
        description="From luxury interiors to complete renovations, we bring expertise and elegance to every project."
        image="/images/hero/services.jpg"
        height="min-h-[70vh]"
        primaryCTA="Schedule Consultation"
        primaryLink="/contact"
      />

      {/* 2. Introduction Block */}
      <section className="py-32 bg-background">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2xl mb-6 text-text">
                Tailored Design Solutions for Every Space
              </h2>
              <p className="body-lg text-heading leading-relaxed mb-8">
                At Decor'em, we offer a complete suite of design and renovation
                services — from luxury interiors and commercial spaces to custom
                modular solutions and personalized consultations. Every service
                reflects craftsmanship, precision, and your unique style.
              </p>

              {/* Gold Divider */}
              <div className="w-16 h-1 bg-accent mx-auto" />
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* 3. Service Categories Grid */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <h2 className="heading-xl mb-16 text-text text-center">
              Complete Range of Services
            </h2>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <ServiceCategoryCard
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  features={category.features}
                  keywords={category.keywords}
                  delay={index * 0.1}
                  animationDirection={category.animationDirection}
                />

                {/* CTA for Design Consultation */}
                {category.showCTA && (
                  <AnimationWrapper animation="fade-up" delay={0.3}>
                    <div className="mt-6 text-center">
                      <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center group"
                      >
                        Book a Consultation
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </AnimationWrapper>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Preview Strip */}
      <ProcessPreviewStrip />

      {/* 5. Testimonials Teaser */}
      <section className="py-32 bg-background">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up">
            <h2 className="heading-xl mb-4 text-text text-center">
              What Our Clients Say
            </h2>
            <p className="body-base text-heading/80 text-center mb-16 max-w-2xl mx-auto">
              Hear from homeowners who've experienced the Decor'em
              transformation
            </p>
          </AnimationWrapper>

          <TestimonialCarousel
            testimonials={testimonialsData.slice(0, 3)}
            autoPlay={true}
            interval={5000}
          />

          <AnimationWrapper animation="fade-up" delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="btn-secondary inline-flex items-center group"
              >
                Read All Testimonials
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* 6. Call-to-Action Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A76F] via-[#B89960] to-[#A88650]" />

        <div className="relative z-10 container-custom text-center">
          <AnimationWrapper animation="fade-up">
            <h2 className="heading-2xl mb-6 text-background">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="body-xl text-background/90 mb-12 max-w-2xl mx-auto">
              Let's discuss your dream space and turn ideas into reality.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-dark text-background font-semibold rounded-sm hover:bg-dark/90 transition-all duration-400 shadow-xl group"
              >
                Schedule Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimationWrapper>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-background/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-background/10 rounded-full blur-3xl" />
      </section>
    </>
  );
}
