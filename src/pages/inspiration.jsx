import { NextSeo } from 'next-seo';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import AnimationWrapper from '../components/AnimationWrapper';
import CTASection from '../components/CTASection';

/**
 * Inspiration Gallery Page
 * Design inspiration and mood boards
 */
export default function Inspiration() {
  const inspirationCategories = [
    {
      title: 'Modern Minimalism',
      description: 'Clean lines and curated simplicity',
      image: '/images/inspiration/minimalism.jpg',
      tags: ['Contemporary', 'Neutral', 'Minimal'],
    },
    {
      title: 'Classic Elegance',
      description: 'Timeless sophistication and refined details',
      image: '/images/inspiration/classic.jpg',
      tags: ['Traditional', 'Luxury', 'Elegant'],
    },
    {
      title: 'Warm Contemporary',
      description: 'Modern comfort with natural textures',
      image: '/images/inspiration/warm.jpg',
      tags: ['Cozy', 'Natural', 'Inviting'],
    },
    {
      title: 'Bold & Dramatic',
      description: 'Statement pieces and confident color',
      image: '/images/inspiration/bold.jpg',
      tags: ['Dramatic', 'Colorful', 'Statement'],
    },
    {
      title: 'Coastal Serenity',
      description: 'Breezy, light-filled spaces',
      image: '/images/inspiration/coastal.jpg',
      tags: ['Coastal', 'Light', 'Airy'],
    },
    {
      title: 'Industrial Chic',
      description: 'Raw materials meet refined design',
      image: '/images/inspiration/industrial.jpg',
      tags: ['Industrial', 'Urban', 'Edgy'],
    },
  ];

  return (
    <>
      <NextSeo
        title="Inspiration Gallery"
        description="Explore design inspiration and discover your style with Decor'em by Sonya Mehta. Browse curated collections of interior design trends and timeless aesthetics."
      />

      {/* Hero Section */}
      <HeroSection
        title="Find Your Design Style"
        subtitle="Inspiration Gallery"
        description="Explore curated collections that inspire beautiful, personalized spaces."
        image="/images/hero/inspiration.jpg"
        height="min-h-[60vh]"
        primaryCTA="Schedule Consultation"
        primaryLink="/contact"
      />

      {/* Inspiration Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Design Collections"
            subtitle="Discover the aesthetic that resonates with your vision."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspirationCategories.map((category, index) => (
              <AnimationWrapper key={category.title} animation="fade-up" delay={index * 0.1}>
                <div className="group cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="heading-md mb-2">{category.title}</h3>
                      <p className="body-sm mb-4">{category.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {category.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-sm text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Pinterest Style Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="Latest Inspirations"
            subtitle="Fresh ideas from the world of interior design."
            align="center"
            className="mb-12"
          />

          {/* Masonry Grid Placeholder */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[...Array(9)].map((_, index) => (
              <AnimationWrapper key={index} animation="fade-up" delay={index * 0.05}>
                <div className="break-inside-avoid">
                  <div 
                    className="bg-border rounded-sm overflow-hidden"
                    style={{ aspectRatio: index % 3 === 0 ? '3/4' : index % 3 === 1 ? '1/1' : '4/3' }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
                      <p className="text-text/50 text-sm">Inspiration Image {index + 1}</p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Bring Your Vision to Life"
        description="Found a style you love? Let's discuss how we can incorporate these elements into your space."
        primaryText="Schedule Consultation"
        primaryLink="/contact"
        secondaryText="View Portfolio"
        secondaryLink="/portfolio"
        variant="dark"
      />
    </>
  );
}
