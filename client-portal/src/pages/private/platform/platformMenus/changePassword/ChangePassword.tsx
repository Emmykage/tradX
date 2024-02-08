import { useState } from "react";
import Input from "../../../../../components/input/Input";
import "./changePassword.scss";
import StrengthMeter from "./StrengthMeter";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";

interface ChangePasswordProps {}

const ChangePassword: React.FunctionComponent<ChangePasswordProps> = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="changePassword">
      <Input
        title="Old Password"
        type="password"
        placeholder="Enter old password"
      />

      <Input
        title="New Password"
        type="password"
        defaultValue={password}
        onChange={(e: any) => setPassword(e.target.value)}
        placeholder="Enter new password"
      />

      <Input
        title="Confirm New Password"
        type="password"
        placeholder="Confirm password"
      />

      <StrengthMeter password={password} />

      <MenuListCard
        className="changePwButton"
        title="Change Password"
        textCenter
      />
    </div>
  );
};

export default ChangePassword;
