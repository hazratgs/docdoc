import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import axios from 'axios'
import Pages from './pages'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

axios.defaults.baseURL = ''

const Application = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Pages />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
