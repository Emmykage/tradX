import { Form, Button, Checkbox, Select, DatePicker } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { GlobalStates } from "@store/slices/global";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { countries } from "../data/countries";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import KYCButton from "../components/Button";
import DateSelection from "../components/DateSelection";
import useVerification from "api/kyc/useVerification";
import { useCookies } from "react-cookie";
import { KycProp, setUserKYC } from "@store/slices/userBio";
import ProfilePic from "../components/profilePic/pic";
import { IDType } from "../data/id_type";
import useKyc from "api/kyc/useKyc";

interface SignUpFormData {
  full_name: string;
  country: string;
  address: string;
  year: string;
  month: string;
  day: string;
  id_number: string;
  id_type: string,
  dob: string

  image: File | null;
}

interface BioDetailsProps {
  handleNext: (dir: string) => void;
}

const BioDetails: React.FC<BioDetailsProps> = ({ handleNext }) => {
  const { userBio } = useAppSelector((state) => state.userBio);
  const dispatch = useAppDispatch()
  const [cookies] = useCookies(["access_token"]);
  const { handleSubmit, register, reset, setValue, formState: { errors } } = useForm<SignUpFormData>();
  // console.log(cookies)
  const [form] = Form.useForm()
  const [formData, setFormData] = useState<SignUpFormData>({
    full_name: userBio?.full_name || '',
    country: '',
    address: '',
    year: '',
    month: '',
    day: '',
    id_number: "",
    id_type: "",
    dob: "",
    
    image: null
  });


  const { mutate, isPending } = useVerification({
    onSuccess: (data) => {
      reset();
      toast.success("Success! Your KYC has been created.");
      dispatch(setUserKYC( data as KycProp));
      

      handleNext("next");
    },
  });

  const { mutate: mutateKYCData } = useKyc({
    onSuccess: (data) => {
      // console.log("pull key",data)
      
      if (data.results.length > 0) {
        const updatedFormData = {
          ...formData,
          ...data.results[0],
        };
  
        setFormData(updatedFormData);
  
        form.setFieldsValue({
          id_number: updatedFormData.id_number,
          full_name: updatedFormData.full_name,
          address: updatedFormData.address,
          

          

        });
      }

     },
  });


  console.log(formData)
  const onSubmit: SubmitHandler<SignUpFormData> = () => {

    const formDataParse = new FormData();
    formDataParse.append("full_name", formData.full_name);
    formDataParse.append("country", formData.country);
    formDataParse.append("address", formData.address);
    formDataParse.append("id_type", "passport");
    formDataParse.append("id_number", formData.id_number);
    formDataParse.append("selfie", formData.image as Blob);
    formDataParse.append("dob", `${formData.year}-${formData.month}-${formData.day}`);
    console.log(Object.fromEntries(formDataParse))

    // console.log("my token", cookies.access_token)

    mutate({
      token: cookies.access_token,
      formData: formDataParse,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(()=>{
    mutateKYCData({
      token: cookies.access_token
    })

  }, [])

  return (
    <div className="w-full formContainer px-5">
      <div className="m-auto w-max ">
      <ProfilePic 
        profilePic={formData?.selfie}
          handleProfileImg={(file) => {
            setFormData((prevData) => ({
              ...prevData,
              image: file,
            }));
          }} 
        />


      </div>
      <h5 className="text-white text-2xl font-semibold mb-4">Enter your details</h5>

      <Form form={form} layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 justify-between">
          <div className="flex-1">
            <Form.Item
              name="full_name"
              initialValue={"full_name"}
              validateStatus={errors.full_name ? "error" : ""}
              help={errors.full_name?.message}
            >
              <FormInput
                label="Full name"
                type="text"
                id="full_name"
                placeholder="Enter your name"
                inputValue={formData.full_name}
                inputName="full_name"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>
        </div>



        <div className="flex flex-col md:flex-row gap-1 md:gap-4 justify-between">
          <div className="flex-1">
            <Form.Item
              validateStatus={errors.country ? "error" : ""}
              help={errors.country?.message}
            >
              <FormSelect
                data={countries}
                label="Country"
                placeholder="Select your country"
                className="w-full"
                id="country"
                name="country"
                onSelect={(value) => setFormData({ ...formData, country: value })}
              />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              name="address"
              validateStatus={errors.address ? "error" : ""}
              help={errors.address?.message}
            >
              <FormInput
                label="Address"
                type="text"
                id="address"
                value={formData.address}
                placeholder="Enter Address"
                inputName="address"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>

          
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 justify-between">

          <div className="flex-1">

        <Form.Item
              validateStatus={errors.id_type ? "error" : ""}
              help={errors.id_type?.message}
            >
              <FormSelect

                data={IDType}
                label="id_type"
                placeholder="Select ID Type"
                className="w-full"
                id="id_type"
                name="id_type"

                onSelect={(value) => setFormData({ ...formData, id_type: value })}
              />
            </Form.Item>
            </div>


          <div className="flex-1">
            <Form.Item
              name="id_number"
              // initialValue={"hsdsd"}
              validateStatus={errors.id_number ? "error" : ""}
              help={errors.id_number?.message}
            >
              <FormInput
                label="ID Number"
                type="text"
                id="id_number"
                inputValue={"formData.id_number"}
                placeholder="Enter ID Number"
                inputName="id_number"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>
          </div>

        <h5 className="text-white text-2xl font-semibold mb-4">Enter your date of birth</h5>

        <DateSelection setFormData={setFormData} formData={formData} />

        <div className="flex my-8 gap-5 lg:gap-x-10 justify-between">
          <div className="flex-grow">
            <KYCButton
              text="Back"
              isLoading={false}
              disable={isPending}
              type="button"
              className="kyc-button text-base font-semibold back"
              onClick={() => handleNext("back")}
            />
          </div>
          <div className="flex-grow">
            <KYCButton
              text="Next"
              isLoading={isPending}
              disable={isPending}
              type="submit"
              className="kyc-button text-base font-semibold"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BioDetails;
