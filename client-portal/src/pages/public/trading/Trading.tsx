import React from 'react'
import './trading.scss'
import Navbar from '../home/navbar/Navbar'
import Landing from './landing/Landing'
import TradingInstruction from './tradingIntruction/TradingInstruction'
import CTABanner from './call-to-action/CTABanner'

const Trading = () => {
  return (
    <div className='tradingContainer' >
        <Navbar/>
        <Landing/>
        <TradingInstruction/>
        <CTABanner/>

    </div>
  )
}

export default Trading