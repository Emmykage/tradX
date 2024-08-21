import React from 'react'
import { NavLink } from 'react-router-dom'

interface signInOptionProps {
    handleNext: () => void,
    setSignInProcess: React.Dispatch<React.SetStateAction<string>>;

}


const SignInOptions: React.FC<signInOptionProps> = ({handleNext, setSignInProcess}) => {
    const handleProceed = (option: string) => {
        setSignInProcess(option)
        handleNext()
    }
  return (
    <div className='px-5 max-w-4xl w-full signOptions'>
        {/* <h5 className='text-2xl text-white font-semibold my-2'>Sign in to your account</h5>
        <p className='text-base font-medium text-white my-6'>Welcome back! Sign in to your account and enjoy your trading!</p> */}
        <h5 className="text-white text-2xl font-semibold mb-4">Sign in to your account</h5>
        <p className="text-white text-base font-medium mb-6">Welcome back! Sign in to your account and enjoy your trading!</p>

        <div>
            <button onClick={()=> handleProceed("email")} className='w-full bg-[#17273E] text-[#C1C1C3]  hover:bg-[#17273e94] py-7 my-5 rounded-xl font-medium text-base text-center border border-[#00599A] cursor-pointer'>
            Continue with email
            </button>

            <button onClick={()=> handleProceed("phone_no")} className='w-full bg-[#17273E]  text-[#C1C1C3] py-7 my-5 rounded-xl hover:bg-[#17273e94] font-medium text-base text-center cursor-pointer'>
            Continue with phone number
            </button>
        </div>
        <p className="text-base my-6 text-[#C1C1C3]">Already have an account? <NavLink to={'/signIn'} className={"text-[#0094FF]"}> Sign In</NavLink></p>

        
    </div>
  )
}

export default SignInOptions