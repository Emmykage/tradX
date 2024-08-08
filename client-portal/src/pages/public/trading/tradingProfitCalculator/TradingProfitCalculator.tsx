import React from 'react'
import BgImage from '../../../../assets/trading/adam-tradingProfit.png'
import './TradingProfitCalculator.scss'
import USUKICon from '../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import CanIcon from '../../../../assets/trading/canadaflagicon.png'
const TradingProfitCalculator = () => {
  return (
    <div className='tradingProfitWrapper'>
        <div className='imageBackdrop'>
            <div>         
            <img src={BgImage} alt="" /> 
            <img src={USUKICon} alt="" className='icon-1' />
            <img src={CanIcon} alt="" className='icon-2' />

            </div>
            </div>
        <div className='textWrapper'>
            <h3>How Does a Forex Profit Calculator Work?</h3>
            <p>You might find yourself asking, ‘How Can I Calculate Profit in Forex?’, or ‘How do you calculate profit or loss in forex trading?’. Well fortunately for you, the markets.com forex profit calculator makes things easy.
<br/> <br/>
The calculator is designed to help you calculate potential gains and losses on each currency trade. Simply input the values requested: the currency pair being traded, the position size, entry price, and the exit price to accurately determine potential gains or losses. The markets.com calculators already include spreads when determining the outcome and the 0% commission we offer on the platform. With this information, the calculator can quickly and accurately determine how much you would hypothetically make or lose on a trade.</p>
        </div>
    </div>
  )
}

export default TradingProfitCalculator