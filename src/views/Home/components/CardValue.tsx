import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { Text } from '@doodaswap/uikit'
import styled from 'styled-components'

export interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  lineHeight?: string
  prefix?: string
  bold?: boolean
  color?: string
}

const StyledText = styled(Text)`
  font-family: Roboto;
  // font-style: normal;
  // font-weight: bold;
  // font-size: 28px;
  // line-height: 48px;
  // /* identical to box height, or 171% */

  // letter-spacing: -0.02em;

  // /* gray_10 */

  // color: #f1f3f5;
`

const CardValue: React.FC<CardValueProps> = ({
  value,
  decimals,
  fontSize = '40px',
  lineHeight = '1',
  prefix = '',
  bold = true,
  color = 'text',
}) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <StyledText bold={bold} fontSize={fontSize} style={{ lineHeight }} color={color}>
      {prefix}
      {countUp}
    </StyledText>
  )
}

export default CardValue
