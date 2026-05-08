import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import HomeCtaSection from './home/HomeCtaSection'
import Navbar from './Navbar'
import Seo from './Seo'

const PAGE_SEO = {
  '/': {
    title: 'White Label Restaurant SaaS Platform',
    description:
      'SavoryOps helps you launch and scale a white-label restaurant SaaS platform with ordering, KOT, billing, reservations, and analytics.',
    path: '/',
  },
  '/about': {
    title: 'About',
    description:
      'Learn about SavoryOps, our mission, and how we help restaurant brands launch modern white-label operations software.',
    path: '/about',
  },
  '/book-demo': {
    title: 'Book Demo',
    description:
      'Book a SavoryOps demo call and see how our white-label restaurant platform supports operations, growth, and multi-outlet scale.',
    path: '/book-demo',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Contact SavoryOps for white-label setup, onboarding support, demos, and partnership conversations for your restaurant SaaS journey.',
    path: '/contact',
  },
  '/faq': {
    title: 'FAQ',
    description:
      'Find answers about SavoryOps white-label branding, software setup, tenant support, scalability, and restaurant workflow features.',
    path: '/faq',
  },
  '/pricing': {
    title: 'Pricing',
    description:
      'Explore SavoryOps pricing plans for white-label licensing, implementation support, and optional add-ons for faster launch.',
    path: '/pricing',
  },
}

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SavoryOps',
  url: 'https://grow.savoryops.com',
  logo: 'https://grow.savoryops.com/logo.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-7621908664',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English'],
    },
  ],
}

function SiteLayout() {
  const { pathname } = useLocation()
  const hideGlobalCta = pathname === '/contact'
  const seoConfig = PAGE_SEO[pathname] || PAGE_SEO['/']
  const jsonLd = pathname === '/' ? ORGANIZATION_JSON_LD : undefined

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Seo {...seoConfig} jsonLd={jsonLd} />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideGlobalCta && <HomeCtaSection />}
      <Footer />
    </div>
  )
}

export default SiteLayout
