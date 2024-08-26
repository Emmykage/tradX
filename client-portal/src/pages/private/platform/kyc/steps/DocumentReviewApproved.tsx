import React from 'react'
import FileCard from '../components/docCard/FileCard'
const DocumentReviewApprove = () => {
  return (
    <div className='max-w-4xl px-5 formContainer doc-review'>
        <h5 className='text-2xl text-white '>Congrats! You are ready to start trading! </h5>
        <p className='text-[#A3A8B0] my-4 text-base '>Our team reviewed your documents and everything is seems great! Go on and start trading.</p>

        <div className=' my-5'>
            <div className='flex gap-4 justify-between items-start mb-4'>
                <FileCard
                fileName="Drivers Licence"
                fileSize={300}
                status={"approved"}
                />
                <span className='approved'>Rejected</span>
            </div>
            <div>
                <span className='text-[#0094FF]'>Change file</span>
            </div>
        </div>


        <h5 className='text-2xl text-white '>Proof of Address</h5>
        <p className='text-[#A3A8B0] my-4 text-base '>Please upload utility bill or bank statement. Date shouldn’t be later than last 3 months.</p>


        <div className=' my-5'>
            <div className='flex gap-4 justify-between items-start mb-4'>
                <FileCard
                fileName="Drivers Licence"
                fileSize={300}
                status={"approved"}
                />
                <span className='approved'>Rejected</span>
            </div>
        <div>
            <span className='text-[#0094FF]'>Change file</span>
        </div>
        </div>

        <div  className='md:max-w-[160px] ml-auto'>
            <button> Go to your dashboard</button>
        </div>

       
    </div>
  )
}

export default DocumentReviewApprove