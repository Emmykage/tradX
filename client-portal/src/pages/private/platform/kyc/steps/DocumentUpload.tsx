import React, { useState } from 'react'
import "../kyc.scss"
import FileInput from 'components/fileInput/fileInput'

const DocumnetUpload = () => {
  const [data, setData] = useState<{identity: {name: string}, address: {name: string}} | {} > ({})
  const [identityDoc, setIdentityDoc] = useState<FormData | null>(null)
  const [addressDoc, setAddressDoc] = useState<FormData | null>(null)
  const handleFileUpload = () => {
    console.log(identityDoc?.get("file"), "retrieved doc")
    
  }

  console.log(data, "uploaded")
  return (
    <div className='bg-[#152338] h-screen kyc-document flex justify-center items-center'>
      <div className='m-auto max-w-2xl border border-gray-900 bg-black-100'>
        <h3 className='text-gray-100 text-2xl leading-6 my-2'> Enter you KYC document </h3>
        <p className='text-[#A3A8B0] my-4'>You can upload passport, national ID, or driver's licence</p>


        <FileInput
        handleChange={(value: FormData) => setIdentityDoc(value)}        
        />

        <h3 className='text-2xl text-white my-5'>Proof of Address</h3>
        <p className='text-[#A3A8B0] text-base font-normal'>Please upload utility bill or bank statement. Date shouldn’t be later than last 3 months.</p>
        
        <FileInput
         handleChange={(value: FormData) => setAddressDoc(value)}
        />

        <div className='flex justify-between my-4'>
        <button className='border w-52 rounded-lg py-4 px-8'>
          back
        </button>
        <button
        onClick={handleFileUpload} 
        className='border w-52 border-gray-500 py-4 px-8 text-base text-white rounded-lg next'>
          next
        </button>
        </div>
    
        
        </div>

    </div>
  )
}

export default DocumnetUpload