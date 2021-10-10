import React from 'react'
import { Box } from '@mui/material'
import { Header } from './header'

export const Layout = React.memo(function Layout({ children }) {
  return (
    <Box position="relative">
      <Header />
      {children}
    </Box>
  )
})
