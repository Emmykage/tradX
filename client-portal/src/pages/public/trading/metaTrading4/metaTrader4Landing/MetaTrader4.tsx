

import React from 'react'
import "./metaTrader4.scss"
// import TradingCardInfo from '../tradingCardInfo/TradingCardInfo'
import IconShield from '../../../../assets/trading/cardIconStarShield.png'
import IconWave from '../../../../assets/trading/cardIconWaves.png'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'

const MetaTrader4Landing = () => {
  return (
    <div className='meta4 landingContainer'>
      <Navbar/>
        <div className='navRouting'>
        </div>
        <h1>Meta Trader 4</h1>
        <p>MetaTrader 4 remains one of the most popular and easy-to-use trading platforms. Boasting Expert Advisors, micro-lots, hedging and one-click trading, the tradex.io MT4 offering is everything you would expect from a platform and much more. Powered by markets.com pricing, regulation and infrastructure, you can trade with the confidence that your orders will be executed quickly, with low spreads and with the markets.com support.</p>




    </div>

  )
}

export default MetaTrader4Landing