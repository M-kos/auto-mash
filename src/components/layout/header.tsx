import React from 'react'
import { AppBar, Box, Container, Fab, Theme } from '@mui/material'
import { ScrollTop } from './scroll-to-top'
import { KeyboardArrowUp } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Navigation } from './navigation'

export const Header = React.memo(function Header() {
  return (
    <>
      <AppBar
        sx={{ p: 2, backgroundColor: (theme: Theme) => theme.palette.grey[600] }}
        id="back-to-top-anchor"
        elevation={0}
      >
        <Container maxWidth="xl">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Link to="/">
              <img style={{ maxHeight: '42px' }} src="/assets/auto-mash-logo.png" />
            </Link>
            <Navigation />
          </Box>
        </Container>
      </AppBar>
      <ScrollTop>
        <Fab color="default" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  )
})
