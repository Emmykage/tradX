import { Form, Button } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";

import useRegister from "api/user/useRegister";
import { toast } from "react-toastify";

interface SignUpFormData {
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  password: string;
}

const SignUpForm = () => {
  const { handleSubmit, register, reset } = useForm<SignUpFormData>();
  const { mutate, isPending } = useRegister({
    onSuccess: () => {
      reset();
      toast.success("You have successfully registered your account, Login Now!");
    },
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    mutate(data);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Email is required" }]}
      >
        <input
          className="loginInput"
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
      </Form.Item>

      <Form.Item
        name="phone_number"
        rules={[{ required: true, message: "Phone number is required" }]}
      >
        <input
          className="loginInput"
          type="tel"
          id="phone_number"
          placeholder="Phone number"
          {...register("phone_number")}
        />
      </Form.Item>

      <Form.Item
        name="first_name"
        rules={[{ required: true, message: "First Name is required" }]}
      >
        <input
          className="loginInput"
          type="text"
          id="first_name"
          placeholder="First Name"
          {...register("first_name")}
        />
      </Form.Item>

      <Form.Item
        name="last_name"
        rules={[{ required: true, message: "Last Name is required" }]}
      >
        <input
          className="loginInput"
          type="text"
          id="last_name"
          placeholder="Last Name"
          {...register("last_name")}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Password is required" }]}
      >
        <input
          className="loginInput"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        className="login"
        loading={isPending}
      >
        Register
      </Button>

      <div className="continueWithText">
        <div className="liner"></div>
        <p>Or Continue With</p>
        <div className="liner"></div>
      </div>
      <div className="socialIcons">
        <div className="topIcons">
          <img src="/social-icons/google-round.png" />
          <img src="/social-icons/facebook-round.png" />
        </div>
      </div>
    </Form>
  );
};

export default SignUpForm;
