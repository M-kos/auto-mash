import React from 'react'
import { Box } from '@mui/material'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = React.memo(function Layout({ children }) {
  return (
    <Box position="relative">
      <Header />
      {children}
      <Footer />
    </Box>
  )
})
