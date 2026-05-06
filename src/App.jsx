
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import BookDemoPage from './pages/BookDemoPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import HomePageComposed from './pages/HomePageComposed'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePageComposed />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book-demo" element={<BookDemoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
