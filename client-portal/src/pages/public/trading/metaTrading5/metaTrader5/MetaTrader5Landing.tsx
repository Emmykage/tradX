

import React from 'react'
import "./metaTrader5.scss"
import TradingCardInfo from '../../../../../components/tradingCardInfo/TradingCardInfo'
import IconShield from '../../../../assets/trading/cardIconStarShield.png'
import IconWave from '../../../../assets/trading/cardIconWaves.png'
import Navbar from 'pages/public/home/navbar/Navbar'
import { HomeIcon, RightArrowIcon } from 'assets/icons'

const MetaTrader5Landing = () => {
  return (
    <div className='meta5 landingContainer'>
        <div className='navRouting'>
          <HomeIcon /> <span>Trading</span> <RightArrowIcon/> <span>Mobile Trading</span>
        </div>
        <h1>Meta Trader 5</h1>
        <p>
        Metatrader 5 is a powerful upgrade to MT4. It is the most advanced online trading platform from MetaQuotes Software. MT5 is a multi-asset derivatives platform for trading on CFDs. It’s a tuned-up, faster version of MT4 which enables markets.com traders to perform hedging and delivers more technical indicators as well as more insight with market depth and a wider number of timeframes.</p>




    </div>

  )
}

export default MetaTrader5Landing