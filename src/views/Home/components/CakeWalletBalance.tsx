import React from 'react'
import { Text, Flex } from '@doodaswap/uikit'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
// import { getCakeAddress } from 'utils/addressHelpers'
import { getCakeVaultAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
// import { usePriceCakeBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  const { balance: cakeBalance } = useTokenBalance(getCakeVaultAddress())
  //   const cakePriceBusd = usePriceCakeBusd()
  const cakePriceBusd = 20.0
  const busdBalance = new BigNumber(getBalanceNumber(cakeBalance)).multipliedBy(cakePriceBusd).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <Flex flexDirection="column" mt="0.9rem">
        <CardValue
          value={getBalanceNumber(cakeBalance)}
          decimals={4}
          fontSize="35px"
          lineHeight="36px"
          color="#F1F3F5"
        />
        {cakePriceBusd ? (
          <div style={{ marginTop: '9px' }}>
            <CardBusdValue value={busdBalance} />
          </div>
        ) : (
          <br />
        )}
        {/* {cakePriceBusd.gt(0) ? <CardBusdValue value={busdBalance} /> : <br />} */}
      </Flex>
    </>
  )
}

export default CakeWalletBalance
