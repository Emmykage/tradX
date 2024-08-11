import React from 'react'
import "./landingPageMobile.scss"
import NavRoute from 'components/tradingNavIndicator/NavRoute'
// import TradingCardInfo from '../tradingCardInfo/TradingCardInfo'


const LandingPageMobile = () => {
  return (
    <div className='mobile landingContainer'>
    <NavRoute location='Mobile Trading' />
     <h1>Trade on the Go</h1>
     <p>Our powerful and accessible trading app allows you to seize every trading opportunity. Wherever you are.</p>
  
 </div>

  )
}

export default LandingPageMobile