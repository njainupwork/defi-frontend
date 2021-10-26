import React, { useState, useCallback } from 'react' //
import styled, { keyframes } from 'styled-components' //
import { Link } from 'react-router-dom'
import { Heading, Card, CardBody, Button, Flex, LogoWithTextIcon } from '@doodaswap/uikit' //
import { DoodaTextOnlyLogo } from 'components/Logo'
import { harvestFarm } from 'utils/calls' //
import { useWeb3React } from '@web3-react/core' //
import { useTranslation } from 'contexts/Localization' //
// useFramswithBalance custom hook // replace the old useFarmWithBalance Hooks code
// import useFarmsWithBalance from 'views/Home/hooks/oldUseFarmsWithBalance' ///
import ConnectWalletButton from 'components/ConnectWalletButton'
import CardBackground from 'components/Dooda/assets/CardBackground.png'
import { RightArrow, CarosalMain, CarosalSub } from 'components/DoodaIcon'
import useTheme from 'hooks/useTheme'
import { useMasterchef } from 'hooks/useOldContract' ///
import useToast from 'hooks/useToast' //
import UnlockButton from 'components/UnlockButton' //
import useFarmsWithBalance from 'views/Home/hooks/oldUseFarmsWithBalance'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

import {
  DoodaSubHeading,
  StyledSubHead,
  DswapData,
  DoodaDataQty as DswapDataQty,
  DoodaDataCurrency as DswapDataCurrency,
  DswapTotal,
  DoodaDataTotal,
  DswapButton,
  DoodaHarvestAllButton,
} from '../styles'

const DswapLeft = styled.div`
  width: 50%;
  border-right: 1px solid #ffffff;
  height: 200px;
  padding: 0.4rem;
  @media (max-width: 854px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #ffffff;
  }
`
const DswapRight = styled.div`
  width: 50%;
  height: 200px;
  padding: 0.4rem;
  @media (max-width: 854px) {
    width: 100%;
    height: auto;
  }
`
const Actions = styled.div`
  margin-top: 24px;
`
const UnlockButtonHarvest = styled(UnlockButton)`
  width: 100%;
  margin-top: 0.6rem;
  background: #ffffff;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  padding: 0.6rem;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: -0.8px;
  color: #636c7d;
`

const DoodaFarmedStakingCard = () => {
  // const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const [pendingTx, setPendingTx] = useState(false)
  const { toastError } = useToast()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.gt(0))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [balancesWithValue, masterChefContract, toastError, t])

  return (
    <>
      <DoodaSubHeading> {t('Farms & Staking')}</DoodaSubHeading>
      <Flex flex="2" flexDirection={['column', null, null, 'row']} alignItems={['flex-start', null, null, 'center']}>
        <DswapLeft>
          <StyledSubHead>{t('CAKE to Harvest')}</StyledSubHead>
          <DswapData>
            <Flex
              flex="2"
              flexDirection={['column-reverse', null, null, 'row']}
              alignItems={['center', null, null, 'center']}
            >
              {/* <DswapDataQty>0</DswapDataQty>
              <DswapDataCurrency>dooda</DswapDataCurrency> */}
              <CakeHarvestBalance farmsWithBalance={balancesWithValue} />
            </Flex>
            {/* <DswapTotal>
              <DoodaDataTotal>~ $ 0</DoodaDataTotal>
            </DswapTotal> */}
          </DswapData>
        </DswapLeft>
        <DswapRight>
          <StyledSubHead>{t('CAKE in Wallet')}</StyledSubHead>
          <DswapData>
            <Flex
              flex="2"
              flexDirection={['column-reverse', null, null, 'row']}
              alignItems={['flex-end', null, null, 'center']}
            >
              {/* <DswapDataQty>0</DswapDataQty>
              <DswapDataCurrency>dooda</DswapDataCurrency> */}
              <CakeWalletBalance />
            </Flex>
            {/* <DswapTotal>
              <DoodaDataTotal>~ $ 0</DoodaDataTotal>
            </DswapTotal> */}
          </DswapData>
        </DswapRight>
      </Flex>
      {/* <DswapButton>{t('Harvest all')}</DswapButton> */}
      <Actions>
        {account ? (
          <DoodaHarvestAllButton
            id="harvest-all"
            disabled={balancesWithValue.length <= 0 || pendingTx}
            onClick={harvestAllFarms}
            width="100%"
          >
            {pendingTx
              ? t('Collecting CAKE')
              : t('Harvest all (%count%)', {
                  count: balancesWithValue.length,
                })}
          </DoodaHarvestAllButton>
        ) : (
          <UnlockButtonHarvest width="100%" />
        )}
      </Actions>
    </>
  )
}

export default DoodaFarmedStakingCard
