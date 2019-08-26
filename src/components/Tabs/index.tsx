import React from 'react'
import { connect } from 'react-redux'
import { Container, Item } from './styles'
import State from '../../types/state'

interface IProps {
  disabledContactPage: boolean
}

const Tabs = (props: IProps) => {
  const { disabledContactPage } = props

  return (
    <Container>
      <Item to='/' exact >Основные данные</Item>
      <Item to='/delivery' exact disabled={disabledContactPage}>Адрес доставки</Item>
    </Container>
  )
}

const enhance = connect(
  (state: State) => ({
    disabledContactPage: state.form.disabledContactPage
  })
)

export default enhance(Tabs)
