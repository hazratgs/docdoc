import React from 'react'
import IRadio from '../../types/radio'
import { Container } from './styles'

const RadioButton = (props: IRadio) => {
  const { text, checked, handle } = props

  return (
    <Container>
      <input name='radio' type='radio' onChange={handle} checked={checked} />
      <span>{text}</span>
    </Container>
  )
}

export default RadioButton
