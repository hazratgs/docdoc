export interface IFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  country: string
  city: string
  index: string
  address: string
  deliveryDate: string
  comment: string
}

interface IForm extends IFormData {
  errors: string[]
  checked: string[]
  disabledContactPage: boolean,
  successSendForm: boolean
  errorSendForm: boolean
  requestSendForm: boolean
}

export default IForm
