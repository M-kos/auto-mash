import { createTheme, Theme } from '@mui/material'

export const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      light: '#81DCF6',
      main: '#20C0ED',
      dark: '#0A7A9A',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#7EF9A3',
      main: '#1AF35B',
      dark: '#089E35',
    },
    success: {
      main: 'rgb(76, 175, 80)',
      dark: '#388e3c',
      light: '#e3fce5',
    },
    warning: {
      light: 'rgb(255,255,245)',
      main: 'rgb(255, 152, 0)',
    },
    error: {
      main: 'rgb(244, 67, 54)',
    },
    darkgrey: {
      main: 'rgb(29, 29, 29)',
    },
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: '18px',
    },
    subtitle2: {
      fontWeight: 500,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '2px !important',
        },
      },
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    darkgrey: Palette['primary']
  }
  interface PaletteOptions {
    darkgrey: PaletteOptions['primary']
  }
}

export type ThemeProps = { theme: Theme }
