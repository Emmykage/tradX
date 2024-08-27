import React from 'react'
import CardRegular from '../cards/Cards'

const Balance = () => {
  return (
    <div className='pt-3'>
      <h3 className='text-xl font-medium text-white/80'>Balance</h3>
      <div className='grid sm:grid-cols-3 gap-4'>
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
      <div className='my-4 grid sm:grid-cols-3 gap-4'>
        <CardRegular 
        desc='Total amount of withdrawals'
        amount={650000}
        />
         <CardRegular 
        desc='Total amount of of deposits'
        amount={55000}
        />

        <CardRegular 
          desc='Commission for the month amounted to'
          amount={1000}
          />


      </div>
    </div>
  )
}

export default Balance