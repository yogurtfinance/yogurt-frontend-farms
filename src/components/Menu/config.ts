import { MenuEntry } from '@pancakeswap-libs/uikit'

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
        href: 'https://exchange.yogurtfinance.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.yogurtfinance.com/#/pool',
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
 {
  label: 'Lottery',
  icon: 'TicketIcon',
  href: '/lottery',
 },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
  //  {
  //    label: 'PancakeSwap',
  //    href: 'https://pancakeswap.info/token/0x2eFE591E96ad36Aa3Bb769D486aFD713ce2F91B4',
  //  },
  //  {
  //    label: 'CoinGecko',
  //    href: 'https://www.coingecko.com/en/coins/yogurt-finance',
  //  },
  //  {
  //    label: 'CoinMarketCap',
  //    href: 'https://coinmarketcap.com/currencies/yogurt-finance/',
  //  },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xd585be33109c1adfa6c0b1edae603eaf1e9bb979',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/yogurtfinance/',
      },
      {
        label: "Docs",
        href: "https://yogurtfinance.gitbook.io/yogurt-finance/",
      },
      {
        label: "RoadMap",
        href: "https://yogurtfinance.gitbook.io/yogurt-finance/roadmap",
      },
    ],
  },
]

export default config
