const SEOConfig = {
  titleTemplate: "%s | Decor'em by Sonya Mehta",
  defaultTitle: "Decor'em by Sonya Mehta | Luxury Interior Designer & Renovation Expert in Houston",
  description: "Transform your space with Decor'em by Sonya Mehta — Houston's trusted interior design and renovation studio for luxury homes, kitchens, and commercial spaces. Serving Sugar Land, Katy, The Woodlands, River Oaks, Memorial.",
  canonical: 'https://www.decorembysonyamehta.com/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.decorembysonyamehta.com/',
    site_name: "Decor'em by Sonya Mehta",
    images: [
      {
        url: 'https://www.decorembysonyamehta.com/images/hero/livingroom.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury interior design in Houston by Decor\'em by Sonya Mehta',
      },
    ],
  },
  twitter: {
    handle: '@s_decorem',
    site: '@s_decorem',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'interior designer Houston, home renovation expert Houston, luxury interior design Texas, kitchen remodeling Houston, residential interior design Houston, bathroom renovation Houston, commercial interior design Texas, interior design Sugar Land, interior design Katy, interior design The Woodlands, interior design River Oaks, interior design Memorial, Sonya Mehta interior designer, modular interior design, custom home design Houston, luxury home staging',
    },
    {
      name: 'author',
      content: 'Sonya Mehta',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'geo.region',
      content: 'US-TX',
    },
    {
      name: 'geo.placename',
      content: 'Houston',
    },
    {
      name: 'geo.position',
      content: '29.7604;-95.3698',
    },
    {
      name: 'ICBM',
      content: '29.7604, -95.3698',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ],
};

export default SEOConfig;
