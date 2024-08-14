import React from 'react'
import { CheckIcon2 } from 'assets/icons'
import graphBg from '/trading-images/graph-bg.png'
import candleSTick from '/trading-images/candleStickBg.png'
import perc from '../../../../../assets/trading/90perc.png'
import './simpleTrade.scss'
const SimpleTrade = () => {
  return (
    <div className='simpleTrade'>
        <div className='imagery'>
        <img src={candleSTick} alt="candle stick" className='bg-1' />
        <img src={graphBg} alt="candle stick" className='bg-2'/>
        <img src={perc} alt='percentage' className='bg-3'/>
        <h2></h2>
    </div>
       
        <div className='simpleTradeTextList'>
            <h3>Simply Trade With Us</h3>
            <ul>
                <li><span><CheckIcon2/></span> <p>Market-leading analysis tools with Analyst Recommendations, Insiders and more</p></li>
                <li> <span><CheckIcon2/></span><p>Watch our expert tips on XRay with several shows a day</p></li>
                <li><span><CheckIcon2/></span><p>News and Analysis with a live stream for market-moving updates</p></li>
                <li><span><CheckIcon2/></span><p>Pro-level charting tools with TradingView</p></li>
            </ul>
        </div>
        
    </div>
  )
}

export default SimpleTrade