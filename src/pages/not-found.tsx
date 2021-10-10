import React from 'react'
import { Layout } from '../components/layout/layout'
import { NotFound } from '../components/not-found/not-found'

export const NotFoundPage = React.memo(function NotFoundPage() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  )
})
