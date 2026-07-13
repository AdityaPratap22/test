import { NextSeo } from 'next-seo';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import AnimationWrapper from '../components/AnimationWrapper';
import CTASection from '../components/CTASection';
import { Calendar, User, ArrowRight } from 'lucide-react';

/**
 * Blog Page
 * Design tips, trends, and insights
 */
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Five Timeless Design Principles for Your Home',
      excerpt: 'Discover the fundamental design principles that create spaces with lasting appeal, regardless of changing trends.',
      category: 'Design Tips',
      author: 'Sonya Mehta',
      date: 'November 1, 2025',
      readTime: '5 min read',
      image: '/images/blog/post-1.jpg',
    },
    {
      id: 2,
      title: 'Kitchen Trends That Will Define 2025',
      excerpt: 'From integrated appliances to sustainable materials, explore the kitchen design trends shaping modern homes.',
      category: 'Trends',
      author: 'Sonya Mehta',
      date: 'October 28, 2025',
      readTime: '7 min read',
      image: '/images/blog/post-2.jpg',
    },
    {
      id: 3,
      title: 'The Art of Mixing Old and New',
      excerpt: 'Learn how to blend vintage treasures with contemporary pieces for a collected, personalized look.',
      category: 'Styling',
      author: 'Sonya Mehta',
      date: 'October 22, 2025',
      readTime: '6 min read',
      image: '/images/blog/post-3.jpg',
    },
    {
      id: 4,
      title: 'Creating a Spa-Like Bathroom Retreat',
      excerpt: 'Transform your bathroom into a luxurious sanctuary with these professional design strategies.',
      category: 'Design Tips',
      author: 'Sonya Mehta',
      date: 'October 15, 2025',
      readTime: '8 min read',
      image: '/images/blog/post-4.jpg',
    },
    {
      id: 5,
      title: 'Sustainable Luxury: Eco-Friendly Design Choices',
      excerpt: 'Discover how to create beautiful, sustainable interiors without compromising on luxury or style.',
      category: 'Sustainability',
      author: 'Sonya Mehta',
      date: 'October 8, 2025',
      readTime: '6 min read',
      image: '/images/blog/post-5.jpg',
    },
    {
      id: 6,
      title: 'Color Psychology in Interior Design',
      excerpt: 'Understand how color choices influence mood and energy in your living spaces.',
      category: 'Design Theory',
      author: 'Sonya Mehta',
      date: 'October 1, 2025',
      readTime: '5 min read',
      image: '/images/blog/post-6.jpg',
    },
  ];

  const categories = ['All', 'Design Tips', 'Trends', 'Styling', 'Sustainability', 'Design Theory'];

  return (
    <>
      <NextSeo
        title="Blog"
        description="Explore design insights, trends, and tips from Decor'em by Sonya Mehta. Learn about interior design, home styling, and creating beautiful, functional spaces."
      />

      {/* Hero Section */}
      <HeroSection
        title="Design Insights & Inspiration"
        subtitle="Our Blog"
        description="Expert tips, industry trends, and thoughtful perspectives on creating beautiful homes."
        image="/images/hero/blog.jpg"
        height="min-h-[60vh]"
        primaryCTA="Schedule Consultation"
        primaryLink="/contact"
      />

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="overline text-accent mb-4 text-center">Featured Post</div>
          
          <AnimationWrapper animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-border rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <p className="text-text/50">Featured Post Image</p>
                </div>
              </div>

              <div>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-sm mb-4">
                  {blogPosts[0].category}
                </div>
                <h2 className="heading-xl mb-4">{blogPosts[0].title}</h2>
                <p className="body-lg text-text/80 mb-6">{blogPosts[0].excerpt}</p>
                
                <div className="flex items-center text-sm text-text/70 mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blogPosts[0].date}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>

                <button className="btn-primary inline-flex items-center group">
                  Read Article
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="Latest Articles"
            subtitle="Insights and inspiration for your design journey."
            align="center"
            className="mb-12"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-text hover:bg-accent hover:text-white rounded-sm text-sm font-medium transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <AnimationWrapper key={post.id} animation="fade-up" delay={index * 0.1}>
                <article className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  {/* Image */}
                  <div className="aspect-[16/10] bg-border overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-secondary/10 hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-sm mb-3">
                      {post.category}
                    </div>
                    
                    <h3 className="heading-sm mb-3 hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="body-sm text-text/70 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center text-xs text-text/60 space-x-3 pt-4 border-t border-border">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <AnimationWrapper animation="fade-up">
            <h2 className="heading-xl mb-4">Stay Inspired</h2>
            <p className="body-lg text-text/80 mb-8">
              Subscribe to our newsletter for design tips, project updates, and exclusive insights delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </AnimationWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Space?"
        description="Let's discuss your design vision and create a plan to bring it to life."
        primaryText="Schedule Consultation"
        primaryLink="/contact"
        variant="gradient"
      />
    </>
  );
}
