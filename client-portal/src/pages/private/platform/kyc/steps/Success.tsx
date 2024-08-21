import React from 'react'
import successIcon from '../../../../../assets/icons/kyc/Illustration.svg'
import { useNavigate } from 'react-router-dom'

const SuccessView = () => {
  const navigate = useNavigate()
  const handleNav = () => {
    navigate('/platform') 

  }
  return (
    <div className='max-w-md w-full successWrapper formContainer '>
        <span className=' m-auto block text-center w-max'>
            <img src={successIcon} alt="" />

        </span>

        <h4 className='text-center text-3xl leading-9 text-white font-bold'>Success! <br/>
        Go to your dashboard
        </h4>
        
        <button onClick={handleNav} className='w-full py-6 my-10 '>Go to dashboard </button>
    </div>
  )
}

export default SuccessView