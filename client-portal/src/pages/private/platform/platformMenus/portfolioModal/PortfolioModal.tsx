import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import userImg from "../../../../../assets/userP.png"
import './portfolioModal.scss'
import ProfileModal from 'components/profileModal';
import ChangePassword from 'pages/private/platform/platformMenus/changePassword/ChangePassword';
import PortfolioPage from 'pages/private/platform/platformMenus/portfolioSection/PortfolioPage';
import Trading from './trading/Trading';
import VerificationPage from './verification/VerificationPage';
import Settings from './settings/Settings';
import useKyc from 'api/kyc/useKycInfo';
import { useCookies } from 'react-cookie';
import { IUserKYCProps } from '@interfaces';

interface PortfolioModalProps {
    isModalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const getTitle = (name: string): string => {
    switch (name) {
      case "personal_info":
        return "Personal Information";
      case "verification":
        return "Verification";
      case "portfolio":
        return "Portfolio";
      case "password":
        return "Password";
      case "trading":
        return "Trading";
      default:
        return "Unknown"; 
    }
  };

const PortfolioModal: React.FC<PortfolioModalProps> = ({isModalOpen,setModalOpen }) => {
  const [userProfile, setUserProfile] = useState<IUserKYCProps>()

    const [selectedNav, setSlectedNav] = useState("personal_info")

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

    const sideItems = [
        {name: "personal_info", label: "Personal", component: <ProfileModal userProfile={userProfile} isPending={isPending} /> },
        {name: "verification", label: "Verification", component:  <VerificationPage />},
        {name: "portfolio", label: "Portfolio", component: <PortfolioPage/>},
        {name: "password", label: "Password", component:  <ChangePassword />},
        {name: "trading", label: "Trading", component:  <Trading/>},
        {name: "setting", label: "Setting", component:  <Settings />},
    ]


  return (
        
        <Modal
            rootClassName='portfolioProfile'
            open={isModalOpen}
            title={getTitle(selectedNav) }
            
             onOk={() => setModalOpen(false)}
             onCancel={() => setModalOpen(false)}
            footer={null}
            width={1000}
            maskClosable={true}
            centered
            >
        <div className='portfolioWrapper  grid gap-6'>
            <div className='px-2 md:px-5 py-12 bg-[#0F1A2B] rounded-2xl max-h-[780px] sideNav overflow-y-auto'>

                <div className=' '>
                    <img src={userImg} alt='' className='w-20 h-20 md:w-32 md:h-32 rounded-full bg-red-200 block m-auto' />
                    <p className='my-4 text-base text-center'>{`${userProfile?.first_name} ${userProfile?.last_name}`}</p>
                    <p className='text-blue-600 text-sm text-center'>Hrefugew....239857bfhvm</p>
                </div>
                <ul className='mt-6 mb-10'>
                    {sideItems.map(item => (
                                        
                        <li className={`my-2 py-1 px-4 text-center rounded-2xl cursor-pointer font-medium ${item.name == selectedNav && "bg-white text-[#0F1A2B]" }`}  onClick={() => setSlectedNav(item.name)}><span className='text-xs md:text-sm font-medium'>{item.label} </span></li>


                    ))}

                
                              
                </ul>
             
            </div>
            <div className='bg-black px-3 py-0 text-white h-full max-h-[780px] overflow-y-auto rounded font-bold main-conatain hide-scrollbar'>

                {[...sideItems].map(item => {
                    if(item.name == selectedNav){
                        return item.component
                    }
                })}


            </div>

        </div>

    </Modal>
  )
}

export default PortfolioModal