import React from 'react'
import "./landing.scss"
import TradingCardInfo from '../tradingCardInfo/TradingCardInfo'
import IconShield from '../../../../assets/trading/cardIconStarShield.png'
import IconWave from '../../../../assets/trading/cardIconWaves.png'
import Navbar from 'pages/public/home/navbar/Navbar'
import { HomeIcon, RightArrowIcon } from 'assets/icons'

const Landing = () => {
  return (
    <div className='landingContainer'>
        <div className='navRouting'>
          <HomeIcon /> <span>Trading</span> <RightArrowIcon/> <span>TradingPlatform</span>
        </div>
        <h1>Trading Platform</h1>
        <p>Take your trading to the next level with the markets.com powerful, feature & benefit rich platform, featuring high grade charting, unique analytic tools and customisable alerts.</p>
     </div>

  )
}

export default Landing