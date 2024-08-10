import React from 'react'
import "./landingPageMobile.scss"
// import TradingCardInfo from '../tradingCardInfo/TradingCardInfo'

import { HomeIcon, RightArrowIcon1 } from 'assets/icons'

const LandingPageMobile = () => {
  return (
    <div className='mobile landingContainer'>
        <div className='navRouting'>
          <HomeIcon /> <span>Trading</span> <RightArrowIcon1/> <span>TradingPlatform</span>
        </div>
        <h1>Trade on the Go</h1>
        <p>Our powerful and accessible trading app allows you to seize every trading opportunity. Wherever you are.</p>
 
    
    </div>

  )
}

export default LandingPageMobile