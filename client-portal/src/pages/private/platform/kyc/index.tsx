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
  const [step, setStep] = useState(6)
  const [forgotPasswordView, setForgotPasswordView] = useState(false);

  const [signInProcess, setSignInProcess] = useState<string>("email")
  const handleNextPage = () => {
    if(step == 5 ){
      setStep(1)
    }else{
      setStep(prev => prev + 1)

    }
  }

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
    <div className="kycWrapper  relative">
      <KYCHeader />
      <div className='max-w-[620px] flex justify-center items-center min-h-[100vh]  h-full pt-24 lg:pt-16  w-full mx-auto '>
        <div className="w-full">
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
    </div>
  )
}

export default KYC