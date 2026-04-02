import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function JsonLd() {
  const locale = await getLocale();
  const t = await getTranslations('faq');

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Moritz van Laack',
    url: SITE_URL,
    image: `${SITE_URL}/images/portrait-nobg.png`,
    jobTitle: 'Procurement Expert & Entrepreneur',
    description: SITE_DESCRIPTION,
    email: 'info@vanlaack-partners.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boisseréestraße 4',
      addressLocality: 'Cologne',
      postalCode: '50674',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://www.linkedin.com/in/moritz-van-laack-99a073142/',
      'https://sourcera.ai',
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Sourcera AI',
        url: 'https://sourcera.ai',
        description: 'The first end-to-end Opportunity-to-Savings (O2S) platform for procurement.',
      },
      {
        '@type': 'Organization',
        name: 'van Laack & partners',
        description: '360-degree supply chain management and procurement consulting.',
      },
    ],
    knowsAbout: [
      'Procurement',
      'Supply Chain Management',
      'Digital Transformation',
      'AI in Procurement',
      'SAP Ariba',
      'Coupa',
      'Ivalua',
      'Source-to-Contract',
      'Procure-to-Pay',
      'Category Management',
      'Spend Analysis',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Hanyang University',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqKeys.map((key) => ({
      '@type': 'Question',
      name: t(`items.${key}.question`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`items.${key}.answer`),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
