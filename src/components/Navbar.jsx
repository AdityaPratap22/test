'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, Phone, Mail, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-dark/85 backdrop-blur-md shadow-xl'
          : 'bg-dark'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logos/decor'em-logo.png"
              alt="Decor'em Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="font-heading text-2xl text-background">
              Decor'em
              <span className="block text-sm font-body font-light text-accent">
                by Sonya Mehta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors py-2 group ${
                  isActive(item.href) 
                    ? 'text-accent' 
                    : 'text-background hover:text-accent'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                  isActive(item.href) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-accent text-background font-semibold rounded-sm hover:bg-secondary transition-all duration-400 transform hover:scale-105"
            >
              Book Consultation
            </Link>
            <a 
              href="/files/DecorEm_Brochure.pdf" 
              download
              className="px-6 py-3 bg-background border-2 border-accent text-accent font-semibold rounded-sm hover:bg-accent hover:text-background transition-all duration-400 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-background hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-accent/20 bg-dark"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors py-2 ${
                      isActive(item.href)
                        ? 'text-accent'
                        : 'text-background hover:text-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile CTAs */}
                <div className="pt-6 border-t border-accent/20 space-y-3">
                  <Link 
                    href="/contact" 
                    className="block w-full px-6 py-3 bg-accent text-background font-semibold rounded-sm text-center hover:bg-secondary transition-all duration-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Consultation
                  </Link>
                  <a 
                    href="/files/DecorEm_Brochure.pdf" 
                    download
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-transparent border-2 border-accent text-accent font-semibold rounded-sm hover:bg-accent hover:text-background transition-all duration-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download size={18} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
