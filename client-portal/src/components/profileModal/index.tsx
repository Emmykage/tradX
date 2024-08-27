import React, { useEffect, useState } from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { useCookies } from 'react-cookie';
import EnhanceSecurityCard from 'components/enhanceSecurityCard/EnhanceSecurityCard';
import PrimaryButton from 'components/primaryButton/PrimaryButton';
import ProfilePic from 'pages/private/platform/kyc/components/profilePic/pic';
import useKyc from 'api/kyc/useKycInfo';
import { ChatIcon, DownArrowIcon, UpArrowIcon } from 'assets/icons';
import IKYC from '@interfaces/IKYC';
import './profileModal.scss';
import FormSelect from 'pages/private/platform/kyc/components/FormSelect';
import { currencyData } from './data/currencyData';
import useWallet from 'api/wallet/useWallet';
import { IWallet } from '@interfaces';
import { portfolioData, portfolioDatum } from './data/portfolioData';

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
    <div className='profileModal m-auto max-w-3xl'>

   
      <div className='grid gap-6 profileContent'>
       

        {/* Biodata Form Section */}
        <div className='content'>
          <div className='biodata'>
            <Form form={form} layout="vertical">
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

              {/* Account Balance Section */}
              <div className='summary items-center'>
                <div className='flex flex-col sm:flex-row my-5 gap-5'>
                  <div className='w-full  md:max-w-[50%] basis-[50%] rounded account gap-7'>
                    <div className='flex '>

                    <div className='flex flex-1 flex-col justify-between'>
                      <span className='text-white text-sm font-semibold block'>ACCOUNT BALANCE</span>
                      {/* <span className='text-white'>USD</span> */}

                      <div className='flex justi gap-[10%] items-center px-4'>
                      <UpArrowIcon />
                      <p className='text-white text-base font-medium text-[green]  max-w-sm w-full overflow-x-auto'>
                        {walletDetails.map(item => {

                            if(item.currencyName == selectedCurrency){
                                return (`${item.currencySymbol} ${item.accountBalance}`)

                            }
                            return  0
                        })}
                      </p>
                    </div>
                    </div>
            
                   <FormSelect
                   id='currency'
                   data={currencyData}
                   className='dropdown'
                   selectedId='usd'
                   onSelect={(value)=> handleFetchWallet(value)}
                    />

                    </div>
                    
                  </div>
                  <div className='basis-[50%] rounded portfolio'>
                  <div className='flex '>

                <div className='flex flex-1 flex-col justify-between'>
                    <span className='text-white text-sm font-semibold block'>PORTFOLIO</span>
                    <div className='flex justi gap-[10%] items-center px-4'>
                    <UpArrowIcon />
                    <p className='text-white text-base flex flex-col py-3 items-center h-10  leading-[100%] text-sm font-medium text-[green] overflow-y-auto  max-w-sm w-full overflow-x-auto hide-scrollbar'>
                    {selectedItem ? (
                                <div>
                                {selectedItem.portfolios[0]?.label.substring(0, 14)}
                                </div>
                            ) : (
                                <p>Apple Stock</p>
                            )}
                                        </p>
                </div>
                </div>
                        <FormSelect
                            id='portfolio'
                            data={portfolioData}
                            className='dropdown right-0'
                            selectedId='apple Stock'
                            position = 'bottom-right'
                            onSelect={(value)=> setSelectedPortfolio(value)}
                            /> 

                        </div>

                 
                    </div>

                </div>
              </div>
            </Form>
          </div>
          <EnhanceSecurityCard variant1={3} variant2={3} onClick={clickSecurityCardItem} />
        </div>
      </div>
    {/* </Modal> */}
    


    </div>

  );
};

export default ProfileModal;
