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
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setUser } from '@store/slices/user';
import { setWallets } from '@store/slices/wallet';
import { useNavigate } from 'react-router-dom';
import  LogOUTModal from 'components/modal/Modal';
import { ExitIcon } from 'assets/icons';
import MenuListCard from 'components/menuListCard/MenuListCard';

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
  const {user} = useAppSelector(state => state.user)
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
  console.log(user)

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


                <button className={`my-2 py-1 px-4 text-center rounded-2xl cursor-pointer font-medium bg-[#0094FF] w-full`}  onClick={handleLogout}><span className='text-xs md:text-sm font-medium'>Log Out </span></button>
             
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