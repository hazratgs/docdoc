import React from 'react'
import { Container, Button } from './styles'

const SuccessAlert = () => {
  return (
    <Container>
      <img src='/images/checked.svg' alt='success' />
      <h2>Форма успешно отправлена</h2>
      <Button to='/'>На главную</Button>
    </Container>
  )
}

export default SuccessAlert
