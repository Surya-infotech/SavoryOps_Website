export const softwareFeatures = [
  {
    title: 'Smart POS Core',
    details: 'Eliminate bottlenecks at checkout with a lightning-fast, cloud-based POS designed for peak service windows.',
  },
  {
    title: 'Dynamic Dashboard',
    details: "Get a bird's-eye view of branches with live earnings, inventory movement, and operational alerts.",
  },
  {
    title: 'Multi Restaurant',
    details: 'Run food courts, cloud kitchens, or vendor ecosystems with independent restaurant controls under one platform.',
  },
  {
    title: 'Multi Branch Support',
    details: 'Manage multiple locations from one dashboard with branch-level visibility and centralized controls.',
  },
  {
    title: 'Live Analytics',
    details: 'Make data-driven decisions using real-time insights across sales behavior, trends, and branch performance.',
  },
  {
    title: 'Order Reports',
    details: 'Access granular transaction and order histories to audit activity and resolve service issues quickly.',
  },
  {
    title: 'QR Based Menu',
    details: 'Enable contactless browsing and ordering through table QR scans for faster, safer guest experiences.',
  },
  {
    title: 'Table Reservation',
    details: 'Let guests pre-book tables while your hosts manage floor availability with visual precision.',
  },
  {
    title: 'KOT Feature',
    details: 'Sync front-of-house and kitchen stations instantly with route-aware Kitchen Order Tickets.',
  },
  {
    title: 'Combo Meals',
    details: 'Increase average order value by offering flexible combo bundles with smart pricing logic.',
  },
  {
    title: 'Addon Meals',
    details: 'Drive upsells with customizable modifiers, add-ons, and dietary-friendly options.',
  },
  {
    title: 'Branch Pricing',
    details: 'Apply location-specific pricing while keeping one global menu structure in sync.',
  },
  {
    title: 'Staff Scheduling',
    details: 'Plan shifts, manage attendance, and monitor staffing with role-aware scheduling tools.',
  },
  {
    title: 'Digital Invoice',
    details: 'Generate branded, paperless invoices instantly and deliver customer-friendly digital receipts.',
  },
  {
    title: 'Fiscal Year Reports',
    details: 'Export structured fiscal reports aligned to your accounting cycle for confident financial decisions.',
  },
  {
    title: 'Multi Currency',
    details: 'Support international operations with localized pricing formats and global payment readiness.',
  },
  {
    title: 'Multi Language',
    details: 'Serve diverse guests and teams with language-flexible interfaces and translated experiences.',
  },
  {
    title: 'Customer Reviews',
    details: 'Collect post-order feedback and monitor customer sentiment to improve service quality over time.',
  },
]

export const ecosystemItems = [
  {
    slug: 'landing-page',
    title: 'Landing Page',
    subtitle: 'Marketing gateway for owner acquisition and brand communication.',
    shortTagline: 'The Digital Host',
    icon: '🪴',
    points: [
      'Dynamic branding from software settings.',
      'Lead-focused sections for feature communication and conversion.',
      'Localized content support for wider customer reach.',
    ],
  },
  {
    slug: 'super-admin-panel',
    title: 'Super Admin Panel',
    subtitle: 'Global control center for complete SaaS ecosystem management.',
    shortTagline: 'The Conductor',
    icon: '🎛️',
    points: [
      'Platform identity and no-code rebranding.',
      'Tenant and subscription lifecycle governance.',
      'System-level performance and analytics visibility.',
    ],
  },
  {
    slug: 'owner-panel',
    title: 'Owner Panel',
    subtitle: 'Business operation hub for each restaurant tenant.',
    shortTagline: 'The Visionary',
    icon: '📈',
    points: [
      'Business and branch structure management.',
      'Menu, pricing, and operational configuration.',
      'Fiscal period setup, reporting, and business insights.',
    ],
  },
  {
    slug: 'user-app',
    title: 'User App',
    subtitle: 'Customer mobile experience for browsing, ordering, and reservations.',
    shortTagline: 'The Guest Favorite',
    icon: '📱',
    points: [
      'Secure customer onboarding and profile controls.',
      'Real-time order lifecycle updates and history.',
      'Table reservations and post-order engagement.',
    ],
  },
  {
    slug: 'employee-app',
    title: 'Employee App',
    subtitle: 'Role-based execution app for floor and kitchen teams.',
    shortTagline: 'The Heartbeat',
    icon: '🧑‍🍳',
    points: [
      'Operational workflow by assigned employee role.',
      'Order, reservation, and service collaboration in real time.',
      'Fast action views to improve service throughput.',
    ],
    roles: ['Waiter', 'Chef', 'Cashier', 'Host', 'Head Chef'],
  },
]

export const pricingPlans = [
  {
    name: 'Seed',
    price: '$29 / month',
    description: 'Perfect for new single-outlet teams starting digital operations.',
    features: ['QR Menu', 'Basic KOT', 'Table Reservation', 'Email support'],
  },
  {
    name: 'Sprout',
    price: '$79 / month',
    description: 'For fast-growing teams needing deeper operational controls.',
    features: ['Advanced KOT', 'Fiscal Year Reporting', 'Employee role workflows', 'Priority support'],
    featured: true,
  },
  {
    name: 'Harvest',
    price: 'Custom',
    description: 'For multi-branch, multi-currency, and enterprise governance.',
    features: ['Multi-currency support', 'Multi-tenant controls', 'Compliance-first security', 'Dedicated success manager'],
  },
]

export const featureDetailPages = [
  {
    slug: 'qr-menus',
    heroTitle: 'The Magic of QR Menus',
    heroSubtitle:
      'Turn every table into an instant digital welcome point with touchless browsing, faster ordering, and modern guest confidence.',
    mockupImage:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Instant menu discovery with zero waiting.',
      'Touchless interactions for cleaner, safer service.',
      'Higher order value through visual upsells and add-ons.',
    ],
    steps: [
      {
        title: 'Step 1: Guest scans and lands instantly',
        description: 'A quick scan opens the branch-specific menu without downloads or delays.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 2: Guest browses, customizes, and orders',
        description: 'Items, add-ons, and notes flow into one clean order stream.',
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 3: Team receives real-time confirmation',
        description: 'The order syncs instantly with kitchen and service teams.',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  {
    slug: 'order-management',
    heroTitle: 'Order Management That Never Misses a Beat',
    heroSubtitle:
      'Unify ordering channels into one live operational rhythm so every request lands at the right place, right time.',
    mockupImage:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Single source of truth for all orders.',
      'Real-time status shifts from create to closure.',
      'Reduced service delays and manual confusion.',
    ],
    steps: [
      {
        title: 'Step 1: Orders enter one live queue',
        description: 'Walk-in, QR, and waiter orders all merge into a structured stream.',
        image: 'https://images.unsplash.com/photo-1569058242273-92a9c755a0ec?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 2: Tasks route to the right team',
        description: 'Each role sees only the actions they need to execute quickly.',
        image: 'https://images.unsplash.com/photo-1514516430032-45f6c4d2d74a?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 3: Billing and completion sync automatically',
        description: 'Completed orders close cleanly with transparent records and analytics.',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  {
    slug: 'kitchen-harmony',
    heroTitle: 'Kitchen Harmony with Smart KOT',
    heroSubtitle:
      'Align front-of-house and chefs in one intelligent flow where every ticket is clear, prioritized, and actionable.',
    mockupImage:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Clear KOT visibility for faster prep decisions.',
      'Real-time progress updates across stations.',
      'Smoother service rhythm during peak load.',
    ],
    steps: [
      {
        title: 'Step 1: KOT is generated instantly',
        description: 'Every approved order converts into role-ready kitchen tickets.',
        image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 2: Kitchen assigns and progresses tasks',
        description: 'Stations move tickets from pending to in-prep to ready.',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 3: Service team gets ready alerts',
        description: 'Waiters receive completion status and serve without delay.',
        image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  {
    slug: 'subscription-success',
    heroTitle: 'Subscription Management for Predictable Success',
    heroSubtitle:
      'Offer flexible plans with confident controls so every owner can choose a path that fits their growth stage.',
    mockupImage:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Clear plan choices for every business maturity level.',
      'Access rules that protect premium value.',
      'Reliable recurring growth through structured monetization.',
    ],
    steps: [
      {
        title: 'Step 1: Owner picks the right growth plan',
        description: 'Free, limited, or paid plans align to operational readiness.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 2: Feature access updates automatically',
        description: 'Plan selection instantly governs available modules and limits.',
        image: 'https://images.unsplash.com/photo-1551281044-8b4a68625903?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'Step 3: Leadership tracks renewal health',
        description: 'Super Admin and owners monitor conversion and retention trends.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
]
