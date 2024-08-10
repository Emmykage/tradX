import Navbar from 'pages/public/home/navbar/Navbar'
import React from 'react'
import LandingPageMobile from './LandingPageMobileTrading/LandingPageMobile'
import TradingExperience from '../../../../components/experience/TradingExperience'
import imageBgAdam from '../../../../assets/trading/adam-nowakowski-phone.png'

const TradingOnTheGo = () => {
  return (
    <div className='tradingContainer'>
        <Navbar/>
        <LandingPageMobile/>

        <div className="container">
        <TradingExperience  
        image={imageBgAdam} 
        title={"Where intuition meets functionality"} 
        text={"The markets.com app offers a streamlined interface that executes orders quickly and reliably. Trade the markets your way. With sleek, uncluttered and powerful technology."}
        button={false}
        />
        </div>
        

    </div>
  )
}

export default TradingOnTheGo