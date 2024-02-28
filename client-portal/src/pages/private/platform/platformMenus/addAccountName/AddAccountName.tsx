import { Dispatch, SetStateAction } from "react";
import { Typography } from "antd";

import Input from "../../../../../components/input/Input";
import { RightDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";

interface AddAccountNameProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightDrawerContent: Dispatch<SetStateAction<RightDrawerContent>>;
}

const AddAccountName: React.FunctionComponent<AddAccountNameProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightDrawerContent,
}) => {
  return (
    <div className="editNameMenu">
      <Typography.Text className="editNameMenu-text">
        Set the account name. This is how it will be displayed on the list of
        your accounts.
      </Typography.Text>
      <Input
        placeholder="Account Name"
        title="Account Name"
        defaultValue="USDT 6"
        type="text"
      />
      <PrimaryButton
        Title="Confirm"
        onClick={() => {
          setIsRightSubDrawerOpen(false);
          setIsRightDrawerContent("account");
        }}
      />
    </div>
  );
};

export default AddAccountName;
