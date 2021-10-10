import React from 'react'
import { Box } from '@mui/material'
import { navigationData } from './navigation-data'
import { NavigationItemComponent } from './navigation-item'

export const Navigation = React.memo(function Navigation() {
  return (
    <Box display="flex" alignItems="center">
      {navigationData.map((item) => (
        <Box key={item.url} mx={2}>
          <NavigationItemComponent item={item} />
        </Box>
      ))}
    </Box>
  )
})
