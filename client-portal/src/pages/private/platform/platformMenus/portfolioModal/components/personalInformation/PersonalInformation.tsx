import React, { useEffect, useState } from 'react'
import verify from '../../../../../../../assets/portfolio/photo.png'
import scan from '../../../../../../../assets/portfolio/verify-icon.png'
import useKyc from 'api/kyc/useKycInfo'
import { useCookies } from 'react-cookie'

import { IUser, IUserKYCProps } from '@interfaces'
import Loading from 'components/loading'
const ProfileInformation = () => {
    const [userProfile, setUserProfile] = useState<IUserKYCProps>()

    const [cookies] = useCookies(["access_token"])



    const {mutate, isPending} = useKyc({
        onSuccess: (data) => {
            console.log("get kyc info",data)
            setUserProfile(data.results[0].user)


        },
        onError: () => {

        }
    })

    useEffect(()=> {
        mutate({
            token: cookies.access_token
        })

    },[])

    // if(isPending){
    //     return(
    //     <div className='h-36'>

    //     </div>
    // )
    // }

  return (
    <div className='relative'>
        
        {isPending && <div className='absolute top-0 h-full left-0 w-full flex justify-center items-center bg-gray-200/10'>
        <Loading/>
        </div> }

        

        <h4 className='font-semibold text-2xl my-4'>Personal Informaation</h4>

        <h5 className='text-sm font-semibold text-gray-400'>Full Name</h5>
        <p className='text-sm font-normal'>   {`${userProfile?.first_name} ${userProfile?.last_name }`}</p>

     <h5 className='text-sm font-semibold text-gray-400 mt-3'>E-mail</h5>
    <p className='text-sm font-normal'>{`${userProfile?.email}`}</p>
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