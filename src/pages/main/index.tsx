import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Tabs from '../../components/Tabs'
import { Container } from './styles'

import ContactForm from '../../containers/ContactForm'
import DeliveryForm from '../../containers/DeliveryForm'
import SuccessAlert from '../../containers/SuccessAlert'

const Main = () => {
  return (
    <Container>
      <Tabs />
      <Switch>
        <Route path='/' exact component={ContactForm} />
        <Route path='/delivery' exact component={DeliveryForm} />
        <Route path='/success' exact component={SuccessAlert} />
      </Switch>
    </Container>
  )
}

export default withRouter(Main)
