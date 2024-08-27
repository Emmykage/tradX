import React from 'react'
import './assetList.scss'
import { cryptoData } from '../../data/assetListData'


const AssetTable = () => {
  return (
    <div className="asset-list px-4 sm:px-6 lg:px-8 hover:border-gray-900">
    <div className="mt-4 flow-root">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full border border-gray-200  border-separate border-spacing-0 table-auto overflow-hidden">
            <thead className=' bg-[#6B727C33] rounded-lg text-white   overflow-hidden'>
              <tr className='  '>
                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-[#6B727C33] bg-opacity-75 py-3.5 pl-4 pr-3 text-center text-xs font-semibold  backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Asset name</th>
                <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50   bg-opacity-75 px-3 py-3.5 pr-3 text-center text-xs font-semibold backdrop-blur backdrop-filter">Current price of the asset</th>
                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-center text-xs font-semibold  backdrop-blur backdrop-filter sm:table-cell">Number of own assets</th>
                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold  backdrop-blur backdrop-filter lg:table-cell">Total value of the asset</th>
                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold  backdrop-blur backdrop-filter">Changes in the price</th>
                {/* <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
                  
            <tbody>
                {cryptoData.map(item => (

           
                
            <tr className=' '>
                <td className="my-2 bg-red-20 whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">

                <p className="font-medium  leading-5">{item.assetName} </p>
                </td>
                <td className="my-2 text-center  whitespace-nowrap border-b border-gray-200 hidden px-3 py-4 text-sm font-normal sm:table-cell capitalize">
                    {item.currentPrice}$

                </td>
                
                <td className="whitespace-nowrap  border-b border-gray-200 hidden px-3 py-3 text-sm  sm:table-cell text-center">{item.numberOfAssets}</td>
                <td className="whitespace-nowrap border-b border-gray-200 hidden px-3 py-3 lg:table-cell text-sm  font-normal text-center">{item.totalValueAsset}</td>

                <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm font-normal text-sm  text-center">{item.priceChange}</td>

                 </tr>

                    ))}

            </tbody>     
          </table>
        </div>     
      </div>
    </div>
  </div>
  )
}

export default AssetTable