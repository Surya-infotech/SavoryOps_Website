import ownerPanelImage from '../assets/Owner Panel.png'
import superAdminPanelImage from '../assets/Super Admin Panel.png'
import landingPageImage from '../assets/Landing Page.png'
import userAppImage from '../assets/User App.png'
import employeeAppImage from '../assets/Employee App.png'
import heroImage from '../assets/Hero.png'

export const homeHero = {
  badge: 'SavoryOps White Label SaaS',
  title: 'Launch and Scale Your White Label Restaurant Platform',
  description:
    'SavoryOps gives you a complete white label licensing-ready ecosystem so you can brand, deploy, and scale restaurant operations under your own identity.',
  heroImage,
  metrics: [
    { label: 'Tenants', value: '128' },
    { label: 'Outlets', value: '640+' },
    { label: 'Live Sync', value: '99.9%' },
  ],
}

export const walkthroughTabs = [
  {
    label: 'Super Admin Panel',
    title: 'Global command for multi-tenant governance',
    text: 'Manage tenants, subscriptions, permissions, and global settings from one clean control layer with white label branding controls.',
    bullets: ['Tenant lifecycle monitoring', 'Plan and billing governance', 'White label theme and brand controls'],
    image: superAdminPanelImage,
  },
  {
    label: 'Owner Panel',
    title: 'Performance intelligence for restaurant leaders',
    text: 'Track branch-level outcomes in real time with analytics, menu insights, and operational visibility.',
    bullets: ['Revenue and P&L clarity', 'Branch and menu optimization', 'Role and shift orchestration'],
    image: ownerPanelImage,
  },
  {
    label: 'Landing Page',
    title: 'The Digital Front Door for your brand',
    text: 'Create a beautiful first impression with a conversion-focused landing page that reflects your white label brand identity.',
    bullets: [
      'High-conversion hero and CTA structure',
      'Brand-ready sections for offers, stories, and trust',
      'SEO-friendly layout for discoverability and growth',
    ],
    image: landingPageImage,
  },
  {
    label: 'User App',
    title: 'Guest-first experience from phone to table',
    text: 'From discovery to checkout, the User App keeps ordering smooth and transparent.',
    bullets: ['QR and mobile ordering', 'Live order tracking', 'Reservation and payment flow'],
    image: userAppImage,
  },
  {
    label: 'Employee App',
    title: 'Fast coordination for frontline teams',
    text: 'Connect waiter, chef, cashier, and host actions in one real-time workflow engine.',
    bullets: [
      '5-role coordination: Waiter, Head Chef, Chef, Cashier, and Host',
      'KOT flow management',
      'Role-based action screens',
      'Faster handoffs, fewer delays',
    ],
    image: employeeAppImage,
  },
]

export const whySavoryCards = [
  {
    title: 'Built for Growth',
    text: 'Scale from one kitchen to one hundred. Multi-tenant architecture keeps expansion clean and headache-free.',
    icon: 'growth',
  },
  {
    title: 'Crystal Clear ROI',
    text: 'Fiscal reports show exactly where your green is growing. Every decision gets sharper, faster.',
    icon: 'roi',
  },
  {
    title: 'Harmony in Motion',
    text: 'KOT and Table Reservations move as one flow. Staff stays calm even during rush hour.',
    icon: 'sync',
  },
  {
    title: 'White Label Licensing Ready',
    text: 'Rebrand SavoryOps as your own product with licensing-friendly controls for logo, theme, and platform identity.',
    icon: 'global',
  },
]

export const ecosystemBundleCards = [
  {
    slug: 'super-admin-panel',
    title: 'Super Admin',
    role: 'The Conductor',
    description: 'Orchestrate your entire brand empire.',
  },
  {
    slug: 'owner-panel',
    title: 'Owner Panel',
    role: 'The Visionary',
    description: 'Real-time P&L and menu engineering at your fingertips.',
  },
  {
    slug: 'landing-page',
    title: 'Landing Page',
    role: 'The Digital Host',
    description: 'A beautiful, high-converting front door for your guests.',
  },
  {
    slug: 'user-app',
    title: 'User App',
    role: 'The Guest Experience',
    description: 'Seamless ordering and loyalty in their pocket.',
  },
  {
    slug: 'employee-app',
    title: 'Employee App',
    role: 'The Heartbeat',
    description: 'Empowering your team with KOT and schedules.',
  },
]

export const inHomeContact = {
  title: 'In-Home Contact',
  subtitle: 'A warm invitation to connect with the SavoryOps team.',
  infoItems: [
    { type: 'mail', label: 'Drop us a line:', value: 'info@savoryops.com' },
    { type: 'address', label: 'Visit the kitchen:', value: 'Surat, Gujarat, India.' },
    { type: 'phone', label: 'Give us a ring:', value: '+91 7621908664' },
  ],
  formTitle: 'The Shorty Form',
  formCaption: 'We usually respond faster than a fresh order of fries!',
}

export const faqItems = [
  {
    q: 'What exactly is multi-tenant architecture?',
    a: 'Think of it as one master recipe that still gives every restaurant its own unique flavor and kitchen. SavoryOps provides shared platform power with secure, independent workspaces for each brand.',
  },
  {
    q: 'Does the Employee App work on all phones?',
    a: 'Yes! It is designed as a pocket-friendly companion for every member of your team, with smooth performance across modern mobile devices.',
  },
  {
    q: 'Is my data safe with SavoryOps?',
    a: 'Absolutely. Trust is always on the menu with end-to-end encryption, GDPR-aware controls, and secure architecture best practices.',
  },
  {
    q: 'Can I manage multiple currencies?',
    a: 'Absolutely. We speak the language of global growth with multi-currency support built for expanding operations.',
  },
  {
    q: 'How does the KOT sync with the QR menu?',
    a: "Like magic: orders move straight from the guest's fingertips to the chef's screen in real time, keeping service quick and coordinated.",
  },
]