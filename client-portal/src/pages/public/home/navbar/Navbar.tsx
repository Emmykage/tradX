import './navbar.scss'
import TradxLogo from '../../../../assets/home/tradxlogo.png'
import LangIcon from '../../../../assets/home/langIcon.png'


import { ArrowDownOS, MenuBar, MenuCloseIcon, SearchIcon } from 'assets/icons'
import { useState } from 'react'
const Navbar = () => {
    const [toggleLanguageSelector,setToggleLanguageSelector] = useState(false)
    const [toggleMobileNav,setToggleMobileNav] = useState(false)
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
                <div className='languageButton' onClick={()=>setToggleLanguageSelector(!toggleLanguageSelector)}>
                    <img src={LangIcon} alt="" />
                    <h2>En</h2>
                    <ArrowDownOS height="15" width="10"/>
                </div>
                <div className={`languageDropDownMenu ${toggleLanguageSelector ? 'showLanguageDropDown': 'closeLanguageDropDown'}`}>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
                    <h2>English</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
                    <h2>Spanich</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
                    <h2>Arabic</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
                    <h2>Mandarin</h2> 
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
                    <img src={LangIcon} alt="" />
                    <h2>En</h2>
                    <ArrowDownOS height="15" width="10"/>
                </div>
                <div className={`languageDropDownMenu ${toggleLanguageSelector ? 'showLanguageDropDown': 'closeLanguageDropDown'}`}>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
                    <h2>English</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
                    <h2>Spanich</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
                    <h2>Arabic</h2> 
                    </div>
                    <div className='languageValue'>
                    <img src={LangIcon} alt="" />
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