import TradeTable from 'pages/public/home/commonComponents/tradeTable/TradeTable'
import React, { useState } from 'react'
import "./tradeTable.scss"

const TradeTableExp = () => {
    const [selectTable, setSelectedTable] = useState("exppiration_date")

    const navItems = [
        {
            name: "exppiration_date",
            label: "Expiration Dates"
        },
        {
            name: "trading_condition",
            label: "Trading Conditions"
        },
        {
            name: "holiday",
            label: "Holidays"
        },
        {
            name: "trading_schedules",
            label: "Trading Schedules"
        }
]
  return (
    <div className='tradeTableWrapper'>
        <div className='tableRouting'>

   
            {navItems.map(item => (
                <span className={`${selectTable == item.name && "active"}`} onClick={()=> setSelectedTable(item.name)}>  {item.label}</span>
            ))}
        </div>

        <h2>Stay informed when weekly expiration dates are near</h2>

              <TradeTable/>

    </div>
  )
}

export default TradeTableExp