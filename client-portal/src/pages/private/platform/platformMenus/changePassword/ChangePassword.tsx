import { Dispatch, SetStateAction, useState } from "react";
import Input from "../../../../../components/input/Input";
import "./changePassword.scss";
import StrengthMeter from "./StrengthMeter";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import { RightSubDrawerContent } from "../../types";

interface ChangePasswordProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const ChangePassword: React.FunctionComponent<ChangePasswordProps> = ({
  setIsRightSubDrawerContent,
}) => {
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
        onClick={() => {
          setIsRightSubDrawerContent("password-success");
          console.log("check");
        }}
      />
    </div>
  );
};

export default ChangePassword;
