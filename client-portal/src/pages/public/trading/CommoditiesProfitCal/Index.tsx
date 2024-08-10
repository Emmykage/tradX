import React from 'react'
import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import TradeAnalyzer from './tradeAnalyzer/TradeAnalyzer'
import Navbar from 'pages/public/home/navbar/Navbar'
import { HomeIcon, RightArrowIcon1 } from 'assets/icons'
import "../trading.scss"
import USUKICon from '../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import CanIcon from '../../../../assets/trading/canadaflagicon.png'
import BgImage from '../../../../assets/trading/adam-tradingProfit.png'
import TradingProfitCalculator from '../../../../components/tradingProfitCalculator/TradingProfitCalculator'

const CommoditiesProfitCalc = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
      <div className='navRouting'>
          <HomeIcon /> <span>Trading</span> <RightArrowIcon1/> <span>TradingPlatform</span>
        </div>
      

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


        <div className="container">
            <TradeAnalyzer/>
        </div>
        
    </div>
  )
}

export default CommoditiesProfitCalc