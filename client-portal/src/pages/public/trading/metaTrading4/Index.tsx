import MetaTrader4Landing from './metaTrader4Landing/MetaTrader4'
import TradingExperience from '../../../../components/experience/TradingExperience'
import imageBgEve from '../../../../assets/trading/meta-trader-4-eve-img.png'
import MetaTradingComponent from '../../../../components/metaTrading/MetaTrading'
import CTABanner from '../../../../components/call-to-action/CTABanner'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import './meta-4.scss'
import {NeedMoreInfoData} from './data'
import TradingCardInfo from 'components/tradingCardInfo/TradingCardInfo'

const MetaTrading4 = () => {
    const items = [{
        title: "Algorithmic Trading",
        text: "Automate your trading with Expert Advisors that you can plug-in to the platform",
        icon: "/trading-images/meta-icon-1-bg.png"
    },
    {
        title: "Fast Execution, Low Spreads",
        text: "Execute trades fast and with low costs based on our pricing and trade infrastructure",
        icon: "/trading-images/meta-icon-2-bg.png"
    },
    {
        title: "Intuitive Charts",
        text: "Fully customisable charts and a range of technical indicators",
        icon: "/trading-images/meta-icon-3-bg.png"
    }]
  return (
    <div className='tradingContainer meta-4'>
        <MetaTrader4Landing/>
        <TradingExperience  
        image={imageBgEve} 
        title={"Use MT4 to trade with tradex.io"} 
        text={"If you already have a tradex.io account, you are all set. Now you can simply install MT4 and add a trading account via your desktop markets.com platform. For more information on how to add MetaTrader trading account please click here. If you don’t have a markets.com account yet, don’t worry – registering is easy and fast."}
        button={true}
        />
    

            <h2>Benefits of MT4</h2>
            <div className="cardWrapper">
                {items.map(item => (
                    <TradingCardInfo 
                    icon={item.icon}
                    cardTitle={item.title}
                    cardText={item.text}
                    // type='trade'
                    />
                ))}
            </div>
            
            <MetaTradingComponent title='Trade using MT4 with tradex.io'
                body='You can access popular and easy-to-use web trading platform MetaTrader 4 with your markets.com account. A complete listing of our trading conditions for trading via MetaTrader platforms'
                type= "mt4"
            />

            <CTABanner/>
   
        <NeedMoreInfo items={NeedMoreInfoData} />
        <RegisterBlock/>
        <Footer/>



        
    </div>
  )
}

export default MetaTrading4