import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, Row } from './styles'

const ContactForm = () => {
  const handle = (value: string): void => {

  }

  const handleNextStep = () => {

  }

  return (
    <Container>
      <Row>
        <Input
          title='Имя'
          placeholder='Иван'
          error={true}
          checked={false}
          handle={handle}
        />
        <Input
          title='Фамилия'
          placeholder='Иванов'
          error={false}
          checked={true}
          handle={handle}
        />
      </Row>
      <Row>
        <Input
          title='Телефон'
          placeholder='+79282194199'
          error={false}
          checked={false}
          handle={handle}
        />
      </Row>
      <Row>
        <Input
          title='Email'
          placeholder='example@example.com'
          error={false}
          checked={false}
          handle={handle}
        />
      </Row>
      <Row>
        <Button text='Продолжить' handle={handleNextStep} />
      </Row>
    </Container>
  )
}

export default ContactForm
