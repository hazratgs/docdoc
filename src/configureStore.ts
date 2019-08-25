import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers'
import rootSaga from './sagas'

export const history = createBrowserHistory()

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const composedEnhancers = compose(applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  ))

  const store = createStore(rootReducer(history), initialState, composedEnhancers)

  sagaMiddleware.run(rootSaga)

  // if (process.env.NODE_ENV !== 'production') {
  //   if (module.hot) {
  //     module.hot.accept('./reducers', () => {
  //       store.replaceReducer(rootReducer)
  //     })
  //   }
  // }

  return store
}
