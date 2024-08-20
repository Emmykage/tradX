import { Form, Button, Checkbox } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";

import { toast } from "react-toastify";
import { GlobalStates, setSignInTab } from "@store/slices/global";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@store/hooks";
import useRegister from "api/user/useRegister";
import { ExclaimIcon, See, UnSee } from "assets/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SignUpFormData {
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  password: string;
}

const CreateAccount = () => {
  const {  signInTab } = useAppSelector(
    (state: { global: GlobalStates }) => state.global
  );
  console.log(signInTab);
  const { handleSubmit, register, reset } = useForm<SignUpFormData>();
  const dispatch = useDispatch()
  const [reveal, setReveal] = useState(false)
  const { mutate, isPending } = useRegister({
    onSuccess: () => {
      reset();
      toast.success(
        "Success! An email has been sent to your account. Please verify your email to complete the registration process."
      );
      console.log(`before dispach ${signInTab}`);
      // dispatch(setSignInTab("1"))
      console.log(`before dispach ${signInTab}`);
      
    },
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    mutate(data);
  };

  return (

    <div className=" max-w-4xl w-full formContainer px-5"> 
    <h5 className="text-white text-2xl font-semibold my-4">Create an account</h5>
    <p className="text-white text-base font-medium my-6">Create an account now and enjoy trading and many more!</p>
    <p></p>

    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex gap-10 justify-between">
            <div className="flex-1">          
                <Form.Item
                name="email"
                rules={[{ required: true, message: "Email is required" }]}
            >
                <label htmlFor="" className="text-base text-white">Email Address</label>
                <input
                className="w-full py-3 px-4 bg-transparent border bordergra"
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
                />
            </Form.Item>
            </div>
            <div className="flex-1 ">
                <Form.Item
                    name="phone_number"
                    rules={[{ required: true, message: "Phone number is required" }]}
                >
                   <label htmlFor="" className="text-base text-white">Mobile Phone Number</label>

                    <input
                    className="loginInput w-full py-4"
                    type="text"
                    id="phone_number"
                    placeholder="Phone number"
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
                    placeholder="Password"
                    {...register("password")}
                    />
                    <span onClick={()=> setReveal(prev => !prev) } className="absolute top-1/2 -translate-y-1/2 right-2">
                    {reveal ? <UnSee/> : <See/>}

                    </span>
                    </div>
                    
                    <p className="flex text-xs text-white gap-4 items-center my-3 mr-5"> <ExclaimIcon/> Password Should be at least 8 characters long</p>

                </Form.Item>



            </div>
            <div className="flex-1">
            <Form.Item
        name="password"
        rules={[{ required: true, message: "Last Name is required" }]}
      >
        <label htmlFor="confirm_password" className="text-white">Confirm Password</label>
        <input
          className="loginInput"
          type="password"
          id="confirm Password"
          placeholder="confirm Password"
          {...register("last_name")}
        />
      </Form.Item>


            </div>
            
        </div>

        <Form.Item name="fieldA" valuePropName="checked" className="agree-terms">
        <Checkbox className="custom-checkbox ">I agree to the <a className="text-[##0094FF]" >terms and Conditions </a></Checkbox>
        </Form.Item>
        
        <Form.Item name="notice" valuePropName="checked">
        <Checkbox className="custom-checkbox ">I accept messages, calls and emails.</Checkbox>
        </Form.Item>
        

     

     
      <Button
        type="primary"
        htmlType="submit"
        className="login"
        loading={isPending}
      >
        Register
      </Button>


    </Form>

    <p className="text-base my-6 text-[#C1C1C3]">Already have an account? <NavLink to={'/signIn'} className={"text-[#0094FF]"}> Sign In</NavLink></p>

    </div>

  );
};

export default CreateAccount;
