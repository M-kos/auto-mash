import React, { useCallback, useMemo } from 'react'
import { Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { LinkItem } from '../../types/link-item'

interface Props {
  item: LinkItem
  isMobile?: boolean
}

export const NavigationItemComponent = React.memo<Props>(function NavigationItemComponent({ item, isMobile = false }) {
  const history = useHistory()
  const theme = useTheme()

  const onLinkClick = useCallback(() => {
    history.replace(item.url)
  }, [history, item])

  const isActive = useMemo(() => history.location.pathname === item.url, [history.location.pathname, item.url])

  return (
    <Link
      style={{
        color: isActive ? theme.palette.primary.main : undefined,
        cursor: 'pointer',
        textDecorationColor: isActive ? theme.palette.primary.main : undefined,
      }}
      onClick={onLinkClick}
      underline={isActive ? 'always' : 'hover'}
      color="textPrimary"
      variant="subtitle1"
    >
      <Typography variant={isMobile ? 'h5' : 'body1'}>{item.name}</Typography>
    </Link>
  )
})
