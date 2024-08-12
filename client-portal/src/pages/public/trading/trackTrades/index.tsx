import TrackTrade from './trackTrade/TrackTrade'
import PerksCard from 'components/perksCard/PerksCard'
import TradingSteps from '../../../../components/tradingSteps/TradingSteps'
import ProfileCard from './profileCard/ProfileCard'
import CopyTrade from '../../../../components/copyTrade/CopyTrade'
import '../trading.scss'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import Footer from 'pages/public/home/main/footer/Footer'
import { NeedMoreInfoData } from './data'
import BenefitList from './tradeBenefits/BenefitCard'
import './trackTrade.scss'
import { useState } from 'react'
import Follower from './followers/Follower'
import CopyTrader from './copyTraders/CopyTrader'

const TrackTrades = () => {
    

    
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

    const [activity, setActivity] = useState("follower")
    const [active, SetActive] = useState('')
    const handleClick = (btn: string) => {
      setActivity(btn)
    }
  return (
    <div className='tradingContainer copyTradingWrapper'>
        <Navbar/>
        <TrackTrade />
        <CopyTrade />


        <div className='activityContainer'>
            <div className='btnWrapper'>           
                <button onClick={()=> handleClick("follower")} className={active}> follow</button>
                <button onClick={()=> handleClick("copy-trader")} className={active}>copy Trader </button>
            </div>

            {activity == "follower" ? (<>
            <Follower/>
                
            </>) : (<>
            <CopyTrader/>
            </>)}     


        </div>
           
        <TradingSteps
        step1="Sign up for a
        Tradex.io account"
        step2='Login to 
        Tradex.io'
        step3="Select Copy Trading"
        step4="Review  Profile Stats"
        step5= "Select a profile to Copy"

        />
       <div className="container benefitWrapper">
            <div className='profileCardInfo'>
                <ProfileCard/>

            </div>

            <div className=' benefitListWrapper'>
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

export default TrackTrades