import React from 'react'
import "./header.scss"
import { Select } from 'antd'
import { DropdownIcon1 } from 'assets/icons'
import SearchBar from 'components/searchBar/SearchBar'
// import { DropdownIcon } from 'assets/icons'

const Header = () => {
  const handleChange = () => {

  }
  return (
    <div className='cfdAssetHeader'>
      <div>

        <h1>CFD Asset List</h1>
     
        <p>You can trade a wide range of CFD instruments, in numerous asset classes, at markets.com, the home of online CFD trading. Trade with our easy-to-use, customisable platform and discover a world of opportunities.</p>
        <span>Total Assets: 491</span>

      </div>
      <div className='dropdown'>
              
      </div>

     
    </div>
  )
}

export default Header