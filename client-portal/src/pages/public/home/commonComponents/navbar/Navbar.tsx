import './navbar.scss'
import TradxLogo from '../../../../../assets/home/tradxlogo.png'

import { MouseEvent } from 'react';
import { ArrowDownOS, MenuBar, MenuCloseIcon, SearchIcon } from 'assets/icons'
import { useEffect, useRef, useState } from 'react'
import { localFlagHandler } from 'i18n/helpers'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSignInTab } from '@store/slices/global'
interface NavbarProps {
    countryCode: string;
    setCountryCode: (prevCountryCode:string)=>void;
    loading: boolean;
}
const Navbar= () => {
    const [ipAddress, setIpAddress] = useState('');
    const [geoInfo, setGeoInfo] = useState<{countryCode:string}>()
    const [countryCode, setCountryCode] = useState('EN')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()
  
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

    const [toggleLanguageSelector,setToggleLanguageSelector] = useState(false)
    const [toggleMobileNav,setToggleMobileNav] = useState(false)
    console.log(localFlagHandler(countryCode.toLocaleLowerCase()))
    console.log(countryCode.toLocaleLowerCase());
    const languageSelectorRef = useRef()

    const handleClickOutside = (event: MouseEvent<Document>) => {
      if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node)) {
        setToggleLanguageSelector(false);
      }
    };
    
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
  return (
    <div className='navbarContainer'>
        {/* left side nav */}
        <div className='leftSideNav'>
            <img src={TradxLogo} alt="" />
            <div className='navContent'>
                <span>Markets</span>
                <span>Trading</span>
                <span>Learn</span>
            </div>
        </div>
        {/* right side navbar */}
        <div className='rightSideNav'>
            {/* search */}
            <div className='navSearchContainer'>
            <SearchIcon height="16" width="16"/>
            <input type="text" placeholder='Search'/>
            </div>

           
            {/* language selector */}
            <div className='languageSelectorContainer'>
                {loading ? (
                    <div>
                    <Spin/>
                    </div>
                ): (
                    <div className='languageButton' onClick={()=>setToggleLanguageSelector(!toggleLanguageSelector)}>
                    <img src={localFlagHandler(countryCode.toLocaleLowerCase())} alt="" />
                    <h2>{countryCode}</h2>
                    <ArrowDownOS height="15" width="10"/>
                </div>
                )}
                
                <div ref={languageSelectorRef} className={`languageDropDownMenu ${toggleLanguageSelector ? 'showLanguageDropDown': 'closeLanguageDropDown'}`}>
                    <div className='languageValue' onClick={()=>{
                        setCountryCode('EN')
                        setToggleLanguageSelector(false)
                        }}>
                    <img src={localFlagHandler('en')} alt="" />
                    <h2>English</h2> 
                    </div>
                    <div className='languageValue' onClick={()=>{
                        setCountryCode('ES')
                        setToggleLanguageSelector(false)
                        }}>
                    <img src={localFlagHandler('es')} alt="" />
                    <h2>Spanish</h2> 
                    </div>
                    <div className='languageValue' onClick={()=>{
                        setCountryCode('JP')
                        setToggleLanguageSelector(false)

                    }}>
                    <img src={localFlagHandler('jp')} alt="" />
                    <h2>Japanese</h2> 
                    </div>
                    <div className='languageValue' onClick={()=>{
                        setCountryCode('AR')
                        setToggleLanguageSelector(false)
                        }}>
                    <img src={localFlagHandler('ar')} alt="" />
                    <h2>Arabic</h2> 
                    </div>
                    <div className='languageValue' onClick={()=>{
                        setCountryCode('HI')
                        setToggleLanguageSelector(false)
                        }}>
                    <img src={localFlagHandler('hi')} alt="" />
                    <h2>India</h2> 
                    </div>
                </div>
            </div>
            <button className='primaryButton'  onClick={()=>{
              dispatch(setSignInTab('1'))
              navigate('/signIn')
            }}>Login</button>
            <button className='secondaryButton'  onClick={()=>{
              dispatch(setSignInTab('2'))
              navigate('/signIn')
            }}>Sign Up</button>
        </div>
        <div className='menuBarButton' onClick={()=>setToggleMobileNav(true)}>
            <MenuBar height="30px" width="30px"/>
        </div>
        <div className={`${toggleMobileNav ? 'mobileNavOpen':'mobileNavClose'}`}>
            <div className='menuCloseIcon'  onClick={()=>setToggleMobileNav(false)}>
                <MenuCloseIcon/>
            </div>
            <div className='mobileNavLogo'>
             <img src={TradxLogo} alt="" />
            </div>

             <div className='mobileNavContent'>
                <span>Markets</span>
                <span>Trading</span>
                <span>Learn</span>
            <div className='mobileBottomNav'>
            {/* search */}
            <div className='navSearchContainer'>
            <SearchIcon height="13" width="13"/>
            <input type="text" placeholder='Search'/>
            </div>
            {/* language selector */}
            <div className='languageSelectorContainer'>
                <div className='languageButton' onClick={()=>setToggleLanguageSelector(!toggleLanguageSelector)}>
                    <img src={localFlagHandler('en')} alt="" />
                    <h2>En</h2>
                    <ArrowDownOS height="15" width="10"/>
                </div>
                <div className={`languageDropDownMenu ${toggleLanguageSelector ? 'showLanguageDropDown': 'closeLanguageDropDown'}`}>
                    <div className='languageValue'>
                    <img src={localFlagHandler('en')} alt="" />
                    <h2>English</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={localFlagHandler('es')} alt="" />
                    <h2>Spanich</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={localFlagHandler('ar')} alt="" />
                    <h2>Arabic</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={localFlagHandler('jp')} alt="" />
                    <h2>Japanese</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={localFlagHandler('hi')} alt="" />
                    <h2>Mandarin</h2> 
                    </div>
                </div>
            </div>
            <button className='primaryButton' onClick={()=>{
              dispatch(setSignInTab('1'))
              navigate('/signIn')
              setToggleMobileNav(false)
            }}>Login</button>
            <button className='secondaryButton' onClick={()=>{
              dispatch(setSignInTab('2'))
              navigate('/signIn')
              setToggleMobileNav(false)

            }}>Sign Up</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar