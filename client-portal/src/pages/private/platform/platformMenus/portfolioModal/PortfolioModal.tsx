import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import './portfolioModal.scss'
import ProfileModal from 'components/profileModal';
import PortfolioPage from 'pages/private/platform/platformMenus/portfolioSection/PortfolioPage';
import Trading from './trading/Trading';
import VerificationPage from './verification/VerificationPage';
import Settings from './settings/Settings';
import useKyc from 'api/kyc/useKycInfo';
import { useCookies } from 'react-cookie';
import { IUserKYCProps } from '@interfaces';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setUser } from '@store/slices/user';
import { setWallets } from '@store/slices/wallet';
import { useNavigate } from 'react-router-dom';
import { setPortfolioWindow } from '@store/slices/app';
import PortfolioSideBar from './sidebar/SideBar';
import Password from './password';


interface PortfolioModalProps {
    isModalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRightDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRightSubDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    
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
      case "setting":
        return "Settings";
      default:
        return "Unknown"; 
    }
  };

const PortfolioModal: React.FC<PortfolioModalProps> = ({isModalOpen,setModalOpen, setIsRightDrawerOpen, setIsRightSubDrawerOpen }) => {
  const [userProfile, setUserProfile] = useState<IUserKYCProps>()
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const [, , removeCookie] = useCookies(["access_token", "refresh_token"]);


  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setWallets([]));
    removeCookie("access_token");
    removeCookie("refresh_token");
    navigate("/");
  };

    const [selectedNav, setSelectedNav] = useState("personal_info")
    const [cookies] = useCookies(["access_token"])    
    const handlePortfolioNavigation = () => {
      dispatch(setPortfolioWindow(true));
      setModalOpen(false)
      setIsRightSubDrawerOpen(false)
      setIsRightDrawerOpen(false)

    }

    // const {mutate, isPending} = useKyc({
    //     onSuccess: (data) => {
    //       setUserProfile(data.results[0]?.user )

    //       console.log("set userrrrrrrrrrrrrrrrrrrrrrrr", data.results[0])



    //     },
    //     onError: () => {

    //     }
    // })





    const sideItems = [
        {name: "personal_info", label: "Personal", component: <ProfileModal /> },
        {name: "verification", label: "Verification", component:  <VerificationPage />},
        {name: "portfolio", label: "Portfolio", component: <PortfolioPage/>},
        {name: "password", label: "Password", component:  <Password />},
        {name: "trading", label: "Trading", component:  <Trading/>},
        {name: "setting", label: "Settings", component:  <Settings />},
    ]

  return (

    <>
        
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
          <PortfolioSideBar
          sideItems={sideItems} 
          handlePortfolio={handlePortfolioNavigation}
          setSelectedNav={setSelectedNav}
          handleLogout={handleLogout}
          selectedNav={selectedNav}
          
          />
            
            <div className='bg-black px-3 py-0 text-white h-full max-h-[780px] overflow-y-auto rounded font-bold main-conatain hide-scrollbar'>

                {[...sideItems].map(item => {
                    if(item.name == selectedNav){
                        return item.component
                    }
                })}


            </div>

        </div>

    </Modal>




    {/* <LogOUTModal
        closeable={false}
        open={isModalOpen}
        setOpen={setModalOpen}
        rootClassName="logoutModal"
      >
        <p className="modalHeading">Are you sure you want to log out?</p>
        <div className="logout-buttons">
          <div className="settingsLogoutButton">
            <MenuListCard
              onClick={() => setModalOpen(false)}
              variant={2}
              primary
              textCenter
              title="Cancel"
            />
          </div>
          <div className="settingsLogoutButton">
            <MenuListCard
              onClick={handleLogout}
              variant={2}
              danger
              textCenter
              title="Log out"
              icon={<ExitIcon width="20" height="20" />}
            />
          </div>
        </div>
      </LogOUTModal> */}


    </>
  )
}

export default PortfolioModal