import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/#ecosystem', label: 'Products', hash: '#ecosystem' },
  { to: '/#all-features', label: 'Features', hash: '#all-features' },
  { to: '/faq', label: 'FAQ' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

function isLinkActive(pathname, hash, link) {
  if (link.hash) {
    return pathname === '/' && hash === link.hash
  }
  return pathname === link.to
}

function NavItem({ link, active, onClick, className = '' }) {
  const baseClass =
    '!rounded-full !px-4 !py-2 !text-[13px] !font-semibold !tracking-wide !transition-all !duration-200'
  const activeClass = active
    ? '!bg-white !text-emerald-700 !shadow-[0_2px_8px_rgba(6,78,59,0.08)]'
    : '!text-[#355A4F] hover:!bg-white/80 hover:!text-[#1A3C34]'

  if (link.hash) {
    return (
      <Button
        component="a"
        href={link.to}
        onClick={onClick}
        color="inherit"
        className={`${baseClass} ${activeClass} ${className}`}
      >
        {link.label}
      </Button>
    )
  }

  return (
    <Button
      component={RouterLink}
      to={link.to}
      onClick={onClick}
      color="inherit"
      className={`${baseClass} ${activeClass} ${className}`}
    >
      {link.label}
    </Button>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50">
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        className="border-b border-emerald-100/80 bg-white/85 shadow-[0_4px_24px_rgba(6,78,59,0.06)] backdrop-blur-md"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters className="flex min-h-[72px] items-center justify-between gap-4">
            <RouterLink to="/" className="group flex shrink-0 items-center gap-2.5 !no-underline">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition group-hover:ring-emerald-200">
                <img src="/logo.png" alt="SavoryOps logo" className="h-7 w-7 object-contain" />
              </span>
              <Typography
                variant="h6"
                className="!text-[22px] !font-extrabold !tracking-tight !text-[#1A3C34] group-hover:!text-emerald-800"
              >
                SavoryOps
              </Typography>
            </RouterLink>

            <Box className="hidden items-center rounded-full bg-emerald-50/70 p-1 ring-1 ring-emerald-100/80 md:flex">
              {navLinks.map((link) => (
                <NavItem
                  key={link.to}
                  link={link}
                  active={isLinkActive(pathname, hash, link)}
                />
              ))}
            </Box>

            <div className="flex items-center gap-2">
              <Button
                variant="contained"
                component={RouterLink}
                to="/book-demo"
                className="hidden !rounded-full !bg-gradient-to-r !from-emerald-500 !to-emerald-600 !px-5 !py-2 !text-[13px] !font-bold !tracking-wide !shadow-[0_8px_20px_rgba(16,185,129,0.28)] hover:!from-emerald-600 hover:!to-emerald-700 md:inline-flex"
              >
                Book Demo Call
              </Button>
              <IconButton
                className="!rounded-xl !border !border-emerald-100 !bg-emerald-50/60 md:!hidden"
                color="inherit"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <MenuRoundedIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobileMenu}
        PaperProps={{
          className: '!w-[min(100vw,320px)] !bg-[#FDFBF7]',
        }}
      >
        <div className="flex h-full flex-col p-5">
          <div className="mb-6 flex items-center justify-between">
            <RouterLink
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 !no-underline"
            >
              <img src="/logo.png" alt="SavoryOps logo" className="h-8 w-8 object-contain" />
              <Typography className="!text-lg !font-extrabold !text-[#1A3C34]">SavoryOps</Typography>
            </RouterLink>
            <IconButton
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="!rounded-xl !border !border-emerald-100 !bg-white"
            >
              <CloseRoundedIcon />
            </IconButton>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.to}
                link={link}
                active={isLinkActive(pathname, hash, link)}
                onClick={closeMobileMenu}
                className="!w-full !justify-start !rounded-xl !px-4 !py-3 !text-[15px]"
              />
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <Button
              variant="contained"
              component={RouterLink}
              to="/book-demo"
              onClick={closeMobileMenu}
              fullWidth
              className="!rounded-full !bg-gradient-to-r !from-emerald-500 !to-emerald-600 !py-3 !text-sm !font-bold !shadow-[0_8px_20px_rgba(16,185,129,0.28)]"
            >
              Book Demo Call
            </Button>
          </div>
        </div>
      </Drawer>
    </header>
  )
}

export default Navbar
