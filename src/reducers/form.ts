import { createReducer } from 'redux-act'
import * as actions from '../actions/form'
import IForm, { IContactData, IDeliveryData } from '../types/form'

const clearFields = <T extends Array<string>, U extends IDeliveryData | IContactData>(items: T, object: U) =>
  items.filter((item: string) => {
    const keys = Object.keys(object)
    if (keys.includes(item)) return false
    return true
  })

const contactData: IContactData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
}

const deliveryData: IDeliveryData = {
  country: 'Россия',
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
  checked: clearFields([...state.checked], deliveryData),
  errors: clearFields([...state.errors], deliveryData)
}))

reducer.on(actions.clearContactData, (state) => ({
  ...state,
  ...contactData,
  checked: clearFields([...state.checked], contactData),
  errors: clearFields([...state.errors], contactData)
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
