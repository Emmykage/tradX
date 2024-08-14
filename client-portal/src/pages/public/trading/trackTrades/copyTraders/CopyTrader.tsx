import PerksCard from 'components/perksCard/PerksCard'
import React from 'react'

const CopyTrader = () => {
    const  items=[{
        text: "Earn potential income as a top signal provider.",
        icon: "/trading-images/wallet-icon.png"
    },{

        text: "Receive up to 50% profit from followers' trades.",
        icon: "/trading-images/People.png"
    },{
        text: "Flexibility to set your own performance fees.",
        icon: "/trading-images/commission-discounts-icon.png"
    },{
        text: "Automated monthly payments for potentially profitable followers' trades.",
        icon: "/trading-images/chart.png"
    },{
        text: "Access to a wide community of potential followers.",
        icon: "/trading-images/people-icon.png"
    },{
        text: "Benefit from all the advantages without any upfront costs.",
        icon: "/trading-images/chart-arrow-up-icon.png"
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