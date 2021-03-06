import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  border: solid 1px #deecff;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-right: 10px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  margin-bottom: 25px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const Title = styled.div`
  font-family: Nunito Black;
  color: #414859;
`

const SubTitle = styled.div`
  font-family: Rubik Regular;
  font-size: 15px;
  letter-spacing: 1.49px;
  color: #858a90;
`

const SubContent = styled.div`
  font-family: Rubik Medium;
  font-size: 16px;
  letter-spacing: 1.49px;
  color: #000000;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          <Title style={{ letterSpacing: 'normal', fontSize: '24px' }}>{TranslateString(542, 'Farms & Staking')}</Title>
        </Heading>
        <Row>
          <CardImage src="/images/blue/2.png" alt="cake logo" width={32} height={32} />
          <SubTitle>BLUE TOKEN(PLT BLUE)</SubTitle>
        </Row>
        <Block>
          <SubTitle>{TranslateString(544, 'BLUE to Harvest')}</SubTitle>
          <CakeHarvestBalance earningsSum={earningsSum} />
          <SubContent>~${(eggPrice * earningsSum).toFixed(2)}</SubContent>
        </Block>
        <br />
        <Block>
          <SubTitle>{TranslateString(546, 'BLUE in Wallet')}</SubTitle>
          <CakeWalletBalance cakeBalance={cakeBalance} />
          <SubContent>~${(eggPrice * cakeBalance).toFixed(2)}</SubContent>
        </Block>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting BLUE')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
