import React, { useState } from 'react'
import CartButton from './cart-button'
import styled from 'styled-components'

const StyledCartContainer = styled.div`
  width: 237px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 32px 49px 40px;
  @media (max-width: 350px) {
    flex-direction: column;
    justify-content: center;
    margin: 16px 24px 20px;
  }
`
const StyledCartPrice = styled.div`
  margin-right: 8px;
  margin-right: auto;
  font-size: 24px;
  line-height: 28px;
  text-align: right;

  @media (max-width: 350px) {
    margin: 0 auto;
  }
`

type PropsType = {
  selectedOption: string
  options: Map<string, string>
  handleClick: any
}

const CartField: React.FC<PropsType> = (props) => {
  const { selectedOption, options, handleClick } = props

  return (
    <StyledCartContainer>
      <StyledCartPrice>{options.get(selectedOption)}</StyledCartPrice>
      <CartButton handleClick={handleClick} />
    </StyledCartContainer>
  )
}

export default CartField
