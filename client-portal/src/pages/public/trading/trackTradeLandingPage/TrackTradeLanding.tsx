import { HomeIcon, RightArrowIcon } from 'assets/icons'
import React from 'react'
import TrackTrade from '../trackTrade/TrackTrade'
import CopyTrade from '../copyTrade/CopyTrade'
import './trackTradeLanding.scss'
const TrackTradeLanding = () => {
  return (
    <div className='trackTrade'>
    <div className='navRouting'>
      <HomeIcon /> <span>Trading</span> <RightArrowIcon/> <span>TradingPlatform</span>
    </div>
    <TrackTrade/>
    <CopyTrade/>
 </div>


  )
}

export default TrackTradeLanding