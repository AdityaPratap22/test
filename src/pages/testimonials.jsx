import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

/**
 * Testimonials Page
 * Client stories and reviews with editorial layout
 * Houston's trusted interior design testimonials
 */
export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Large editorial testimonials - authentic client reviews
  const editorialTestimonials = [
    {
      quote: "It was an absolute pleasure to work with Sonya on remodeling projects in our home. She was incredible at blending our existing decor with our desire for a new look in multiple living room areas. So flexible and made it easy to share our ever changing vision of what we wanted. She extended every possible discount and helped us buy high quality materials at a tremendously reduced cost. She knows her stuff and helped us transform our house into a more modern and cozy space. Can't wait to start in the next wave of projects!",
      author: "A. Azhdarinia",
      location: "Houston, TX",
      project: "Home Remodeling"
    },
    {
      quote: "Sonya and her team were absolutely amazing! They did paneling in our master, our staircase wall and the floating shelves in our living room and the entire team's attention to detail was phenomenal. Sonya was always attentive, responsive and guided my choices in a respectful and welcoming way. We are extremely satisfied and would recommend her and her team to anyone who wants to bring their dreams for their home to reality!",
      author: "Kalyani",
      location: "Houston, TX",
      project: "Master Bedroom & Living Room"
    },
    {
      quote: "We hired Sonya to help with making our contemporary new home feel more warm and reflective of who we are as a family. We were impressed with the work she has done at another home and we felt that she would be the right person to help us achieve our goals. We are very happy that we hired Sonya and she helped us achieve exactly what we wanted! She understood our design sensibilities and preferences and provided us with alternatives that we are excited to pick from. She was also keenly aware of the budget when she presented us with alternatives. The best part with Sonya is that she not only provided us with excellent designs but also had a high quality team that could bring the design to reality within expected timelines and budget! We highly recommended Sonya for design of your new space or remodel!",
      author: "Ravi T",
      location: "Houston, TX",
      project: "Contemporary Home Design"
    },
    {
      quote: "We hired Sonya for our home remodel and it was a great experience. She is hardworking, has good taste and always responsive to our needs. We built a new bedroom for our daughter and it came out fantastic. We also did a redesign of several other rooms (kitchen, formal living, bathrooms, etc.) and all livened up the entire aesthetic of our home. We would recommend Sonya to anyone looking for any kind of design or remodel projects for their home. She has a team of skilled craftsmen that she manages and makes sure that the project stays on time and in budget.",
      author: "R. Malani",
      location: "Houston, TX",
      project: "Full Home Remodel"
    }
  ];

  // Carousel auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <>
      <NextSeo
        title="Testimonials | Decor'em by Sonya Mehta — Houston Interior Design"
        description="Read client testimonials and long-form reviews for Decor'em by Sonya Mehta — Houston's trusted interior designer and renovation expert."
        openGraph={{
          title: "Client Testimonials | Decor'em by Sonya Mehta",
          description: "Real stories from homeowners and businesses we've had the privilege to transform.",
          images: [{ url: '/images/hero/testimonials.jpg' }]
        }}
      />

      {/* Schema Markup for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Decor'em by Sonya Mehta",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": testimonialsData.length
            },
            "review": testimonialsData.slice(0, 4).map(t => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": t.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "reviewBody": t.quote
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#FAF9F6] to-[#E4DED7] overflow-hidden">
        <div className="container-custom max-w-4xl text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-[#C9A76F] text-[#C9A76F]" />
                ))}
              </div>
              <span className="text-base text-[#C9A76F] font-semibold uppercase tracking-wider">5.0 Average Rating</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#2B2B2B] mb-6 leading-tight">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-[#3E3E3E] max-w-3xl mx-auto leading-relaxed">
              Real stories from homeowners and businesses we've had the privilege to transform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Testimonials - Large Format */}
      <section className="py-24 bg-[#C3B8A7]">
        <div className="container-custom max-w-5xl px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          {editorialTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`mb-12 last:mb-0`}
            >
              <div className="bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-lg shadow-xl border border-white/20">
                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#C9A76F] text-[#C9A76F]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-8 font-light">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 pt-6 border-t border-white/20">
                  <div className="text-left">
                    <p className="text-[#C9A76F] font-bold text-xl md:text-2xl mb-1 font-serif">
                      {testimonial.author}
                    </p>
                    <p className="text-white/90 text-base md:text-lg">
                      {testimonial.project}
                    </p>
                    <p className="text-white/70 text-sm md:text-base">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rotating Testimonial Carousel */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#2B2B2B] mb-4">
              More Client Stories
            </h2>
            <p className="text-lg md:text-xl text-[#3E3E3E] max-w-2xl mx-auto">
              Hear from more homeowners who trusted us with their spaces
            </p>
          </motion.div>

          {/* Carousel */}
          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            role="region"
            aria-label="Client testimonials carousel"
            aria-live="polite"
          >
            <div className="overflow-hidden rounded-lg">
              <div className="flex transition-transform duration-600 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-lg shadow-lg border border-[#E4DED7]">
                      <div className="flex flex-col items-center text-center">
                        {/* Content */}
                        <div className="flex-1">
                          {/* Stars */}
                          <div className="flex gap-1 mb-4 justify-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-[#C9A76F] text-[#C9A76F]" />
                            ))}
                          </div>

                          {/* Quote */}
                          <p className="text-base md:text-lg text-[#2B2B2B] mb-6 leading-relaxed max-w-2xl mx-auto">
                            "{testimonial.quote}"
                          </p>

                          {/* Author Info */}
                          <div className="mb-6 pb-6 border-b border-[#E4DED7]">
                            <p className="font-bold text-[#2B2B2B] text-lg md:text-xl font-serif">{testimonial.name}</p>
                            <p className="text-sm md:text-base text-[#C9A76F] font-semibold mt-1">{testimonial.project}</p>
                            <p className="text-sm text-[#3E3E3E] mt-1">{testimonial.location}</p>
                          </div>

                          {/* View Project Link */}
                          <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-[#C9A76F] hover:text-[#A88650] text-sm font-semibold transition-colors uppercase tracking-wide"
                          >
                            View Our Portfolio
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-8 w-12 h-12 md:w-14 md:h-14 bg-[#C9A76F] shadow-xl rounded-full flex items-center justify-center hover:bg-[#A88650] text-white transition-all z-10 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="md:w-7 md:h-7" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-8 w-12 h-12 md:w-14 md:h-14 bg-[#C9A76F] shadow-xl rounded-full flex items-center justify-center hover:bg-[#A88650] text-white transition-all z-10 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="md:w-7 md:h-7" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2.5 mt-10">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index ? 'bg-[#C9A76F] w-10' : 'bg-[#E4DED7] w-2.5 hover:bg-[#C9A76F]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-[#C9A76F] via-[#B8986A] to-[#A88650] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our growing list of satisfied clients and start your design journey today.
            </p>

            {/* Button */}
            <div className="flex items-center justify-center">
              <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-5 bg-white text-[#2B2B2B] font-bold rounded-lg hover:bg-[#FAF9F6] transition-all duration-300 shadow-2xl text-lg"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Complimentary Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">48-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">10+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
