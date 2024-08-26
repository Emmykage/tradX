import { Modal } from 'antd'
import React, { Component, useState } from 'react'
import userImg from "../../assets/userP.png"
import './portfolioModal.scss'
import ProfileModal from 'components/profileModal';
import VerificationMenu from 'pages/private/platform/platformMenus/verification/VerificationMenu';
import ChangePassword from 'pages/private/platform/platformMenus/changePassword/ChangePassword';
import TradingMenu from 'pages/private/platform/platformMenus/trading/TradingMenu';

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
        return "Unknown"; // or return a default string like "Unknown"
    }
  };

const PortfolioModal: React.FC<PortfolioModalProps> = ({isModalOpen,setModalOpen }) => {
    const [selectedNav, setSlectedNav] = useState("personal_info")

    const sideItems = [
        {name: "personal_info", label: "Personal Information", component: <ProfileModal /> },
        {name: "verification", label: "Verification", component:  <VerificationMenu />},
        // {name: "portfolio", label: "Portfolio", component: "<PortfolioModal/>"  },
        {name: "password", label: "Password", component:  <ChangePassword />},
        {name: "trading", label: "Trading", component:  <TradingMenu />},
    ]


    const bottomItems = [
        {name: "change_account", label: "Change Account", component:  "hey"},
        {name: "log_out", label: "Log Out", component:  "hey"},
        {name: "help", label: "Help", component:  "hey"}

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
            <div className='px-2 md:px-5 py-12 bg-black rounded-2xl max-h-[780px] sideNav overflow-y-auto'>

                <div className=' '>
                    <img src={userImg} alt='' className='w-20 h-20 md:w-32 md:h-32 rounded-full bg-red-200 block m-auto' />
                    <p className='my-4 text-base text-center'>User</p>
                    <p className='text-blue-600 text-sm text-center'>Hrefugew....239857bfhvm</p>
                </div>
                <ul className='mt-6 mb-10'>
                    {sideItems.map(item => (
                                        
                        <li className={`my-2 py-2 px-4 rounded-2xl cursor-pointer font-medium ${item.name == selectedNav && "bg-white text-[#0F1A2B]" }`}  onClick={() => setSlectedNav(item.name)}><span className='text-xs md:text-sm font-medium'>{item.label} </span></li>


                    ))}

                
                              
                </ul>


                <ul className='mt-10 text-center mt-16'>
                {bottomItems.map(item => (
                                        
                        <li className='my-2 py-2 px-2 rounded-lg text-white'><span className='text-sm font-medium'>{item.label} </span></li>
                
                
                      ))}     
                </ul>
            </div>
            <div className='bg-black px-3 py-3 text-white h-full max-h-[780px] overflow-y-auto rounded font-bold main-conatain hide-scrollbar'>

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