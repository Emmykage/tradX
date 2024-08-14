import PerksCard from 'components/perksCard/PerksCard'
import React from 'react'
import  savyIcon from '../../../../../assets/trading/automation-icon.png'
import graph from '../../../../../assets/trading/Graphs.png'
import podcast from '../../../../../assets/trading/podcast-icon.png'
import briefcase from '../../../../../assets/trading/briefcase-icon.png'
import marketIcon from '../../../../../assets/trading/Market.png'
import eyeSightIcon from "../../../../../assets/trading/Eye.png"
const Follower = () => {
    const  items=[{
        title: "Real-Time Signals",
        text: "Get instant trading signals and follow trades to access potential market opportunities.",
        icon: podcast
    },
    {
        title: "Savvy Traders Automation",
        text: "Follow and automate strategies of top performing traders with objectives similar to yours.",
        icon: savyIcon
    },
    {
        title: "Portfolio Diversification",
        text: "Get instant trading signals and follow trades to access potential market opportunities.",
        icon: briefcase
    },
    {
        title: "Insights at Your Fingertips",
        text: "Seamlessly follow top traders' strategies.",
        icon: eyeSightIcon
    },{
        title: "Insights at Your Fingertips",
        text: "Enhance your markets analysis through witnessed strategies for informed decisions.",
        icon: graph
    },{
        title: "Wide Variety of Markets",
        text: "Explore potential trading opportunities through CFDs on Forex, Shares, Crypto, and more.",
        icon: marketIcon
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