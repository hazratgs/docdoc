import React from 'react'
import IRadio from '../../types/radio'
import { Container } from './styles'

const RadioButton = (props: IRadio) => {
  const { text, handle } = props

  return (
    <Container>
      <input name='radio' type='radio' onChange={handle} />
      <span>{text}</span>
    </Container>
  )
}

export default RadioButton
