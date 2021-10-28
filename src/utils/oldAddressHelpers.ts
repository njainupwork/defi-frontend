import { ChainId } from '@doodaswap/sdk' //-
import addresses from 'config/constants/oldContracts' //-
import tokens from 'config/constants/oldTokens' //-
// import { Address } from 'config/constants/types'
import { Address } from 'config/constants/oldTypes' //-

export const getOldAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getOldCakeAddress = () => {
  return getOldAddress(tokens.cake.address)
}
export const getOldMasterChefAddress = () => {
  return getOldAddress(addresses.masterChef)
}
export const getOldMulticallAddress = () => {
  return getOldAddress(addresses.multiCall)
}
export const getOldWbnbAddress = () => {
  return getOldAddress(tokens.wbnb.address)
}
export const getOldLotteryV2Address = () => {
  return getOldAddress(addresses.lotteryV2)
}
export const getOldPancakeProfileAddress = () => {
  return getOldAddress(addresses.pancakeProfile)
}
export const getOldPancakeRabbitsAddress = () => {
  return getOldAddress(addresses.pancakeRabbits)
}
export const getOldBunnyFactoryAddress = () => {
  return getOldAddress(addresses.bunnyFactory)
}
export const getOldClaimRefundAddress = () => {
  return getOldAddress(addresses.claimRefund)
}
export const getOldPointCenterIfoAddress = () => {
  return getOldAddress(addresses.pointCenterIfo)
}
export const getOldBunnySpecialAddress = () => {
  return getOldAddress(addresses.bunnySpecial)
}
export const getOldTradingCompetitionAddress = () => {
  return getOldAddress(addresses.tradingCompetition)
}
export const getOldEasterNftAddress = () => {
  return getOldAddress(addresses.easterNft)
}
export const getOldCakeVaultAddress = () => {
  return getOldAddress(addresses.cakeVault)
}
export const getOldPredictionsAddress = () => {
  return getOldAddress(addresses.predictions)
}
export const getOldChainlinkOracleAddress = () => {
  return getOldAddress(addresses.chainlinkOracle)
}
export const getOldBunnySpecialCakeVaultAddress = () => {
  return getOldAddress(addresses.bunnySpecialCakeVault)
}
export const getOldBunnySpecialPredictionAddress = () => {
  return getOldAddress(addresses.bunnySpecialPrediction)
}
