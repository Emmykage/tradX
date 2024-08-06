import './navbar.scss'
import TradxLogo from '../../../../assets/home/tradxlogo.png'
import ENIcon from '../../../../assets/home/langicon.png'




import { ArrowDownOS, MenuBar, MenuCloseIcon, SearchIcon } from 'assets/icons'
import { useEffect, useRef, useState } from 'react'
import { localFlagHandler } from 'i18n/helpers'
import { Spin } from 'antd'
interface NavbarProps {
    countryCode: string;
    setCountryCode: (prevCountryCode:string)=>void;
    loading: boolean;
}
const Navbar:React.FC<NavbarProps>= ({countryCode ,setCountryCode,loading}) => {
    const [toggleLanguageSelector,setToggleLanguageSelector] = useState(false)
    const [toggleMobileNav,setToggleMobileNav] = useState(false)
    console.log(localFlagHandler(countryCode.toLocaleLowerCase()))
    console.log(countryCode.toLocaleLowerCase());
    const languageSelectorRef = useRef()
    const handleClickOutside = (event) => {
        if (languageSelectorRef.current && !languageSelectorRef.current?.contains(event.target)) {
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
            <button className='primaryButton'>Login</button>
            <button className='secondaryButton'>Sign Up</button>
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
                    <img src={ENIcon} alt="" />
                    <h2>En</h2>
                    <ArrowDownOS height="15" width="10"/>
                </div>
                <div className={`languageDropDownMenu ${toggleLanguageSelector ? 'showLanguageDropDown': 'closeLanguageDropDown'}`}>
                    <div className='languageValue'>
                    <img src={ENIcon} alt="" />
                    <h2>English</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={ENIcon} alt="" />
                    <h2>Spanich</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={ENIcon} alt="" />
                    <h2>Arabic</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={ENIcon} alt="" />
                    <h2>Mandarin</h2> 
                    </div>
                </div>
            </div>
            <button className='primaryButton'>Login</button>
            <button className='secondaryButton'>Sign Up</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar