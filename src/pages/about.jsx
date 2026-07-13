import { NextSeo } from "next-seo";
import HeroAbout from "../components/HeroAbout";
import StoryBlock from "../components/StoryBlock";
import TimelineStrip from "../components/TimelineStrip";
import PhilosophyCards from "../components/PhilosophyCards";

import StatsBlock from "../components/StatsBlock";
import TestimonialStrip from "../components/TestimonialStrip";
import CTAContact from "../components/CTAContact";

/**
 * About Page
 * Story-driven About page for Decor'em by Sonya Mehta
 * High-trust, personality-focused, conversion-optimized
 */
export default function About() {
  // Structured Data for Sonya Mehta (Person Schema)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sonya Mehta",
    jobTitle: "Interior Designer & Founder",
    worksFor: {
      "@type": "Organization",
      name: "Decor'em by Sonya Mehta",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "USA",
    },
    alumniOf: "Interior Architecture Program",
    knowsAbout: [
      "Interior Design",
      "Home Renovation",
      "Residential Interior Design",
      "Commercial Interior Design",
      "Kitchen Design",
      "Bathroom Design",
      "Luxury Home Design",
    ],
    sameAs: [
      "https://instagram.com/decoremsonya",
      "https://linkedin.com/in/sonyamehta",
    ],
  };

  return (
    <>
      <NextSeo
        title="About | Decor'em by Sonya Mehta — Houston Interior Designer"
        description="Meet Sonya Mehta — founder of Decor'em, a Houston-based interior design and renovation practice crafting personalized, high-end homes. Learn about our design philosophy, team, and approach."
        canonical="https://www.decoremsonya.com/about"
        openGraph={{
          title: "About | Decor'em by Sonya Mehta — Houston Interior Designer",
          description:
            "Meet Sonya Mehta — founder of Decor'em, a Houston-based interior design and renovation practice crafting personalized, high-end homes. Learn about our design philosophy, team, and approach.",
          type: "website",
          url: "https://www.decoremsonya.com/about",
          images: [
            {
              url: "/images/team/sonya-mehta.jpg",
              width: 1200,
              height: 630,
              alt: "Sonya Mehta — Houston interior designer",
            },
          ],
        }}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* 1. Hero — Meet Sonya & Decor'em */}
      <HeroAbout />

      {/* 2. The Story / Founder Narrative */}
      <StoryBlock />

      {/* 3. Timeline / Milestones */}
      <TimelineStrip />

      {/* 4. Design Philosophy & Approach */}
      <PhilosophyCards />

      {/* 5. Impact Stats / Trust Bar */}
      <StatsBlock />

      {/* 7. Client Stories / Short Testimonials */}
      <TestimonialStrip />

      {/* 8. Call to Action — Personal Invite */}
      <CTAContact />
    </>
  );
}
