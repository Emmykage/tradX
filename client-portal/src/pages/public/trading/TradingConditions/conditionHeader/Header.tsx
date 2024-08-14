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
    <div className='conditionHeader'>
      <div>

        <h1>Trading Conditions</h1>
     
        <p>You can trade a wide range of CFD instruments, in numerous asset classes, at markets.com, the home of online CFD trading. Trade with our easy-to-use, customisable platform and discover a world of opportunities.</p>
      </div>
      <div className='dropdown'>
        <Select 
        className='conditionSelection'
        onChange={handleChange}
        defaultValue="any"
        style={{minWidth: 190}}
        // suffixIcon={<DropdownIcon1 />}
        // popupClassName="assetsDropdown"

        options={[
          {value: "any", label: "Select Platform"}
        ]}
        />
        
        <Select 
        className='conditionSelection'
        onChange={handleChange}
        defaultValue="any"
        style={{minWidth: 190}}
        // suffixIcon={<DropdownIcon1 />}
        // popupClassName="assetsDropdown"

        options={[
          {value: "any", label: "Select Asset Category"}
        ]}
        />
        
      </div>

      <div className='searchCon'>
      <SearchBar className="setRadius"
              placeholder="Search by asset name"
              />


      </div>

    </div>
  )
}

export default Header