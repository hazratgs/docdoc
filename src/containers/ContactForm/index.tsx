import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeField, clearDeliveryData } from '../../actions/form'
import { push } from 'connected-react-router'
import Input from '../../components/Input'
import Button from '../../components/Button'
import IField from '../../types/field'
import State from '../../types/state'
import { Container, Row } from './styles'

interface IProps {
  changeField: (data: IField) => void
  firstName: string
  lastName: string
  phone: string
  email: string
  checked: string[]
  errors: string[]
  disabledContactPage: boolean
  push: (path: string) => void
  clearDeliveryData: () => void
}

const ContactForm = (props: IProps) => {
  const {
    changeField,
    firstName,
    lastName,
    phone,
    email,
    checked,
    errors,
    push,
    clearDeliveryData,
    disabledContactPage
  } = props

  const handle = (name: string) => (value: string): void => {
    changeField({ name, value })
  }

  const handleNextStep = () => {
    if (!disabledContactPage) {
      push('/delivery')
    }
  }

  useEffect(() => {
    clearDeliveryData()
  }, [])

  return (
    <Container>
      <Row>
        <Input
          title='Имя'
          placeholder='Иван'
          error={errors.includes('firstName')}
          checked={checked.includes('firstName')}
          value={firstName}
          handle={handle('firstName')}
        />
        <Input
          title='Фамилия'
          placeholder='Иванов'
          error={errors.includes('lastName')}
          checked={checked.includes('lastName')}
          value={lastName}
          handle={handle('lastName')}
        />
      </Row>
      <Row>
        <Input
          type='mask'
          mask='+7 (111) 111-11-11'
          title='Телефон'
          placeholder='+79282194199'
          error={errors.includes('phone')}
          checked={checked.includes('phone')}
          value={phone}
          handle={handle('phone')}
        />
      </Row>
      <Row>
        <Input
          title='Email'
          placeholder='example@example.com'
          error={errors.includes('email')}
          checked={checked.includes('email')}
          value={email}
          handle={handle('email')}
        />
      </Row>
      <Row>
        <Button text='Продолжить' handle={handleNextStep} disabled={disabledContactPage} />
      </Row>
    </Container>
  )
}

const enhance = connect(
  (state: State) => ({
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    phone: state.form.phone,
    email: state.form.email,
    checked: state.form.checked,
    errors: state.form.errors,
    disabledContactPage: state.form.disabledContactPage
  }),
  { changeField, clearDeliveryData, push }
)

export default enhance(ContactForm)
