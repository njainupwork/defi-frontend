import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Card, Flex, Text, Skeleton, Link } from '@doodaswap/uikit'
import { DeserializedFarm } from 'state/types'
import { getBscScanLink } from 'utils'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { getBalanceNumber } from 'utils/formatBalance'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { getAddress } from 'utils/addressHelpers'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
  lpRewardsApr?: number
  liquidity?: BigNumber
}

const StyledCard = styled(Card)`
  align-self: baseline;
  border: 0px solid #ffffff;
`

const FarmCardInnerContainer = styled.div`
  display: flex;
  // border: 2px solid red;
  // background: ${({ theme }) => theme.colors.doodaPrimary};
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
`

const ExpandingWrapper = styled.div`
  padding: 24px;
  // border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
`
const InfoContainer = styled.div`
  margin: 2px;
`
const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3.2rem;
  padding: 5px 3px 3px 1.3rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`
const CardSubLabel = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #4d5560;
`
const CardSubValue = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.doodaPrimary};
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  displayApr: string
  removed: boolean
  cakePrice?: BigNumber
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, displayApr, removed, cakePrice, account }) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const totalValueFormatted =
    farm.liquidity && farm.liquidity.gt(0)
      ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : ''

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '').replace('-', '+')
  const earnLabel = farm.dual ? farm.dual.earnLabel : t('CAKE + Fees')

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = getAddress(farm.lpAddresses)
  const isPromotedFarm = farm.token.symbol === 'CAKE'
  console.log(farm, 'hi k')

  return (
    <StyledCard>
      <FarmCardInnerContainer>
        {/* pair image/ pair name and enable button section */}
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          isCommunityFarm={farm.isCommunity}
          token={farm.token}
          quoteToken={farm.quoteToken}
          farm={farm}
          account={account}
          cakePrice={cakePrice}
          addLiquidityUrl={addLiquidityUrl}
          setShowExpandableSection={setShowExpandableSection}
          showExpandableSection={showExpandableSection}
        />
        {/* new flex section for below card heading */}
        <Flex
          flex="2"
          flexWrap="wrap"
          flexDirection={['column', null, null, 'row']}
          alignItems={['flex-start', null, null, 'center']}
          ml="10%"
        >
          {' '}
          {/* <Link href={`/add/${liquidityUrlPathParts}`}>{t('Get %symbol%', { symbol: lpLabel })}</Link> */}
          <InfoContainer style={{ visibility: 'visible', width: '48%' }}>
            <StakeContainer>
              {/* <Link href={`/add/${liquidityUrlPathParts}`}>{t('Get %symbol%', { symbol: lpLabel })}</Link> */}
              <CardSubLabel>{t('')}</CardSubLabel>
              <CardSubValue>?</CardSubValue>
            </StakeContainer>
          </InfoContainer>
          <InfoContainer style={{ visibility: 'visible', width: '48%' }}>
            <StakeContainer>
              <CardSubLabel>{t('')}</CardSubLabel>
              <CardSubValue>
                {farm.apr ? (
                  <ApyButton
                    variant="text-and-button"
                    pid={farm.pid}
                    lpSymbol={farm.lpSymbol}
                    multiplier={farm.multiplier}
                    lpLabel={lpLabel}
                    addLiquidityUrl={addLiquidityUrl}
                    cakePrice={cakePrice}
                    apr={farm.apr}
                    displayApr={displayApr}
                  />
                ) : (
                  <Skeleton height={24} width={80} />
                )}
              </CardSubValue>
            </StakeContainer>
          </InfoContainer>
          <InfoContainer style={{ visibility: 'visible', width: '48%' }}>
            <StakeContainer>
              <CardSubLabel>{t('Assets Deposit')}</CardSubLabel>
              <CardSubValue>
                {farm.userData ? (
                  <div>{getBalanceNumber(new BigNumber(farm.userData.earnings))}</div>
                ) : (
                  <Skeleton height={24} width={80} />
                )}
              </CardSubValue>
            </StakeContainer>
          </InfoContainer>
        </Flex>
        {/* {!removed && (
          <Flex justifyContent="space-between" alignItems="center">
            <Text>{t('APR')}:</Text>
            <Text bold style={{ display: 'flex', alignItems: 'center' }}>
              {farm.apr ? (
                <ApyButton
                  variant="text-and-button"
                  pid={farm.pid}
                  lpSymbol={farm.lpSymbol}
                  multiplier={farm.multiplier}
                  lpLabel={lpLabel}
                  addLiquidityUrl={addLiquidityUrl}
                  cakePrice={cakePrice}
                  apr={farm.apr}
                  displayApr={displayApr}
                />
              ) : (
                <Skeleton height={24} width={80} />
              )}
            </Text>
          </Flex>
        )} */}

        {/* <Flex justifyContent="space-between">
          <Text>{t('Earn')}:</Text>
          <Text>{earnLabel}</Text>
        </Flex> */}
        {/* <CardActionsContainer
          farm={farm}
          lpLabel={lpLabel}
          account={account}
          cakePrice={cakePrice}
          addLiquidityUrl={addLiquidityUrl}
        /> */}
      </FarmCardInnerContainer>

      <ExpandingWrapper>
        {/* moved to upper section, CardHeading component */}
        {/* <ExpandableSectionButton
          onClick={() => setShowExpandableSection(!showExpandableSection)}
          expanded={showExpandableSection}
        /> */}

        {/* This is section which will hold the expanded view of the FarmCard */}
        {showExpandableSection && (
          <DetailsSection
            removed={removed}
            bscScanAddress={getBscScanLink(lpAddress, 'address')}
            infoAddress={`/info/pool/${lpAddress}`}
            totalValueFormatted={totalValueFormatted}
            lpLabel={lpLabel}
            addLiquidityUrl={addLiquidityUrl}
            multiplier={farm.multiplier}
            stakedBalance={farm.userData.stakedBalance}
          />
        )}
      </ExpandingWrapper>
    </StyledCard>
  )
}

export default FarmCard
