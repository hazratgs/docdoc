import React from 'react'
import MaskedInput from 'react-maskedinput'
import IInput from '../../types/input'
import { Container, ErrorMessage } from './styles'

const Input = (props: IInput) => {
  const { type, title, placeholder, value, error, checked, handle, mask } = props

  const _handle = (e: React.SyntheticEvent<HTMLInputElement>) =>
    handle(e.currentTarget.value)

  return (
    <Container error={error} checked={checked}>
      <strong>{title}</strong>
      {type === 'text' && (
        <input
          placeholder={placeholder}
          value={value}
          onChange={_handle}
        />
      )}
      {type === 'mask' && (
        <MaskedInput
          mask={mask}
          placeholder={placeholder}
          value={value}
          onChange={_handle}
        />
      )}
      {error && [
        <img key='img' src='/images/error.svg' />,
        <ErrorMessage key='err-message'>Поле <b>{title}</b> является обязательным для заполнения</ErrorMessage>
      ]}
      {checked && <img src='/images/check.svg' />}
    </Container>
  )
}

Input.defaultProps = {
  type: 'text',
  mask: ''
}

export default Input
