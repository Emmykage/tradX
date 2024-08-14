import BgImage from '../../../../../assets/trading/getStartedImage.png'

import './getStarted.scss'
import { CheckIcon2 } from 'assets/icons'
const GetStarted = () => {
  return (
         <div className='getStartedWrapper'>
            <div className='imageBackdrop'>
              <div>         
                <img src={BgImage} alt="background image" /> 
              </div>
            </div>
            <div className='textWrapper'>
              <h3>How can I get started with   <br/>    Trading?</h3>
              <p>Experience the mix of social interaction and learning with Tradex Social Trading. Follow top traders, replicate their strategies, and gain insights, ideal for both new and seasoned traders.</p>
              <ul>

                <li><div className='checkBg'><CheckIcon2/></div>  <p>Open an account with markets.com. Access via our app or online.</p></li>
                <li><div className='checkBg'><CheckIcon2/></div> <p>New to trading? We have you covered with trading tools, training and 24/5 customer service.</p></li>
                <li><div className='checkBg'><CheckIcon2/></div> <p>Experienced in trading? We have the tools and insights you need to grow your trading portfolio.</p></li>
              </ul>

       </div>
   </div>
  )
}

export default GetStarted