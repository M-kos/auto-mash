import { Box, useScrollTrigger, Zoom } from '@mui/material'
import React from 'react'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

export const ScrollTop = (props: Props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Zoom>
  )
}
