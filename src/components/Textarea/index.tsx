import React from 'react'
import ITextarea from '../../types/textarea'
import { Container } from './styles'

const Textarea = (props: ITextarea) => {
  const { title, placeholder, value, handle } = props
  
  const _handle = (e: React.SyntheticEvent<HTMLTextAreaElement>) => 
    handle(e.currentTarget.value)

  return (
    <Container>
      <strong>{title}</strong>
      <textarea placeholder={placeholder} onChange={_handle}>
        {value}
      </textarea>
    </Container>
  )
}

export default Textarea
