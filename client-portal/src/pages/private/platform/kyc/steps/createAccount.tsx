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
  username: string;
  password: string;
  confirm_password: string;
}

const CreateAccount: React.FC = ({}) => {
  const { signInTab } = useAppSelector(
    (state: { global: GlobalStates }) => state.global
  );
  const { handleSubmit, register, reset, watch,  formState: {errors} } = useForm<SignUpFormData>();
  const dispatch = useDispatch();
  const [reveal, setReveal] = useState(false);
  const { mutate, isPending } = useRegister({
    onSuccess: () => {
      reset();
      toast.success(
        "Success! An email has been sent to your account. Please verify your email to complete the registration process."
      );
    },
  });

  const password = watch("password")
  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="max-w-4xl w-full formContainer px-5">
      <h5 className="text-white text-2xl font-semibold my-4">Create an account</h5>
      <p className="text-white text-base font-medium my-6">
        Create an account now and enjoy trading and many more!
      </p>

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex gap-10 justify-between  ">
          <div className="flex-1">
            <Form.Item
                name="email"
                validateStatus={errors.email ? "error" : ""}
                help={errors.email?.message}

            >
              <label htmlFor="email" className="text-base text-white">Email Address</label>
              <input
                className="w-full py-3 px-4 bg-transparent border bordergra"
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}     
                         />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
            validateStatus={errors.phone_number ? "error" : ""}
            help={errors.phone_number?.message}
            >

              <label htmlFor="phone_number" className="text-base text-white">Mobile Phone Number</label>
              <input
                className="loginInput w-full py-4"
                type="text"
                id="phone_number"
                placeholder="Phone number"
                {...register("phone_number", { required: "Phone Number is so required" })}     
                
              />
            </Form.Item>
          </div>
        </div>


        <div className="flex gap-10">
          <div className="flex-1">
            <Form.Item
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
           
           >
              <label htmlFor="password" className="text-white">Password</label>
              <div className="relative">
                <input
                  className="loginInput"
                  type={reveal ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: "password is required" })}     
                  />
                <span onClick={() => setReveal(prev => !prev)} className="absolute top-1/2 -translate-y-1/2 right-2">
                  {reveal ? <UnSee /> : <See />}
                </span>
              </div>
              <p className="flex text-xs text-white gap-4 items-center my-3 mr-5">
                <ExclaimIcon /> Password should be at least 8 characters long
              </p>
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              name="confirm_password"
              validateStatus={errors.confirm_password ? "error" :""}
              help={errors.confirm_password?.message}
            >
              <label htmlFor="confirm_password" className="text-white">Confirm Password</label>
              <div className="relative">
                <input
                  className="loginInput"
                  type={reveal ? "text" : "password"}
                  id="confirm_password"
                  placeholder="Confirm Password"
                  {...register("confirm_password", 
                    {required:  "confirm Password required",
                    validate: value => value === password || "Passwords do not match"
                    }
                  )}
                />
                <span onClick={() => setReveal(prev => !prev)} className="absolute top-1/2 -translate-y-1/2 right-2">
                  {reveal ? <UnSee /> : <See />}
                </span>
              </div>
            </Form.Item>
          </div>
        </div>

        <Form.Item name="terms" valuePropName="checked" className="agree-terms">
          <Checkbox className="custom-checkbox">I agree to the <a className="text-[#0094FF]">terms and Conditions</a></Checkbox>
        </Form.Item>

        <Form.Item name="notice" valuePropName="checked">
          <Checkbox className="custom-checkbox">I accept messages, calls and emails.</Checkbox>
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

      <p className="text-base my-6 text-[#C1C1C3]">
        Already have an account? <NavLink to={'/signIn'} className="text-[#0094FF]"> Sign In</NavLink>
      </p>
    </div>
  );
};

export default CreateAccount;
