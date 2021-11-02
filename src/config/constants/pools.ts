import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.dooda,
    earningToken: serializedTokens.dooda,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 221,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nft,
    contractAddress: {
      97: '',
      56: '0x8d018823d13c56d62ffb795151a9e629c21e047b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '173727',
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.dooda,
    earningToken: serializedTokens.troad,
    contractAddress: {
      97: '',
      56: '0x8d018823d13c56d62ffb795151a9e629c21e047b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '173727',
  },
]

export default pools
