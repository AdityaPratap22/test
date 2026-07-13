import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '../styles/globals.css';
import '../styles/theme.css';
import '../styles/animations.css';
import '../styles/typography.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Main App Component
 * Wraps all pages with global layout and SEO
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global SEO Configuration */}
      <DefaultSeo {...SEO} />
      
      {/* Global Layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 mt-20">
          <Component {...pageProps} />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
