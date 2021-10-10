import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { AboutCompanyPage } from '../pages/about-company-page'
import { ArticlesPage } from '../pages/articles-page'
import { ContactsPage } from '../pages/contacts-page'
import { EquipmentPage } from '../pages/equipment-page'
import { GalleryPage } from '../pages/gallery-page'
import { HomePage } from '../pages/home-page'
import { NotFoundPage } from '../pages/not-found'
import { ServicesPage } from '../pages/sevices-page'

export const Routing: React.FC = React.memo(function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about_company">
          <AboutCompanyPage />
        </Route>
        <Route exact path="/services">
          <ServicesPage />
        </Route>
        <Route exact path="/equipment">
          <EquipmentPage />
        </Route>
        <Route exact path="/gallery">
          <GalleryPage />
        </Route>
        <Route exact path="/articles">
          <ArticlesPage />
        </Route>
        <Route exact path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
})
