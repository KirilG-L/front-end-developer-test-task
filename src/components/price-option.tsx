import React from 'react'
import styled from 'styled-components'

interface RadioProps {
  readonly isActive: boolean
}

const StyledRadioWrapper = styled.div`
  // width: 287px;
  display: flex;
  align-items: center;
  margin: 12px 24px 12px 24px;
  justify-content: space-between;

  @media (max-width: 350px) {
    justify-content: start;
    width: 240px;
    margin: 6px 12px 6px 12px;
  }
`
const StyledRadioLabel = styled.label<RadioProps>`
  padding-left: 40px;
  color: ${(props) => (props.isActive ? 'color: #000000' : '#999999')};
  display: block;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  line-height: 19px;
  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  > input:checked ~ span:after {
    display: block;
  }
  > input:checked ~ span {
    background: #ffffff;
  }
  > span:after {
    margin: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #6ca22c;
  }
`
const StyledRadioInput = styled.input``
const StyledRadioMark = styled.span<RadioProps>`
  position: absolute;
  margin-top: -2.5px;
  vertical-align: middle;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: ${(props) =>
    props.isActive ? '1px solid #6ca22c' : '1px solid #999999'};
  :after {
    content: '';
    position: absolute;
    display: none;
  }
`
const StyledOptionPrice = styled.div<RadioProps>`
  color: ${(props) => (props.isActive ? 'color: #000000' : '#999999')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 19px;

  @media (max-width: 350px) {
    margin-left: auto;
  }
`

type PropsType = {
  option: string
  price: string
  selectedOption: string
  handleChange: any
  isActive: boolean
}

const PriceOption: React.FC<PropsType> = (props) => {
  const { option, price, selectedOption, handleChange, isActive } = props

  return (
    <StyledRadioWrapper>
      <StyledRadioLabel isActive={isActive}>
        <StyledRadioInput
          type="radio"
          value={option}
          checked={option === selectedOption}
          onChange={handleChange}
        />
        {option}
        <StyledRadioMark isActive={isActive} />
      </StyledRadioLabel>
      <StyledOptionPrice isActive={isActive}>{price}</StyledOptionPrice>
    </StyledRadioWrapper>
  )
}

export default PriceOption
