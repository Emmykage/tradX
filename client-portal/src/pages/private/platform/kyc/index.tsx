import React, { useState } from 'react'
import "./kyc.scss"
import FileInput from 'components/fileInput/fileInput'
import KYCHeader from './components/Header'
import CreateAccount from './steps/createAccount'

const KYC = () => {
  return(
    <div className='kycWrapper'>
      <KYCHeader />

      <div className='flex justify-center items-center' style={{height: `calc(100vh - 80px)`}}>

      <CreateAccount/>


      </div>


    </div>
  )
}

export default KYC