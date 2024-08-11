import Navbar from "pages/public/home/commonComponents/navbar/Navbar"
import Footer from "pages/public/home/main/footer/Footer"
import NeedMoreInfo from "pages/public/markets/components/needMoteInfo/NeedMoreInfo"
import RegisterBlock from "pages/public/markets/components/registerBlock/RegisterBlock"
import CfdTradMuchMore from "pages/public/markets/tradingPage/cfdTradMuchMore/CfdTradMuchMore"
import CfdTradWhyTrade from "pages/public/markets/tradingPage/cfdTradWhyTrade/CfdTradWhyTrade"
import { NeedMoreInfoData } from "./data"
import NavRoute from "components/tradingNavIndicator/NavRoute"

const CFDTrading = () => {
  return (
    <div className='tradingContainer'>
    <Navbar/>
    <NavRoute location='CFD Trading'/>

    <CfdTradWhyTrade/>
    <CfdTradMuchMore/>
    <NeedMoreInfo items={NeedMoreInfoData}/>
    <RegisterBlock/>
    <Footer/>
  </div>
  )
}

export default CFDTrading