import { createReducer } from 'redux-act'
import * as actions from '../actions/form'
import IForm from '../types/form'

const initialState: IForm = {

}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.changeField, (state, payload) => ({
  ...state
}))

export default reducer