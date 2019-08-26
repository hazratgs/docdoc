import { createReducer } from 'redux-act'
import * as actions from '../actions/form'
import IForm from '../types/form'

const contactData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
}

const deliveryData = {
  country: '',
  city: '',
  index: '',
  address: '',
  deliveryDate: '',
  comment: '',
}

const initialState: IForm = {
  ...contactData,
  ...deliveryData,
  errors: [],
  checked: [],
  disabledContactPage: true,
  requestSendForm: false,
  successSendForm: false,
  errorSendForm: false
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.changeField, (state, payload) => ({
  ...state,
  [payload.name]: payload.value
}))

reducer.on(actions.checkedField, (state, payload) => ({
  ...state,
  checked: payload
}))

reducer.on(actions.errorsFields, (state, payload: string[]) => ({
  ...state,
  errors: payload
}))

reducer.on(actions.clearDeliveryData, (state) => ({
  ...state,
  ...deliveryData,
  checked: state.checked.filter((item: string) => {
    const keys = Object.keys(deliveryData)
    if (keys.includes(item)) return false
    return true
  }),
  errors: state.errors.filter((item: string) => {
    const keys = Object.keys(deliveryData)
    if (keys.includes(item)) return false
    return true
  })
}))

reducer.on(actions.clearContactData, (state) => ({
  ...state,
  ...contactData,
  checked: state.checked.filter((item: string) => {
    const keys = Object.keys(contactData)
    if (keys.includes(item)) return false
    return true
  }),
  errors: state.errors.filter((item: string) => {
    const keys = Object.keys(contactData)
    if (keys.includes(item)) return false
    return true
  })
}))

reducer.on(actions.changeDisabledContactPage, (state, payload) => ({
  ...state,
  disabledContactPage: payload
}))

reducer.on(actions.sendForm, (state) => ({
  ...state,
  requestSendForm: true
}))

reducer.on(actions.sendFormSuccess, (state) => ({
  ...state,
  ...contactData,
  ...deliveryData,
  requestSendForm: false,
  successSendForm: true,
  errorSendForm: false
}))

reducer.on(actions.sendFormError, (state) => ({
  ...state,
  requestSendForm: false,
  errorSendForm: true
}))

export default reducer
