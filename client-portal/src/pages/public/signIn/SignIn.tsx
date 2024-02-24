import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import "./signIn.scss";

interface SignInProps {}

const SignIn: React.FunctionComponent<SignInProps> = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Login",
      children: <SignInForm />,
    },
    {
      key: "2",
      label: "Registration",
      children: <SignUpForm />,
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
