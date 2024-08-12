import React from 'react'
import tradeView from '../../../../../assets/trading/Xperience-img.png'
import emeralEth from '../../../../../assets/trading/ethereumEmerald.svg'
import inconBin from '../../../../../assets/trading/icon-binan.svg'
import tCoin from '../../../../../assets/trading/t-coin.svg'
import ukLogo from '../../../../../assets/trading/uk-circle.png'
import swidishLogo from '../../../../../assets/trading/swidish.png'
import TetherBgIcon from '../../../../../assets/trading/tether_trc20-mini.449f37398945f3d6bce614b9fd3a90b2.png'
import currencyCard from "../../../../../assets/trading/currencyInfoImage.png"
import './userXp.scss'
const UserExp = () => {
  return (
    <div className="experienceWrapper">
      
    <div className='experienceUser'>
      <div className='exp-note'>
            <h3>User friendly and engaging</h3>
            <p>
            The market.com app offers a streamlined and stable experience that sets us apart. Trade CFDs without the clutter, allowing you to focus on your strategy.
            </p>
            
        </div>
        <div className='imagery'>
            <img src={tradeView} alt="candle stick" className='mainBg' />
            <img src={inconBin} alt="candle stick" className='icon-coin'/>
            <img src={tCoin} alt="candle stick" className='t-coin'/>
            <img src={emeralEth} alt="candle stick" className='emeralL'/>
        </div>
       
        </div>

        <div className='experienceResponse'>
      
            <div className='exp-notice'>
              <div>
                <img src={ukLogo} alt="candle stick" className='flag-uk' />
                <p>Bank of England governor predicts UK recession will be very small’</p>
              </div>

              <div>
                <img src={swidishLogo} alt="candle stick" className='lag-swis' />
                <p>Swiss GDP grows by 0.3% in third quarter</p>
              </div>
                
            </div>
            <div className='exp-note'>
                <h3>Responsive news and analysis</h3>
                <p>  Execute orders alongside your charts. Access statistics to power your strategies             </p>
                
            </div>
       
        </div>

        <div className="exp-info">
          <div className='exp-info-detail'>

              <h3>Swift, clear and responsive information</h3>
              <p>With integrated financial news, expert commentary, and dynamic market information, our platform offers a powerful and streamlined trading experience.</p>
          </div>
          <div className='currencyDisp'> 
            <div className='tether-card'>
              <div className=''>
                <img src={TetherBgIcon} alt="" />
                <p>250 EUR</p>
              </div>
              <p>Estimated deposit time: 2 hours</p>



            </div>

            <div className='currencyInfo'>
                <img src={currencyCard} alt="" />
            </div>
          </div>

            
        </div>
        
    </div>
  )
}

export default UserExp