import {  NotificationIcon3 } from 'assets/icons'
import './portfolioMenu.scss'
import SearchBar from 'components/searchBar/SearchBar'
import AssetCard from './card/AssetCard'
import Selector from '../portfolioModal/components/headerSelector/Selector'
import { investMentPerformanceData } from './data/performacedData'
import AssetSection from './tableAsset/AssetSection'
import CardInfo from './card/CardInfo'
import PortfolioHeader from './header/PortfolioHeader'
import useUserStat from 'api/user/useStatistics'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useAppSelector } from '@store/hooks'
import useKyc from 'api/kyc/useKycInfo'

const PortfolioMenu = () => {
    const {user} = useAppSelector(state => state.user)

    console.log(user)
    const [cookies] = useCookies(["access_token"])

    const {mutate, isPending} = useUserStat({
        onSuccess: () => {

        },
        onError: () => {

        }
    })



    useEffect(()=> {
      mutate({
        token: cookies.access_token
      })
    })
  return (
    <div className='text-white portfolioMenu'>
       <PortfolioHeader/>

        <div className='max-w-5xl'>
            <div className='bg-red-0 flex flex-col gap-6 lg:flex-row my-5 justify-between items-center'>
                <p className='w-full max-w-md flex justify-between items-center'>
                <span className='text-gray-300 text-center md:text-left font-semibold text-xl'>Total Portfolio Balance</span>
                <span className='text-[28px] text-center md:text-left font-bold'>$645 000</span>
              
                </p>
                <p  className='w-full max-w-md flex justify-between items-center'>
                <span className='text-gray-300 font-semibold text-xl'>Total Portfolio Profit/Loss</span>
                <span className='text-[#1FBF75] text-[28px] font-bold'>+$5000</span>
            
                </p>
            </div>
           
        </div>
        <div className='w-full'>

            <div className="grid md:grid-cols-2 gap-10">
                <div className='w-full'>
                    <div className='w-full'>
                    <CardInfo/>  
                </div>
                <AssetSection/>

                </div>
                    <div className=' grid sm:grid-cols-2 gap-6'>
                        {investMentPerformanceData.map(item => (
                            <AssetCard 
                            value={item.value}
                            percentage={item.percentage}
                            investment={item.investment}/>

                        ))}
                        
                    </div>

            </div>

        </div>

        

    </div>
  )
}

export default PortfolioMenu