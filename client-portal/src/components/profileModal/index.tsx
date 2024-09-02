import React from 'react';
import './profileModal.scss';
import VerificationStatus from 'pages/private/platform/platformMenus/portfolioModal/components/verification/VerificationStatus';
import ProfileInformation from 'pages/private/platform/platformMenus/portfolioModal/components/personalInformation/PersonalInformation';
import { KYCFileResponse } from 'api/kyc/useKycFiles';
import { KYCResponse } from 'api/kyc/useKycInfo';
import IKYC from '@interfaces/IKYC';

interface profileModalProps{
  userKyc:  IKYC | undefined
}

const ProfileModal: React.FC<profileModalProps> = ({userKyc}) => {  
  return (
    <div className='profileModal h-full m-auto max-w-3xl'>

   
      <div className='grid gap-6 profileContent'>

        <div className='content'>
          <div className='biodata p-4 rounded-lg bg-[#1F324D66] mb-4 '>
            <ProfileInformation 
            />
           </div>

         <div className='bg-[#1F324D66] p-4 rounded-lg mt-auto px-4 py-4'>
          <VerificationStatus userKyc={userKyc}/>
        </div>
        </div>
      </div>
    </div>

  );
};

export default ProfileModal;
