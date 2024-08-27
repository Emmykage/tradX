import React from 'react'
import CardRegular from '../portfolioModal/components/cards/Cards'
import HeaderComponents from '../portfolioModal/components/headerComps/header'
import CapitalInformation from '../portfolioModal/components/capitalInformation/CapitalInformation'
import Distributions from '../portfolioModal/components/distribution/Distributions'
import AssetList from '../portfolioModal/components/assetList/AssetList'

const PortfolioPage = () => {
  return (
    <div>
        <HeaderComponents/>
        <CapitalInformation/>

        <Distributions/>
        <AssetList/>

        
    </div>
  )
}

export default PortfolioPage