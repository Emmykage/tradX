import React from 'react'
import TrackTrade from './trackTrade/TrackTrade'
import PerksCard from 'components/perksCard/PerksCard'
import TradingSteps from '../../../../components/tradingSteps/TradingSteps'
import ProfileCard from './profileCard/ProfileCard'
import '../trading.scss'
import './trackTrade.scss'
import BenefitList from './tradeBenefits/BenefitCard'
import NavRoute from 'components/tradingNavIndicator/NavRoute'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import CopyTrade from 'components/copyTrade/CopyTrade'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import Footer from 'pages/public/home/main/footer/Footer'
import { NeedMoreInfoData } from './data'

const CopyTradingMore = () => {
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

    const benefits = [{
        title: "Real-time Trade",
        text: "Follow top signal providers' moves instantly."
    },
    {     title: "Flexible Trade Size",
        text: "Choose a trade size that aligns with your individual trading strategy."},
        {
            title: "Top Expert Rankings",
            text: "Follow top signal providers' moves instantly."
        },
        {     title: "Community Interaction",
            text: "Join trader groups to share insights, discuss markets"},
            {
                title: "Intuitive Interface",
                text: "User-friendly design suitable for all trader levels."
            },
            {     title: "Global Markets Access",
                text: "Trade a variety of instruments anytime."}]
  return (
    <div className='tradingContainer'>
        <Navbar/>
        <NavRoute location='Copy Trading'/>
        <TrackTrade />        
        <CopyTrade />

        <div className="benefitCardWrapper">
            <h2>Copy Trader Perks</h2>

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
        <TradingSteps
        step1="Sign up for a
        Tradex.io account"
        step2='Login to 
        Tradex.io'
        step3="Select Copy Trading"
        step4="Review  Profile Stats"
        />
        <div className="container benefitWrapper">
            <div className='profileCardInfo'>
                <ProfileCard/>

            </div>

            <div className='benefitListWrapper'>
                {benefits.map(benefit => (
                    <BenefitList title={benefit.title} text={benefit.text}/>
                ))}


            </div>
        </div>
        <NeedMoreInfo items={NeedMoreInfoData}/>
        <Footer/>
    </div>
  )
}

export default CopyTradingMore