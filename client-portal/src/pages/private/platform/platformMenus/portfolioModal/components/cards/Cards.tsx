import React from 'react'

const CardRegular = ({desc, amount, className, number}: {desc: string , amount?: number, className?: string, number?: string}) => {
  return (
    <div className={`bg-gray-100/10 px-5 py-1.5 rounded ${className}`}>

        <p className='text-sm text-white my-2 font-normal '>{desc}</p>
        {amount  &&    <p className='font-bold text-sm font-medium'>{amount}$</p>}
        {number &&   <p className='font-bold text-sm font-medium'>{number}$</p>}


     
        
        
    </div>
  )
}

export default CardRegular