import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Typography } from "@mui/material";

const panelLinks = [
  {
    label: "Super Admin Panel",
    to: import.meta.env.VITE_SUPER_ADMIN_PANEL_URL,
  },
  {
    label: "Owner Panel",
    to: import.meta.env.VITE_OWNER_PANEL_URL,
  },
  {
    label: "User App",
    to: import.meta.env.VITE_USER_APP_URL,
  },
  {
    label: "Employee App",
    to: import.meta.env.VITE_EMPLOYEE_APP_URL,
  },
  {
    label: "Landing Page",
    to: import.meta.env.VITE_LANDING_PAGE_URL,
  },
];

const kitchenLinks = [
  {
    label: "Order Details",
    to: import.meta.env.VITE_LANDING_PAGE_URL,
  },
  {
    label: "KOT",
    to: import.meta.env.VITE_LANDING_PAGE_URL,
  },
  {
    label: "Table Reservation",
    to: import.meta.env.VITE_LANDING_PAGE_URL,
  },
  {
    label: "Subscription",
    to: import.meta.env.VITE_LANDING_PAGE_URL,
  },
];

const footerCols = [
  {
    title: "The Panels",
    links: panelLinks,
  },
  {
    title: "The Kitchen",
    links: kitchenLinks,
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Privacy Policy", to: import.meta.env.VITE_PRIVACY_POLICY_URL },
      { label: "Pricing Page", to: "/pricing" },
    ],
  },
];

function Footer() {
  return (
    <footer className="mt-0 border-t border-emerald-100 bg-[#FDFBF7] text-[#1A3C34]">
      <Container maxWidth="lg" className="pt-8 pb-6">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="SavoryOps logo"
                className="h-8 w-8 object-contain"
              />
              <Typography
                variant="subtitle1"
                className="!font-extrabold !text-[#1A3C34]"
              >
                SavoryOps
              </Typography>
            </div>
            <Typography
              variant="body2"
              className="!mt-2 !max-w-xs !text-[#355A4F]"
            >
              The fresh way to manage, scale, and love your restaurant business.
              SavoryOps unifies POS, QR menu, reservations, KOT, analytics, and
              white-label growth tools in one reliable ecosystem.
            </Typography>
            <Box className="mt-4 flex items-center gap-3">
              <a
                href={import.meta.env.VITE_INSTAGRAM_URL}
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-[#1A3C34] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                <InstagramIcon fontSize="small" />
              </a>
              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-[#1A3C34] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                <LinkedInIcon fontSize="small" />
              </a>
            </Box>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <Typography
                variant="subtitle2"
                className="!font-bold !text-[#1A3C34]"
              >
                {col.title}
              </Typography>
              <div className="mt-3 flex flex-col gap-2 text-sm text-[#355A4F]">
                {col.links.map((link) => (
                  <a key={link.label} href={link.to}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-emerald-100 pt-4 text-sm text-[#355A4F] md:flex-row">
          <span>Copyright © 2026 SavoryOps.</span>
          <span>Maintained with ❤️ by SavoryOps.</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;