import styled from 'styled-components'
import { Heading, Button } from '@doodaswap/uikit'

// added custom styled components for doodaswap
export const DoodaHeading = styled(Heading)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DoodaSubHeading = styled.h6`
  color: #f1f3f5 !important;
  font-family: Roboto !important;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.02em;
`
export const DoodaSubText = styled.h4`
  color: #4d5560 !important;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.8px;
`
// export const DmainLeft = styled.div`
//   background-image: url(${CardBackground});
//   background-size: cover;
//   background-repeat: no-repeat;
//   width: 25%;
//   min-height: auto;
//   max-height: 314px;
//   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
//   margin-right: 1.3rem;
//   border-radius: 4px;
//   @media (max-width: 854px) {
//     width: 70%;
//     max-height: 420px;
//     margin-right: 0px;
//     margin-left: 0px;
//     margin-top: 1rem;
//   }
//   @media (max-width: 500px) {
//     width: 90%;
//   }
// `
// const DmainCenter = styled.div`
//   background: #3763a4;
//   width: 50%;
//   min-height: 314px;
//   max-height: auto;
//   margin-left: 0.5rem;
//   margin-right: 1.3rem;
//   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
//   border-radius: 4px;
//   padding: 1.2rem;
//   @media (max-width: 854px) {
//     width: 70%;
//     margin-left: 0px !important;
//     margin-right: 0px;
//     margin-top: 1rem;
//   }
//   @media (max-width: 500px) {
//     width: 90%;
//   }
// `
// const DmainRight = styled.div`
//   background: #ffffff;
//   padding: 0.4rem;
//   width: 25%;
//   min-height: 314px;
//   max-height: auto;
//   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
//   border-radius: 4px;
//   margin-left: 0.5rem;
//   @media (max-width: 854px) {
//     width: 70%;
//     margin-left: 0px;
//     margin-right: 0px;
//     margin-top: 1rem;
//     height: auto;
//   }
//   @media (max-width: 500px) {
//     width: 90%;
//   }
// `
// const DoodaSwapMain = styled.div`
//   margin-top: 5rem;
//   @media (max-width: 854px) {
//     margin-top: 3rem;
//   }
// `

export const DswapButton = styled.button`
  color: red;
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
export const DoodaHarvestAllButton = styled(Button)`
  color: red;
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
export const StyledSubHead = styled(DoodaSubHeading)`
  font-size: 13px;
  padding-top: 3px;
`
export const DswapTotal = styled.div`
  float: right;
`
export const DswapData = styled.div`
  height: auto;
  float: right;
  margin-top: 40%;
  margin-right: 6%;
  @media (max-width: 854px) {
    margin-top: 26%;
  }
`
export const DoodaDataQty = styled(DoodaSubHeading)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #f1f3f5;
`
export const DoodaDataTotal = styled(DoodaSubHeading)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #f1f3f5;
`
export const DoodaDataCurrency = styled(DoodaSubHeading)`
  font-family: Roboto;
  font-style: normal;
  padding-top: 6.5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: -0.02em;
  margin-left: 6px;
  color: #f1f3f5;
  opacity: 0.5;
`
export const StyledDoodaHeadAlt = styled(DoodaSubHeading)`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.8px;
  color: #3763a4 !important;
  padding: 4.3rem 2rem 0rem;
`
export const StyledDoodaHeadAlt2 = styled(StyledDoodaHeadAlt)`
  padding: 0.1rem 0.5rem !important;
  font-family: Roboto;
  text-align: left;
`
// export const DoodaSubTextLeft = styled(DoodaSubText)`
//   padding: 2rem 1.7rem 1.3rem 2.5rem;
// `
export const DoodaDefaultBtn = styled.button`
  margin: 0px auto;
  width: 30%;
  border: none;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #99a2ab;
  box-sizing: border-box;
  border-radius: 2px;
`
// const StyledRightArrow = styled(RightArrow)`
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// `
// const CarosalContainer = styled.div`
//   display: flex;
//   margin-top: 2.2rem;
//   align-items: center;
//   padding-top: 1rem;
//   justify-content: center;
// `
// const DoodaStatEachRow = styled.div`
//   margin-top: 5px;
//   padding: 0.5rem 0.4rem;
// `
// const DoodaStatStyledButton = styled(DswapButton)`
//   background: #3763a4;
// `
// const DoodaStatLabel = styled.nav`
//   float: left;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 12px;
//   line-height: 22px;
//   letter-spacing: -0.8px;
//   color: #636c7d;
// `
// const DoodaStatValue = styled.nav`
//   float: right;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 13px;
//   line-height: 24px;
//   text-align: right;
//   letter-spacing: -0.02em;
//   color: #3763a4;
// `
// styled components for below main section
const DoodaSwapBelowMain = styled.div`
  margin: 3rem 0rem 1rem;
`
const DoodaLeftBelow = styled.div`
  min-height: 150px;
  width: 33%;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  margin-right: 1rem;
  padding: 1rem;
  @media (max-width: 854px) {
    margin: 0px auto;
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const DoodaRightBelow = styled.div`
  min-height: 150px;
  width: 66%;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  @media (max-width: 854px) {
    margin: 1rem auto;
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const DoodaStyledRightBtn = styled(DoodaDefaultBtn)`
  margin-right: 0.2rem;
  background: #ffffff;
  border: 1px solid #99a2ab;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 12px !important;
  line-height: 22px;
`
const DoodaStyledLabel = styled(DoodaDataTotal)`
  color: #3763a4 !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin-right: 1rem;
  margin-top: 3.5rem;
`
const RightEachCard = styled.div`
  width: 50%;
  margin: 1rem;
  padding-right: 1rem;
  border-right: 2px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 854px) {
    width: 91.3%;
    padding-right: 0px;
    border-right: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
  }
`
const RightEachCard2 = styled.div`
  width: 50%;
  margin: 1rem;
  padding-right: 1rem;
  @media (max-width: 854px) {
    width: 91.3%;
    padding-right: 0px;
  }
`

const DollorIndicator = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #cad0d7;
`
