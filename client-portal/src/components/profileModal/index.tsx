import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useCookies } from 'react-cookie';
import useKyc from 'api/kyc/useKycInfo';
import IKYC from '@interfaces/IKYC';
import './profileModal.scss';
import useWallet from 'api/wallet/useWallet';
import { IWallet } from '@interfaces';
import { portfolioData } from './data/portfolioData';
import VerificationStatus from 'pages/private/platform/platformMenus/portfolioModal/components/verification/VerificationStatus';
import ProfileInformation from 'pages/private/platform/platformMenus/portfolioModal/components/personalInformation/PersonalInformation';

interface ProfileModalProps {
  isModalOpen?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UpdateData {
  image: File | null;
}
interface walletDetailsProps{
    accountBalance: number,
    accountType: string,
    currencyName: string,
    currencySymbol: string
}

const ProfileModal: React.FC<ProfileModalProps> = () => {
  const [form] = Form.useForm();
  const [cookies] = useCookies(['access_token']);
  const [selectedCurrency, setSelectedCurrency ] = useState<string>()
  const [selectedPortfolio, setSelectedPortfolio ] = useState<string>()
  const [currencies, setCurrencies] = useState<IWallet[]>()
  const [walletDetails, setWalletDetails] = useState<walletDetailsProps[]>([])
  const [userProfile, setUserProfile] = useState<IKYC>();
  const [profilePic, setProfilePic] = useState<UpdateData>({ image: null });
  const clickSecurityCardItem = (item:string) => {
    // setIsRightSubDrawerContent("confirm-email");
  };

  const { mutate, isPending } = useKyc({
    onSuccess: (data) => {
      const userInfo = data.results[0];
      console.log("user info",userInfo)
      setUserProfile(userInfo);
      form.setFieldsValue({
        first_name: userInfo.user.first_name,
        last_name: userInfo.user.last_name,
        email: userInfo.user.email,
      });
    },
  });


  const {mutate: mutateWallet } = useWallet({
    onSuccess: (data) => {
        setCurrencies(data.results)

        const mapWalletDetails = data.results.map(currency => (
            {
                accountBalance: currency.balance !== undefined ? Number(currency.balance) : 0,
                accountType: currency.name || '',
                currencyName: currency.currency?.longer_name || '', 
                currencySymbol: currency.currency?.symbol || ''
            }
        ))

        setWalletDetails(mapWalletDetails)
        console.log(mapWalletDetails)

    }
  })


  const handleFetchWallet = (value: string) => {
    console.log(value, cookies.access_token)
    setSelectedCurrency(value)
    mutateWallet(cookies.access_token)
  }



  useEffect(() => {
    mutate({ token: cookies.access_token });
    mutateWallet(cookies.access_token)

  }, [cookies.access_token, mutate]);

  const handleProfileImg = (file: File) => {
    setProfilePic((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  console.log(portfolioData)
  const selectedItem = portfolioData.find(item => item.value === selectedPortfolio);


  return (
    <div className='profileModal h-full m-auto max-w-3xl'>

   
      <div className='grid gap-6 profileContent'>

        <div className='content'>
          <div className='biodata p-4 rounded-lg bg-[#1F324D66] mb-4 '>
            <ProfileInformation/>
            {/* <Form form={form} layout="vertical">
              <div className='flex flex-col md:flex-row gap-2'>
                <Form.Item className=' flex-1' label="First Name" name="first_name">
                  <Input />
                </Form.Item>
                <Form.Item className='flex-1' label="Last Name" name="last_name">
                  <Input />
                </Form.Item>
              </div>
              <div className='flex md:flex-row flex-col gap-2'>
                <Form.Item className='flex-1' label="Email" name="email">
                  <Input />
                </Form.Item>
                <Form.Item className='flex-1' label="Phone Number" name="phone_number" initialValue="+2347064334160">
                  <Input />
                </Form.Item>
              </div>

           
            </Form> */}
          </div>

         <div className='bg-[#1F324D66] p-4 rounded-lg mt-auto px-4 py-4'>
          <VerificationStatus/>
        </div>
          {/* </div> */}
          {/* <EnhanceSecurityCard variant1={3} variant2={3} onClick={clickSecurityCardItem} /> */}
          
        </div>
      </div>

    


    </div>

  );
};

export default ProfileModal;
