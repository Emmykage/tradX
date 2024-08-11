import TradCalc from 'components/tradCalc/TradCalc'
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import TradeTable from 'pages/public/home/commonComponents/tradeTable/TradeTable'
import Footer from 'pages/public/home/main/footer/Footer'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import UsingOurCfd from 'pages/public/markets/tradingPage/usingOurCfd/UsingOurCfd'
import React from 'react'
import { NeedMoreInfoData } from './data'
import NavRoute from 'components/tradingNavIndicator/NavRoute'

const ExpirationDates = () => {
  return (
    <div className='tradingContainer'>
    <Navbar/>
    <NavRoute location="Expiration Date"/>
    <TradeTable/>
    <TradCalc/>
    <UsingOurCfd/>
    <NeedMoreInfo items={NeedMoreInfoData}/>
    <RegisterBlock/>
    
    <Footer/>
  </div>
  )
}

export default ExpirationDates