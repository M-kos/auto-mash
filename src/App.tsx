import React from 'react'
import { LocalizationProvider } from '@mui/lab'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { theme } from './mui-theme/theme'
import { Routing } from './routes/routing'

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <SnackbarProvider maxSnack={3}>
            <Routing />
          </SnackbarProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  )
}
