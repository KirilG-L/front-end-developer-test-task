import React, { useState } from 'react'
import PriceOption from './price-option'
import CartField from './cart-field'
import styled from 'styled-components'

const StyledProductCard = styled.div`
  position: absolute;
  width: 335px;
  margin: 40px 20px 495px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  font-family: inherit;
  font-style: inherit;

  @media (max-width: 350px) {
    width: 280px;
    margin: 40px 5px 495px 5px;
  }
`
const StyledTitle = styled.div``
const StyledPrice = styled.div``
const StyledHeadline = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 24px 16px;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`

const ProductCard: React.FC = () => {
  const [options, setOptions] = useState(
    new Map<string, string>([
      ['500 г', '500 грн'],
      ['100 г', '150 грн'],
      ['50 г', '90 грн'],
    ]),
  )
  const [selectedOption, setSelectedOption] = useState('500 г')

  // const updateMap = (k, v) => {
  //   setOptions(new Map(options.set(k, v)))
  // }

  // handleClick callback для получения выбранной модели,
  // myCart хранит в себе выбранную опцию.
  const [myCart, addToMyCart] = useState<string>('')

  const handleClick = (ev: MouseEvent) => {
    addToMyCart(selectedOption)
  }
  const handleChange = (ev: Event) => {
    const target = ev.target as HTMLInputElement
    setSelectedOption(target.value)
  }

  const getOptions = () => {
    return [...options.entries()].map(([key, value]) => (
      <PriceOption
        key={key}
        option={key}
        price={value}
        selectedOption={selectedOption}
        handleChange={handleChange}
        isActive={selectedOption === key}
      />
    ))
  }

  return (
    <StyledProductCard>
      <StyledHeadline>
        <StyledTitle>Тип</StyledTitle>
        <StyledPrice>Ціна</StyledPrice>
      </StyledHeadline>
      {getOptions()}
      <CartField
        selectedOption={selectedOption}
        options={options}
        handleClick={handleClick}
      />
    </StyledProductCard>
  )
}

export default ProductCard
