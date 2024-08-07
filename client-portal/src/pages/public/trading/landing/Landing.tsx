import React from 'react'
import "./landing.scss"
import TradingCardInfo from '../tradingCardInfo/TradingCardInfo'
import IconShield from '../../../../assets/trading/cardIconStarShield.png'
import IconWave from '../../../../assets/trading/cardIconWaves.png'

const Landing = () => {
  return (
    <div className='landingContainer'>
        <h1>Trading Platform</h1>
        <div>
            <p>Take your trading to the next level with the markets.com powerful, feature & benefit rich platform, featuring high grade charting, unique analytic tools and customisable alerts.</p>
        </div>

        
        <div className='tradingCardContainer'> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={"../../../../../public/trading-Icons/cardWheel1.svg"} /> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={IconShield} /> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={IconWave} /> 



        </div>



    </div>
  )
}

export default Landing