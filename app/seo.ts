export const siteConfig = {
  name: 'ABC del Trading 503',
  title: 'ABC del Trading 503 | Clases de trading online desde cero',
  description:
    'Clases de trading online desde cero con acompañamiento real, sesiones en vivo y explicaciones claras desde El Salvador para toda Latinoamérica.',
  url: 'https://abc-trading-pi.vercel.app',
  locale: 'es_SV',
  ogImage: '/logo.png',
  keywords: [
    'trading',
    'clases de trading',
    'curso de trading online',
    'aprender trading desde cero',
    'trading El Salvador',
    'mentor de trading',
    'clases online de trading',
    'Price Logistic 7',
    'indicador TradingView',
  ],
};

export const socialProfiles = [
  'https://youtube.com/@abctrading503',
  'https://t.me/Trading503SV',
  'https://www.tiktok.com/@pricelogic7',
];

export const buildHomeJsonLd = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.ogImage}`,
      description: siteConfig.description,
      sameAs: socialProfiles,
      areaServed: 'Latinoamérica',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'SV',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: 'es-SV',
      publisher: {
        '@id': `${siteConfig.url}/#organization`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteConfig.url}/#clases-trading`,
      name: 'Clases de trading online desde cero',
      serviceType: 'Educación online de trading',
      provider: {
        '@id': `${siteConfig.url}/#organization`,
      },
      areaServed: 'Latinoamérica',
      availableLanguage: 'es',
      description: siteConfig.description,
      url: `${siteConfig.url}/clases`,
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteConfig.url}/indicador#price-logistic-7`,
      name: 'Price Logistic 7',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'TradingView',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: `${siteConfig.url}/indicador`,
      },
    },
  ],
});
