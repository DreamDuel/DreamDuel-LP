'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function TermsPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-bg-deep">
      <Navbar 
        translations={{
          home: t('navbar.home'),
          howItWorks: t('navbar.howItWorks'),
          features: t('navbar.features'),
          pricing: t('navbar.pricing'),
          faq: t('navbar.faq'),
        }}
      />

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('navbar.home')}
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
          {t('terms.title')}
        </h1>

        {/* Content */}
        <div className="space-y-6">
          {t.raw('terms.sections').map((section: { heading: string; content: string }, index: number) => (
            <section
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Last Updated */}
        <p className="text-gray-500 text-sm mt-12 text-center">
          {t('footer.copyright')}
        </p>
      </div>

      <Footer 
        translations={{
          tagline: t('footer.tagline'),
          product: t('footer.product'),
          pricing: t('footer.pricing'),
          howItWorks: t('footer.howItWorks'),
          faq: t('footer.faq'),
          community: t('footer.community'),
          legal: t('footer.legal'),
          privacy: t('footer.privacy'),
          terms: t('footer.terms'),
          contact: t('footer.contact'),
          support: t('footer.support'),
          email: t('footer.email'),
          madeWith: t('footer.madeWith'),
          by: t('footer.by'),
          copyright: t('footer.copyright'),
        }}
      />
    </main>
  );
}
