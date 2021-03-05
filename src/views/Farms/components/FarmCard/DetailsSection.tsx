import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text style={{ fontSize: '16px', color: '#858a90', letterSpacing: '1.49px', lineHeight: '1.63' }}>
          {TranslateString(316, 'Deposit')}:
        </Text>
        <StyledLinkExternal
          href={
            isTokenOnly
              ? `https://exchange.goosedefi.com/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://exchange.goosedefi.com/#/add/${liquidityUrlPathParts}`
          }
        >
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text style={{ fontSize: '16px', color: '#858a90', letterSpacing: '1.49px', lineHeight: '1.63' }}>
            {TranslateString(23, 'Total Liquidity')}:
          </Text>
          <Text bold style={{ fontSize: '16px', color: '#000000', letterSpacing: '1.49px', lineHeight: '1.63' }}>
            {totalValueFormated}
          </Text>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <Link
          external
          href={bscScanAddress}
          bold={false}
          style={{ color: '#b9b9b9', fontSize: '14px', marginTop: '5px' }}
        >
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
