import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useForm } from 'react-hook-form';
import { register } from 'module';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import useOTPVerification from 'api/user/useOTPVerication';


interface OTPInputProps{
  otp1: number,
  otp2: number,
  otp3: number,
  otp4: number

}

interface OTPProps {
  handleNext: () => void
}
const OTPVerification: React.FC<OTPProps> = ({ handleNext }) => {

  const navigate = useNavigate();
  const [, setCookie] = useCookies(["step","access_token", "refresh_token",]);





  const { handleSubmit, register, reset, formState: {errors} } = useForm<OTPInputProps>();
  const { mutate, isPending } = useOTPVerification({
    onSuccess: (data) => {
      const expirationInSeconds = 270;
      setCookie("access_token", data.access, { maxAge: expirationInSeconds });
      setCookie("refresh_token", data.refresh);
      setCookie("step",'')

      // data?.user.is_walkthrough ? navigate('/platform') : navigate("/welcome");


      data?.user.is_walkthrough ? navigate('/platform') : handleNext();

      
      

     
      
    },
    onError: () => {},
  });

  const onSubmit = handleSubmit((data) => mutate(data));

  return (
    <div className='px-5 max-w-4xl w-full formContainer otpForm'>
      <h5 className='text-2xl text-white my-2'>OTP Verification</h5>
      <p className='text-base font-medium my-6 text-[#F7F7F7]'>
        We have sent a verification code to your email (or phone number). You can resend the code after 1 minute.
      </p>
      <a className='text-[#0094FF] block my-10' href="">
        Resend
      </a>

      <Form layout="vertical" onFinish={onSubmit} >
        <div className='grid grid-cols-4 gap-6'>
          <Form.Item 
           name="otp1"
           validateStatus={errors.otp1 ? "error" : ""}           
           help={errors.otp1?.message}

           >
           <input 
           id='otp1'
           type="number"
           className='py-8 rounded-xl' maxLength={1}
           {...register("otp1", {
            required: "field required"
           })}
           
           />

          </Form.Item>
          <Form.Item 
           name="otp1"
           validateStatus={errors.otp1 ? "error" : ""}           
           help={errors.otp1?.message}

           >
           <input 
           id='otp1'
           type="number"
           className='py-8 rounded-xl' maxLength={1}
           {...register("otp1", {
            required: "field required"
           })}
           
           />

          </Form.Item>
          <Form.Item 
           name="otp1"
           validateStatus={errors.otp1 ? "error" : ""}           
           help={errors.otp1?.message}

           >
           <input 
           id='otp1'
           type="number"
           className='py-8 rounded-xl' maxLength={1}
           {...register("otp1", {
            required: "field required"
           })}
           
           />

          </Form.Item>
          <Form.Item 
           name="otp1"
           validateStatus={errors.otp1 ? "error" : ""}           
           help={errors.otp1?.message}

           >
           <input 
           id='otp1'
           type="number"
           className='py-8 rounded-xl' maxLength={1}
           {...register("otp1", {
            required: "field required"
           })}
           
           />

          </Form.Item>
          
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className='py-6 font-semibold text-white w-full my-10'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OTPVerification;
