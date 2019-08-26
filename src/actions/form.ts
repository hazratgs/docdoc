import { createAction } from 'redux-act'
import IField, { CheckFieldType } from '../types/field'

export const changeField = createAction<IField>('CHANGE_FIELD')
export const changeCheckField = createAction<CheckFieldType>('CHANGE_CHECK_FIELD')
export const errorsFields = createAction<string[]>('ERROR_FIELD')
export const checkedField = createAction<string[]>('CHECKED_FIELD')

export const clearDeliveryData = createAction('CLEAR_DELIVERY_DATA')
export const clearContactData = createAction('CLEAR_CONTACT_DATA')

export const changeDisabledContactPage = createAction<boolean>('CHANGE_DISABLED_CONTACT_PAGE')

export const sendForm = createAction('SEND_FORM')
export const sendFormSuccess = createAction('SEND_FORM_SUCCESS')
export const sendFormError = createAction('SEND_FORM_ERROR')
