import React from 'react'
import MetaTrader5Landing from './metaTrader5/MetaTrader5Landing'
import TradingExperience from '../../../../components/experience/TradingExperience'
import imageBgAdamLp from '../../../../assets/trading/adam-nowakowski-D4LDw5eXhgg-unsplash.png'
import PerksCard from 'components/perksCard/PerksCard'
import MetaTradingComponent from '../../../../components/metaTrading/MetaTrading'
import CTABanner from '../../../../components/call-to-action/CTABanner'
import Navbar from 'pages/public/home/navbar/Navbar'

const MetaTrading5 = () => {
    const items = [{
        title: "Algorithmic Trading",
        text: "Automate your trading with Expert Advisors that you can plug-in to the platform",
        icon: "/trading-images/Arrow.png"
    },
    {
        title: "Fast Execution, Low Spreads",
        text: "Execute trades fast and with low costs based on our pricing and trade infrastructure",
        icon: "/trading-images/Clock.png"
    },
    {
        title: "Intuitive Charts",
        text: "Fully customisable charts and a range of technical indicators",
        icon: "/trading-images/Eye.png"
    }]
  return (
    <div className='tradingContainer'>
        <Navbar/>
    <MetaTrader5Landing/>
      <div className="container">
        <TradingExperience  
            image={imageBgAdamLp} 
            title={"Elevate your trading experience with MetaTrader 5"} 
            text={"Use your markets.com account to seamlessly install MT5 and start trading right away in your desktop markets.com platform. The video tutorial above can walk you through the process. Explore here step-by-step instructions on adding a MetaTrader 5 trading account. Don't have a markets.com account yet? No worries, visit the markets.com Sign Up page and provide the required information to quickly complete full registration. "}
            button={true}
            />
        </div>
        <div className='container'>


        <div className="cardWrapper">
            {items.map(item => (
                <PerksCard 
                icon={item.icon}
                cardTitle={item.title}
                cardText={item.text}
                type='trade'
                />
            ))}

        </div>

        <div className='container'>
            
            <MetaTradingComponent title='Trade using MT4 with tradex.io'
                body='You can access popular and easy-to-use web trading platform MetaTrader 4 with your markets.com account. A complete listing of our trading conditions for trading via MetaTrader platforms'
                type= "mt5"
            />


        </div>

        <CTABanner/>

        </div>

    </div>
  )
}

export default MetaTrading5