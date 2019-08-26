import React from 'react'
import { Container, Item } from './styles'

const Tabs = () => {
  return (
    <Container>
      <Item to='/' exact >Основные данные</Item>
      <Item to='/delivery' exact>Адрес доставки</Item>
    </Container>
  )
}

export default Tabs
