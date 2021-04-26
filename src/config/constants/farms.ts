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
    pid: 5,
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
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BCTRM',
    lpAddresses: {
      97: '',
      56: '0x1Fd18835D1AF8E7E51430073aD7e288AFd9F3D86', // BCTRM-BNB
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
    pid: 7,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
