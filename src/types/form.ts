export interface IContactData {
  firstName: string
  lastName: string
  phone: string
  email: string
}

export interface IDeliveryData {
  country: string
  city: string
  index: string
  address: string
  deliveryDate: string
  comment: string
}

export interface IFormData extends IContactData, IDeliveryData {

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
