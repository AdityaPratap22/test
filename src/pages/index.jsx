import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Ruler,
  Palette,
  ShoppingBag,
  Hammer,
  Sparkles,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import AnimationWrapper from "../components/AnimationWrapper";
import servicesData from "../data/services.json";
import testimonialsData from "../data/testimonials.json";

/**
 * Home Page
 * Main landing page for Decor'em by Sonya Mehta
 * Luxury Interior Design & Renovation - Houston, Texas
 */
export default function Home() {
  const processSteps = [
    {
      icon: MessageSquare,
      label: "Consultation",
      description: "Understanding your vision",
    },
    { icon: Ruler, label: "Planning", description: "Space layout design" },
    {
      icon: Palette,
      label: "Development",
      description: "Mood boards & concepts",
    },
    {
      icon: ShoppingBag,
      label: "Selection",
      description: "Material & fixture choices",
    },
    { icon: Hammer, label: "Execution", description: "Expert installation" },
    { icon: Sparkles, label: "Styling", description: "Final touches" },
  ];

  return (
    <>
      <NextSeo
        title="Decor'em by Sonya Mehta | Luxury Interior Designer & Renovation Expert in Houston"
        description="Transform your space with Decor'em by Sonya Mehta — Houston's trusted interior design and renovation practice for luxury homes, kitchens, and commercial spaces."
        openGraph={{
          title:
            "Decor'em by Sonya Mehta | Luxury Interior Designer & Renovation Expert in Houston",
          description:
            "Transform your space with Decor'em by Sonya Mehta — Houston's trusted interior design and renovation practice for luxury homes, kitchens, and commercial spaces.",
          type: "website",
          locale: "en_US",
          site_name: "Decor'em by Sonya Mehta",
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Transforming Spaces into Experiences"
        subtitle="Houston's trusted interior design and renovation expert"
        description="We craft homes that reflect personality and purpose through timeless design and careful renovation."
        image="/images/hero/livingroom.jpg"
        primaryCTA="Book Your Free Design Consultation"
        primaryLink="/contact"
        secondaryCTA="View Portfolio"
        secondaryLink="/portfolio"
      />

      {/* Welcome Intro Section */}
      <section className="py-32 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimationWrapper animation="fade-up">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/hero/sonya_mehta_home.jpeg"
                  alt="Sonya Mehta - Interior Designer"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={0.2}>
              <div>
                <h2 className="heading-2xl mb-6 text-text">
                  Welcome to Decor'em by Sonya Mehta
                </h2>
                <p className="body-lg text-heading mb-6 leading-relaxed">
                  We craft homes that reflect personality and purpose through
                  timeless design and careful renovation. Each project is a
                  unique journey, blending your vision with our expertise to
                  create spaces that feel both luxurious and lived-in.
                </p>
                <p className="body-base text-heading/80 mb-8 leading-relaxed">
                  With over a decade of experience transforming Houston homes,
                  we understand that great design goes beyond aesthetics—it's
                  about creating environments that enhance your daily life and
                  bring joy for years to come.
                </p>
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center group"
                >
                  Meet Sonya
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <SectionHeader
            overline="What We Do"
            title="Our Expertise"
            subtitle="From concept to completion, we bring your vision to life with meticulous attention to detail and uncompromising quality."
            align="center"
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, index) => (
              <AnimationWrapper
                key={service.id}
                animation="fade-up"
                delay={index * 0.1}
              >
                <div className="group relative bg-white rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-500 h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="heading-md mb-3 text-text">
                      {service.title}
                    </h3>
                    <p className="body-base text-heading/80 mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase Section */}
      <section className="py-32 bg-border">
        <div className="container-custom">
          <SectionHeader
            overline="Transformations"
            title="See the Transformation"
            subtitle="Witness how we turn ordinary spaces into extraordinary experiences."
            align="center"
            className="mb-20"
          />

          <div className="space-y-16 max-w-5xl mx-auto">
            <AnimationWrapper animation="fade-up">
              <BeforeAfterSlider
                beforeImage="/images/Before-after/Kitchen/Before.webp"
                afterImage="/images/Before-after/Kitchen/after.webp"
                title="Modern Kitchen Renovation"
                initialPosition={50}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={0.2}>
              <BeforeAfterSlider
                beforeImage="/images/Before-after/Bathroom/Before_.webp"
                afterImage="/images/Before-after/Bathroom/Final Staged_.webp"
                title="Luxury Bathroom Makeover"
                initialPosition={50}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={0.3}>
              <BeforeAfterSlider
                beforeImage="/images/Before-after/Living/Before.webp"
                afterImage="/images/Before-after/Living/After.webp"
                title="Living Room Transformation"
                initialPosition={50}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={0.4}>
              <BeforeAfterSlider
                beforeImage="/images/Before-after/Home/Before.jpg"
                afterImage="/images/Before-after/Home/After.jpg"
                title="Complete Home Makeover"
                initialPosition={50}
              />
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Process Teaser Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <SectionHeader
            overline="How We Work"
            title="Our Design Process"
            subtitle="A seamless journey from vision to reality, guided by expertise and collaboration."
            align="center"
            className="mb-20"
          />

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <AnimationWrapper
                    key={index}
                    animation="fade-up"
                    delay={index * 0.1}
                  >
                    <div className="text-center relative">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="heading-sm mb-2 text-text">
                        {step.label}
                      </h3>
                      <p className="body-sm text-heading/70">
                        {step.description}
                      </p>

                      {/* Connector Line */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
                      )}
                    </div>
                  </AnimationWrapper>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/process"
                className="btn-secondary inline-flex items-center group"
              >
                Explore Our Full Process
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background">
        <div className="container-custom">
          <SectionHeader
            overline="Client Love"
            title="What Our Clients Say"
            subtitle="Hear from homeowners who've experienced the Decor'em transformation."
            align="center"
            className="mb-20"
          />

          <TestimonialCarousel
            testimonials={testimonialsData}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Call to Action / Consultation Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A76F] via-[#B89960] to-[#A88650]" />

        <div className="relative z-10 container-custom text-center">
          <AnimationWrapper animation="fade-up">
            <h2 className="heading-2xl mb-6 text-background">
              Let's Create Something Beautiful Together
            </h2>
            <p className="body-xl text-background/90 mb-12 max-w-2xl mx-auto">
              Schedule your consultation and begin your design journey.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 border-2 border-background text-background font-semibold rounded-sm hover:bg-background hover:text-accent transition-all duration-400 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimationWrapper>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-background/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-background/10 rounded-full blur-3xl" />
      </section>
    </>
  );
}
