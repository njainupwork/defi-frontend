import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Tag, Flex, Heading, Skeleton } from '@doodaswap/uikit'
import { Token } from '@doodaswap/sdk'
import { CommunityTag, CoreTag } from 'components/Tags'
import { DeserializedFarm } from 'state/types'
import { TokenPairImage } from 'components/TokenImage'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import CardActionsContainer from './CardActionsContainer'

export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
}

// interface FarmCardActionsProps {
//   farm: FarmWithStakedValue
//   account?: string
//   addLiquidityUrl?: string
//   cakePrice?: BigNumber
//   lpLabel?: string
// }

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
  farm: FarmWithStakedValue
  account?: string
  addLiquidityUrl?: string
  cakePrice?: BigNumber
  setShowExpandableSection?: any
  showExpandableSection?: boolean
}

const Wrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`
const StyledHeading = styled(Heading)`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: -0.8px;
  color: #4d5560;
`
const CardButtonContainer = styled.div`
  padding-left: 1rem;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  token,
  quoteToken,
  farm,
  account,
  cakePrice,
  addLiquidityUrl,
  setShowExpandableSection,
  showExpandableSection,
}) => {
  return (
    <Wrapper>
      <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={50} height={50} />
      <Flex flexDirection="row" ml="12px" justifyContent="space-between" alignItems={['center', null, null, 'center']}>
        <StyledHeading mb="4px" mt="4px" mr="2rem">
          {lpLabel.split(' ')[0]}
        </StyledHeading>
        {/* <Flex justifyContent="center"> */}
        {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
        {/* {multiplier ? (
            <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
          ) : (
            <Skeleton ml="4px" width={42} height={28} />
          )} */}
        <CardButtonContainer>
          <CardActionsContainer
            farm={farm}
            lpLabel={lpLabel}
            account={account}
            cakePrice={cakePrice}
            addLiquidityUrl={addLiquidityUrl}
            expanded={showExpandableSection}
          />
        </CardButtonContainer>
        {/* </Flex> */}
      </Flex>
      <div>
        <ExpandableSectionButton
          onClick={() => setShowExpandableSection(!showExpandableSection)}
          expanded={showExpandableSection}
        />
      </div>
    </Wrapper>
  )
}

export default CardHeading
