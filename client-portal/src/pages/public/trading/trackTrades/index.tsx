import TrackTrade from './trackTrade/TrackTrade'
import PerksCard from 'components/perksCard/PerksCard'
import TradingSteps from '../../../../components/tradingSteps/TradingSteps'
import ProfileCard from './profileCard/ProfileCard'
import CopyTrade from './copyTrade/CopyTrade'
import '../trading.scss'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import Footer from 'pages/public/home/main/footer/Footer'
import { NeedMoreInfoData } from './data'
import NavRoute from 'components/tradingNavIndicator/NavRoute'
import BenefitList from './tradeBenefits/BenefitCard'
import './trackTrade.scss'

const TrackTrades = () => {
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