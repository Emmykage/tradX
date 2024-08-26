import { Modal } from 'antd'
import React, { Component } from 'react'
import userImg from "../../assets/userP.png"
import './portfolioModal.scss'

const PortfolioModal = () => {

    const sideItems = [
        {name: "personal_info", label: "Personal Inf", component:  "hey"},
        {name: "trading", label: "Trading", component:  "hey"},
        {name: "portfolio", label: "Portfolio", component:  "hey"},
        {name: "settings", label: "Settings", component:  "hey"},
    ]


    const bottomItems = [
        {name: "change_account", label: "Change Account", component:  "hey"},
        {name: "log_out", label: "Log Out", component:  "hey"},
        {name: "help", label: "Help", component:  "hey"}

    ]
  return (
        
        <Modal
     rootClassName='portfolioProfile'
     open={false}
     height={800}
     
     
    //  onOk={() => setModalOpen(false)}
    //  onCancel={() => setModalOpen(false)}
     footer={null}
     width={800}
     maskClosable={true}
     centered
     >
        <div className='portfolio grid'>
            <div className='px-5 py-16 bg-[#0f1a2b] rounded-2xl b0'>

                <div className=' '>
                    <img src={userImg} alt='' className='w-36 h-36 rounded-full bg-red-200 block m-auto' />
                    <p className='my-4 text-center'>User</p>
                    <p className='text-blue-600'>dfdfsdfdsfdjlsjl.....fdfdfdf</p>
                </div>
                <ul className='my-10 '>
                    {sideItems.map(items => (
                                        
                        <li className='my-5 py-2 px-4 rounded-2xl text-white  font-medium'><span className='text-sm font-medium'>{items.label} </span></li>


                    ))}

                
                              
                </ul>


                <ul className='my-10 text-center mt-24'>
                {bottomItems.map(items => (
                                        
                        <li className='my-5 py-2 px-4 rounded-lg text-white'><span className='text-sm font-medium'>{items.label} </span></li>
                
                
                      ))}     
                </ul>
            </div>
            <div className='bg-gray-900'></div>

        </div>

    </Modal>
  )
}

export default PortfolioModal