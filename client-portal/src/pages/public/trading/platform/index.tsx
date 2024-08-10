import Navbar from 'pages/public/home/navbar/Navbar'
import React from 'react'
import Landing from './landing/Landing'
import StraightForwardTrading from './straightForwardTradingComponent/StraightForwardTrading'
import TradingCardInfo from '../../../../components/tradingCardInfo/TradingCardInfo'

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

        <div className='container'>
            <StraightForwardTrading/>

        </div>
        
        
        <div className="container cardWrapper">
            {items.map(item => (
                <TradingCardInfo 
                cardTitle={item.title}
                cardText={item.text}
                icon={item.icon} /> 
            ))}
        </div>
    </div>
  )
}

export default TradingPlatform