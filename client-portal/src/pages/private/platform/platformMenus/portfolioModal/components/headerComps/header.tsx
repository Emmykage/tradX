import React from 'react'
import CardRegular from '../cards/Cards'
import circleChart from "../../../../../../../assets/portfolio/circle-graph.png"
import IndicatorBox from '../indicator/IndicatorBox'
import { DownArrowIcon, UpArrowIcon } from 'assets/icons'
import downloadIcon from  "../../../../../../../assets/portfolio/download.png"

const HeaderComponents = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row gap-3 flex- justify-between'>
            <CardRegular
                desc="Total Portfolio Value"
                amount={4500}
                
                />
            <div className='flex items-center justify-between basis-[60%]  bg-gray-100/10 px-4 py-2 rounded-lg '>
                <div className='bg-red-'>
                    <p className='text-sm font-normal'>Distribuion of Assets</p>
                    <div>
                        {/* <d?iv> */}

                        <div className='flex gap-5'>
                            <IndicatorBox color='bg-green-600'/>
                            
                            <p className='text-xs fomt-normal'>89% Cryptocorrencies</p>
                        </div>
                        
                        <div className='flex mt-1 gap-5'>
                            <IndicatorBox/>

                            <p>11% Stocks</p>

                        </div>
                        {/* </di?v> */}

                    </div>

                </div>


                <div>
                    <img src={circleChart}  alt="" />

                </div>
            </div>
    </div>
    <div className='flex flex-col sm:flex-row md:gap-10'> 
        <div className='flex flex-1 flex-col md:flex-row items-center justify-between bg-gray-100/10 rounded-lg px-4 py-4 my-4'>
            <div className=''>
                <p className='text-sm'>Download PDF File</p>
                <div className='flex items-center gap-5'>
                <span>Portfolio</span><DownArrowIcon/>

                </div>

            </div>
            <img src={downloadIcon} alt="" className='bg-gray-100/10 p-1 rounded h-8' />


        </div>

        <div className=' flex-1 items-center justify-between bg-gray-100/10 rounded-lg px-4 py-4 my-4'>
            <div className=''>
                <p>Account Balance</p>
                <div className='flex items-center gap-5'>
                    <div className='flex item-center gap-10  w-full justify-between'>

                        <div className='basis-[60%] gap-[40%] flex basis-[60%] items-center'><UpArrowIcon/> 000 </div>  <span className='flex items-center basis-[40%] justify-between'> <DownArrowIcon/> USD</span>

                    </div>

                </div>

            </div>


        </div>

    </div>
   

    </div>
  )
}

export default HeaderComponents