import { BoltIcon, StarFavouriteIcon } from 'assets/icons'
import React from 'react'

import './ctabanner.scss'
import BarIcon  from "../../../../assets/trading/majocamelo_bar_chart_3d_icon_black_6ec4c2c2-17aa-4f4c-9610-7defe9438f35-removebg-preview 1.png"
import RedGiftIcon from "../../../../assets/trading/majocamelo_Red_icon_gift_box_3d_cinema_4d_rounded_corner_77e04dfc-3a3b-4733-84ae-bc5912b8b3db-removebg-preview 1.png"
import underlayBg from "../../../../assets/trading/majocamelo_Red_icon_gift_box_3d_cinema_4d_rounded_corner_77e04dfc-3a3b-4733-84ae-bc5912b8b3db-removebg-preview 1.png"
const CTABanner = () => {
  return (
    <div className='callToAction'>
        <div className='left'>
            <h3>Tradex Private Circle</h3>
                <div className='cta-icon-info'>


                        <div className=''>
                            <BoltIcon/>
                            <span>Bonuses</span>
                        </div>

                        <div className=''>
                            <StarFavouriteIcon/>
                            <span>Exclusive Benefits</span>
                        </div>

                </div>

                <button> Enter  </button>
            </div>
            <div className='bg-sect'>
                <div className='underlay'></div>
                <img src={BarIcon} alt="" className='icon-2' />
                <img src={RedGiftIcon} alt=""  className='icon-1'/>

            </div>
    </div>
  )
}

export default CTABanner