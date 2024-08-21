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

interface PhoneInFormProps {
    setForgotPasswordView: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const PhoneSignInForm: React.FC = () => {
  const {  signInTab } = useAppSelector(
    (state: { global: GlobalStates }) => state.global
  );

  const [, setCookie] = useCookies(["step","access_token", "refresh_token",]);
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm<ISignInForm>();
  const { mutate, isPending } = useLogin({
    onSuccess: (data) => {
      const expirationInSeconds = 270;
      setCookie("access_token", data.access, { maxAge: expirationInSeconds });
      setCookie("refresh_token", data.refresh);
      setCookie("step",'')

      data?.user.is_walkthrough ? navigate('/platform') : navigate("/welcome");
     
      
    },
    onError: () => {},
  });

  const dispatch = useDispatch()
  const [reveal, setReveal] = useState(false)


  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    mutate(data);
  };

  return (

    <div className=" max-w-4xl w-full formContainer px-5"> 
    <span className=' p-0 absolute bottom-0 right-10'>
    <img src={HelpButton} alt="" className=''/>


    </span>


    <h5 className="text-white text-2xl font-semibold my-4">Sign in to your account</h5>
    <p className="text-white text-base font-medium my-6">Welcome back! Sign in to your account and enjoy your trading!</p>
    <p></p>

    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex gap-10 justify-between">
            <div className="flex-1">          
                <Form.Item
                name="phone_number"
                rules={[{ required: true, message: "Email is required" }]}
            >
                <label htmlFor="" className="text-base text-white">Phine Number</label>
                <input
                className="w-full py-3 px-4 bg-transparent"
                type="text"
                id="pone_number"
                placeholder="Enter your phone Number"
                {...register("phone_number")}
                />
            </Form.Item>
            </div>
            

         </div>
            <div className="flex gap-10">
                <div className="flex-1">
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Password is required" }]}
                >
                    <label htmlFor="password" className="text-white">Password</label>
                    <div className="relative">
                    <input
                    className="loginInput"
                    type= {reveal ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    />
                    <span onClick={()=> setReveal(prev => !prev) } className="absolute top-1/2 -translate-y-1/2 right-2">
                    {reveal ? <UnSee/> : <See/>}

                    </span>
                    </div>
                    
                    <a className="flex text-xs text-[#0094FF] gap-4 items-center my-3 mr-5"> Forgot password?</a>

                </Form.Item>



            </div>
            
            
        </div>

        <Form.Item name="fieldA" valuePropName="checked" className="agree-terms">
        <Checkbox className="custom-checkbox "> Remember Me</Checkbox>
        </Form.Item>
        
            
      <Button
        type="primary"
        htmlType="submit"
        className="login"
        loading={isPending}
      >
        Sign In
      </Button>


    </Form>

    <p className="text-base my-6 text-[#C1C1C3]">Dont have an account? <NavLink to={'/signIn'} className={"text-[#0094FF]"}> Sign Up</NavLink></p>

    </div>

  );
};

export default PhoneSignInForm;
