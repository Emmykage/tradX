import { OferIcon } from 'assets/icons'
import React from 'react'
import './costExplanation.scss'
const CostExplanation = () => {
 const   items=[{
    title: "Commissioner",
    text: "We do not charge any commisions.",
    icon: "/trading-images/commission-discounts-icon.png"
 },
 {title: "Spread",
    text: "A spread is the difference between the Bid price (selling price) and the Ask price (buying price). Our spreads are variable or can be subject to a minimum.",
    icon: "/trading-images/graphs.png"
 },
 {
    title: "Overnight swap",
    text: "An overnight swap is when we charge or credit you with overnight fees for facilitating you to maintain an open Buy or Sell position on CFDs.",
    icon: "/trading-images/exchange-money-icon.png"
 },
 {title: "P/L",
    text: "The profit/loss ratio is a measure of performance in trading, calculated by comparing the average amount of money gained on winning trades to the average amount of money lost on losing trades, over a specific period of time.",
    icon: "/trading-images/commission-discounts-icon.png"

 }
 ,
 {
    title: "Margin requirement",
    text: "A margin requirement indicates the amount you need to possess at the time of opening a position. This amount also includes the cost that will occur due to the spread in addition to the Used Margin used Margin: margin being used by your current open position.",
    icon: "/trading-images/wallet-icon.png" 

 },
 {title: "Conversion fee",
    text: "A conversion fee will apply only when your current account currency is different than the quoted currency of the underlying asset being traded. The fee will be reflected as a percentage of the conversation rate used.",
    icon: "/trading-images/wallet-icon.png" },
 
 ]
  return (
    <div className='costContainer'>
        <h3>Our cost and charges explained</h3>
        <div className='costExp-Wrapper'>
            <ul>
                {items.map(item => (
                    <>
                    <li className=''>
                    <div className='icon-bg'>
                        <img src={item.icon} alt='icon' />
                    </div>
                    <div>
                        <strong>{item.title}</strong>
                        
                        <p>{item.text}</p>
                    </div>

                </li>
                </>

                ))}
                              
                
            </ul>
            
        </div>
    </div>
  )
}

export default CostExplanation