import { Box } from '@mui/material'
import React from 'react'
import { Layout } from '../components/layout/layout'

export const HomePage = React.memo(function HomePage() {
  return (
    <Layout>
      <Box minHeight={2000}>Home</Box>
    </Layout>
  )
})
