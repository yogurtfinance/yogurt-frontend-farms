import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BACTERIUM-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xd585be33109c1adfa6c0b1edae603eaf1e9bb979',
    },
    tokenSymbol: 'BCTRM',
    tokenAddresses: {
      97: '',
      56: '0x2eFE591E96ad36Aa3Bb769D486aFD713ce2F91B4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 2,
    risk: 5,
    lpSymbol: 'BACTERIUM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1Fd18835D1AF8E7E51430073aD7e288AFd9F3D86',
    },
    tokenSymbol: 'BCTRM',
    tokenAddresses: {
      97: '',
      56: '0x2eFE591E96ad36Aa3Bb769D486aFD713ce2F91B4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BCTRM',
    lpAddresses: {
      97: '',
      56: '0xd585be33109c1adfa6c0b1edae603eaf1e9bb979', // BCTRM-BUSD LP BCTRM-busdolacak
    },
    tokenSymbol: 'BCTRM',
    tokenAddresses: {
      97: '',
      56: '0x2eFE591E96ad36Aa3Bb769D486aFD713ce2F91B4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'BACTERIUM-DODO LP',
    lpAddresses: {
      97: '',
      56: '0x52cabaec0d52fe359d5da9c3ca876d111f6f3289',
    },
    tokenSymbol: 'BCTRM',
    tokenAddresses: {
      97: '',
      56: '0x2eFE591E96ad36Aa3Bb769D486aFD713ce2F91B4',
    },
    quoteTokenSymbol: QuoteToken.BACTERIUM,
    quoteTokenAdresses: contracts.bacterium,
   },
   {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // BCTRM-BNB
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0x2eFE591E96ad36Aa3Bb769D486aFD713ce2F91B4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
]

export default farms
