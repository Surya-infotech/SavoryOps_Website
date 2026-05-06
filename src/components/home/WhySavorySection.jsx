import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'
import ParkRoundedIcon from '@mui/icons-material/ParkRounded'
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded'
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded'
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded'
import SyncRoundedIcon from '@mui/icons-material/SyncRounded'
import { Card, CardContent, Container, Typography } from '@mui/material'

const iconMap = {
  growth: <ParkRoundedIcon className="!text-white" />,
  roi: <MonetizationOnRoundedIcon className="!text-white" />,
  sync: <SyncRoundedIcon className="!text-white" />,
  global: <HandshakeRoundedIcon className="!text-white" />,
}

const ecosystemLinks = {
  'super-admin-panel': import.meta.env.VITE_SUPER_ADMIN_PANEL_URL,
  'owner-panel': import.meta.env.VITE_OWNER_PANEL_URL,
  'landing-page': import.meta.env.VITE_LANDING_PAGE_URL,
  'user-app': import.meta.env.VITE_USER_APP_URL,
  'employee-app': import.meta.env.VITE_EMPLOYEE_APP_URL,
}

const ecosystemIconMap = {
  'super-admin-panel': <SettingsSuggestRoundedIcon className="!text-[#166534]" />,
  'owner-panel': <MonetizationOnRoundedIcon className="!text-[#166534]" />,
  'landing-page': <LanguageRoundedIcon className="!text-[#166534]" />,
  'user-app': <PointOfSaleRoundedIcon className="!text-[#166534]" />,
  'employee-app': <SupportAgentRoundedIcon className="!text-[#166534]" />,
}

function WhySavorySection({ advantageCards, ecosystemCards }) {
  return (
    <section className="bg-[#f0fdf4] py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34]">
          Why SavoryOps?
        </Typography>
        <Typography className="!mt-3 !font-sans !text-[#355A4F]">One ecosystem. Endless growth.</Typography>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {advantageCards.map((item) => (
            <Card key={item.title} className="!border-emerald-100 !bg-[#f8fffb]">
              <CardContent>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,#10b981_0%,#84cc16_100%)] shadow-sm">
                  {iconMap[item.icon]}
                </div>
                <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                  {item.title}
                </Typography>
                <Typography className="!mt-2 !font-sans !text-sm !text-[#355A4F]">{item.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="ecosystem" className="mt-12 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 p-5 shadow-[0_12px_28px_rgba(6,78,59,0.08)] md:p-7">
          <Typography variant="h2" className="!font-sans !text-3xl !font-bold !leading-tight !text-[#1A3C34]">
            A Complete Ecosystem in One Box
          </Typography>
          <Typography className="!mt-2 !font-sans !text-[#355A4F]">Five focused products, one smooth operation.</Typography>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {ecosystemCards.map((item) => (
              <Card
                key={item.slug}
                component="a"
                href={ecosystemLinks[item.slug] || '#'}
                target="_blank"
                rel="noreferrer"
                className="!block !rounded-3xl !border-emerald-100 !bg-white !no-underline shadow-[0_8px_18px_rgba(6,78,59,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_24px_rgba(6,78,59,0.12)]"
              >
                <CardContent className="!p-4">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#dcfce7_0%,#86efac_50%,#22c55e_100%)] text-2xl shadow-md ring-1 ring-emerald-100">
                    <span className="drop-shadow-sm">
                      {ecosystemIconMap[item.slug] || <HandshakeRoundedIcon className="!text-[#166534]" />}
                    </span>
                  </div>
                  <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                    {item.title}
                  </Typography>
                  <Typography className="!mt-1 !font-sans !text-sm !font-bold !text-emerald-700">{item.role}</Typography>
                  <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">{item.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhySavorySection
