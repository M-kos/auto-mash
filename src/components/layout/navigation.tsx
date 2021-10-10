import React, { useCallback, useState } from 'react'
import { Box, Drawer, IconButton, Theme } from '@mui/material'
import { navigationData } from './navigation-data'
import { NavigationItemComponent } from './navigation-item'
import { Menu } from '@mui/icons-material'

interface Props {
  isNeedMobileMenu?: boolean
}

export const Navigation = React.memo<Props>(function Navigation({ isNeedMobileMenu = true }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const toogleMobileMenu = useCallback(() => {
    setOpenMobileMenu((prevState) => !prevState)
  }, [])

  return (
    <>
      <Box sx={{ display: { md: 'flex', xs: 'none' } }} alignItems="center">
        {navigationData.map((item) => (
          <Box key={item.url} mx={2}>
            <NavigationItemComponent item={item} />
          </Box>
        ))}
      </Box>
      {isNeedMobileMenu && (
        <>
          <Box sx={{ display: { md: 'none', xs: 'flex' } }} alignItems="center">
            <IconButton onClick={toogleMobileMenu}>
              <Menu />
            </IconButton>
          </Box>
          <Drawer
            sx={{ display: { md: 'none', xs: 'flex' } }}
            anchor="right"
            open={openMobileMenu}
            onClose={toogleMobileMenu}
          >
            <Box
              sx={{
                px: 1,
                py: 2,
                width: 300,
                height: '100%',
                backgroundColor: (theme: Theme) => theme.palette.grey[300],
              }}
            >
              {navigationData.map((item) => (
                <Box key={item.url} mx={2} my={3} textAlign="center">
                  <NavigationItemComponent item={item} isMobile />
                </Box>
              ))}
            </Box>
          </Drawer>
        </>
      )}
    </>
  )
})
