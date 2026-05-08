import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Button, Card, CardContent, Container, Typography } from '@mui/material'

function PricingPage() {
  const commonIncludes = [
    'Super Admin Panel',
    'Owner Panel',
    'Landing Page',
    'User App',
    'Employee App',
  ]

  const tiers = [
    {
      name: 'White Label License',
      price: '$549',
      subtitle: 'Core licensing plan for your branded software launch.',
      features: ['Software licensing', '1 month support included'],
      cta: 'Choose $549 Plan',
    },
    {
      name: 'White Label Bundle',
      price: '$719',
      subtitle: 'All-in-one package with licensing, setup, and extended support.',
      features: ['Software licensing', '5 months support included', 'Software setup included'],
      cta: 'Choose $719 Bundle',
      featured: true,
    },
  ]

  const addonPlans = [
    { name: '3 Month Support Add-on', price: '$89' },
    { name: 'Software Setup Fee', price: '$149' },
  ]

  return (
    <main className="bg-[#FDFBF7] py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" className="!text-[#1A3C34]">Pricing That Grows With Your Brand</Typography>
        <Typography className="!mt-3 !text-[#355A4F]">
          Clear white-label licensing plans with support and setup options for your SavoryOps launch.
        </Typography>

        <Card className="!mt-6 !border-emerald-200 !bg-emerald-50/40">
          <CardContent>
            <Typography variant="h6" className="!text-[#1A3C34]">
              Included In Both Plans
            </Typography>
            <Typography className="!mt-2 !text-sm !text-[#355A4F]">
              Every license includes the full SavoryOps product ecosystem.
            </Typography>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {commonIncludes.map((item) => (
                <div key={item} className="rounded-xl border border-emerald-100 bg-white px-3 py-2 text-sm font-medium text-[#1A3C34]">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.featured
                  ? '!relative !flex !h-full !overflow-visible !rounded-3xl !border-2 !border-emerald-500 !bg-emerald-50/40 shadow-[0_14px_28px_rgba(16,185,129,0.18)]'
                  : '!flex !h-full !rounded-3xl !border-emerald-100 !bg-white shadow-[0_10px_22px_rgba(6,78,59,0.06)]'
              }
            >
              {tier.featured ? (
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md">
                  <span className="inline-flex items-center gap-1">
                    <StarRoundedIcon fontSize="inherit" />
                    Most Popular
                  </span>
                </div>
              ) : null}

              <CardContent className={tier.featured ? '!flex !w-full !flex-col !p-6 !pt-7' : '!flex !w-full !flex-col !p-6'}>
                {tier.featured ? (
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Recommended Plan</div>
                ) : null}
                <Typography variant="h6" className="!text-[#1A3C34]">{tier.name}</Typography>
                <Typography className="!mt-2 !text-2xl !font-bold !text-[#1A3C34]">{tier.price}</Typography>
                <Typography className="!mt-2 !text-sm !font-semibold !text-[#355A4F]">{tier.subtitle}</Typography>
                <ul className="mt-4 space-y-2 text-sm text-[#355A4F]">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircleRoundedIcon fontSize="small" className="!text-emerald-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? 'contained' : 'outlined'}
                  className="!mt-5 !rounded-full !py-1.5"
                  fullWidth
                  color="primary"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="!mt-8 !border-emerald-100 !bg-white">
          <CardContent>
            <Typography variant="h6" className="!text-[#1A3C34]">Optional Add-ons</Typography>
            <Typography className="!mt-2 !text-sm !text-[#355A4F]">
              Upgrade your base plan anytime with these add-ons.
            </Typography>
            <ul className="mt-4 space-y-2 text-sm text-[#355A4F]">
              {addonPlans.map((addon) => (
                <li key={addon.name} className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/40 px-3 py-2">
                  <span className="flex items-center gap-2">
                    <CheckCircleRoundedIcon fontSize="small" className="!text-emerald-600" />
                    {addon.name}
                  </span>
                  <span className="font-semibold text-[#1A3C34]">{addon.price}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="!mt-8 !rounded-3xl !border !border-emerald-200 !bg-emerald-50/40 shadow-[0_10px_22px_rgba(6,78,59,0.06)]">
          <CardContent>
            <Typography variant="h6" className="!text-[#1A3C34]">
              Need Customization? We Are Available
            </Typography>
            <Typography className="!mt-2 !text-sm !text-[#355A4F]">
              We also provide customization services based on your business workflow, branding, and feature requirements.
            </Typography>
            <ul className="mt-4 space-y-2 text-sm text-[#355A4F]">
              <li className="flex items-center gap-2">
                <CheckCircleRoundedIcon fontSize="small" className="!text-emerald-600" />
                Custom branding and UI changes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleRoundedIcon fontSize="small" className="!text-emerald-600" />
                Workflow and module-level feature customization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleRoundedIcon fontSize="small" className="!text-emerald-600" />
                Integration support based on project scope
              </li>
            </ul>
            <Typography className="!mt-4 !text-sm !font-semibold !text-[#1A3C34]">
              Contact us to discuss your custom requirements and get a tailored quote.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </main>
  )
}

export default PricingPage
