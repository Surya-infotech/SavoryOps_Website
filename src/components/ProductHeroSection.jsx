import { Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function ProductHeroSection({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] py-16 md:py-20">
      <div className="absolute right-16 top-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <Container maxWidth="lg" className="relative grid items-center gap-8 md:grid-cols-2">
        <div>
          <Typography variant="h1" className="!text-4xl !leading-tight !text-[#1A3C34] md:!text-6xl">
            Human Harmony for <span className="text-emerald-600">Growth</span>
          </Typography>
          <Typography className="!mt-4 !max-w-xl !text-[#355A4F]">
            {title} helps your teams move together with calm execution, better service rhythm, and measurable business
            expansion.
          </Typography>
          <Typography className="!mt-3 !max-w-xl !text-[#355A4F]">{subtitle}</Typography>
          <div className="mt-6 flex gap-3">
            <Button variant="contained" component={RouterLink} to="/contact">
              Talk to Sales
            </Button>
            <Button variant="outlined" component={RouterLink} to="/pricing">
              View Pricing
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-emerald-100 bg-white/75 p-4 shadow-xl backdrop-blur">
            <div className="h-[360px] rounded-[1.5rem] bg-[linear-gradient(135deg,#d1fae5_0%,#ecfccb_35%,#e2e8f0_100%)] p-4">
              <div className="grid h-full gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <Typography className="!text-xs !text-slate-500">Live notifications</Typography>
                  <Typography className="!font-semibold !text-[#1A3C34]">17 new orders • 4 table requests</Typography>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <Typography className="!text-xs !text-slate-500">Service pulse</Typography>
                  <Typography className="!font-semibold !text-[#1A3C34]">Avg prep time improved by 22%</Typography>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <Typography className="!text-xs !text-slate-500">Team harmony</Typography>
                  <Typography className="!font-semibold !text-[#1A3C34]">Front-of-house and kitchen in sync</Typography>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute -left-3 top-6 text-2xl">🌿</span>
          <span className="absolute -right-2 bottom-10 text-2xl">✨</span>
        </div>
      </Container>
    </section>
  )
}

export default ProductHeroSection
