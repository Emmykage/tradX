import PerksCard from 'components/perksCard/PerksCard'
import React from 'react'

const Follower = () => {
    const  items=[{
        title: "Savvy Traders Automation",
        text: "Get instant trading signals and follow trades to access potential market opportunities.",
        icon: "/trading-images/automation-icon.png"
    },{
        title: "Portfolio Diversification",
        text: "Get instant trading signals and follow trades to access potential market opportunities.",
        icon: "/trading-images/Graphs.png"
    },{
        title: "Real-Time Signals",
        text: "Explore different approaches to trading for a more balanced experience with top performing strategies.",
        icon: "/trading-images/podcast-icon.png"
    },{
        title: "Real-Time Signals",
        text: "Explore different approaches to trading for a more balanced experience with top performing strategies.",
        icon: "/trading-images/podcast-icon.png"
    },{
        title: "Real-Time Signals",
        text: "Explore different approaches to trading for a more balanced experience with top performing strategies.",
        icon: "/trading-images/briefcase-icon.png"
    },{
        title: "Wide Variety of Markets",
        text: "Explore potential trading opportunities through CFDs on Forex, Shares, Crypto, and more.",
        icon: "/trading-images/Market.png"
    },]
  return (
    <div>
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
  )
}

export default Follower