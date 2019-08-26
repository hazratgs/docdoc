import React from 'react'
import IButton from '../../types/button'
import { Button as Element } from './styles'

const Button = (props: IButton) => {
  const { text, disabled, handle } = props

  return (
    <Element disabled={disabled} onClick={handle}>{text}</Element>
  )
}

export default Button
