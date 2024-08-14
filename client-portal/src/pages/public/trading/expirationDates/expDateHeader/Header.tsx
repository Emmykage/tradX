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
    <div className='expDateHeader'>
      <div>

        <h1>Expiration Dates</h1>
     
        <p>Futures instruments will be rolled over on the expiration dates as per the table below.</p>
        <span>Total Assets: 491</span>
      </div>
      

      

    </div>
  )
}

export default Header