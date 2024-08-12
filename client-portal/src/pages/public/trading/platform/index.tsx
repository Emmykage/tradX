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

const TradingPlatform = () => {
    const items = [{
        title: "Multi-Asset Platform",
        text: "Upgraded platform rich with features & thousands of assets to speculate on.",
        icon: "/trading-images/wheelIcon.png"
    },
    {
        title: "Multi-Asset Platform",
        text: "Upgraded platform rich with features & thousands of assets to speculate on.",
        icon: "/trading-images/wheelIcon.png"
    },
    {
        title: "Multi-Asset Platform",
        text: "Upgraded platform rich with features & thousands of assets to speculate on.",
        icon: "/trading-images/wheelIcon.png"
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