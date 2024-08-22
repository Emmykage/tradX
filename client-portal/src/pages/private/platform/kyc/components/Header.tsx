import React from 'react'
import logo from "../../../../../assets/icons/kyc/XLOGO.svg"
const KYCHeader = ({step}: {step: number}) => {
  return (
    <div className='fixed top-0 z-10 w-full h-16 bg-[#17273E] flex items-center justify-center text-center '>
      <div className='h-2 bg-[#0094FF33] w-full absolute top-0 left-0'>
        <div className='h-full bg-[#0094FF]' style={{ width: `${(step / 5) * 100}%` }}></div>


      </div>
        
        <img src={logo} alt="" className='' />
        
    </div>
  )
}

export default KYCHeader