import styled from 'styled-components'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface IPropsLink {
  disabled?: boolean
}

export const Container = styled.div`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  margin-bottom: 10px;
`

export const Item = styled(NavLink)<IPropsLink>`
  padding: 15px;
  text-decoration: none;
  color: #4e87be;
  border: 1px solid transparent;
  margin-bottom: -1px;
  outline: none;
  border-radius: 4px 4px 0 0;

  &.active {
    border: 1px solid #e0e0e0;
    border-bottom: transparent;
    background-color: #fff;
  }

  ${props => props.disabled && `
    cursor: default;
    pointer-events: none;
  `}
`
