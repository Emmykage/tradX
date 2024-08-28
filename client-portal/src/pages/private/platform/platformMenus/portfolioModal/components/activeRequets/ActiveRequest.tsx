import React from 'react'
import './activeRequest.scss'
const ActiveRequest = ({requests}: {requests: any}) => {
  return (
    <div className='activeRequest'>
        <h3 className='mb-3'>Active Request</h3>


        <ul>
            {requests.map((item: any) => (
                <li className='text-white grid grid-cols-4 bg-[#0F1A2B99] py-2.5 px-8 rounded-lg mb-3'> 
                <span className='text-xs'>{item.date}</span>
                <span className='text-xs'>{item.activity} </span>
                <span className='text-xs'>{item.amount}</span>
                <span className='text-xs text-[#FFB800]'>{item.status}</span>

                </li>
            ))}
         
        </ul>
    </div>
  )
}

export default ActiveRequest