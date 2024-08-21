import React from 'react'

const OTP = () => {
  return (
    <div className='px-5 max-w-4xl w-full formContainer otpForm'>
       
        <h5 className='text-2xl text-white my-2'>OTP Verification</h5>
        <p className='text-base font-medium my-6 text-[#F7F7F7]'>We have sent a verification code to your email(or phone number). You can resend code after 1 minute.</p>
        <a className='text-[#0094FF] block my-10' href="">Resend</a>

        <div className='grid grid-cols-4 gap-6'>

        <input type="text" className='py-8 rounded-xl'  />
        <input type="text" className='py-8 rounded-xl' />
        <input type="text" className='py-8 rounded-xl' />
        <input type="text" className='py-8 rounded-xl'/>
        </div>

        <button className='py-6 font-semibold text-white w-full my-10'>
            Submit
        </button>
    </div>
  )
}

export default OTP