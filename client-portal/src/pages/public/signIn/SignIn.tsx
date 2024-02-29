import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./signIn.scss";
import { withTranslation } from "react-i18next";
import LoginNode from "./nodes/LoginNode";
import RegistrationNode from "./nodes/RegistrationNode";

interface SignInProps {}

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

export default withTranslation()(SignIn);
