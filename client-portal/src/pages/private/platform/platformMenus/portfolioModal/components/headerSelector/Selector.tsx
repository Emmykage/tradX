import { Select } from 'antd'
import React from 'react'
import './select.scss'
import icon from '../../../../../../../assets/portfolio/Ellipse 41.png'

interface selectorProps {
    option: any
}

const Selector = () => {
    const {Option} = Select
  return ( 
    <Select className='notify-selector'
    defaultValue="label1">

        <Option value="value1">
            <img src={icon} alt="" />
            
         </Option>
    </Select>
   

    

  )
}

export default Selector