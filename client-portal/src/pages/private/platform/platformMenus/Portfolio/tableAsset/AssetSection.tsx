import React from 'react'
import { investmentPortfolio } from '../data/assetData'

const AssetSection = () => {
  return (
    <div className='portfolioTable mt-3'>
                <div className='grid grid-cols-6 mt-3 overview-table-header'>
                    <span>Asset name</span>
                    <span>Current balance</span>
                    <span>Profit/ Loss</span>
                    <span>Number of shares</span>
                    <span>initial price</span>
                    <span>Current price</span>
                </div>

                
                {investmentPortfolio.map((item: any) => (
                    <>
                    <p className='text-white/90 text-sm my-3'>{item.class}</p>           


                    {item.assets.map((asset: any) => (

                     <div key={asset.assetName} className='grid grid-cols-6 body-tab'>
                     <span>{asset.assetName}</span>
                     <span> {asset.currentBalance}</span>
                     <span>{asset.profitLoss}</span>
                     <span>{asset.numberOfShares}</span>
                     <span>{asset.initialPrice}</span>
                     <span>{asset.currentPrice}</span>
                 </div>
                    ))}
                    
                    </>
                ))}




                
                <div></div>

            </div>
  )
}

export default AssetSection