import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import HomeCtaSection from './home/HomeCtaSection'
import Navbar from './Navbar'

function SiteLayout() {
  const { pathname } = useLocation()
  const hideGlobalCta = pathname === '/contact'

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
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
