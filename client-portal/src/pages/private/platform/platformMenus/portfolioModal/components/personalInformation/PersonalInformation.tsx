import React from 'react'
import verify from '../../../../../../../assets/portfolio/photo.png'
import scan from '../../../../../../../assets/portfolio/verify-icon.png'
const ProfileInformation = () => {
  return (
    <div className=''>
        <h4 className='font-semibold text-2xl my-4' >Personal Informaation</h4>

        <h5 className='text-sm font-semibold text-gray-400'>Full Name</h5>
        <p className='text-sm font-normal'>   First_Name  Last_Name</p>

    {/* <h5 className='text-sm font-semibold text-gray-400 mt-3'>Date of birth</h5>
    <p className='text-sm font-normal'>01/01/2001</p> */}

    <h5 className='text-sm font-semibold text-gray-400 mt-3'>E-mail</h5>
    <p className='text-sm font-normal'>user.name@gmail.com</p>

    {/* <h5 className='text-sm font-semibold text-gray-400 mt-3'>Address</h5>
    <p className='text-sm font-normal'>Canada, Edmonton, AB, 18, 2 street SW</p> */}
     

     <div className='mt-6'>
        <p className='text-base font-medium'>Face Verification</p>
        <p className='text-sm text-gray-400'>Verification status</p>
        <p className='text-green-600'>Verified</p>

        <div className='flex gap-4 mt-5'>
            <span className=''>
                <img src={verify} alt='' className='bg-[#0094FF] p-2 rounded-lg ' />
            </span>
            <span>
                <img src={scan} alt='' className='bg-white/30 p-2 rounded-lg'/>
            </span>
        </div>


     </div>
        
    </div>
  )
}

export default ProfileInformation