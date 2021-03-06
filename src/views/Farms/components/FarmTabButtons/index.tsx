import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const FarmTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <ToggleWrapper>
        <PoolToggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <PoolText> {TranslateString(699, 'Staked only')}</PoolText>
      </ToggleWrapper>
      <ButtonMenu activeIndex={isExact ? 0 : 1} size="sm" variant="primary">
        <ButtonMenuItem
          as={Link}
          to={`${url}`}
          style={{
            fontFamily: 'Rubik Medium',
            fontWeight: 500,
            letterSpacing: '1.49px',
            fontSize: '16px',
          }}
        >
          {TranslateString(698, 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem
          as={Link}
          to={`${url}/history`}
          style={{
            fontFamily: 'Rubik Medium',
            fontWeight: 500,
            letterSpacing: '1.49px',
            fontSize: '16px',
          }}
        >
          {TranslateString(700, 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const PoolText = styled(Text)`
  font-family: 'Rubik Medium';
  color: #bbd3f3;
  letter-spacing: 1.49px;
  font-weight: 500;
  font-size: 16px;
`

const PoolButtonMenu = styled(ButtonMenu)`
  background-color: #388af7;
`

const PoolToggle = styled(Toggle)`
  height: 32px;
  background-color: #deecff;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
