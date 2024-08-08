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
import TradingExperience from './experience/TradingExperience'
import user from '../../../assets/trading/adam-nowakowski-D4LDw5eXhgg-unsplash 2.png'
import CopyTrade from './copyTrade/CopyTrade'
import ForexCalculator from './forexCalculator/ForexCalculator'
import CostExplanation from './costExplanation/costExplanation'
import TradingProfitCalculator from './tradingProfitCalculator/TradingProfitCalculator'


const Trading = () => {
  return (
    <div className='tradingContainer' >
        {/* <Navbar/> */}
        <Landing />
        <div className='container'>


        <div className='tradingCardContainer'> 


            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={"/trading-images/wheelIcon.png"} /> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={IconShield} /> 
            <TradingCardInfo 
            cardTitle='Multi-Asset Platform' 
            cardText='Upgraded platform rich with features & thousands of assets to speculate on.' 
            icon={IconWave} /> 

          </div>

          <div className='tradingCardContainer margin'> 


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
          icon="/trading-images/automation-icon.png"
          cardTitle='Savvy Traders Automation'
          type='follower'

          cardText='Get instant trading signals and follow trades to access potential market opportunities.'
          />

<PerksCard 
          icon="/trading-images/briefcase-icon.png"
          cardTitle='Portfolio Diversification'
          type='follower'

          cardText='Explore different approaches to trading for a more balanced experience with top performing strategies.'
          />
             <PerksCard 
          icon="/trading-images/podcast-icon.png"
          cardTitle='Real-Time Signals'
          type='follower'

          cardText='Get instant trading signals and follow trades to access potential market opportunities.'
          />

         </div>



        </div>
        <TradingSteps
        step1="Sign up for a
        Tradex.io account"
        step2='Login to 
        Tradex.io'
        step3="Select Copy Trading"
        step4="Review  Profile Stats"
        // step5="Select a profile to Copy "

/>



        <div className='container'>
          <CTABanner/>
        </div>

        <div className="container">
        <TradingExperience  
        image={user} 
        title={"Elevate your trading experience with MetaTrader 5"} 
        text={"Use your markets.com account to seamlessly install MT5 and start trading right away in your desktop markets.com platform. The video tutorial above can walk you through the process. Explore here step-by-step instructions on adding a MetaTrader 5 trading account. Don't have a markets.com account yet? No worries, visit the markets.com Sign Up page and provide the required information to quickly complete full registration."}/>

        </div>

        <ProfileCard/>

        <div className='container'>
          <CopyTrade />

        </div>

        <div className="container">
          <ForexCalculator />
        </div>


        <div className='container'>
        <CostExplanation/>

        </div>
        <div>
          <TradingProfitCalculator/>
        </div>



       
    </div>
  )
}

export default Trading