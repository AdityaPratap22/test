import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Download, Calendar, Instagram, CheckCircle } from 'lucide-react';
import Link from 'next/link';

/**
 * Contact Page
 * Conversion-focused contact form with validation
 * Houston interior design consultation booking
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    budget: '',
    message: '',
    consent: false,
    files: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to being contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, files: Array.from(files) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          location: '',
          budget: '',
          message: '',
          consent: false,
          files: []
        });

        // Track conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_submit', {
            event_category: 'engagement',
            event_label: 'Contact Form'
          });
        }
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NextSeo
        title="Contact | Decor'em by Sonya Mehta — Houston Interior Design"
        description="Contact Decor'em by Sonya Mehta for design consultations, renovation quotes, and portfolio requests. Serving Houston and nearby neighborhoods."
        openGraph={{
          title: "Contact | Decor'em by Sonya Mehta",
          description: "Schedule a design consultation or download our brochure"
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Decor'em by Sonya Mehta",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-281-701-6041",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "English"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-32 bg-[#FAF9F6]">
        <div className="container-custom max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#2B2B2B] mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-[#3E3E3E] max-w-3xl mx-auto mb-8">
              Schedule a design consultation, request our brochure, or tell us about your project — we'll respond within 48 business hours.
            </p>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap text-sm text-[#3E3E3E] uppercase tracking-wide">
              <span>Complimentary Consultation</span>
              <span className="text-[#C9A76F]">•</span>
              <span>Houston-Based</span>
              <span className="text-[#C9A76F]">•</span>
              <span>10+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Left/Center Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#2B2B2B] mb-8">
                  Book Your Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-[#E4DED7]'} rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F]`}
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-[#E4DED7]'} rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F]`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-3 border border-[#E4DED7] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F]"
                    />
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E4DED7] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F] bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="commercial">Commercial</option>
                      <option value="modular">Modular</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Sugar Land, Memorial, River Oaks"
                      className="w-full px-4 py-3 border border-[#E4DED7] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F]"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E4DED7] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F] bg-white"
                    >
                      <option value="">Select a range</option>
                      <option value="<10k">&lt; $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-150k">$50,000 - $150,000</option>
                      <option value="150k+">$150,000+</option>
                    </select>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label htmlFor="files" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Upload Images (Optional - Max 3 files, 10MB total)
                    </label>
                    <input
                      type="file"
                      id="files"
                      name="files"
                      onChange={handleChange}
                      accept="image/*,.pdf"
                      multiple
                      className="w-full px-4 py-3 border border-[#E4DED7] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F]"
                    />
                    <p className="mt-1 text-xs text-[#3E3E3E]">Upload inspiration images or floor plans (JPG, PNG, PDF)</p>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Message (300-500 characters) *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project, timeline, and design preferences..."
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-[#E4DED7]'} rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C9A76F] resize-none`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-500">{errors.message}</p>
                      )}
                      <p className="text-xs text-[#3E3E3E] ml-auto">{formData.message.length}/500</p>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className={`mt-1 w-4 h-4 text-[#C9A76F] border-[#E4DED7] rounded focus:ring-[#C9A76F] ${errors.consent ? 'border-red-500' : ''}`}
                        aria-invalid={errors.consent ? 'true' : 'false'}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                      />
                      <span className="ml-2 text-sm text-[#3E3E3E]">
                        I consent to being contacted by Decor'em about this inquiry. <Link href="/privacy" className="text-[#C9A76F] hover:underline">Privacy Policy</Link>
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="consent-error" className="mt-1 text-sm text-red-500">{errors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-10 py-4 bg-[#C9A76F] text-white font-semibold rounded-sm hover:bg-[#A88650] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Book Consultation'}
                  </button>

                  {errors.submit && (
                    <p className="text-sm text-red-500 text-center">{errors.submit}</p>
                  )}
                </form>
              </motion.div>
            </div>

            {/* Contact Details & Quick Actions - Right Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="bg-[#FAF9F6] p-8 rounded-sm">
                  <h3 className="text-xl font-serif font-semibold text-[#2B2B2B] mb-6">
                    Contact Information
                  </h3>

                  {/* Contact Cards */}
                  <div className="space-y-6 mb-8">
                    <a href="mailto:decorembysonyamehta@gmail.com" className="flex items-start group">
                      <Mail className="w-5 h-5 text-[#C9A76F] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#2B2B2B] mb-1">Email</p>
                        <p className="text-sm text-[#3E3E3E] group-hover:text-[#C9A76F] transition-colors">
                          decorembysonyamehta@gmail.com
                        </p>
                      </div>
                    </a>

                    <a href="tel:+12817016041" className="flex items-start group">
                      <Phone className="w-5 h-5 text-[#C9A76F] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#2B2B2B] mb-1">Phone</p>
                        <p className="text-sm text-[#3E3E3E] group-hover:text-[#C9A76F] transition-colors">
                          +1 (281) 701-6041
                        </p>
                      </div>
                    </a>

                    <a href="https://maps.google.com/?q=Houston,Texas" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                      <MapPin className="w-5 h-5 text-[#C9A76F] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#2B2B2B] mb-1">Location</p>
                        <p className="text-sm text-[#3E3E3E] group-hover:text-[#C9A76F] transition-colors">
                          Houston, Texas
                        </p>
                      </div>
                    </a>

                    <a href="https://www.instagram.com/s_decorem?igsh=MThpdG5rMWkxYTF0Yg==" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                      <Instagram className="w-5 h-5 text-[#C9A76F] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#2B2B2B] mb-1">Instagram</p>
                        <p className="text-sm text-[#3E3E3E] group-hover:text-[#C9A76F] transition-colors">
                          @s_decorem
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Quick CTAs */}
                  <div className="space-y-3 mb-8">
                    <a
                      href="/files/DecorEm_Brochure.pdf"
                      download
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'brochure_download', {
                            event_category: 'engagement',
                            event_label: 'Contact Page'
                          });
                        }
                      }}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#C9A76F] text-white font-semibold rounded-sm hover:bg-[#A88650] transition-all duration-300"
                    >
                      <Download size={18} />
                      Download Brochure
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white border-2 border-[#C9A76F] text-[#C9A76F] font-semibold rounded-sm hover:bg-[#C9A76F] hover:text-white transition-all duration-300"
                    >
                      <Calendar size={18} />
                      Schedule a 30-min Call
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div className="border-t border-[#E4DED7] pt-6">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#C9A76F] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#2B2B2B] mb-2">Office Hours</p>
                        <p className="text-xs text-[#3E3E3E] leading-relaxed">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: By Appointment<br />
                          Sunday: Closed
                        </p>
                        <p className="text-xs text-[#C9A76F] mt-2">Response time: Within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Service Area */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2B2B2B] mb-4">
                Service Area
              </h2>
              <p className="text-base md:text-lg text-[#3E3E3E]">
                We serve Houston metro area. On-site visits available by appointment.
              </p>
            </div>

            {/* Map Embed */}
            <div className="aspect-video bg-[#E4DED7] rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443093.2299629534!2d-95.6688397!3d29.7601927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Houston, Texas - Service Area Map"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-[#3E3E3E]">
                Serving: Sugar Land • River Oaks • Memorial • West University • Downtown • The Woodlands • Katy
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-sm max-w-md w-full text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-[#2B2B2B] mb-4">
              Thank You!
            </h3>
            <p className="text-[#3E3E3E] mb-6">
              Your consultation request has been received. We'll respond within 48 business hours.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-8 py-3 bg-[#C9A76F] text-white font-semibold rounded-sm hover:bg-[#A88650] transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
