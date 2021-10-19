import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { LinkExternal, Text, Flex, Link, Skeleton } from '@doodaswap/uikit'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getAddress } from 'utils/addressHelpers'
import { getBscScanLink } from 'utils'
import { CommunityTag, CoreTag, DualTag } from 'components/Tags'

import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apr, { AprProps } from '../Apr'
import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'

export interface ActionPanelProps {
  apr: AprProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
  userDataReady: boolean
  expanded: boolean
}

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  // background: ${({ theme }) => theme.colors.doodaPrimary};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
  // color: ${({ theme }) => theme.colors.doodaPrimary};
  color: #4d5560;
  ont-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  text-align: right;
  letter-spacing: -0.02em;
  margin: auto;
  margin-right: 0px;
`
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.doodaPrimary};
  text-decoration: underline;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.02em;
  margin: auto;
  margin-right: 0px;
  text-decoration-line: underline;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ecf0f1;
  height: 3.2rem;
  padding-bottom: 3px;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  width: 9rem !important;
  padding: 0.78rem 0rem;
`

const ValueContainer = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`
const StyledText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #4d5560;
`
const RightText = styled(StyledText)`
  flex-direction: column;
  margin: auto;
  margin-right: 1px;
  align-items: right;
  display: flex;
  justify-content: flex-end;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({
  details,
  apr,
  multiplier,
  liquidity,
  userDataReady,
  expanded,
}) => {
  const farm = details

  const { t } = useTranslation()
  const isActive = farm.multiplier !== '0X'
  const { quoteToken, token, dual } = farm
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  const lpAddress = getAddress(farm.lpAddresses)
  const bsc = getBscScanLink(lpAddress, 'address')
  const info = `/info/pool/${lpAddress}`
  // console.log('multi', apr)
  return (
    <Container expanded={expanded}>
      {/* <InfoContainer>
        {isActive && (
          <StakeContainer>
            <StyledLinkExternal href={`/add/${liquidityUrlPathParts}`}>
              {t('Get %symbol%', { symbol: lpLabel })}
            </StyledLinkExternal>
          </StakeContainer>
        )}
        <StyledLinkExternal href={bsc}>{t('View Contract')}</StyledLinkExternal>
        <StyledLinkExternal href={info}>{t('See Pair Info')}</StyledLinkExternal>
        <TagsContainer>
          {farm.isCommunity ? <CommunityTag /> : <CoreTag />}
          {dual ? <DualTag /> : null}
        </TagsContainer>
      </InfoContainer> */}
      <Flex flex="3" flexDirection={['column', null, null, 'row']} alignItems={['flex-start', null, null, 'center']}>
        <InfoContainer style={{ visibility: 'hidden', minWidth: '15rem' }}>
          {isActive && (
            <StakeContainer>
              <StyledLinkExternal href={`/add/${liquidityUrlPathParts}`}>
                {t('Get %symbol%', { symbol: lpLabel })}
              </StyledLinkExternal>
            </StakeContainer>
          )}
        </InfoContainer>
        <InfoContainer style={{ marginLeft: '5rem' }}>
          {isActive && (
            <>
              <StakeContainer>
                <StyledText>{t('Multiplier')}</StyledText>
              </StakeContainer>
              <StakeContainer>
                <StyledText>{t('Pair')}</StyledText>
              </StakeContainer>
              <StakeContainer>
                <StyledText>{t('My Assets Deposited')}</StyledText>
              </StakeContainer>{' '}
              <StakeContainer>
                <StyledText>{t('My Rewarded Assets')}</StyledText>
              </StakeContainer>
              <StakeContainer style={{ visibility: 'hidden' }}>
                <StyledText>{t('My Rewarded Assets')}</StyledText>
              </StakeContainer>
            </>
          )}
        </InfoContainer>
        <InfoContainer style={{ textAlign: 'right' }}>
          {isActive && (
            <>
              <StakeContainer style={{ textAlign: 'right' }}>
                {apr.multiplier ? <RightText>{apr.multiplier}</RightText> : <Skeleton width={75} height={25} />}
              </StakeContainer>
              <StakeContainer>
                {/* <RightText style={{ textDecoration: 'underline' }}>{t('DOODA')}</RightText> */}
                <StyledLinkExternal href={info}>{t('DOODA')}</StyledLinkExternal>
              </StakeContainer>
              <StakeContainer>
                <RightText color="#00AF08">{t('~-USD')}</RightText>
              </StakeContainer>{' '}
              <StakeContainer>
                <RightText color="#00AF08">{t('~-USD')}</RightText>
              </StakeContainer>
              <StakeContainer>
                <StyledLink href={bsc}>{t('View on BscScan')}</StyledLink>
              </StakeContainer>
            </>
          )}
        </InfoContainer>
      </Flex>
      {/* <ValueContainer>
        <ValueWrapper>
          <Text>{t('APR')}</Text>
          <Apr {...apr} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('Multiplier')}</Text>
          <Multiplier {...multiplier} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('Liquidity')}</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
      </ValueContainer> */}
      <ActionContainer>
        {/* <HarvestAction {...farm} userDataReady={userDataReady} /> */}
        <StakedAction {...farm} userDataReady={userDataReady} lpLabel={lpLabel} displayApr={apr.value} />
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
