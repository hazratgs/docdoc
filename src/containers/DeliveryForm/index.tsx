import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import { Container, Row, Wrapper } from './styles'

const DeliveryForm = () => {
  const handle = (): void => {

  }

  const handleNextStep = () => {

  }

  return (
    <Container>
      <Wrapper>
        <RadioButton
          text='Доставка'
          handle={handle}
        />
        <RadioButton
          text='Самовывоз'
          handle={handle}
        />
      </Wrapper>
      <Row className='two-mobile'>
        <Select
          title='Страна'
          values={['Россия', 'Украина']}
          handle={handle}
        />
        <Input
          title='Город'
          placeholder='Москва'
          error={false}
          checked={false}
          handle={handle}
        />
        <Input
          title='Индекс'
          placeholder='398000'
          error={false}
          checked={false}
          handle={handle}
        />
      </Row>
      <Row>
        <Input
          title='Адрес'
          placeholder='г. Москва, ул. Космонавтов, 14/5'
          error={false}
          checked={false}
          handle={handle}
        />
      </Row>
      <Row>
        <Input
          title='Дата доставки'
          placeholder='24/05/2017'
          error={false}
          checked={false}
          handle={handle}
        />
      </Row>
      <Row>
        <Textarea
          title='Комментарий к заказу'
          placeholder='Ваш комментарий здесь...'
          error={false}
          checked={false}
          handle={handle}
        />
      </Row>
      <Row>
        <Button text='Оформить заказ' handle={handleNextStep} />
      </Row>
    </Container>
  )
}

export default DeliveryForm
