import * as React from 'react'
import ProductCard from './components/product-card'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background: #fafafa;
  font-family: Roboto;
  font-style: normal;
  @media (max-width: 350px) {
  width 295px;
  }
`

const TestApp = () => (
  <StyledContainer>
    <ProductCard />
  </StyledContainer>
)

export default TestApp
