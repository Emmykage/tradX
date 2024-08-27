import React from 'react'
import VerificationMenu from '../../verification/VerificationMenu'
import PrimaryButton from 'components/primaryButton/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import VerificationStatus from '../components/verification/VerificationStatus';
import './verificationStatus.scss'
const VerificationPage = () => {
    const navigate = useNavigate();

  return (
    <div className='h-full  p-8 rounded-lg overflow-y-auto'>
        <div className='bg-[#1F324D66 ] mb-4'>
            <VerificationMenu/>
        </div>

        <div className='bg-[#1F324D66] p-4 rounded-lg'>
            <div className="kycVerifyButton w-1/3 m-auto">
            <PrimaryButton
            onClick={() => {
                navigate("/kyc-document/?query=biodata-kyc");
            }}
            className="verificationLearnMore"
            Title="KYC Verification"
            />
        </div>
        <VerificationStatus/>
        </div>
    </div>
  )
}

export default VerificationPage