import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import "./signIn.scss";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { withTranslation } from "react-i18next";

interface SignInProps {}

const SignIn: React.FunctionComponent<SignInProps> = () => {
  const [forgotPasswordView, setForgotPasswordView] = useState(false);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Login",
      children: <SignInForm setForgotPasswordView={setForgotPasswordView} />,
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
        {forgotPasswordView ? (
          <ForgotPasswordForm />
        ) : (
          <Tabs
            centered
            defaultActiveKey="1"
            items={items}
            indicatorSize={150}
            tabBarGutter={100}
          />
        )}
      </div>
    </div>
  );
};

export default withTranslation()(SignIn);
