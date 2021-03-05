import { MenuEntry } from '@pancakeswap-libs/uikit'

// const EXCHANGE_URL = 'https://exchange.goosedefi.com/';
const EXCHANGE_URL = 'http://localhost:3001/'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: EXCHANGE_URL,
      },
      {
        label: 'Liquidity',
        href: `${EXCHANGE_URL}#/pool`,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'TokenInfo',
        href: 'https://pancakeswap.info/token/0x111B750C3aBf9835d8c4631DdE0FC7ECd1A60f20',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Palette-Finance/',
      },
      {
        label: 'Docs',
        href: 'https://docs.blueswap.finance/',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://docs.blueswap.finance/',
      // },
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
