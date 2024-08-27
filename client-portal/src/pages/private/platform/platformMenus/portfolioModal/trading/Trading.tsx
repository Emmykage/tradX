import React from 'react'
import TradingMenu from '../../trading/TradingMenu'
import Statistics from '../components/statistics/Statistics'
import Balance from '../components/balanceContainer/Balance'
import ActiveRequest from '../components/activeRequets/ActiveRequest'


const Trading = () => {
  return (
    <div className='h-full bg-[#1F324D66] p-8 rounded-lg overflow-y-auto'>
        {/* <TradingMenu/> */}

        <Statistics/>
        <Balance/>
        <ActiveRequest 
        />
        
    </div>
  )
}

export default Trading