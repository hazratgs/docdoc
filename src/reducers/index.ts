import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import form from './form'
import State from '../types/state'

export default (history: any) => combineReducers<State>({
  router: connectRouter(history),
  form
})
