import React from 'react'
import './tradingExperience.scss'
import graphVector from '../../../../assets/trading/Vector.png'
import { GraphIcon, TheGraphFlag } from 'assets/icons'
const CopyTrade = ({image, title, text} : {image?: string, title?: string, text?: string}) => {
  return (
    <div className='trading-experience'>
        <div className='exp-info'>
            <h3>{title}</h3>
            <p>
                {text} </p>
            <button>Join Now</button>

        </div>
        <div className='exp-graph'> 
            <img src={image} alt="user image" className='user' />

            <div className='graph-bg'>
                <GraphIcon/>

            </div>

            <img src={graphVector} alt="" className='vect'  />


        

        </div>
        
    </div>
  )
}

export default CopyTrade