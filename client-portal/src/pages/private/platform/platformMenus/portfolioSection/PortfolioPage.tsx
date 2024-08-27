import React from 'react'
import CardRegular from '../portfolioModal/components/cards/Cards'
import HeaderComponents from '../portfolioModal/components/headerComps/header'
import CapitalInformation from '../portfolioModal/components/capitalInformation/CapitalInformation'
import Distributions from '../portfolioModal/components/distribution/Distributions'
import AssetList from '../portfolioModal/components/assetList/AssetList'

const PortfolioPage = () => {
  return (
    <div className='h-full bg-[#1F324D66] p-8 rounded-lg overflow-y-auto'>
        <HeaderComponents/>
        <CapitalInformation/>

        <Distributions/>
        <AssetList/>

        
    </div>
  )
}

export default PortfolioPage