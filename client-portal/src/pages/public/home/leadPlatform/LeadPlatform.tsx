import './leadPlatform.scss'
import React, { PropsWithChildren } from 'react';

import LicenceIcon from '../../../../assets/home/leadPlatform/licence.png'
import BanksIcon from '../../../../assets/home/leadPlatform/Banks.png'
import CustomerSupportIcon from '../../../../assets/home/leadPlatform/customerSupport.png'
import SecurityIcon from '../../../../assets/home/leadPlatform/security.png'
import TransparentIcon from '../../../../assets/home/leadPlatform/transparent.png'
import UnparallelIcon from '../../../../assets/home/leadPlatform/unparallel.png'

interface LeadPlatformCardProps {
    title: string;
    imgSrc: string;
}

export const LeadPlatformCard: React.FC<PropsWithChildren<LeadPlatformCardProps>> = ({ title, imgSrc }) => {

    
    return (
      <div className="leadPlatformCard">
        <img src={imgSrc} alt="" />
        <p>{title}</p>
      </div>
    );
}

const LeadPlatform: React.FC = () => {
    const leadTradingPlatformData = [
        {
            title:"Highly regulated & licensed",
            imgSrc:LicenceIcon
        },
        {
            title:"Instant Deposit & Withdrawal",
            imgSrc:BanksIcon
        },
        {
            title:"4/7 Customer Support",
            imgSrc:CustomerSupportIcon
        },
        {
            title:"Transparent Fees",
            imgSrc:TransparentIcon
        },
        {
            title:"Unparallel trading conditions",
            imgSrc:UnparallelIcon
        },
        {
            title:"End To end Security",
            imgSrc:SecurityIcon
        },
    ]
  return (
    <div className='leadPlatformContainer'>
        <h2>Lead with our Trading Platform</h2>
        <div className="leadPlatformCardContainer">
            {
                leadTradingPlatformData.map((item)=>(

                    <LeadPlatformCard title={item.title} imgSrc={item.imgSrc}/>
                ))
            }
        </div>
    </div>
  )
}

export default LeadPlatform