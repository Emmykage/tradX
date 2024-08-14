import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import TradeAnalyzer from '../../../../components/tradeAnalyzer/TradeAnalyzer'
import "../trading.scss"
import comIcon from '../../../../assets/trading/commIcon.png'
import CanIcon from '../../../../assets/trading/canadaflagicon.png'
import BgImage from '../../../../assets/trading/adam-green-farm-note.png'
import TradingProfitCalculator from '../../../../components/tradingProfitCalculator/TradingProfitCalculator'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
import { NeedMoreInfoData } from './data'
import traderBg from "../../../../assets/trading/busy-trader.png"
import ForexCalculator from 'components/forexCalculator/ForexCalculator'
import TradCalc from 'components/tradCalc/TradCalc'
import CommodityCalculator from './commodityCalculator/CommodityProfitCalculator'
import ProfitLossCal from './commodityCalculator/ProfitLossCalculator'

const CommoditiesProfitCalc = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
      <TradCalc withRoute titleHeader='Commodities Profit Calculator'/>

        <ForexCalculator mainImg={traderBg}

          title='What is a Commodities Profit Calculator?' 
          text1='A Commodity Profit Calculator is a tool that helps traders and investors in the commodity market to calculate their potential profits or losses based on various input parameters. The calculator can provide an estimate of the profit or loss that would be realized if the commodity were bought and sold at the current market price. Commodity Profit Calculators can be a useful tool for traders and investors to make informed decisions about buying or selling commodities.'


          text2='markets.com offers a commodities calculator right on the platform to help traders make more informed decisions as they trade.'/>
    
      

        <CostExplanation/>

        <CommodityCalculator 
          title="How Does a Commodities Profit Calculator Work?"
          text1='A Commodity Profit Calculator works by taking into account various input parameters such as the current market price, quantity, and transaction fees. The calculator calculates the estimated revenue generated by selling the commodity and subtracts the total cost of the transaction, including any associated fees, to arrive at the estimated profit or loss. '

          text2='The calculated value helps traders and investors in making informed decisions about buying or selling commodities. By providing quick and accurate profit/loss estimates. The tradex.com commodity calculator makes the complex task of risk management much more digestible and so traders are advised to use it before they decide to put their capital at risk.'

          icon1={comIcon}
          image={BgImage}
          />
          <ProfitLossCal                />


        <TradeAnalyzer/>
  

        <NeedMoreInfo items={NeedMoreInfoData}/>
        <RegisterBlock/>
        <Footer/>
        
    </div>
  )
}

export default CommoditiesProfitCalc