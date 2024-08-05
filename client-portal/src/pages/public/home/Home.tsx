import { useEffect, useState } from 'react'
import CheckCurrency from './checkCurrency/CheckCurrency'
import './home.scss'
import Landing from './landing/Landing'
import LeadPlatform from './leadPlatform/LeadPlatform'
import Navbar from './navbar/Navbar'
import OnePlatformOptions from './onePlatformOptions/OnePlatformOptions'

const Home = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [geoInfo, setGeoInfo] = useState<{countryCode:string}>()
  const [countryCode, setCountryCode] = useState('EN')
  const [loading, setLoading] = useState(false)

  const getVisitorIp = async()=>{
    setLoading(true)
    try {
      const response = await fetch('https://api.ipify.org')
      const data   = await response.text()
      console.log(data);
      setIpAddress(data)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  const fetchIpInfo = async ()=>{
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`)
      const data = await response.json()
      setGeoInfo(data)
      setLoading(false)
    } catch (error) {
      setCountryCode('EN')
      console.log(error);
      setLoading(false)
    }
  }
  useEffect(()=>{
    getVisitorIp()
  },[])

  useEffect(()=>{
    fetchIpInfo()
    if(geoInfo){
      console.log(geoInfo?.countryCode);
      setCountryCode(geoInfo?.countryCode)
    }
    console.log(geoInfo);
  },[ipAddress])


  
  return (
    <div className='homeContainer'>
        <Navbar countryCode={countryCode} setCountryCode={setCountryCode} loading={loading}/>
        <h1>{geoInfo.country}</h1>
        <Landing/>
        <CheckCurrency/>
        <LeadPlatform/>
        <OnePlatformOptions/>
    </div>
  )
}

export default Home