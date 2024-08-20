import React, { useState } from 'react'
import "./kyc.scss"
import FileInput from 'components/fileInput/fileInput'
import KYCHeader from './components/Header'
import CreateAccount from './steps/createAccount'
import SignInOptions from './steps/SignInOptions'
import SignInForm from './steps/signIn'

const KYC = () => {
  return(
    <div className='kycWrapper relative'>
      <KYCHeader />

      <div className='flex justify-center items-center' style={{height: `calc(100vh - 80px)`}}>

      {/* <CreateAccount/> */}
      {/* <SignInOptions/> */}
      <SignInForm/>


      </div>


    </div>
  )
}

export default KYC