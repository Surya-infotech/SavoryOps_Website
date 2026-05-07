import { Button, Card, CardContent, Chip, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function HomeHeroSection({ data }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(130deg,#064e3b_0%,#059669_45%,#65a30d_100%)] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(217,249,157,0.25),transparent_38%)]" />
      <div className="absolute -left-10 bottom-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -right-8 top-16 h-52 w-52 rounded-full bg-lime-200/20 blur-2xl" />
      <Container maxWidth="lg" className="relative z-10">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Chip
              label={data.badge}
              size="small"
              className="!h-9 !rounded-full !bg-white/95 !px-2 !font-semibold !text-emerald-800 shadow-sm"
            />
            <Typography
              variant="h1"
              className="!mt-5 !max-w-[10.5ch] !font-sans !text-[52px] !font-extrabold !leading-[1.02] !tracking-[-0.02em] !text-white md:!text-[62px]"
            >
              Scale <span className="text-lime-200">Multi-Tenant</span> Operations Effortlessly
            </Typography>
            <Typography className="!mt-5 !max-w-[56ch] !font-sans !text-lg !leading-relaxed !text-emerald-50">
              {data.description}
            </Typography>

            <div className="mt-6 grid max-w-2xl gap-3 text-sm text-emerald-50 md:grid-cols-2">
              <p className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">✓ Multi-tenant ready architecture</p>
              <p className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">✓ Faster kitchen-to-floor sync</p>
              <p className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">✓ Built for growth-stage brands</p>
              <p className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">✓ Real-time visibility at every level</p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                className="!rounded-full !bg-white !px-6 !py-2.5 !text-emerald-800 hover:!bg-emerald-50"
              >
                Start Scaling
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/pricing"
                className="!rounded-full !border-white !px-6 !py-2.5 !text-white"
              >
                Free Demo
              </Button>
            </div>

            <Typography className="!mt-5 !font-sans !text-xs !font-medium !tracking-wide !text-emerald-100">
              Trusted by modern restaurants and multi-unit operators.
            </Typography>
          </div>

          <Card className="!overflow-hidden !border !border-white/35 !rounded-3xl !bg-white/15 !backdrop-blur-xl">
            <CardContent className="!p-0">
              <div className="mb-4 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-black/10 md:h-72">
                <img
                  src={data.heroImage}
                  alt="SavoryOps restaurant operations preview"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="px-5 pb-5">
              <Typography className="!font-sans !text-sm !font-semibold !text-white">Architecture at a glance</Typography>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {data.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-emerald-100/70 bg-white/95 px-4 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                  >
                    <Typography className="!font-sans !text-[12px] !font-medium !text-slate-500">{metric.label}</Typography>
                    <Typography className="!mt-1 !font-sans !text-[36px] !leading-none !font-extrabold !text-emerald-800">
                      {metric.value}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-white/40 bg-gradient-to-r from-emerald-400/35 to-lime-300/25 p-4">
                <Typography className="!font-sans !text-xs !font-medium !tracking-wide !text-emerald-50">Operational Pulse</Typography>
                <Typography className="!mt-1 !font-sans !text-sm !font-semibold !leading-relaxed !text-white">
                  POS, QR based menu, Quick Service order, reservations, and KOT updates stay in one real-time flow.
                </Typography>
              </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default HomeHeroSection
