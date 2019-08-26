import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { GlobalStyle, Container } from './styles'

import Main from './main'

const Pages = () => {
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    </Container>
  )
}

export default withRouter(Pages)
