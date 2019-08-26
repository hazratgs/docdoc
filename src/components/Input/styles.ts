import styled from 'styled-components'

interface Props {
  error: boolean
  checked: boolean
}

export const Container = styled.div<Props>`
  flex: 1;
  margin-right: 20px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  strong {
    font-size: 14px;
    display: block;
    padding: 7px 0;
  }

  input {
    width: 100%;
    height: 38px;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    outline: none;
    font-size: 14px;
    padding: 0 10px;
    box-shadow: inset 1px 1px 4px 0px rgba(224, 224, 224, 0.5);
    position: relative;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: transparent;

    &:focus {
      border-color: #4e87be;
      z-index: 5;
    }
  }

  img {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 12px;
    top: 43px;
    z-index: 5;
  }

  ${props => props.error && `
    strong {
      color: #bd6f6c;
    }

    input {
      border-color: #bd6f6c!important;
    }
  `}

  ${props => props.checked && `
    strong {
      color: #3b763d;
    }

    input {
      border-color: #3b763d!important;
    }
  `}
`

export const ErrorMessage = styled.p`
  color: #bd6f6c;
  font-size: 14px;
`
