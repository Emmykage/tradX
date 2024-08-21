import React from 'react'
import logo from "../../../../../assets/icons/kyc/XLOGO.svg"
const KYCHeader = () => {
  return (
    <div className='fixed top-0 z-10 w-full h-16 bg-[#17273E] flex items-center justify-center text-center '>
        
        <img src={logo} alt="" className='' />
        
    </div>
  )
}

export default KYCHeader