import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document Component
 * Enhances the default HTML document structure with SEO optimizations
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon - Multiple sizes for better compatibility */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logos/decor'em-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/logos/decor'em-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logos/decor'em-logo.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#C9A76F" />
        <meta name="msapplication-TileColor" content="#C9A76F" />

        {/* Additional Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Schema.org Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.decorembysonyamehta.com/#organization",
              name: "Decor'em by Sonya Mehta",
              alternateName: "Decor'em Interior Design",
              legalName: "Decor'em by Sonya Mehta",
              image: [
                "https://www.decorembysonyamehta.com/images/hero/livingroom.jpg",
                "https://www.decorembysonyamehta.com/images/logos/decor'em-logo.png",
              ],
              logo: "https://www.decorembysonyamehta.com/images/logos/decor'em-logo.png",
              description:
                "Transform your space with Decor'em by Sonya Mehta — Houston's premier interior design and renovation practice specializing in luxury residential homes, kitchens, bathrooms, and commercial spaces.",
              founder: {
                "@type": "Person",
                name: "Sonya Mehta",
                jobTitle: "Interior Designer & Founder",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.7604",
                longitude: "-95.3698",
              },
              email: "decorembysonyamehta@gmail.com",
              telephone: "+1-281-701-6041",
              priceRange: "$$$",
              url: "https://www.decorembysonyamehta.com",
              areaServed: [
                {
                  "@type": "City",
                  name: "Houston",
                },
                {
                  "@type": "City",
                  name: "Sugar Land",
                },
                {
                  "@type": "City",
                  name: "Katy",
                },
                {
                  "@type": "City",
                  name: "The Woodlands",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "29.7604",
                  longitude: "-95.3698",
                },
                geoRadius: "50 miles",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "By Appointment",
                },
              ],
              sameAs: [
                "https://www.instagram.com/s_decorem?igsh=MThpdG5rMWkxYTF0Yg==",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Interior Design Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Interior Design",
                      description:
                        "Complete home design and renovation services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Kitchen Design & Remodeling",
                      description: "Custom kitchen design and renovation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bathroom Design & Remodeling",
                      description: "Luxury bathroom design and renovation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Interior Design",
                      description: "Professional commercial space design",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Modular & Custom Furniture",
                      description: "Custom furniture design and installation",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Schema.org - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.decorembysonyamehta.com/#website",
              url: "https://www.decorembysonyamehta.com",
              name: "Decor'em by Sonya Mehta",
              description:
                "Houston's premier interior design and renovation practice",
              publisher: {
                "@id": "https://www.decorembysonyamehta.com/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.decorembysonyamehta.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en-US",
            }),
          }}
        />

        {/* Schema.org - Breadcrumb List (will be enhanced per page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.decorembysonyamehta.com",
                },
              ],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
