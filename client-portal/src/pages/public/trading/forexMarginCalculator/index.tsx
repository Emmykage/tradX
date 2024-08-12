import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import TradeAnalyzer from '../CommoditiesProfitCal/tradeAnalyzer/TradeAnalyzer'
import USUKICon from '../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import CanIcon from '../../../../assets/trading/canadaflagicon.png'
import GraphBg from '../../../../assets/trading/graphBg.png'
import TradingProfitCalculator from '../../../../components/tradingProfitCalculator/TradingProfitCalculator'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import TradCalc from 'components/tradCalc/TradCalc'
import { NeedMoreInfoData } from '../platform/data'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
import NavRoute from 'components/tradingNavIndicator/NavRoute'
import ForexCalculator from 'components/forexCalculator/ForexCalculator'
import calculator from '../../../../assets/trading/adam-calculator.png'
import MarginCall from './marginCall/MarginCall'
import HowIsMarginCal from './howIsForexMarginCal/HowIsMarginCal'

const ForexMarginCalculator = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
      <NavRoute location='Forex Margin Calculator'/>
        <TradCalc/>

        <ForexCalculator 
        mainImg={calculator}
        title='What is a Forex Margin Calculator?'
        text1='Required margin is percentage of the full value of a position that you need to possess in order to enter a position.
        Our forex margin calculator is a tool designed to calculate the approximate required margin for the desired by your position size and direction.'/>
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

        <MarginCall/>
        <HowIsMarginCal/>
        <TradeAnalyzer/>
        <NeedMoreInfo items={NeedMoreInfoData}/>
        <RegisterBlock/>
        <Footer/>
        
    </div>
  )
}

export default ForexMarginCalculator