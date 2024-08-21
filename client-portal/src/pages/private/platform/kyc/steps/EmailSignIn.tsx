import React from 'react'
import { Form, Button, Checkbox } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import HelpButton from '../../../../../assets/icons/kyc/Button.svg'

import { toast } from "react-toastify";
import { GlobalStates, setSignInTab } from "@store/slices/global";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@store/hooks";
import useRegister from "api/user/useRegister";
import { ExclaimIcon, See, UnSee } from "assets/icons";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ISignInForm } from '@interfaces';
import { useCookies } from 'react-cookie';
import useLogin from 'api/user/useLogin';
import FormInput from '../components/FormInput';
import KYCButton from '../components/Button';

interface SignInFormProps {
    setForgotPasswordView: React.Dispatch<React.SetStateAction<boolean>>;
    handleNext: () => void
  }
  

const EmailSignInForm: React.FC<SignInFormProps> = ({handleNext}) => {
  const {  signInTab } = useAppSelector(
    (state: { global: GlobalStates }) => state.global
  );

  const [, setCookie] = useCookies(["step","access_token", "refresh_token",]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { handleSubmit, register, formState: {errors} } = useForm<ISignInForm>();
  const { mutate, isPending } = useLogin({
    onSuccess: (data) => {
      const expirationInSeconds = 270;
      setCookie("access_token", data.access, { maxAge: expirationInSeconds });
      setCookie("refresh_token", data.refresh);
      setCookie("step",'')
      handleNext()
      // data?.user.is_walkthrough ? navigate('/platform') : navigate("/welcome");
     
    },
    onError: () => {},
  });

  const dispatch = useDispatch()
  const [reveal, setReveal] = useState(false)


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    mutate(formData);
  };

  return (

    <div className='w-full formContainer px-5 max-w-[520px] mx-auto'>
      <h5 className="text-white text-2xl font-semibold my-4">Sign in to your account</h5>
      <p className="text-white text-base font-medium my-6">Welcome back! Sign in to your account and enjoy your trading!</p>
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>

          <div className="flex-1">
            <Form.Item
                name="email"
                validateStatus={errors.email ? "error" : ""}
                help={errors.email?.message}
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  { required: true, message: "Email is required" }
                ]}
            >
              
              <FormInput
                label="Email Address"
                type="email"
                id="email"
                inputName="email"
                placeholder="Email"
                onChange={handleInputChange} 
              />
            </Form.Item>
          </div>

          

        <div className="">
          <Form.Item
              name="password"
              validateStatus={errors.password ? "error" : ""}
              help={errors.password?.message}
              rules={[{ required: true, message: "password is required" }]}
            >
             <FormInput
                label="Password"
                type={reveal? "text": "password"}
                id="password"
                placeholder="Password"
                inputName="password"
                icon={<> 
                     <span onClick={() => setReveal(prev => !prev)}>
                      {reveal ? <See /> : <UnSee />}
                    </span>
                </>} 
                onChange={handleInputChange} 
              />
          
          </Form.Item>
          <a className="flex text-base text-[#0094FF] gap-4 items-center mt-[-10px] "> Forgot password?</a>
        </div>
      {/* <div className="flex gap-10 justify-between">
        <div className="flex-1">          
            <Form.Item
            name="email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
        >
            <label htmlFor="" className="text-base text-white">Email Address</label>
            <input
            className="w-full py-3 px-4 bg-transparent border bordergra"
            type="email"
            id="email"
            placeholder="Email you email address"
            {...register("email", {
              required: "Email is required" }
            
            )}
            />
        </Form.Item>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex-1">
          <Form.Item
              name="password"
              validateStatus={errors.password ? "error" : ""}
              help={errors.email?.message}


              >
              <label htmlFor="password" className="text-white">Password</label>
              <div className="relative">
              <input
              className="loginInput"
              type= {reveal ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "your passwod is required"
              })}
              />
              <span onClick={()=> setReveal(prev => !prev) } className="absolute top-1/2 -translate-y-1/2 right-2">
              {reveal ? <UnSee/> : <See/>}

              </span>
              </div>
              
              <a className="flex text-xs text-[#0094FF] gap-4 items-center my-3 mr-5"> Forgot password?</a>

          </Form.Item>
        </div>
      </div> */}

        <Form.Item name="fieldA" valuePropName="checked" className="agree-terms mt-8">
        <Checkbox className="custom-checkbox "> Remember Me</Checkbox>
        </Form.Item>
       <KYCButton
        text="Sign In"
        isLoading={isPending}
        disable={isPending}
        type="submit"
        className="kyc-button text-base font-semibold"
      />


    </Form>

    <p className="text-base my-6 text-[#C1C1C3]">Dont have an account? <NavLink to={'/signIn'} className={"text-[#0094FF]"}> Sign Up</NavLink></p>

    </div>

  );
};

export default EmailSignInForm;
