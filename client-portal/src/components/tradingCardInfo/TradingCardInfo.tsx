import React from 'react'
import './tradingCardInfo.scss'

interface TradingCardInfoProps {
    cardTitle: string,
    cardText: string,
    icon: string
}


const TradingCardInfo: React.FC<TradingCardInfoProps>  = ({cardTitle, cardText, icon}) => {
  return (
    <div className='tradeCard'>
        <div  className='tradeCardIcon'>
            <img src={icon} alt='card icon' />
        </div>
        <h3>{cardTitle}</h3>

        <p>{cardText}</p>

        
    </div>
  )
}

export default TradingCardInfo