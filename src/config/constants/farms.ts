import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'DOODA',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x872f6d70d0cf1b0AAb957eD90346DEc66fc19ca0',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'Dooda-BNB LP',
    lpAddresses: {
      97: '0x5795427f57Ad3cd0Effe4fc8d9713fF06b07089B',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.dooda,
    quoteToken: serializedTokens.wbnb,
  },
  // /**
  //  * V3 by order of release (some may be out of PID order due to multiplier boost)
  //  */
  {
    pid: 3,
    lpSymbol: 'Troad-BNB LP',
    lpAddresses: {
      97: '0x93c0cA08DFCc5EeBf52d2741aE4b44626303Daf5',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.troad,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
