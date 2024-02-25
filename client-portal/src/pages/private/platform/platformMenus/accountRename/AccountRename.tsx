import { Typography } from "antd";
import Input from "../../../../../components/input/Input";
import "./accountRename.scss";
import { Dispatch, SetStateAction } from "react";
import { RightDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";

interface AccountRenameProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightDrawerContent: Dispatch<SetStateAction<RightDrawerContent>>;
}

const AccountRename: React.FunctionComponent<AccountRenameProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightDrawerContent,
}) => {
  return (
    <div className="editNameMenu">
      <Typography.Text className="editNameMenu-text">
        Edit the account name. This is how it will be displayed on the list of
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

export default AccountRename;
