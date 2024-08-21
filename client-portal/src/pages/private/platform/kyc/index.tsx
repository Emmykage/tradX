import React, { useState } from 'react'
import "./kyc.scss"
import HelpButton from '../../../../assets/icons/kyc/Button.svg'

import FileInput from 'components/fileInput/fileInput'
import KYCHeader from './components/Header'
import CreateAccount from './steps/createAccount'
import SignInOptions from './steps/SignInOptions'
import SignInForm from './steps/EmailSignIn'
import PhoneSignInForm from './steps/NumberSignInForm'
import OTP from './steps/OTP'
import { SuccessIcon } from 'assets/icons'
import SuccessView from './steps/Success'
import DocumnetUpload from './steps/DocumentUpload'

const KYC = () => {
  const [step, setStep] = useState(1)
  const [signInProcess, setSignInProcess] = useState("email")
  const handleNextPage = () => {
    if(step == 5 ){
      setStep(1)
    }else{
      setStep(prev => prev + 1)

    }
  }

  console.log(step)

  const renderPage = () => {
    switch (step) {
      case 1:
      return <CreateAccount

      />
        
      case 2:
      return <SignInOptions/>
          
      case 3:
       return  signInProcess=="email" ?  <SignInForm/>  : <PhoneSignInForm/>
            
      case 4:
        return  <OTP/>
      
      case 5:
        return <SuccessView/>
      default:
      return null;
  }
}
  return(
    <div className='kycWrapper relative'>
      <KYCHeader />

      <div className='flex justify-center items-center' style={{height: `calc(100vh - 80px)`}}>
      <span className=' p-0 absolute bottom-0 right-10'>
    <img src={HelpButton} alt="" className=''/>

        
    </span>

    {/* <button onClick={handleNextPage}> Next page </button> */}

    {renderPage()}


      {/* <CreateAccount/> */}
      {/* <SignInOptions/> */}
      {/* <SignInForm/> */}
      {/* <PhoneSignInForm/> */}
      {/* <OTP/> */}
      {/* <SuccessView/> */}


      </div>

      {/* <DocumnetUpload/> */}


    </div>
  )
}

export default KYC