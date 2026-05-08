import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import HomeCtaSection from './home/HomeCtaSection'
import Navbar from './Navbar'
import Seo from './Seo'

const PAGE_SEO = {
  '/': {
    title: 'White Label Restaurant SaaS Platform',
  },
  '/about': {
    title: 'About',
  },
  '/book-demo': {
    title: 'Book Demo',
  },
  '/contact': {
    title: 'Contact',
  },
  '/faq': {
    title: 'FAQ',
  },
  '/pricing': {
    title: 'Pricing',
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
