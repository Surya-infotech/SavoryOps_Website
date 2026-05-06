import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#10B981' },
    secondary: { main: '#1A3C34' },
    background: { default: '#FDFBF7', paper: '#ffffff' },
    text: { primary: '#1A3C34', secondary: '#355A4F' },
  },
  typography: {
    fontFamily: "Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    h1: { fontFamily: "Fraunces, Georgia, 'Times New Roman', serif", fontWeight: 700 },
    h2: { fontFamily: "Fraunces, Georgia, 'Times New Roman', serif", fontWeight: 700 },
    h3: { fontFamily: "Fraunces, Georgia, 'Times New Roman', serif", fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
        },
      },
    },
  },
})

export default theme
