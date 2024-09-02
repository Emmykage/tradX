import React from 'react'
import verify from '../../../../../../../assets/portfolio/photo.png'
import scan from '../../../../../../../assets/portfolio/verify-icon.png'
import './personalInfo.scss'
import { useAppSelector } from '@store/hooks'
import { useNavigate } from 'react-router-dom'




const ProfileInformation: React.FC = () => {
    const navigate = useNavigate()
    const {user} = useAppSelector(state => state.user)

  return (
    <div className='relative personal-info-detail'>
        
        <h4 className='font-semibold text-2xl my-4'>Personal Information</h4>
        <div className=''>
            <div className='flex gap-3 max-w- '>
                <div className='flex-1 border rounded-lg py-2 px-3'>
                    <h5 className='text-sm font-semibold text-gray-400'>First Name</h5>
                    <p className='text-sm font-normal'>   {`${user?.first_name} `}</p>

                </div>
                <div className='flex-1  border rounded-lg py-2 px-3'>
                <h5 className='text-sm font-semibold text-gray-400'>Last Name</h5>
                <p className='text-sm font-normal'>   {` ${user?.last_name }`}</p>


                </div>

            </div>

        </div>

       
        <div>

            <div className='flex my-3 gap-3'>
                <div className='flex-1  border rounded-lg py-2 px-3'> 
                    <h5 className='text-sm font-semibold text-gray-400'>E-mail</h5>
                    <p className='text-sm font-normal'>{`${user?.email}`}</p>
                </div>
                <div className='flex-1  border rounded-lg py-2 px-3'>
                    <h5 className='text-sm font-semibold text-gray-400'>Phone Number</h5>
                    <p className='text-sm font-normal'>{`${user?.phone_number}`}</p>
                </div>
            </div>
        </div>


        {/* <div className='flex-1  border rounded-lg py-2 px-3'>
            <h5 className='text-sm font-semibold text-gray-400'>ID</h5>
            <p className='text-sm font-normal'>{`${user?.trader_id}`}</p>

        </div> */}


       
       <div className='mt-6'>
        <p className='text-base font-medium'>Face Verification</p>
        <p className='text-sm text-gray-400'>Verification status</p>
        <p className='text-green-600'>Verified</p>

        <div className='flex gap-4 mt-5'>
            <span className='' onClick={() =>  navigate("/kyc-document/?query=document-kyc-result")}>
                <img src={verify} alt='' className='bg-[#0094FF] p-2 rounded-lg ' />
            </span>
            <span className='relative'>
                <input type="file" className='absolute opacity-0  top-0 left-0 w-full h-full' />
                <img src={scan} alt='' className='bg-white/30 p-2 rounded-lg'/>
            </span>
        </div>


     </div>
        
    </div>
  )
}

export default ProfileInformation