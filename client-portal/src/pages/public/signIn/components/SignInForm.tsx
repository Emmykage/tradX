import { Checkbox, Form, Button } from "antd";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ISignInForm } from "@interfaces";
import { useLogin } from "api/user/useLogin";

interface SignInFormProps {
  setForgotPasswordView: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInForm: React.FunctionComponent<SignInFormProps> = ({
  setForgotPasswordView,
}) => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["access_token", "refresh_token"]);

  const { handleSubmit, register } = useForm<ISignInForm>();

  const { mutate, isPending } = useLogin({
    onSuccess: (data) => {
      const expirationInSeconds = 270;
      setCookie("access_token", data.access, { maxAge: expirationInSeconds });
      setCookie("refresh_token", data.refresh);
      navigate("/platform");
    },
    onError: () => {},
  });


  const onSubmit = handleSubmit((data) => mutate(data));

  return (
    <Form layout="vertical" onFinish={onSubmit} style={{ width: "300px" }}>
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

      <Checkbox>Do not remember me</Checkbox>

      <p className="forgotPass" onClick={() => setForgotPasswordView(true)}>
        Forgot your password?
      </p>

      <Button
        className="login"
        type="primary"
        htmlType="submit"
        loading={isPending}
      >
        Log In
      </Button>

      <div className="continueWithText">
        <div className="liner"></div>
        <p>Or Continue With</p>
        <div className="liner"></div>
      </div>
      <div className="socialIcons">
        <div className="topIcons">
          <img src="/social-icons/google-round.png" alt="Google" />
          <img src="/social-icons/facebook-round.png" alt="Facebook" />
        </div>
      </div>
    </Form>
  );
};

export default SignInForm;
