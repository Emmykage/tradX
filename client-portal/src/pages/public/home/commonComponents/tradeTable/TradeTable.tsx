import './tradeTable.scss'

import Graph1Image from '../../../../../assets/home/graph1.png'
import Graph2Image from '../../../../../assets/home/graph2.png'
import Graph3Image from '../../../../../assets/home/graph3.png'
import Graph4Image from '../../../../../assets/home/graph4.png'
import { ArrowLeftOS, ArrowRightOS } from 'assets/icons'


const TradeTable = () => {
    const data = [
        {  name: 'USA 30', sell: '399.53', buy: '400.23', change: '-2.04%', graph:Graph1Image },
        {  name: 'UK 100 - Futures', sell: '399.53', buy: '400.23', change: '-1.66%', graph:Graph1Image },
        {  name: 'France 40', sell: '80.90', buy: '80.95', change: '+2.02%', graph:Graph2Image },
        {  name: 'France 40 - Futures', sell: '179.63', buy: '180.03', change: '-1.83%', graph:Graph3Image },
        {  name: 'Swiss 20 - Futures', sell: '81.69', buy: '81.74', change: '+2.06%', graph:Graph4Image },
      ];
  return (
    <div className="tradeTableContainer">

        <div className='tradeTableContainer'>
        <div className="trade-table-container">
      <div className="trade-table-header">
        <div>Asset</div>
        <div>Sell</div>
        <div>Buy</div>
        <div>Change (%)</div>
      </div>
      {data.map((item, index) => (
        <div className="trade-table-row" key={index}>
          <div className={`trade `}>
          <div className='circleIcon'>

          </div>
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
        <div className='tradeTableBottomTitle'>
        <h2>View full Commodities CFDs list </h2>
        <ArrowRightOS stroke='#FF1802'/>


        </div>
        </div>
    </div>

  )
}

export default TradeTable