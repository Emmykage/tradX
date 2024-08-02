import './onePlatformOptions.scss'

import TickIcon from '../../../../assets/home/tick.png'
import { tickIcon } from 'pages/lib/lightweight-charts/plugins/expiring-price-alerts/icons'
const OnePlatformOptions = () => {
    const data = [
        { flag: 'usa', name: 'USA 30', sell: '399.53', buy: '400.23', change: '-2.04%' },
        { flag: 'uk', name: 'UK 100 - Futures', sell: '399.53', buy: '400.23', change: '-1.66%' },
        { flag: 'france', name: 'France 40', sell: '80.90', buy: '80.95', change: '+2.02%' },
        { flag: 'france', name: 'France 40 - Futures', sell: '179.63', buy: '180.03', change: '-1.83%' },
        { flag: 'swiss', name: 'Swiss 20 - Futures', sell: '81.69', buy: '81.74', change: '+2.06%' },
      ];
  return (
    <div className="platformOptionsContainer">
        <h2>One Platform, Endless Options</h2>
        <p>Whether you're interested in trading currencies (Forex), commodities, stock indexes, cryptocurrency, exchange-traded funds (ETFs), bonds, or even initial public offerings (IPOs), our platform provides everything you need.</p>
        <div className='platformOptionsListContainer'>
            <div className='platformOptionList'>
                
                <img src={TickIcon} alt="" />
                <span>Make flexible trades, going long or short</span>

            </div>
            <div className='platformOptionList'>

                <img src={TickIcon} alt="" />
                <span>Use these strategies for hedging</span>

            </div>
            <div className='platformOptionList'>

                <img src={TickIcon} alt="" />
                <span>Control larger positions with a small initial investment</span>

            </div>

        </div>

        <button>Trade Commodities</button>

        <div>
        <div className="asset-table-container">
      <div className="asset-table-header">
        <div>Asset</div>
        <div>Sell</div>
        <div>Buy</div>
        <div>Change (%)</div>
      </div>
      {data.map((item, index) => (
        <div className="asset-table-row" key={index}>
          <div className="asset">
            <img src={`/flags/${item.flag}.png`} alt={`${item.name} flag`} />
            <span>{item.name}</span>
          </div>
          <div >{item.sell}</div>
          <div>{item.buy}</div>
          <div>{item.change}</div>
        </div>
      ))}
    </div>
        </div>
    </div>
  )
}

export default OnePlatformOptions