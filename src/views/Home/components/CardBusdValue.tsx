import React from 'react'
import CardValue, { CardValueProps } from './CardValue'

const CardBusdValue: React.FC<CardValueProps> = (props) => {
  return <CardValue fontSize="12px" lineHeight="1.1" color="#F1F3F5" prefix="~$" bold={false} decimals={2} {...props} />
}

export default CardBusdValue
