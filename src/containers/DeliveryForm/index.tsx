import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { changeField, sendForm } from '../../actions/form'
import { push } from 'connected-react-router'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import State from '../../types/state'
import IField from '../../types/field'
import { Container, Row, Wrapper, ErrorMessage } from './styles'

interface IProps {
  changeField: (data: IField) => void
  country: string
  city: string
  index: string
  address: string
  deliveryDate: string
  comment: string
  checked: string[]
  errors: string[]
  disabledContactPage: boolean
  errorSendForm: boolean
  requestSendForm: boolean
  push: (path: string) => void
  clearDeliveryData: () => void,
  sendForm: () => void
}

const DeliveryForm = (props: IProps) => {
  const {
    changeField,
    country,
    city,
    index,
    address,
    deliveryDate,
    comment,
    checked,
    errors,
    push,
    disabledContactPage,
    sendForm,
    errorSendForm,
    requestSendForm
  } = props

  const [deliveryType, setDeliveryType] = useState('delivery')

  const disabled = () => {
    if (deliveryType === 'pickup') return false

    if (requestSendForm) return true
    if (errors.length) return true
    if (!checked.includes('city')) return true
    if (!checked.includes('index')) return true
    if (!checked.includes('address')) return true
    if (!checked.includes('deliveryDate')) return true

    return false
  }

  const handleChangeDeliveryType = (): void => {
    if (deliveryType === 'delivery') setDeliveryType('pickup')
    if (deliveryType === 'pickup') setDeliveryType('delivery')
  }

  const handle = (name: string) => (value: string): void => {
    changeField({ name, value })
  }

  const submit = () => {
    if (!disabled()) {
      sendForm()
    }
  }

  useEffect(() => {
    if (disabledContactPage) push('/')
  }, [])

  return (
    <Container>
      <Wrapper>
        <RadioButton
          text='Доставка'
          handle={handleChangeDeliveryType}
          checked={deliveryType === 'delivery'}
        />
        <RadioButton
          text='Самовывоз'
          handle={handleChangeDeliveryType}
          checked={deliveryType === 'pickup'}
        />
      </Wrapper>
      {deliveryType === 'delivery' && (
        <>
          <Row className='two-mobile'>
            <Select
              title='Страна'
              values={['Россия', 'Украина']}
              handle={handle('country')}
            />
            <Input
              title='Город'
              placeholder='Москва'
              error={errors.includes('city')}
              checked={checked.includes('city')}
              handle={handle('city')}
              value={city}
            />
            <Input
              type='mobile'
              mask='111111'
              title='Индекс'
              placeholder='398000'
              error={errors.includes('index')}
              checked={checked.includes('index')}
              value={index}
              handle={handle('index')}
            />
          </Row>
          <Row>
            <Input
              title='Адрес'
              placeholder='г. Москва, ул. Космонавтов, 14/5'
              error={errors.includes('address')}
              checked={checked.includes('address')}
              handle={handle('address')}
              value={address}
            />
          </Row>
          <Row>
            <Input
              type='mobile'
              mask='11/11/1111'
              title='Дата доставки'
              placeholder='24/05/2017'
              error={errors.includes('deliveryDate')}
              checked={checked.includes('deliveryDate')}
              value={deliveryDate}
              handle={handle('deliveryDate')}
            />
          </Row>
        </>
      )}
      <Row>
        <Textarea
          title='Комментарий к заказу'
          placeholder='Ваш комментарий здесь...'
          error={false}
          checked={false}
          handle={handle('comment')}
          value={comment}
        />
      </Row>
      <Row>
        <Button
          text={requestSendForm ? 'Загрузка...' : 'Оформить заказ'}
          handle={submit}
          disabled={disabled()}
        />
      </Row>
      {errorSendForm && (
        <Row>
          <ErrorMessage>Возникла ошибка при отправке формы, повторите пожалуйсте попытку позже</ErrorMessage>
        </Row>
      )}

    </Container>
  )
}

const enhance = connect(
  (state: State) => ({
    country: state.form.country,
    city: state.form.city,
    index: state.form.index,
    address: state.form.address,
    deliveryDate: state.form.deliveryDate,
    comment: state.form.comment,
    checked: state.form.checked,
    errors: state.form.errors,
    disabledContactPage: state.form.disabledContactPage,
    errorSendForm: state.form.errorSendForm,
    requestSendForm: state.form.requestSendForm
  }),
  { changeField, push, sendForm }
)

export default enhance(DeliveryForm)
