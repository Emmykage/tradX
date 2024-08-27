import React from 'react'
import CardRegular from '../cards/Cards'

const Statistics = () => {
  return (
    <div className=''>
      <h3 className='text-xl font-medium'>Statistics</h3>
      <div className='grid grid-cols-3 gap-4'>
        <CardRegular 
        desc='Number of trades'
        amount={235}
        />
         <CardRegular 
        desc='PNL'
        number={"+7700 USDC"}
        />

        <CardRegular 
          desc='Win Rate'
          number={"65%"}
          />


      </div>
    </div>
  )
}

export default Statistics