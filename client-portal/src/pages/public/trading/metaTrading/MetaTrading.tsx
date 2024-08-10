import React from 'react'
import "./metaTrading.scss"
import MT4 from '../../../../../public/trading-images/MT4.png'
import MT5 from '/trading-images/MT5.png'


const MetaTrading = ({title, body, type} : {title: string, body: string, type: "mt4" | "mt5"}) => {
  return (
    <div className='metaTradingWrapper'>
        <div className='graphicWrapper'>
            {type == "mt4" ?
            <img src={MT4} alt="" className='' />
            :
            <img src={MT5} alt="" className='' />
}
        </div>
        <div className='textWrapper'>
            <h3>{title}</h3>
            <p>{body}</p>

        </div>
        
    </div>
  )
}

export default MetaTrading