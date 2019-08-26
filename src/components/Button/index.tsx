import React from 'react'
import IButton from '../../types/button'
import { Button as Element } from './styles'

const Button = (props: IButton) => {
  const { text, handle } = props

  return (
    <Element>{text}</Element>
  )
}

export default Button
