import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import TradeAnalyzer from '../../../../components/tradeAnalyzer/TradeAnalyzer'
import USUKICon from '../../../../assets/trading/uk-circle-2.png'
import CanIcon from '../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import GraphBg from '../../../../assets/trading/graphBg.png'
import TradingProfitCalculator from '../../../../components/tradingProfitCalculator/TradingProfitCalculator'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import TradCalc from 'components/tradCalc/TradCalc'
import { NeedMoreInfoData } from '../platform/data'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
import ForexCalculator from 'components/forexCalculator/ForexCalculator'
import calculator from '../../../../assets/trading/adam-calculator.png'
import MarginCall from './marginCall/MarginCall'
import HowIsMarginCal from './howIsForexMarginCal/HowIsMarginCal'

const ForexMarginCalculator = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
        <TradCalc withRoute titleHeader='Forex Margin Calculator'/>

        <ForexCalculator 
        mainImg={calculator}
        title='What is a Forex Margin Calculator?'
        text1='Required margin is percentage of the full value of a position that you need to possess in order to enter a position.
        Our forex margin calculator is a tool designed to calculate the approximate required margin for the desired by your position size and direction.'/>
        <CostExplanation/>

          <TradingProfitCalculator 
          title="What is leveraged trading, why it is important?"
          text1='Trading on leveraged capital means that you can trade amounts significantly higher than the funds you invest, which only serve as the margin. High leverage can significantly increase the potential return, but it can also significantly increase potential losses. As our client, you can trade with amounts many times higher than you could invest in a particular CFD without the margin we provide.'
          text2="Sometimes leverage is expressed in percentage terms – and referred to as Margin Requirement. For example, a leverage of 1:30 is a margin requirement of 3.34%."
          icon1={USUKICon}
          image={GraphBg}
          icon2={CanIcon}/>

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