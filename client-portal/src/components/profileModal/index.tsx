import React from 'react';
import './profileModal.scss';
import VerificationStatus from 'pages/private/platform/platformMenus/portfolioModal/components/verification/VerificationStatus';
import ProfileInformation from 'pages/private/platform/platformMenus/portfolioModal/components/personalInformation/PersonalInformation';


const ProfileModal: React.FC = () => {  
  return (
    <div className='profileModal h-full m-auto max-w-3xl'>

   
      <div className='grid gap-6 profileContent'>

        <div className='content'>
          <div className='biodata p-4 rounded-lg bg-[#1F324D66] mb-4 '>
            <ProfileInformation/>
           </div>

         <div className='bg-[#1F324D66] p-4 rounded-lg mt-auto px-4 py-4'>
          <VerificationStatus/>
        </div>
        </div>
      </div>
    </div>

  );
};

export default ProfileModal;
