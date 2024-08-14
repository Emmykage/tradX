import Landing from './landing/Landing'
import StraightForwardTrading from './straightForwardTradingComponent/StraightForwardTrading'
import TradingCardInfo from '../../../../components/tradingCardInfo/TradingCardInfo'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import JoinInThreeSteps from 'pages/public/markets/components/joinInThreeSteps/JoinInThreeSteps'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import {

    NeedMoreInfoData,
  } from "./data";
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
import SimpleTrade from './simpleTrade/SimpleTrade'
import wheel from '../../../../assets/trading/cardWheel1.svg'
import starIcon from "../../../../assets/trading/starshield.png"
import fastExecIcon from "../../../../assets/trading/fastExecution.png"
const TradingPlatform = () => {
    const items = [{
        title: "Multi-Asset Platform",
        text: "Upgraded platform rich with features & thousands of assets to speculate on.",
        icon: wheel
    },
    {
        title: "Multi-Asset Platform",
        text: "Upgraded platform rich with features & thousands of assets to speculate on.",
        icon: starIcon
    },
    {
        title: "Multi-Asset Platform",
        text: "Upgraded platform rich with features & thousands of assets to speculate on.",
        icon: fastExecIcon
    }]

  return (
    <div className='tradingContainer'>
        <Navbar/>
        <Landing/>
        <StraightForwardTrading/>
        
        <div className="cardWrapper">
            {items.map(item => (
                <TradingCardInfo 
                cardTitle={item.title}
                cardText={item.text}
                icon={item.icon} /> 
            ))}
        </div>

        <SimpleTrade/>
  

        <JoinInThreeSteps/>
        <NeedMoreInfo items={NeedMoreInfoData} />
        <RegisterBlock/>
        <Footer/>
    </div>
  )
}

export default TradingPlatform