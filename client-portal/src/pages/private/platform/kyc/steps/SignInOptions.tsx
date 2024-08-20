import React from 'react'

const SignInOptions = () => {
  return (
    <div className=' max-w-4xl '>
        <h5 className='text-2xl font-semibold my-2'>Sign in to your account</h5>
        <p className='text-base font-medium text-white my-6'>Welcome back! Sign in to your account and enjoy your trading!</p>

        <div>
            <div className='bg-[#17273E]  hover:bg-[#17273e94] py-7 my-5 rounded-xl font-medium text-base text-center border border-[#00599A]'>
            Continue with email
            </div>

            <div className='bg-[#17273E] py-7 my-5 rounded-xl hover:bg-[#17273e94] font-medium text-base text-center border border-[#00599A]'>
            Continue with phone number
            </div>
        </div>
        <p></p>
        
    </div>
  )
}

export default SignInOptions