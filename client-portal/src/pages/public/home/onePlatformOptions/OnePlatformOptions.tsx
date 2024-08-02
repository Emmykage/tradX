import './onePlatformOptions.scss'

import TickIcon from '../../../../assets/home/tick.png'
import UsaFlag from '../../../../assets/home/usa.png'
import UkFlag from '../../../../assets/home/uk.png'
import FrancceFlag from '../../../../assets/home/francce.png'
import SwedenFlag from '../../../../assets/home/sweden.png'


import Graph1Image from '../../../../assets/home/graph1.png'
import Graph2Image from '../../../../assets/home/graph2.png'
import Graph3Image from '../../../../assets/home/graph3.png'
import Graph4Image from '../../../../assets/home/graph4.png'


const OnePlatformOptions = () => {
    const data = [
        { flag: UsaFlag, name: 'USA 30', sell: '399.53', buy: '400.23', change: '-2.04%', graph:Graph1Image },
        { flag: UkFlag, name: 'UK 100 - Futures', sell: '399.53', buy: '400.23', change: '-1.66%', graph:Graph1Image },
        { flag: FrancceFlag, name: 'France 40', sell: '80.90', buy: '80.95', change: '+2.02%', graph:Graph2Image },
        { flag: FrancceFlag, name: 'France 40 - Futures', sell: '179.63', buy: '180.03', change: '-1.83%', graph:Graph3Image },
        { flag: SwedenFlag, name: 'Swiss 20 - Futures', sell: '81.69', buy: '81.74', change: '+2.06%', graph:Graph4Image },
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

        <div className='assetTableContainer'>
        <div className="asset-table-container">
      <div className="asset-table-header">
        <div>Asset</div>
        <div>Sell</div>
        <div>Buy</div>
        <div>Change (%)</div>
      </div>
      {data.map((item, index) => (
        <div className="asset-table-row" key={index}>
          <div className={`asset `}>
            <img src={item.flag} alt={`${item.name} flag`} />
            <span>{item.name}</span>
          </div>
          <div className={`sell ${item.change.startsWith('-') ? 'negative' : 'positive'}`}>{item.sell}</div>
          <div className={`buy ${item.change.startsWith('-') ? 'negative' : 'positive'}`}>{item.buy}</div>
          <div className="changeTableGraph">
            <span>{item.change}</span>
            <img src={item.graph} alt={`${item.name} flag`} />
          </div>
        </div>
      ))}
    </div>
        </div>
    </div>
  )
}

export default OnePlatformOptions