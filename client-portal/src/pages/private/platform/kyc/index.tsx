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
import BioDetails from './steps/BioDetails'

const KYC = () => {
  const [step, setStep] = useState(7)
  const [forgotPasswordView, setForgotPasswordView] = useState(false);

  const [signInProcess, setSignInProcess] = useState<string>("email")
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
          handleNext={handleNextPage }
      />
        
      case 2:
      return <SignInOptions
      handleNext={handleNextPage }
      setSignInProcess={setSignInProcess}
      />
          
      case 3:
       return  signInProcess=="email" ?  
       <SignInForm
       handleNext={handleNextPage }
       setForgotPasswordView={setForgotPasswordView}

       />  : <PhoneSignInForm
       handleNext={handleNextPage }
       setForgotPasswordView={setForgotPasswordView}

      />
            
      case 4:
        return  <OTP
        handleNext={handleNextPage}/>
      
      case 5:
        return <SuccessView/>

        case 6: 
        return <BioDetails
        handleNext={handleNextPage}
        />
                case 7: 
        return <DocumnetUpload/>

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
       {renderPage()}
      </div>

    </div>
  )
}

export default KYC