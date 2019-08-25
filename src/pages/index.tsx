import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Main from './main'

const Pages = () => {
  return (
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  )
}

export default withRouter(Pages)
