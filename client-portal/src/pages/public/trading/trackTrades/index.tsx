import React from 'react'
import TrackTrade from './trackTrade/TrackTrade'
import PerksCard from 'components/perksCard/PerksCard'
import TradingSteps from '../../../../components/tradingSteps/TradingSteps'
import ProfileCard from './profileCard/ProfileCard'
import CopyTrade from './copyTrade/CopyTrade'
import Navbar from 'pages/public/home/navbar/Navbar'
import '../trading.scss'

const TrackTrades = () => {
    const  items=[{
        title: "Savvy Traders Automation",
        text: "Get instant trading signals and follow trades to access potential market opportunities.",
        icon: "/trading-images/automation-icon.png"
    },{
        title: "Portfolio Diversification",
        text: "Get instant trading signals and follow trades to access potential market opportunities.",
        icon: "/trading-images/briefcase-icon.png"
    },{
        title: "Real-Time Signals",
        text: "Explore different approaches to trading for a more balanced experience with top performing strategies.",
        icon: "/trading-images/podcast-icon.png"
    },]
  return (
    <div className='tradingContainer'>
        <Navbar/>
       <div className="container"> 
        <TrackTrade />

        
            <CopyTrade />
        </div>

        <div className="container">
            <h2>Follower Perks</h2>

            <div className="cardWrapper">
                {items.map(item => (
                        <PerksCard 
                        icon={item.icon}
                        cardTitle={item.title}
                        type='follower'
            
                        cardText={item.text}
                      />

                ))}
                
      

            </div>
        </div>
        <div className="container">
            <h3>How to start social trading?</h3>
        <TradingSteps
        step1="Sign up for a
        Tradex.io account"
        step2='Login to 
        Tradex.io'
        step3="Select Copy Trading"
        step4="Review  Profile Stats"
        // step5="Select a profile to Copy "

/>

        </div>
        <div className="container">
            <ProfileCard/>

        </div>
    </div>
  )
}

export default TrackTrades