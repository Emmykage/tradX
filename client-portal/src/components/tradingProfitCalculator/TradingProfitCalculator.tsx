import React from 'react'
import './TradingProfitCalculator.scss'


interface TradingprofitPrps{
    title: string,
    text1: string,
    text2: string,
    image: string,
    icon1: string,
    icon2: string
}
const TradingProfitCalculator: React.FC<TradingprofitPrps> = ({title, text1, text2, image, icon1, icon2}) => {
  return (
    <div className='tradingProfitWrapper'>
       
        <div className='textWrapper'>
            <h3>{title}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
        <div className='imageBackdrop'>
            <div>         
            <img src={image} alt="background image" /> 
        

            </div>
        </div>
    </div>
  )
}

export default TradingProfitCalculator