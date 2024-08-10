import React from 'react'
import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import Navbar from 'pages/public/home/navbar/Navbar'
import { HomeIcon, RightArrowIcon } from 'assets/icons'
import './cfdcalulator.scss' 
const CFDCalculatr = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>

      <div className='navRouting'>
          <HomeIcon /> <span>Trading</span> <RightArrowIcon/> <span>TradingPlatform</span>
        </div>
      <div>

      </div>
        
        <div className="container">
            <CostExplanation/>
        </div>

        
    </div>
  )
}

export default CFDCalculatr