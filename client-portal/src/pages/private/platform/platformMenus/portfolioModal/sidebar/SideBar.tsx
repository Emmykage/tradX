import { useAppSelector } from '@store/hooks';
import useUpdateUser from 'api/user/useUpdateUser';
import Loading from 'components/loading';
import ProfilePic from 'pages/private/platform/kyc/components/profilePic/pic';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

interface portfolioSideProps {
    sideItems: any[];
    handlePortfolio:  () => void
    handleLogout: () => void
    selectedNav: string
    setSelectedNav: React.Dispatch<React.SetStateAction<string>>
    }

       const PortfolioSideBar: React.FC<portfolioSideProps> = ({selectedNav, sideItems, handlePortfolio, setSelectedNav, handleLogout}) => {
       
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

        <p className='my-4 text-base text-center'> {`${user?.first_name} ${user?.last_name}`}</p>
        <p className='text-white text-sm text-center'>{user?.trader_id}</p>
    </div>
    <ul className='mt-6 mb-10'>
    {sideItems.map((item: any) => (
      <li 
          key={item.name} 
          className={`my-2 py-1 px-4 text-center rounded-2xl cursor-pointer font-medium ${item.name === selectedNav && "bg-white text-[#0F1A2B]"}`} 
          onClick={() => {
             
                  setSelectedNav(item.name);
              
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