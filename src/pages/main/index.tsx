import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Tabs from '../../components/Tabs'
import { Container } from './styles'

import ContactForm from '../../containers/ContactForm'
import DeliveryForm from '../../containers/DeliveryForm'

const Main = () => {
  return (
    <Container>
      <Tabs />
      <Switch>
        <Route path='/' exact component={ContactForm} />
        <Route path='/delivery' exact component={DeliveryForm} />
      </Switch>
    </Container>
  )
}

export default withRouter(Main)
