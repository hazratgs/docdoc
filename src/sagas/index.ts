import { all, fork } from 'redux-saga/effects'
import form from './form'

export default function* rootSaga() {
  return yield all([
    form
  ].map(fork))
}