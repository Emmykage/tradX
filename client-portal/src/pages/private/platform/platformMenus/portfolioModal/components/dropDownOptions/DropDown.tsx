import { DownArrowIcon } from 'assets/icons'
import React, { useState } from 'react'
import './dropdown.scss'

interface dropDownProps {
    options: string;
    children: React.ReactNode;
    }

const DropDownOptions: React.FC<dropDownProps> = ({options, children}) => {
    const [toggleDropDown, setToggleDropDown] = useState<boolean>(false)
  return (
    <div className='settings-dropdown'>
        <div className='bg-[#0C3B6499] h-12  flex items-center justify-between px-6 rounded-xl my-3
'>
            <p>{options}</p>
            <span onClick={() =>  setToggleDropDown(prev => !prev)}>
            <DownArrowIcon/>

            </span>
        </div>

        <div className={`${toggleDropDown ? "let-down" : "let-up"}  dropdown-options`}>
                {children}
                hey

        </div>
    </div>
  )
}

export default DropDownOptions