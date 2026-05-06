import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
  { to: "/#ecosystem", label: "Products" },
  { to: "/#all-features", label: "Features" },
  { to: "/faq", label: "FAQ" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        className="border-b border-emerald-100 bg-[#FDFBF7]/95 shadow-[0_6px_20px_rgba(6,78,59,0.06)] backdrop-blur"
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            className="grid min-h-[74px] grid-cols-[auto_1fr_auto] items-center gap-4"
          >
            <RouterLink
              to="/"
              className="flex items-center gap-2.5 !no-underline"
            >
              <img
                src="/logo.png"
                alt="SavoryOps logo"
                className="h-8 w-8 rounded-md object-contain"
              />
              <Typography
                variant="h6"
                className="!text-[23px] !font-extrabold !tracking-tight !text-[#1A3C34]"
              >
                SavoryOps
              </Typography>
            </RouterLink>

            <Box className="hidden items-center justify-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  component="a"
                  href={link.to}
                  color="inherit"
                  className="!rounded-full !px-4 !py-1.5 !text-[13px] !font-semibold !tracking-wide !text-[#1A3C34] hover:!bg-emerald-50"
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            <div className="flex items-center justify-end gap-1">
              <Button
                variant="contained"
                component={RouterLink}
                to="/book-demo"
                className="hidden md:inline-flex !rounded-full !bg-emerald-500 !px-6 !py-2 !text-[13px] !font-bold !tracking-wide hover:!bg-emerald-600"
              >
                Book Demo Call
              </Button>
              <IconButton
                className="md:!hidden"
                color="inherit"
                aria-label="menu"
              >
                <MenuRoundedIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Navbar;