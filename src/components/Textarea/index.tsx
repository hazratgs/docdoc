import React from 'react'
import ITextarea from '../../types/textarea'
import { Container } from './styles'

const Textarea = (props: ITextarea) => {
  const { title, placeholder, value, handle } = props

  return (
    <Container>
      <strong>{title}</strong>
      <textarea placeholder={placeholder}>{value}</textarea>
    </Container>
  )
}

export default Textarea
