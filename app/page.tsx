import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Indicators from './components/Indicators';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import Comments from './components/Comments';
import { siteConfig } from './seo';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.ogImage}`,
        description: siteConfig.description,
        areaServed: 'Latinoamerica',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SV',
        },
      },
      {
        '@type': 'Service',
        serviceType: 'Clases de trading online',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: 'Latinoamerica',
        availableLanguage: 'es',
        description: siteConfig.description,
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <Indicators />
      <Classes />
      <Gallery />
      <VideoSection />
      <Comments />
      <Footer />
    </main>
  );
}
