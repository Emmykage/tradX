import React from 'react'
import FileCard from '../components/docCard/FileCard'
import KYCButton from '../components/Button'
import { useNavigate } from 'react-router-dom'

const DocumentReviewPending = () => {
    const navigate = useNavigate()
  return (
    <div className='max-w-4xl px-5 formContainer doc-review'>
        <h5 className='text-2xl text-white '>Thanks for uploading your documents.</h5>
        <p className='text-[#A3A8B0] my-4 text-base '>We will review them and inform you when any change happens. You can view
        your application status here or on your dashboard.</p>

        <div className=' my-5'>
            <div className='flex gap-4 justify-between items-start mb-4'>
                <FileCard
                fileName="Drivers Licence"
                fileSize={300}
                status={"pending"}
                />
                <span className='pending'>Pending</span>
            </div>
        <div>
            <span className='text-[#0094FF]'>Change file</span>
        </div>
        </div>

        <h5 className='text-2xl text-white '>Proof of Address</h5>
        <p className='text-[#A3A8B0] my-4 text-base '>Please upload utility bill or bank statement. Date shouldn’t be later than last 3 months..</p>


        <div className=' my-10'>
            <div className='flex gap-4 justify-between items-start mb-4'>
                <FileCard
                fileName="Drivers Licence"
                fileSize={300}
                status={"pending"}
                />
                <span className='pending'>Pending</span>
            </div>
        <div>
            <span className='text-[#0094FF]'>Change file</span>
        </div>
        </div>

        <div  className='md:max-w-[160px] ml-auto'>
            <button onClick={()=> navigate("/platform")}>
                Go to dashboard
            </button>
        </div>

        {/* <div className='flex justify-between items-start my-5'>
            <FileCard
            fileName="Drivers Licence"
            fileSize={300}
            status={"rejected"}

            />

            <span className='rejected'>Rejected</span>
        </div> */}
        
        
    </div>
  )
}

export default DocumentReviewPending