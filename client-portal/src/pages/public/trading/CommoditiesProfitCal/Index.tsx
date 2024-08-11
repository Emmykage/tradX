import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import TradeAnalyzer from './tradeAnalyzer/TradeAnalyzer'
import "../trading.scss"
import USUKICon from '../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import CanIcon from '../../../../assets/trading/canadaflagicon.png'
import BgImage from '../../../../assets/trading/adam-tradingProfit.png'
import TradingProfitCalculator from '../../../../components/tradingProfitCalculator/TradingProfitCalculator'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
import { NeedMoreInfoData } from './data'
import NavRoute from 'components/tradingNavIndicator/NavRoute'

import traderBg from "../../../../assets/trading/busy-trader.png"
import ForexCalculator from 'components/forexCalculator/ForexCalculator'

const CommoditiesProfitCalc = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
      <NavRoute location='Commodities Profit Calculator'/>

        <ForexCalculator mainImg={traderBg} 

          title='What is a Commodities Profit Calculator?' 
          text1='A Commodity Profit Calculator is a tool that helps traders and investors in the commodity market to calculate their potential profits or losses based on various input parameters. The calculator can provide an estimate of the profit or loss that would be realized if the commodity were bought and sold at the current market price. Commodity Profit Calculators can be a useful tool for traders and investors to make informed decisions about buying or selling commodities.'


          text2='markets.com offers a commodities calculator right on the platform to help traders make more informed decisions as they trade.'/>
    
      

        <CostExplanation/>

        <div className='container'>
          <TradingProfitCalculator 
          title="How Does a Forex Profit Calculator Work?"
          text1='You might find yourself asking, ‘How Can I Calculate Profit in Forex?’, or ‘How do you calculate profit or loss in forex trading?’. Well fortunately for you, the markets.com forex profit calculator makes things easy.'
          text2="The calculator is designed to help you calculate potential gains and losses on each currency trade. Simply input the values requested: the currency pair being traded, the position size, entry price, and the exit price to accurately determine potential gains or losses. The markets.com calculators already include spreads when determining the outcome and the 0% commission we offer on the platform. With this information, the calculator can quickly and accurately determine how much you would hypothetically make or lose on a trade."
          icon1={USUKICon}
          image={BgImage}
          icon2={CanIcon}/>
        </div>


        <TradeAnalyzer/>
  

        <NeedMoreInfo items={NeedMoreInfoData}/>
        <RegisterBlock/>
        <Footer/>
        
    </div>
  )
}

export default CommoditiesProfitCalc