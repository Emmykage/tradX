import React, { useState } from 'react'
import "../kyc.scss"
import FileInput from 'components/fileInput/fileInput'
import { useAppSelector } from '@store/hooks'
import { toast } from 'react-toastify'
import useKycFilesPostForm from 'api/kyc/useKycFilesPost'
import { useCookies } from 'react-cookie'
interface documentProps {
  handleNext: (dir: string) => void
}

const DocumnetUpload: React.FC<documentProps>  = ({handleNext}) => {
  const [data, setData] = useState<{identity: {name: string}, address: {name: string}} | {} > ({})
  const [identityDoc, setIdentityDoc] = useState<FormData | null>(null)
  const [addressDoc, setAddressDoc] = useState<FormData | null>(null)
  const [cookies] = useCookies(["access_token"]);

  const {kyc} = useAppSelector(state => state.userBio)
  const {user} = useAppSelector(state => state.user)
  // const navigate = useNavigate() 
  console.log(kyc, "view user")


  const { mutate, isPending } = useKycFilesPostForm({
    onSuccess: () => {
      toast.success(
        "Your document have been uploaded successsfully."
      );
      handleNext("next")

    },
    onError: (error) => {
      console.error("fetching add file Kyc error", error);
    },
    });


  const handleFileUpload = () => {
    if (!kyc) {
      toast.error("KYC data is missing. Cannot upload files.");
      return;
    }
    if (identityDoc && addressDoc) {
      identityDoc.append("desc", "passport");
      identityDoc.append("kyc", kyc.toString());
  
      addressDoc.append("desc", "address");
      addressDoc.append("kyc", kyc.toString() );
  
      mutate({
        token: cookies.access_token,
        identityDoc,
        addressDoc
      });
  
      console.log(cookies.access_token);
    }
  };
  
 


  console.log("fetchedUser", user)

  console.log(data, "uploaded")
  return (
    <div className='bg-[#152338] formContainer px-5  kyc-document flex justify-center items-center'>
      <div className='m-auto w-full border border-gray-900 bg-black-100'>
        <h3 className='text-gray-100 font-semibold text-2xl leading-6 my-2'> Enter you KYC document </h3>
        <p className='text-[#A3A8B0] my-4'>You can upload passport, national ID, or driver's licence</p>


        <FileInput
        handleChange={(value: FormData) => setIdentityDoc(value)}        
        />

        <h3 className='text-2xl font-semibold text-white my-3'>Proof of Address</h3>
        <p className='text-[#A3A8B0] text-base font-normal my-3'>Please upload utility bill or bank statement. Date shouldn’t be later than last 3 months.</p>
        
        <FileInput
         handleChange={(value: FormData) => setAddressDoc(value)}
        />

        <div className='flex justify-between my-6'>
          <button
          onClick={()=> handleNext("prev")}
          
          className='border back w-52 rounded-lg py-4 px-8 back'>
            Back
          </button>
          <button
          onClick={handleFileUpload} 
          className='border w-52 border-gray-500 py-4 px-8 text-base text-white rounded-lg next'>
            Next
          </button>
        </div>
    
        
        </div>

    </div>
  )
}

export default DocumnetUpload