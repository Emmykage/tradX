import CheckCurrency from './checkCurrency/CheckCurrency'
import './home.scss'
import Landing from './landing/Landing'
import LeadPlatform from './leadPlatform/LeadPlatform'
import Navbar from './navbar/Navbar'
import OnePlatformOptions from './onePlatformOptions/OnePlatformOptions'

const Home = () => {
  return (
    <div className='homeContainer'>
        <Navbar/>
        <Landing/>
        <CheckCurrency/>
        <LeadPlatform/>
        <OnePlatformOptions/>
    </div>
  )
}

export default Home