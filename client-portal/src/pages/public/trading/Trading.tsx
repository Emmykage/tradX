import React from 'react'
import './trading.scss'
import Navbar from '../home/navbar/Navbar'
import Landing from './landing/Landing'
import TradingInstruction from './tradingIntruction/TradingInstruction'
import CTABanner from './call-to-action/CTABanner'
import ProfileCard from './profileCard/ProfileCard'
import TradingCardInfo from './tradingCardInfo/TradingCardInfo'
import IconShield from '../../../assets/trading/cardIconStarShield.png'
import IconWave from '../../../assets/trading/cardIconWaves.png'
import PerksCard from './perksCard/PerksCard'
import TradingSteps from './tradingSteps/TradingSteps'


const Trading = () => {
  return (
    <div className='tradingContainer' >
        {/* <Navbar/> */}
        <Landing />


        <div className='tradingCardContainer'> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={"../../../../../public/trading-Icons/cardWheel1.svg"} /> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={IconShield} /> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={IconWave} /> 

          <PerksCard 
          icon="/trading-images/Eye.png"
          cardTitle='Insights at Your Fingertips'
          cardText='Seamlessly follow top traders strategies.'
          type='trade'
          />

          <PerksCard 
          icon="/trading-images/Graphs.png"
          cardTitle='Insights at Your Fingertips'
          cardText='Enhance your markets analysis through witnessed strategies for informed decisions.'
          type='trade'

          />

          <PerksCard 
          icon="/trading-images/podcast-icon.png"
          cardTitle='Real-Time Signals'
          type='trade'

          cardText='Get instant trading signals and follow trades to access potential market opportunities.'
          />

          <PerksCard 
          icon="/trading-images/podcast-icon.png"
          cardTitle='Real-Time Signals'
          type='follower'

          cardText='Get instant trading signals and follow trades to access potential market opportunities.'
          />

         



        </div>
        <TradingSteps/>


        <div className='padding'>
          <CTABanner/>
        </div>

        <ProfileCard/>

       
    </div>
  )
}

export default Trading