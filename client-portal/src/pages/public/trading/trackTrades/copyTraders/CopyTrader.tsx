import PerksCard from 'components/perksCard/PerksCard'
import React from 'react'
import walletIcon from '../../../../../assets/trading/wallet-icon.png'
import people from '../../../../../assets/trading/people-icon.png'
import commissionIcon from "../../../../../assets/trading/commission-discounts-icon.png"
import chartIcon from "../../../../../assets/trading/chart.png"
import peopleIon from "../../../../../assets/trading/people-icon.png"
import charUpIcon from "../../../../../assets/trading/chart-arrow-up-icon.png"
const CopyTrader = () => {
    const  items=[{
        text: "Earn potential income as a top signal provider.",
        icon: walletIcon
    },{

        text: "Receive up to 50% profit from followers' trades.",
        icon: people
    },{
        text: "Flexibility to set your own performance fees.",
        icon: commissionIcon
    },{
        text: "Automated monthly payments for potentially profitable followers' trades.",
        icon: chartIcon
    },{
        text: "Access to a wide community of potential followers.",
        icon: peopleIon
    },{
        text: "Benefit from all the advantages without any upfront costs.",
        icon: commissionIcon
    },]
  return (
    <div>
         <h2>Copy Traders Perks</h2>
                <div className="cardWrapper">
                {items.map(item => (
                        <PerksCard 
                        icon={item.icon}
                        type='trade'
                        cardText={item.text}
                      />
                ))}

            </div>
    </div>
  )
}

export default CopyTrader