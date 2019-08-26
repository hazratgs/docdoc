import React from 'react'
import ISelect from '../../types/select'
import { Container, Select as Element } from './styles'

const Select = (props: ISelect) => {
  const { title, values, handle } = props
  const items = values.map((item: string) => {
    return <option>{item}</option>
  })

  const _handle = (e: React.SyntheticEvent<HTMLSelectElement>) =>
    handle(e.currentTarget.value)

  return (
    <Container>
      <strong>{title}</strong>
      <Element onChange={_handle}>
        {items}
      </Element>
    </Container>
  )
}

export default Select
