import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  strong {
    font-size: 14px;
    display: block;
    padding: 7px 0;
  }

  input {
     
  }

  @media (max-width: 768px) {
    min-width: calc(100vw - 40px);
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export const Select = styled.select`
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
  background-color: #fff;

  &:focus {
    border-color: #4e87be;
    z-index: 5;
  }
`
