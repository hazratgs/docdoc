import React from 'react'
import IInput from '../../types/input'
import { Container, ErrorMessage } from './styles'

const Input = (props: IInput) => {
  const { title, placeholder, value, error, checked, handle } = props

  const _handle = (e: React.SyntheticEvent<HTMLInputElement>) =>
    handle(e.currentTarget.value)

  return (
    <Container error={error} checked={checked}>
      <strong>{title}</strong>
      <input
        placeholder={placeholder}
        value={value}
        onChange={_handle}
      />
      {error && [
        <img src='/images/error.svg' />,
        <ErrorMessage>Поле <b>{title}</b> является обязательным для заполнения</ErrorMessage>
      ]}
      {checked && <img src='/images/check.svg' />}
    </Container>
  )
}

export default Input
