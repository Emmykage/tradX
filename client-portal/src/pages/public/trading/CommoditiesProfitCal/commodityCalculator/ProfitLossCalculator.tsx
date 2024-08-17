import React from 'react'
import './commodityProfitCalculator.scss'
import CommCalc from '../../../../../assets/trading/goldCal.png'
import redDrop from '../../../../../assets/trading/red-droplet.png'
import goldImage from '../../../../../assets/trading/goldImage.png'
interface TradingprofitPrps{
    title: string,
    text1: string,
    text2: string,
    image: string,
    icon1: string,
}
const ProfitLossCal = () => {
  return (
    <div className='commodityProfitWrapper pl'>
       
     
        <div className='imageBackdrop'>
            <div>         
            <img src={goldImage} alt="background image" /> 
            <img src={redDrop} alt="" className='icon-2' />
            <img src={CommCalc} alt=""  className='plCal' />
            </div>
        </div>
        <div className='textWrapper'>
            <h3>How Does a Commodities Profit Calculator Work?</h3>
            <p>A Commodity Profit Calculator works by taking into account various input parameters such as the current market price, quantity, and transaction fees. The calculator calculates the estimated revenue generated by selling the commodity and subtracts the total cost of the transaction, including any associated fees, to arrive at the estimated profit or loss.</p>
            <p>The calculated value helps traders and investors in making informed decisions about buying or selling commodities. By providing quick and accurate profit/loss estimates. The tradex.com commodity calculator makes the complex task of risk management much more digestible and so traders are advised to use it before they decide to put their capital at risk.</p>
        </div>
    </div>
  )
}

export default ProfitLossCal