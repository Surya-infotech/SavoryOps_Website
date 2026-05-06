import FaqSection from '../components/home/FaqSection'

const whiteLabelFaqItems = [
  {
    q: 'Can I change the software name to my own brand?',
    a: 'Yes. SavoryOps is white-label ready, so you can present the platform under your own product name for your clients and outlets.',
  },
  {
    q: 'Can I change the logo without touching code?',
    a: 'Yes. You can update logo assets through brand configuration and publish your updated identity without development changes.',
  },
  {
    q: 'Can I change theme colors without editing code files?',
    a: 'Yes. Core brand colors can be configured for your white-label setup, so you can align the UI with your company palette quickly.',
  },
  {
    q: 'Can each tenant keep a different brand identity?',
    a: 'Yes. The multi-tenant architecture supports isolated tenant experiences, including brand-level settings where enabled.',
  },
  {
    q: 'Do branding changes affect live restaurant operations?',
    a: 'No operational downtime is required for standard branding updates. Ordering, KOT, and panel workflows continue normally.',
  },
  {
    q: 'Can I manage user roles in the Employee App?',
    a: 'Yes. Role-based workflows are supported for Waiter, Head Chef, Chef, Cashier, and Host so each team member sees the right actions.',
  },
  {
    q: 'Is SavoryOps suitable for scaling from one outlet to many?',
    a: 'Absolutely. The platform is designed to scale from single-location operations to large multi-outlet restaurant networks.',
  },
  {
    q: 'Can I launch quickly as a white-label product?',
    a: 'Yes. With built-in modules for panels, apps, and operations, you can onboard, brand, and go live faster than building from scratch.',
  },
]

function FaqPage() {
  return <FaqSection items={whiteLabelFaqItems} />
}

export default FaqPage
