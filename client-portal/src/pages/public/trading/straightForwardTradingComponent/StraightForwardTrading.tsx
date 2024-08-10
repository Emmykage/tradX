import React from 'react'
import './straightforwardTrading.scss'
import backdropImg from "../../../../assets/trading/working-trader.png"
import primeIcon from '../../../../assets/trading/primeIcon.png'
import TickedIcon from '../../../../assets/trading/tickBox.png'
const StraightForwardTrading = () => {
  return (
    <div>
        
        <div className='tradingWrapper'>
          <div className='textWrapper'>
            <h3>Straightforward Trading</h3>
            <p>
              Our most complete platform yet – everything you need to trade. The markets.com multi-asset trading platform places you in control of every trade. 
              The trading platform is packed with features like News & Analysis as well as a suite of powerful Sentiment, Fundamental and Technical tools for making more informed decisions.
               You'll also be able to watch our live News & Analysis video sessions, where our in-house experts and guests share their deep knowledge of the financial markets exclusively with markets.com traders.
               </p>
          </div>
          <div className='backdropImage'>
            <img src={backdropImg} alt="working man image" className='mainImg' />
            <img src={primeIcon} alt="amazon prime icon" className='icon-1' />
            <img src={TickedIcon} alt="amazon prime icon" className='icon-2' />
          </div>
        </div>
    </div>
  )
}

export default StraightForwardTrading