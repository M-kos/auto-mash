import React from 'react'
import { Email, Phone, Room } from '@mui/icons-material'
import { Box, Container, Theme, Typography, Link as MULink, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { config } from '../../config'
import { Navigation } from './navigation'

export const Footer = React.memo(function Footer() {
  return (
    <>
      <Box sx={{ py: 2, backgroundColor: (theme: Theme) => theme.palette.grey[800] }}>
        <Container maxWidth="xl">
          <Box sx={{ justifyContent: { md: 'space-between', xs: 'center' } }} display="flex" alignItems="center">
            <Link to="/">
              <img style={{ maxHeight: '42px' }} src="/assets/auto-mash-logo.png" />
            </Link>
            <Navigation isNeedMobileMenu={false} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: 2, backgroundColor: (theme: Theme) => theme.palette.grey[600] }}>
        <Container maxWidth="xl">
          <Box py={2} sx={{ flexDirection: { md: 'row', xs: 'column' } }} display="flex">
            <Box display="flex" flexDirection="column" sx={{ width: { md: '50%', xs: '100%' } }}>
              <Typography color="common.white" variant="body1">
                {'АВТОМАШ – Мы лучшие в сфере АСУТП !'}
              </Typography>
              <Typography sx={{ mt: 4 }} color="common.white" variant="h6">
                {'Контакты'}
              </Typography>
              <Box display="flex" alignItems="center">
                <Phone fontSize="small" color="primary" />
                <MULink
                  sx={{ ml: 2, my: 1 }}
                  variant="body2"
                  color="common.white"
                  underline="hover"
                  href={`tel:${config.phoneNumber}`}
                >
                  {config.phoneNumber}
                </MULink>
              </Box>
              <Box display="flex" alignItems="center">
                <Room fontSize="small" color="primary" />
                <Typography sx={{ ml: 2, my: 1 }} color="common.white" variant="body2">
                  {config.address}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Email fontSize="small" color="primary" />
                <MULink
                  sx={{ ml: 2, my: 1 }}
                  variant="body2"
                  color="common.white"
                  underline="hover"
                  href={`mailto:${config.email}`}
                >
                  {config.email}
                </MULink>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" sx={{ mt: { md: 0, xs: 3 }, width: { md: '50%', xs: '100%' } }}>
              <Typography color="common.white" variant="h6">
                {'Напишите нам'}
              </Typography>
              <TextField
                color="primary"
                fullWidth
                size="small"
                required
                sx={{ mt: 1.5 }}
                label="Имя"
                variant="outlined"
              />
              <TextField fullWidth size="small" required sx={{ mt: 1.5 }} label="E-mail" variant="outlined" />
              <TextField fullWidth size="small" required sx={{ mt: 1.5 }} label="Тема" variant="outlined" />
              <TextField
                fullWidth
                size="small"
                required
                multiline
                sx={{ mt: 1.5 }}
                label="Описание"
                variant="outlined"
                rows={3}
              />
              <Button
                size="large"
                color="secondary"
                sx={{ mt: 2, alignSelf: 'flex-end' }}
                variant="contained"
                disableElevation
              >
                {'Отправить'}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: 2, backgroundColor: (theme: Theme) => theme.palette.grey[800] }}>
        <Container maxWidth="xl">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography color="common.white" variant="caption">
              {'© 2021 Автомаш'}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
})
