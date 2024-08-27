import React from 'react'
import './activeRequest.scss'
const ActiveRequest = ({requests}: {request: any}) => {
  return (
    <div className='activeRequest'>
        <h3 className='mb-3'>Active Request</h3>


        <ul>
            <li className='text-white grid grid-cols-4 bg-[#0F1A2B99] py-2.5 px-8 rounded-lg '> 
                <span className='text-xs'>05/06/2024</span>
                <span className='text-xs'>Withdrawing funds</span>
                <span className='text-xs'>10 000$</span>
                <span className='text-xs text-[#FFB800]'>In processing</span>

            </li>
        </ul>
    </div>
  )
}

export default ActiveRequest