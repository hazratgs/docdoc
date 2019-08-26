import styled from 'styled-components'

export const Container = styled.div`
  
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &.two-mobile {
    flex-wrap: wrap;
  }
`

export const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`

export const ErrorMessage = styled.p`
  color: #bd6f6c;
  font-size: 14px;
`
