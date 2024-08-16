import { MouseEvent } from 'react';
import { ArrowDownOS } from 'assets/icons';
import { useEffect, useRef, useState } from 'react';
import { localFlagHandler } from 'i18n/helpers';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './languageSelectorDropDown.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    countryCode: string;
    setCountryCode: (prevCountryCode:string)=>void;
    loading: boolean;
}
const LanguageSelectorDropDown = () => {
    const { t, i18n } = useTranslation();
    const [ipAddress, setIpAddress] = useState('');
    const [geoInfo, setGeoInfo] = useState<{countryCode:string}>()
    const [countryCode, setCountryCode] = useState('EN')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const dispatch = useDispatch()
  
    const getVisitorIp = async()=>{
      setLoading(true)
      try {
        const response = await fetch('https://api.ipify.org')
        const data   = await response.text()
        setIpAddress(data)
      } catch (error) {
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
        setCountryCode('EN');
        setLoading(false)
      }
    }
    useEffect(()=>{
      getVisitorIp()
    },[])
  
    useEffect(()=>{
      fetchIpInfo()
      if(geoInfo){
        setCountryCode(geoInfo?.countryCode)
      }
    },[ipAddress])

    const [toggleLanguageSelector,setToggleLanguageSelector] = useState(false)
    const languageSelectorRef = useRef()

    const handleClickOutside = (event: MouseEvent<Document>) => {
      if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node)) {
        setToggleLanguageSelector(false);
      }
    };

    const onLanguageChange = (lang = "EN") => {
        setCountryCode(lang)
        setToggleLanguageSelector(false)
        i18n.changeLanguage(lang.toLocaleLowerCase());
    };
    
    useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);

    return (
        <div className='languageSelectorContainer'>
            {loading ? (
                <div>
                <Spin/>
                </div>
            ): (
                <div className='languageButton' onClick={()=>setToggleLanguageSelector(!toggleLanguageSelector)}>
                <img src={localFlagHandler(countryCode.toLocaleLowerCase())} alt="" />
                <h2 className="text-white">{countryCode}</h2>
                <ArrowDownOS height="15" width="10"/>
            </div>
            )}
            
            <div ref={languageSelectorRef} className={`languageDropDownMenu ${toggleLanguageSelector ? 'showLanguageDropDown': 'closeLanguageDropDown'}`}>
                <div className='languageValue' onClick={()=>{
                    onLanguageChange('EN')
                    }}>
                <img src={localFlagHandler('en')} alt="" />
                <h2>English</h2> 
                </div>
                <div className='languageValue' onClick={()=>{
                    onLanguageChange('ES')
                    }}>
                <img src={localFlagHandler('es')} alt="" />
                <h2>Spanish</h2> 
                </div>
                <div className='languageValue' onClick={()=>{
                    onLanguageChange('JA')

                }}>
                    <img src={localFlagHandler('jp')} alt="" />
                    <h2>Japanese</h2> 
                </div>
                <div className='languageValue' onClick={()=>{
                    onLanguageChange('AR')
                }}>
                    <img src={localFlagHandler('ar')} alt="" />
                    <h2>Arabic</h2> 
                </div>
                <div className='languageValue' onClick={()=>{
                    onLanguageChange('HI')
                }}>
                <img src={localFlagHandler('hi')} alt="" />
                <h2>India</h2> 
                </div>
            </div>
        </div>
    );
}

export default LanguageSelectorDropDown;