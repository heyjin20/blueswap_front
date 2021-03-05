import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import TvlValue from './TvlValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: solid 1px #deecff;
  background-color: #deecff;
`

const SubTitle = styled.div`
  font-family: Nunito Black;
  color: #414859;
`

const TvlTitle = styled.div`
  color: '#388af7';
  font-family: 'Nunito Black';
  fontweight: '900';
`

const TvlHeader = styled(Heading)`
  margin-bottom: 0px;
  line-height: 30px;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <TvlHeader size="lg" mb="24px">
          <SubTitle>{TranslateString(999, 'Total Value Locked (TVL)')}</SubTitle>
        </TvlHeader>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
          <TvlValue value={totalValue.toNumber()} prefix="$" decimals={2} />
          {/* </Heading> */}
          <Text style={{ fontFamily: 'Nunito SemiBold', fontSize: '16px', color: '#414859' }}>
            {TranslateString(999, 'Across all Farms and Pools')}
          </Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
