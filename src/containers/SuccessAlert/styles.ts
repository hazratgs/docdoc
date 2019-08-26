import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 72px;
  }

  h2 {
    font-size: 22px;
  }
`

export const Button = styled(Link)`
  color: #4e87be;
  text-decoration: none;
`
