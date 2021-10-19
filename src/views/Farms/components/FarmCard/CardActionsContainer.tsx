import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Text } from '@doodaswap/uikit'
import { getAddress } from 'utils/addressHelpers'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { DeserializedFarm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import ConnectWalletButton from 'components/ConnectWalletButton'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'
import useApproveFarm from '../../hooks/useApproveFarm'

const Action = styled.div`
  // margin-left: 3rem;
`
const StyledConnectButton = styled(Button)`
  background: ${({ theme }) => theme.colors.doodaPrimary};
  border-radius: 2px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: -0.8px;
  color: #f1f3f5;
`
const StyledConnectWalletButton = styled(ConnectWalletButton)`
  background: ${({ theme }) => theme.colors.doodaPrimary};
  border-radius: 2px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: -0.8px;
  color: #f1f3f5;
`

export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  account?: string
  addLiquidityUrl?: string
  cakePrice?: BigNumber
  lpLabel?: string
  expanded?: boolean
}

const CardActions: React.FC<FarmCardActionsProps> = ({
  farm,
  account,
  addLiquidityUrl,
  cakePrice,
  lpLabel,
  expanded,
}) => {
  const { t } = useTranslation()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses } = farm
  const { allowance, tokenBalance, stakedBalance, earnings } = farm.userData || {}
  const lpAddress = getAddress(lpAddresses)
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const dispatch = useAppDispatch()

  const lpContract = useERC20(lpAddress)

  const { onApprove } = useApproveFarm(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, dispatch, account, pid])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={farm.lpSymbol}
        pid={pid}
        apr={farm.apr}
        lpLabel={lpLabel}
        cakePrice={cakePrice}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <StyledConnectButton width="100%" disabled={expanded} onClick={handleApprove}>
        {t('Enable')}
      </StyledConnectButton>
    )
  }

  return (
    <Action>
      {/* <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="4px">
          CAKE
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t('Earned')}
        </Text>
      </Flex> */}
      {/* <HarvestAction earnings={earnings} pid={pid} /> */}
      <Flex>
        {/* <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="4px">
          {farm.lpSymbol}
        </Text> */}
        {/* <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t('Staked')}
        </Text> */}
      </Flex>
      <Flex flex="2" flexDirection={['row', null, null, 'row']} alignItems={['flex-start', null, null, 'flex-end']}>
        {!account ? <StyledConnectWalletButton width="100%" /> : renderApprovalOrStakeButton()}
      </Flex>
    </Action>
  )
}

export default CardActions
