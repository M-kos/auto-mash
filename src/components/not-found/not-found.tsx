import React, { useCallback } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'

export const NotFound = React.memo(function NotFound() {
  const history = useHistory()

  const goToBack = useCallback(() => history.goBack(), [history])

  const goToHome = useCallback(() => history.push('/'), [history])

  return (
    <Box
      sx={{ flexDirection: { md: 'row', xs: 'column' } }}
      py={10}
      minHeight={600}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">{'404'}</Typography>
      <Box pl={4} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Typography variant="h4">{'Страница не найдена!'}</Typography>
        <Box mt={2} sx={{ flexDirection: { md: 'row', xs: 'column' } }} display="flex" alignItems="center">
          <Button variant="outlined" color="primary" onClick={goToHome}>
            {'Перейти на Главную'}
          </Button>
          <Button
            sx={{
              ml: {
                md: 2,
              },
              mt: {
                md: 0,
                xs: 1,
              },
              minWidth: {
                md: 0,
                xs: 200,
              },
            }}
            variant="outlined"
            color="primary"
            onClick={goToBack}
          >
            {'Вернуться назад'}
          </Button>
        </Box>
      </Box>
    </Box>
  )
})
