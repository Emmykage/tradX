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
import FormInput from "../components/FormInput";
import KYCButton from "../components/Button";

interface SignUpFormData {
  email: string;
  phone_number: string;
  username: string;
  password: string;
  confirm_password: string;
}

interface createAccountProps {
   handleNext: () => void
}

const CreateAccount: React.FC<createAccountProps> = ({handleNext}) => {
  const { signInTab } = useAppSelector(
    (state: { global: GlobalStates }) => state.global
  );
  const { handleSubmit, register, reset, watch,  formState: {errors} } = useForm<SignUpFormData>();
  const dispatch = useDispatch();
  const [reveal, setReveal] = useState(false);
  const [revealConfirmation, setRevealConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
    phone_number: ''
  })
  const { mutate, isPending } = useRegister({
    onSuccess: (data) => {
      reset();
      toast.success(
        "Success! An email has been sent to your account. Please verify your email to complete the registration process."
      );
      handleNext()
    },
    onError: (error) => {
      // console.log(error, 'here');
    },
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    mutate(formData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  return (
    <div className="w-full formContainer px-5">
      <h5 className="text-white text-2xl font-semibold mb-4">Create an account</h5>
      <p className="text-white text-base font-medium mb-6">
        Create an account now and enjoy trading and many more!
      </p>

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 justify-between">
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

          <div className="flex-1 ">
            <Form.Item
              name="phone_number" 
              validateStatus={errors.phone_number ? "error" : ""}
              help={errors.phone_number?.message}
              rules={[{ required: true, message:  "Phone Number is required" }]}
            >
              <FormInput
                label="Mobile Phone Number"
                type="text"
                id="phone_number"
                placeholder="Phone number"
                inputName="phone_number" 
                onChange={handleInputChange}  
              />
            </Form.Item>
          </div>
        </div>


        <div className="flex flex-col md:flex-row gap-1 md:gap-4 mb-5">
          <div className="flex-1">
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
                      {reveal ? <UnSee /> : <See />}
                    </span>
                </>} 
                onChange={handleInputChange} 
              />
          
            </Form.Item>
            <span className="flex text-[11.5px] mt-0 text-white gap-x-2 items-center  text-[#C1C1C3]">
              <ExclaimIcon /> Password should be at least 8 characters long
            </span>
          </div>

          <div className="flex-1">
            <Form.Item
              name="confirm_password"
              validateStatus={errors.confirm_password ? "error" :""}
              help={errors.confirm_password?.message}
              rules={[
                {required:  true, message: 'Please confirm your password'},
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The password that you entered do not match!'));
                  },
                }),
              
              ]}
            >
              
              <FormInput
                label="Confirm Password"
                type={revealConfirmation? "text": "password"}
                id="confirm_password"
                inputName="confirm_password"
                placeholder="Confirm Password"
                icon={<> 
                     <span onClick={() => setRevealConfirmation(prev => !prev)}>
                      {revealConfirmation ? <UnSee /> : <See />}
                    </span>
                </>}
                onChange={handleInputChange} 
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item name="terms" valuePropName="checked" className="agree-terms">
          <Checkbox className="custom-checkbox">I agree to the <a className="text-[#0094FF]">terms and Conditions</a></Checkbox>
        </Form.Item>

        <Form.Item name="notice" valuePropName="checked" className="">
          <Checkbox className="custom-checkbox">I accept messages, calls and emails.</Checkbox>
        </Form.Item>
          <KYCButton
            text="Register"
            isLoading={isPending}
            disable={isPending}
            type="submit"
            className="text-base font-semibold"
          />
      </Form>

      <p className="text-base my-6 text-[#C1C1C3]">
        Already have an account? <NavLink to={'/signIn'} className="text-[#0094FF]"> Sign In</NavLink>
      </p>
    </div>
  );
};

export default CreateAccount;
