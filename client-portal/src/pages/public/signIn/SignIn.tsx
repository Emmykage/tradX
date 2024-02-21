import React from "react";
import { Checkbox, Input, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./signIn.scss";
import { useNavigate } from "react-router-dom";

interface SignInProps {}

const LoginNode = () => {
  const navigate = useNavigate();
  return (
    <div className="contentContainer">
      <input
        className="loginInput"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <Input.Password placeholder="Password" />
      <Checkbox>Do not remember me</Checkbox>
      <p className="forgotPass">Forgot your password?</p>

      <button onClick={() => navigate("/platform")} className="login">
        Log In
      </button>

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
    </div>
  );
};

const RegistrationNode = () => {
  return (
    <div className="contentContainer">
      <input
        className="loginInput"
        type="text"
        name="firstname"
        id="firstname"
        placeholder="First Name"
      />
      <input
        className="loginInput"
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Last Name"
      />
      <input
        className="loginInput"
        type="number"
        name="number"
        id="number"
        placeholder="Number"
      />
      <input
        className="loginInput"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <Input.Password placeholder="Password" />
      <button className="register">Register</button>

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
    </div>
  );
};

const SignIn: React.FunctionComponent<SignInProps> = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Login",
      children: <LoginNode />,
    },
    {
      key: "2",
      label: "Registration",
      children: <RegistrationNode />,
    },
  ];
  return (
    <div className="loginContainer">
      <div className="centerWrapper">
        <Tabs
          centered
          defaultActiveKey="1"
          items={items}
          indicatorSize={150}
          tabBarGutter={100}
        />
      </div>
    </div>
  );
};

export default SignIn;
