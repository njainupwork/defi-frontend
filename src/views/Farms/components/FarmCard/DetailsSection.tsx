import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal, Link, Skeleton } from '@doodaswap/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
  multiplier?: string
  stakedBalance?: BigNumber
}
const StyledTextDetail = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #4d5560;
`

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(Link)`
  font-weight: 400;
  display: block;
  font-family: Roboto;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  margin: auto;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.doodaPrimary};
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
  multiplier,
  stakedBalance,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <StyledTextDetail>Multiplier</StyledTextDetail>
        {multiplier ? <StyledTextDetail>{multiplier}</StyledTextDetail> : <Skeleton height={24} width={80} />}
      </Flex>
      <Flex justifyContent="space-between">
        <StyledTextDetail>{t('Total Liquidity')}</StyledTextDetail>
        {totalValueFormatted ? (
          <StyledTextDetail>{totalValueFormatted}</StyledTextDetail>
        ) : (
          <Skeleton width={75} height={25} />
        )}
      </Flex>
      <Flex justifyContent="space-between">
        <StyledTextDetail>{t('Pair')}</StyledTextDetail>
        {lpLabel ? <StyledTextDetail>{lpLabel}</StyledTextDetail> : <Skeleton width={75} height={25} />}
      </Flex>
      <Flex justifyContent="space-between">
        <StyledTextDetail>{t('My Assets Deposit')}</StyledTextDetail>
        {stakedBalance ? (
          <StyledTextDetail>{getBalanceNumber(new BigNumber(stakedBalance))}</StyledTextDetail>
        ) : (
          <Skeleton width={75} height={25} />
        )}
      </Flex>

      {/* {!removed && (
        <StyledLinkExternal href={addLiquidityUrl}>{t('Get %symbol%', { symbol: lpLabel })}</StyledLinkExternal>
      )} */}
      <StyledLinkExternal href={bscScanAddress}>{t('View on BscScan')}</StyledLinkExternal>
      {/* <StyledLinkExternal href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal> */}
    </Wrapper>
  )
}

export default DetailsSection
