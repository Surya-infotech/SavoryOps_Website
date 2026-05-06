import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Button, Card, CardContent, Container, Typography } from '@mui/material'

function PricingPage() {
  const tiers = [
    {
      name: 'Seed',
      price: '$29 / month',
      subtitle: 'For single locations.',
      features: ['QR Menu', 'Order Management', 'Basic KOT', 'Daily Sales Snapshot'],
      cta: 'Start with Seed',
    },
    {
      name: 'Sprout',
      price: '$79 / month',
      subtitle: 'Most popular, for growing brands.',
      features: ['Everything in Seed', 'Advanced KOT', 'Table Reservation', 'Fiscal Reports', 'Basic white label branding'],
      cta: 'Choose Sprout',
      featured: true,
    },
    {
      name: 'Harvest',
      price: 'Custom',
      subtitle: 'For multi-tenant enterprise and white label license users.',
      features: ['Everything in Sprout', 'Full white label licensing', 'Multi-tenant controls', 'Multi-currency support', 'Priority success support'],
      cta: 'Talk to Sales',
    },
  ]

  return (
    <main className="bg-[#FDFBF7] py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" className="!text-[#1A3C34]">Pricing That Grows With Your Brand</Typography>
        <Typography className="!mt-3 !text-[#355A4F]">
          Choose the SavoryOps tier that matches your stage, from one location to enterprise white label licensing scale.
        </Typography>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={tier.featured ? '!relative !border-emerald-500 !bg-emerald-50/40' : '!border-emerald-100'}>
              <CardContent>
                {tier.featured ? (
                  <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    <StarRoundedIcon fontSize="inherit" />
                    Most Popular
                  </div>
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
                <Button variant={tier.featured ? 'contained' : 'outlined'} className="!mt-5" fullWidth color="primary">
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  )
}

export default PricingPage
