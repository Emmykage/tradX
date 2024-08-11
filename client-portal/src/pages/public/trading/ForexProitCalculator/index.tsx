import React from 'react'
import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import TradingProfitCalculator from '../../../../components/tradingProfitCalculator/TradingProfitCalculator'
import USUKICon from '../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import CanIcon from '../../../../assets/trading/canadaflagicon.png'
import BgImage from '../../../../assets/trading/adam-tradingProfit.png'
import ProfitMarginGuide from '../profitMarginGuide/ProfitMarginGuide'
import UkIFlag from '../../../../assets/trading/UK.png'
import TradeAnalyzer from '../CommoditiesProfitCal/tradeAnalyzer/TradeAnalyzer'
import '../trading.scss'
import Calculator from '../../../../assets/trading/adam-calculator.png'
import NavRoute from 'components/tradingNavIndicator/NavRoute'
import ForexCalculator from 'components/forexCalculator/ForexCalculator'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import TradCalc from 'components/tradCalc/TradCalc'
import { NeedMoreInfoData } from '../platform/data'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
const ForexProfitCalculator = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
      <NavRoute location='Forex Profit Calculator'/>
      <TradCalc/>

      <ForexCalculator mainImg={Calculator} 
          title='What is a Forex Profit Calculator?' 
          text1='A forex profit calculator is a tool used by forex traders to calculate the profit or loss from a particular trade. This calculator factors in a trader’s entry and exit price, the currency pair being traded, the number of units, the cost of spread and rollover, as well as any applicable commissions. It helps traders accurately calculate potential profits or losses in advance and understand the risks of the trade. Forex profit calculators also provide a helpful way to compare potential profits across different currency pairs, or to check the performance of a single currency pair over time.
              markets.com offers a forex profit calculator right on the platform to help traders make more informed decisions as they trade.'
              
          text2='markets.com offers a forex profit calculator right on the platform to help traders make more informed decisions as they trade.'/>

      <CostExplanation/>
      <TradingProfitCalculator
             title="How Does a Forex Profit Calculator Work?"
             text1='You might find yourself asking, ‘How Can I Calculate Profit in Forex?’, or ‘How do you calculate profit or loss in forex trading?’. Well fortunately for you, the markets.com forex profit calculator makes things easy.'
             text2="The calculator is designed to help you calculate potential gains and losses on each currency trade. Simply input the values requested: the currency pair being traded, the position size, entry price, and the exit price to accurately determine potential gains or losses. The markets.com calculators already include spreads when determining the outcome and the 0% commission we offer on the platform. With this information, the calculator can quickly and accurately determine how much you would hypothetically make or lose on a trade."
             icon1={USUKICon}
             image={BgImage}
             icon2={CanIcon}/>


      <ProfitMarginGuide
        title="How is Profit Calculated in ForexTrading?"
        text1='Profit in forex trading is calculated by subtracting the entry price from the exit price of a trade. This can be in either a positive or negative value depending on whether the trade resulted in a loss or gain. Forex traders will look to open a trade at a lower price and close it at a higher price, in order to turn a profit'
        text2="However, you don't need to do these calculations manually as tradex.io offers a commodity calculator that does the job for you. You simply need to input the necessary information, and the calculator will provide you with the estimate profit or loss amount. This makes the process simple and convenient, allowing you to focus on making informed trading decisions."
        icon1={USUKICon}
        image={BgImage}
        icon2={UkIFlag}
        />
         <TradeAnalyzer />
         <NeedMoreInfo items={NeedMoreInfoData}/>
        <RegisterBlock/>
        <Footer/>


    </div>
  )
}

export default ForexProfitCalculator