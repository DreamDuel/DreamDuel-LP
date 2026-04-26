'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';

export default function Home() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <main className="min-h-screen relative">
      {/* Navbar */}
      <Navbar 
        translations={{
          home: t('navbar.home'),
          howItWorks: t('navbar.howItWorks'),
          features: t('navbar.features'),
          pricing: t('navbar.pricing'),
          faq: t('navbar.faq'),
        }}
      />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section id="inicio" className="pt-20">
        <HeroSection 
          translations={{
            title: t('hero.title'),
            subtitleHighlight: t('hero.subtitleHighlight'),
            subtitle: t('hero.subtitle'),
            ctaPrimary: t('hero.ctaPrimary'),
          }}
        />
      </section>

      {/* Trust Badges */}
      <TrustBadges 
        translations={{
          items: t.raw('trustBadges.items'),
        }}
      />

      {/* How It Works */}
      <section id="comofunciona">
        <HowItWorks 
          translations={{
            title: t('howItWorks.title'),
            subtitle: t('howItWorks.subtitle'),
            steps: t.raw('howItWorks.steps'),
          }}
        />
      </section>

      {/* Features Section */}
      <section id="caracteristicas">
        <FeaturesSection 
          translations={{
            title: t('features.title'),
            subtitle: t('features.subtitle'),
            items: t.raw('features.items'),
          }}
        />
      </section>

      {/* Pricing Section */}
      <section id="precios">
        <PricingSection 
          translations={{
            badge: t('pricing.badge'),
            title: t('pricing.title'),
            subtitle: t('pricing.subtitle'),
            price: t('pricing.price'),
            period: t('pricing.period'),
            freeHighlight: t('pricing.freeHighlight'),
            benefits: t.raw('pricing.benefits'),
            cta: t('pricing.cta'),
            disclaimer: t('pricing.disclaimer'),
          }}
        />
      </section>


      {/* FAQ */}
      <section id="faq">
        <FAQ 
          translations={{
            title: t('faq.title'),
            subtitle: t('faq.subtitle'),
            items: t.raw('faq.items'),
          }}
        />
      </section>



      {/* Footer */}
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

      {/* Floating Components */}
      <ScrollToTop />
    </main>
  );
}
