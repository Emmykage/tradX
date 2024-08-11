import TradCalc from 'components/tradCalc/TradCalc'
import CostExplanation from '../../../../components/tradingCostExplanation/CostExplanationComp'
import './cfdcalulator.scss' 
import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import NeedMoreInfo from 'pages/public/markets/components/needMoteInfo/NeedMoreInfo'
import { NeedMoreInfoData } from './data'
import RegisterBlock from 'pages/public/markets/components/registerBlock/RegisterBlock'
import Footer from 'pages/public/home/main/footer/Footer'
const CFDCalculatr = () => {
  return (
    <div className='tradingContainer'>
      <Navbar/>
      <TradCalc/>
        <div className="container">
            <CostExplanation/>
        </div>

        <NeedMoreInfo items={NeedMoreInfoData}/>
        <RegisterBlock/>
        <Footer/>

        
    </div>
  )
}

export default CFDCalculatr