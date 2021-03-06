import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const MainDiv = styled.div`
  width: 100%;
  text-align: center;
`

const Hero = styled.img`
  width: 100%;
`

// const Hero = styled.div`
//   align-items: center;
//   background-image: url('/images/blue/mobile-hero-img.png');
//   background-repeat: no-repeat;
//   background-position: top center;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   margin: auto;
//   margin-bottom: 32px;
//   padding-top: 116px;
//   text-align: center;
//   height: 200px;
//   padding-top: 0;
//   background-position: center center, center center;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     background-image: url('/images/blue/group-3.png');
//     background-position: left center, right center;
//     padding-top: 0;
//     width: 1200px;
//     height: 560px;
//     margin-left: -120px;
//   }
// `

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  Hero.defaultProps = {
    src: window.innerWidth <= 760 ? '/images/blue/mobile-main-hero-img.png' : '/images/blue/main-hero-img.png',
  }

  return (
    <MainDiv>
      <Hero />
      <Page>
        <div style={{ textAlign: 'initial' }}>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </MainDiv>
  )
}

export default Home
