import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Indicators from '../components/Indicators';
import Footer from '../components/Footer';
import { siteConfig } from '../seo';

export const metadata: Metadata = {
  title: 'Indicador Price Logistic 7',
  description:
    'Conoce el indicador Price Logistic 7 para TradingView y sus planes de acceso.',
  alternates: {
    canonical: `${siteConfig.url}/indicador`,
  },
};

export default function IndicatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Indicators />
      </div>
      <Footer />
    </main>
  );
}
