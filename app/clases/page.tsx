import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Classes from '../components/Classes';
import Footer from '../components/Footer';
import { siteConfig } from '../seo';

export const metadata: Metadata = {
  title: 'Clases de trading',
  description:
    'Conoce el programa de clases online de ABC del Trading 503, temario, precio y bonos incluidos.',
  alternates: {
    canonical: `${siteConfig.url}/clases`,
  },
};

export default function ClassesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Classes />
      </div>
      <Footer />
    </main>
  );
}
