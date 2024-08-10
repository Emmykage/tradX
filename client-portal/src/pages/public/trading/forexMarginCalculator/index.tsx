import React from 'react'
import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import TradeAnalyzer from '../CommoditiesProfitCal/tradeAnalyzer/TradeAnalyzer'
import USUKICon from '../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import CanIcon from '../../../../assets/trading/canadaflagicon.png'
import BgImage from '../../../../assets/trading/dark-arrow.png'
import GraphBg from '../../../../assets/trading/graphBg.png'
import TradingProfitCalculator from '../../../../components/tradingProfitCalculator/TradingProfitCalculator'
import UkIFlag from '../../../../assets/trading/UK.png'
import ProfitMarginGuide from '../profitMarginGuide/ProfitMarginGuide'
import Navbar from 'pages/public/home/navbar/Navbar'
import { HomeIcon, RightArrowIcon1 } from 'assets/icons'
import Leaflet from '../../../../assets/trading/leaflet.png'
const ForexMarginCalculator = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
      <div className='navRouting'>
          <HomeIcon /> <span>Trading</span> <RightArrowIcon1/> <span>Mobile Trading</span>
        </div>
        <CostExplanation/>

        <div className='container'>
          <TradingProfitCalculator 
          title="How Does a Forex Profit Calculator Work?"
          text1='You might find yourself asking, ‘How Can I Calculate Profit in Forex?’, or ‘How do you calculate profit or loss in forex trading?’. Well fortunately for you, the markets.com forex profit calculator makes things easy.'
          text2="The calculator is designed to help you calculate potential gains and losses on each currency trade. Simply input the values requested: the currency pair being traded, the position size, entry price, and the exit price to accurately determine potential gains or losses. The markets.com calculators already include spreads when determining the outcome and the 0% commission we offer on the platform. With this information, the calculator can quickly and accurately determine how much you would hypothetically make or lose on a trade."
          icon1={USUKICon}
          image={GraphBg}
          icon2={CanIcon}/>
        </div>

        <div className="container">
      <ProfitMarginGuide
        title="How is Profit Calculated in ForexTrading?"
        text1='Profit in forex trading is calculated by subtracting the entry price from the exit price of a trade. This can be in either a positive or negative value depending on whether the trade resulted in a loss or gain. Forex traders will look to open a trade at a lower price and close it at a higher price, in order to turn a profit'
        text2="However, you don't need to do these calculations manually as
tradex.io offers a commodity calculator that does the job for you. You simply need to input the necessary information, and the calculator will provide you with the estimate profit or loss amount. This makes the process simple and convenient, allowing you to focus on making informed trading decisions."
        icon1={Leaflet}
        image={BgImage}
        icon2={UkIFlag}
        />
    </div>

        <div className="container">
            <TradeAnalyzer/>
        </div>
    </div>
  )
}

export default ForexMarginCalculator