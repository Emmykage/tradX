import React from 'react'
import nonVerifiedCard from '../../../../../../../assets/portfolio/verify-status.png'
import VerifiedCard from '../../../../../../../assets/portfolio/Vector.png'
const VerificationStatus = () => {
  return (
    <div className="w-max mt-4">

    <div>
      <h3 className="text-base">KYC Verification Status</h3>
      <h4 className="text-gray-400 font-semibold text-sm">User</h4>
      <p className="text-sm">Hdjendfwenfoijefhewfoihef843498_294yr87f</p>

    </div>
    <div className="mt-4">
      <p className="text-gray-500">Account number</p>
      <p className="font-normal">348765203845923745934059</p>
    </div>

    <div>
      <p className="text-gray-500">Current KYC status</p>
      <p className="text-green-500 text-sm">Verified</p>

      <div className="pt-3 flex gap-3">
      <img src={VerifiedCard} alt="" className="bg-[#0094FF] p-3 rounded-xl h-16 w-14" />

      <img src={nonVerifiedCard} alt="" className="bg-gray-8 p-3 rounded-xl h-16 w-14 bg-white/40" />
      </div>


    </div>
    
    </div>
  )
}

export default VerificationStatus