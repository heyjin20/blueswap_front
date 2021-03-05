import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { Text } from '@pancakeswap-libs/uikit'

interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  prefix?: string
}

const CardValue: React.FC<CardValueProps> = ({ value, decimals, fontSize = '36px', prefix }) => {
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
    <Text
      bold
      fontSize={fontSize}
      style={{ fontFamily: 'Nunito Black', color: '#388af7', lineHeight: '90px', fontWeight: 900 }}
    >
      {prefix}
      {countUp}
    </Text>
  )
}

export default CardValue
