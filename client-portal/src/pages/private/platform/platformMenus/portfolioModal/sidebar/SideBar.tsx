import { IUserKYCProps } from '@interfaces';
import { useAppSelector } from '@store/hooks';
import useUpdateUser from 'api/user/useUpdateUser';
import Loading from 'components/loading';
import ProfilePic from 'pages/private/platform/kyc/components/profilePic/pic';
import React, { SetStateAction, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

interface portfolioSideProps {
    userProfile: IUserKYCProps | undefined;
    sideItems: any[];
    handlePortfolio:  () => void
    handleLogout: () => void
    selectedNav: string
    setSelectedNav: React.Dispatch<React.SetStateAction<string>>
    }

    interface profileProp{
        image: File | null,
        selfie: string
    }
    const PortfolioSideBar: React.FC<portfolioSideProps> = ({selectedNav, userProfile, sideItems, handlePortfolio, setSelectedNav, handleLogout}) => {
       
        const {user} = useAppSelector(state => state.user)

        const [cookies] = useCookies(["access_token"]);

        
        const {mutate, isPending} = useUpdateUser({
            onSuccess: (data) => {
                toast.success("Image Uploaded")

            }
        })

        const handlePicUpdate = (file: File) => {
          mutate({
            token: cookies.access_token,
             data: {
                profile_picture: file
             }
          })
        
        }

        console.log(user)
   

  return (
    <div className='px-2 md:px-5 py-12 bg-[#0F1A2B] rounded-2xl max-h-[780px] sideNav overflow-y-auto'>

    <div className=' '>
          <div className="m-auto w-max relative">
         
            {isPending &&  (<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-full'>
            <Loading/>
            </div>) }
          <ProfilePic 
            profilePic={user?.profile_picture ?? null}
              handleProfileImg={handlePicUpdate} 
            />


          </div>

        <p className='my-4 text-base text-center'> {`${userProfile?.first_name} ${userProfile?.last_name}`}</p>
        <p className='text-blue-600 text-sm text-center'>Hrefugew....239857bfhvm</p>
    </div>
    <ul className='mt-6 mb-10'>
    {sideItems.map((item: any) => (
      <li 
          key={item.name} 
          className={`my-2 py-1 px-4 text-center rounded-2xl cursor-pointer font-medium ${item.name === selectedNav && "bg-white text-[#0F1A2B]"}`} 
          onClick={() => {
              if (item.name === "portfolio") {
                handlePortfolio()
              } else {
                  setSelectedNav(item.name);
              }
          }}
        >
        <span className='text-xs md:text-sm font-medium'>{item.label}</span>
        </li>
        ))}

            
                  
    </ul>


    <button className={`my-2 py-1 px-4 text-center rounded-2xl cursor-pointer font-medium bg-[#0094FF] w-full`}  onClick={handleLogout}><span className='text-xs md:text-sm font-medium'>Log Out </span></button>
 
</div>
  )
}

export default PortfolioSideBar