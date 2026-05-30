import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded'
import BrandingWatermarkRoundedIcon from '@mui/icons-material/BrandingWatermarkRounded'
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded'
import { Card, CardContent, Container, Typography } from '@mui/material'

const corePillars = [
  {
    title: 'Mission',
    text: 'Help restaurant brands run faster, cleaner, and smarter operations from one connected platform.',
  },
  {
    title: 'Vision',
    text: 'Set the green standard for modern hospitality operations with scalable, multi-tenant software.',
  },
  {
    title: 'Value',
    text: 'We build for clarity, speed, security, and smooth teamwork across every role in the business.',
  },
]

const softwareHighlights = [
  'Multi-tenant architecture for one outlet or many brands',
  'Connected ecosystem: Super Admin, Owner Panel, User App, Employee App, and Landing Page',
  'Real-time sync across QR ordering, KOT, reservations, billing, and analytics',
  'Role-ready workflows for Waiter, Head Chef, Chef, Cashier, Host, and Delivery',
]

const serviceCards = [
  {
    title: 'White Label Setup',
    description:
      'Launch SavoryOps under your own software identity with brand-ready naming, logo, and visual configuration support.',
    icon: <BrandingWatermarkRoundedIcon className="!text-emerald-700" />,
  },
  {
    title: 'Onboarding and Training',
    description:
      'We help your admins, owners, and teams go live quickly with guided setup, role-based walkthroughs, and activation support.',
    icon: <HandshakeRoundedIcon className="!text-emerald-700" />,
  },
  {
    title: 'Growth and Reporting',
    description:
      'Turn operational data into decisions with fiscal insights, performance visibility, and outlet-level growth tracking.',
    icon: <AutoGraphRoundedIcon className="!text-emerald-700" />,
  },
  {
    title: 'Continuous Support',
    description:
      'Our team stays close after launch with product guidance, issue resolution, and practical optimization advice.',
    icon: <SupportAgentRoundedIcon className="!text-emerald-700" />,
  },
]

function AboutPage() {
  return (
    <main className="bg-[#f8fffb] py-16">
      <Container maxWidth="lg">
        <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_16px_32px_rgba(6,78,59,0.08)] md:p-10">
          <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34] md:!text-4xl">
            About SavoryOps
          </Typography>
          <Typography className="!mt-4 !max-w-4xl !font-sans !text-[#355A4F]">
            SavoryOps is a white-label restaurant SaaS platform designed to unify the full operating lifecycle, from
            digital ordering and kitchen flow to billing, reservations, and business intelligence. We help software
            founders, restaurant groups, and operators launch branded ecosystems faster while maintaining control,
            reliability, and scale.
          </Typography>
          <Typography className="!mt-3 !max-w-4xl !font-sans !text-[#355A4F]">
            Our approach combines product depth with practical service support, so your team does not just buy
            software, it gains a long-term operations partner focused on adoption, performance, and measurable growth.
          </Typography>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {corePillars.map((item) => (
            <Card key={item.title} className="!rounded-2xl !border !border-emerald-100 !bg-[#f8fffb] !shadow-none">
              <CardContent className="!p-5">
                <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                  {item.title}
                </Typography>
                <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/50 p-6 md:p-8">
          <Typography variant="h3" className="!font-sans !text-2xl !font-bold !text-[#1A3C34]">
            What our software delivers
          </Typography>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {softwareHighlights.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-medium text-[#2f5a4b]"
              >
                {point}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <Typography variant="h3" className="!font-sans !text-2xl !font-bold !text-[#1A3C34]">
            Services around the platform
          </Typography>
          <Typography className="!mt-2 !font-sans !text-[#355A4F]">
            SavoryOps supports your full journey from setup to scale, not just day-one deployment.
          </Typography>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {serviceCards.map((item) => (
              <Card
                key={item.title}
                className="!rounded-2xl !border !border-emerald-100 !bg-white shadow-[0_10px_20px_rgba(6,78,59,0.06)]"
              >
                <CardContent className="!p-5">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100">
                    {item.icon}
                  </div>
                  <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                    {item.title}
                  </Typography>
                  <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}

export default AboutPage
