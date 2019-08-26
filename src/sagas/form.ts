import { takeLatest, put, call, select } from 'redux-saga/effects'
import { Action } from 'redux-act'
import * as actions from '../actions/form'
import axios from 'axios'
import State from '../types/state'
import { IFormData } from '../types/form'
import IField, { CheckFieldType } from '../types/field'
import fieldValidation from '../utils/fieldValidation'
import isEmail from 'validator/lib/isEmail'
import { push } from 'connected-react-router'

const fetchSend = (data: IFormData) => axios.post('https://cors-anywhere.herokuapp.com/http://mmatoday.info/test.php', data)

function* changeField(action: Action<IField>) {
  try {
    const { name } = action.payload

    if (name === 'firstName') yield textValidator(action)
    if (name === 'lastName') yield textValidator(action)
    if (name === 'phone') yield phoneValidator(action)
    if (name === 'email') yield emailValidator(action)
    if (name === 'city') yield textValidator(action)
    if (name === 'index') yield indexValidator(action)
    if (name === 'address') yield textValidator(action)
    if (name === 'deliveryDate') yield deliveryDateValidator(action)

  } catch (e) {
    console.log('ERROR changeField', e)
  }
}

function* changeCheckField(action: Action<CheckFieldType>) {
  const state: State = yield select()
  const { errors, checked } = fieldValidation({
    field: action.payload.field,
    type: action.payload.type,
    errors: state.form.errors,
    checked: state.form.checked
  })
  yield put(actions.errorsFields(errors))
  yield put(actions.checkedField(checked))


  yield validateFirstPage()
}

function* textValidator(action: Action<IField>) {
  try {
    const { name, value } = action.payload

    if (!value.length) {
      yield put(actions.changeCheckField({ field: name, type: 'clear' }))
    } else {
      if (value.length > 255) {
        yield put(actions.changeCheckField({ field: name, type: 'error' }))
      } else {
        yield put(actions.changeCheckField({ field: name, type: 'checked' }))
      }
    }
  } catch (e) {
    console.log('ERROR textValidator', e)
  }
}

function* phoneValidator(action: Action<IField>) {
  try {
    const { name, value } = action.payload
    const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

    if (!value.length) {
      yield put(actions.changeCheckField({ field: name, type: 'clear' }))
    } else {
      if (regex.test(value)) {
        yield put(actions.changeCheckField({ field: name, type: 'checked' }))
      } else {
        yield put(actions.changeCheckField({ field: name, type: 'error' }))
      }
    }
  } catch (e) {
    console.log('ERROR phoneValidator', e)
  }
}

function* emailValidator(action: Action<IField>) {
  try {
    const { name, value } = action.payload

    if (!value.length) {
      yield put(actions.changeCheckField({ field: name, type: 'clear' }))
    } else {
      if (isEmail(value)) {
        yield put(actions.changeCheckField({ field: name, type: 'checked' }))
      } else {
        yield put(actions.changeCheckField({ field: name, type: 'error' }))
      }
    }
  } catch (e) {
    console.log('ERROR emailValidator', e)
  }
}

function* indexValidator(action: Action<IField>) {
  try {
    const { name, value } = action.payload
    const index = value.replace(/\_/g, '')

    if (!index.length) {
      yield put(actions.changeCheckField({ field: name, type: 'clear' }))
    } else {
      if (index.length === 6) {
        yield put(actions.changeCheckField({ field: name, type: 'checked' }))
      } else {
        yield put(actions.changeCheckField({ field: name, type: 'error' }))
      }
    }
  } catch (e) {
    console.log('ERROR indexValidator', e)
  }
}

function* deliveryDateValidator(action: Action<IField>) {
  try {
    const { name, value } = action.payload
    const regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/

    if (!value.length) {
      yield put(actions.changeCheckField({ field: name, type: 'clear' }))
    } else {
      if (value.match(regex)) {
        yield put(actions.changeCheckField({ field: name, type: 'checked' }))
      } else {
        yield put(actions.changeCheckField({ field: name, type: 'error' }))
      }
    }
  } catch (e) {
    console.log('ERROR deliveryDateValidator', e)
  }
}

function* validateFirstPage() {
  try {
    const state: State = yield select()
    const { checked, errors } = state.form

    const disabledUserContact = () => {
      if (errors.length) return true
      if (!checked.includes('firstName')) return true
      if (!checked.includes('lastName')) return true
      if (!checked.includes('phone')) return true
      if (!checked.includes('email')) return true

      return false
    }

    yield put(actions.changeDisabledContactPage(disabledUserContact()))
  } catch (e) {
    console.log('ERROR clearDeliveryData', e)
  }
}

function* sendForm() {
  try {
    const state: State = yield select()
    const data: IFormData = {
      firstName: state.form.firstName,
      lastName: state.form.lastName,
      phone: state.form.phone,
      email: state.form.email,
      country: state.form.country,
      city: state.form.city,
      index: state.form.index,
      address: state.form.address,
      deliveryDate: state.form.deliveryDate,
      comment: state.form.comment
    }

    const respone = yield call(fetchSend, data)

    if (!respone.data.success) throw new Error('not success')
    yield put(actions.sendFormSuccess())
    yield put(actions.clearDeliveryData())
    yield put(actions.clearContactData())
    yield put(push('/success'))

  } catch (e) {
    yield put(actions.sendFormError())
    console.log('ERROR sendForm', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.changeField, changeField)
  yield takeLatest(actions.changeCheckField, changeCheckField)
  yield takeLatest(actions.clearDeliveryData, validateFirstPage)
  yield takeLatest(actions.sendForm, sendForm)
}
