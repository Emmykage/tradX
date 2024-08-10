import React from 'react'
import primeIcon from '../../../../assets/trading/primeIcon.png'
import RedIccon from '../../../../assets/trading/redIcon.png'
import Trader from "../../../../assets/trading/working-trader.png"
const TradingInstruction = () => {
  return (
    <div>
        <div className='tradingInstructinTopDisp'>
            <div className='tradingNote'>
                <h3>Straightforward Trading</h3>
                <p>
                Our most complete platform yet – everything you need to trade. The markets.com multi-asset trading platform places you in control of every trade. The trading platform is packed with features like News & Analysis as well as a suite of powerful Sentiment, Fundamental and Technical tools for making more informed decisions. You'll also be able to watch our live News & Analysis video sessions, where our in-house experts and guests share their deep knowledge of the financial markets exclusively with markets.com traders.
                </p>
            </div>
            <div className='tradingImg'>
                <img src={Trader} className='trader-image' alt=''/>
                <img src={primeIcon} className="prime-icon" alt=''/>
                <img src={RedIccon} className='red-icon' alt="" />

            </div>
        </div>
    </div>
  )
}

export default TradingInstruction