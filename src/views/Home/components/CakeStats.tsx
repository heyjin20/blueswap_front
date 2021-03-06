import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  border: solid 1px #deecff;
  background-color: #f3fbfe;
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 6px;
`

const SubTitle = styled.div`
  font-family: Nunito Black;
  color: #414859;
`

const DecoratedText = styled(Text)`
  font-family: 'Rubik Regular';
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 1.49px;
  color: #858a90;
  font-weight: normal;
`
const TvlHeader = styled(Heading)`
  margin-bottom: 10px;
  line-height: 30px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const eggPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = eggPrice.times(circSupply)

  let bluePerBlock = 0
  if (farms && farms[0] && farms[0].bluePerBlock) {
    bluePerBlock = new BigNumber(farms[0].bluePerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <TvlHeader size="lg" mb="24px">
          <SubTitle style={{ letterSpacing: 'normal', fontSize: '24px' }}>
            {TranslateString(534, 'BLUE Stats')}
          </SubTitle>
        </TvlHeader>
        {/* <Row>
          <DecoratedText fontSize="14px">{TranslateString(10005, 'Market Cap')}</DecoratedText>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row> */}
        <Row>
          <DecoratedText fontSize="14px">{TranslateString(536, 'Total Minted')}</DecoratedText>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <DecoratedText fontSize="14px">{TranslateString(538, 'Total Burned')}</DecoratedText>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <DecoratedText fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</DecoratedText>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <DecoratedText fontSize="14px">{TranslateString(540, 'New BLUE/block')}</DecoratedText>
          <Text bold fontSize="14px">
            {bluePerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
