import LandingPageMobile from './LandingPageMobileTrading/LandingPageMobile'
import TradingExperience from '../../../../components/experience/TradingExperience'
import imageBgAdam from '../../../../assets/trading/adam-nowakowski-phone.png'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import JoinInThreeSteps from 'pages/public/markets/components/joinInThreeSteps/JoinInThreeSteps'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import {NeedMoreInfoData} from './data'
import Footer from 'pages/public/home/main/footer/Footer'
const TradingOnTheGo = () => {
  return (
    <div className='tradingContainer'>
        <Navbar/>
        <LandingPageMobile/>

        <TradingExperience
          image={imageBgAdam} 
          title={"Where intuition meets functionality"} 
          text={"The markets.com app offers a streamlined interface that executes orders quickly and reliably. Trade the markets your way. With sleek, uncluttered and powerful technology."}
          button={false}
        />
        <JoinInThreeSteps/>
        <NeedMoreInfo items={NeedMoreInfoData} />
        <RegisterBlock/>
        <Footer/>

    </div>
  )
}

export default TradingOnTheGo