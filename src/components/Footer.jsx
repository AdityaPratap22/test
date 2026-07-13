'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Process', href: '/process' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialMedia = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/s_decorem' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/decoremsonya' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/decorem' },
  ];

  return (
    <footer className="bg-dark text-border">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logos/decor'em-logo.png"
                alt="Decor'em Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="font-heading text-3xl text-background">
                Decor'em
                <span className="block text-base font-body font-light text-accent mt-1">
                  by Sonya Mehta
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-2">
              Transforming homes into expressions of personality through elegant, personalized interior design.
            </p>
            <p className="text-xs italic text-border/80">
              Designed with passion in Houston, TX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg mb-6 text-background">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+12817016041"
                  className="flex items-start text-sm hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-accent" />
                  <span>+1 (281) 701-6041</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:decorembysonyamehta@gmail.com"
                  className="flex items-start text-sm hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-accent" />
                  <span>decorembysonyamehta@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-accent" />
                <span>Houston, Texas</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg mb-6 text-background">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Brochure Download */}
            <motion.a
              href="/files/DecorEm_Brochure.pdf"
              download
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, repeatDelay: 13, ease: 'easeInOut' }
              }}
              className="inline-flex items-center px-4 py-2 bg-accent text-background text-sm font-semibold rounded-sm hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Design Brochure
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-accent/30" />

      {/* Bottom Bar */}
      <div className="container-custom py-6">
        <div className="text-center">
          <p className="text-sm text-border/80">
            © {currentYear} Decor'em by Sonya Mehta | Designed with passion in Houston, TX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
