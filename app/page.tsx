import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BingXPartner from './components/BingXPartner';
import VideoSection from './components/VideoSection';
import WhyChoose from './components/WhyChoose';
import WhatYouGet from './components/WhatYouGet';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CommunityLinks from './components/CommunityLinks';
import Comments from './components/Comments';
import Footer from './components/Footer';
import { buildHomeJsonLd } from './seo';

export default function Home() {
  const structuredData = buildHomeJsonLd();

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <BingXPartner />
      <VideoSection />
      <WhyChoose />
      <WhatYouGet />
      <CTASection />
      <Testimonials />
     
      <CommunityLinks />
      <Comments />
       <FAQ />
      <Footer />
    </main>
  );
}
