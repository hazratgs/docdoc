import { takeLatest, put, call, select } from 'redux-saga/effects'
import * as actions from '../actions/form'
import axios from 'axios'
import State from '../types/state'

function* changeField() {
  try {
    const state: State = yield select()

  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.changeField, changeField)
}