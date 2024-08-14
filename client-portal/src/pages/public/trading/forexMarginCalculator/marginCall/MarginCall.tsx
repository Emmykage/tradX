import React from 'react'
import Leaflet from '../../../../../assets/trading/leaflet.png'
import BgImage from '../../../../../assets/trading/dark-arrow.png'
import UkIFlag from '../../../../../assets/trading/UKUS_Oil_2_48e9f9e285.svg fill.png'
import './marginCall.scss'
import { CheckIcon2 } from 'assets/icons'
const MarginCall = () => {
  return (
    <div className='marginCallWrapper'>
    
       
       <div className='imageBackdrop'>
           <div>         
            <img src={BgImage} alt="background image" /> 
            <img src={UkIFlag} alt="" className='icon-2' />
            <img src={Leaflet} alt="" className='icon-1' />

       

           </div>
       </div>
       <div className='textWrapper'>
          <h3>What is a Margin Call, How Can I Avoid It?</h3>
           <ul>

            <li><div className='checkBg'><CheckIcon2/></div>  <p>In order to maintain your open positions 50% margin level is the minimum level. Should your margin level fall below the minimum, we reserve the right to liquidate any open position, until your accounts margin level rises above the 50%.</p></li>
            <li><div className='checkBg'><CheckIcon2/></div> <p>In the event that your margin level drops below 100%, you will not be able to open any new positions.</p></li>
            <li><div className='checkBg'><CheckIcon2/></div> <p>In the event that your margin level reaches 70%, we will send you a margin call, meaning an email and/or any other notification. This notification acts as an early warning of the performance of your open positions with us.</p></li>
           </ul>

       </div>   
 
   </div>
  )
}

export default MarginCall