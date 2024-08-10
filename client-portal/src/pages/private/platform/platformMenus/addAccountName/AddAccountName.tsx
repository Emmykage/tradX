import { Dispatch, SetStateAction, useState } from "react";
import { Typography, Form } from "antd";
import Input from "../../../../../components/input/Input";
import { RightDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCookies } from "react-cookie";
import { WalletSliceState, setWallets } from "@store/slices/wallet";
import useCreateWallet from "api/wallet/useCreateWallet";

interface AddAccountNameProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightDrawerContent: Dispatch<SetStateAction<RightDrawerContent>>;
}

const AddAccountName: React.FunctionComponent<AddAccountNameProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightDrawerContent,
}) => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);
  const [name, setName] = useState("");

  const { wallets, createWalletData } = useAppSelector(
    (state: { wallet: WalletSliceState }) => state.wallet
  );

  const { mutate, isPending } = useCreateWallet({
    onSuccess: (data) => {
      setIsRightSubDrawerOpen(false);
      setIsRightDrawerContent("account");
      dispatch(setWallets([...wallets, data]));
    },
    onError: (error) => {
      console.log("fetching wallets error", error);
    },
  });

  const onCreateWallet = () => {
    mutate({
      data: { ...createWalletData, name },
      token: cookies.access_token,
    });
  };

  return (
    <div className="editNameMenu">
      <Typography.Text className="editNameMenu-text">
        Set the account name. This is how it will be displayed on the list of
        your accounts.
      </Typography.Text>
      <Form layout="vertical" onFinish={onCreateWallet}>
        
        <Form.Item
          name="accountName"
          rules={[{ required: true, message: "Account name is required" }]}
        >
          <Input
            placeholder="Account Name"
            title="Account Name"
            name="accountName"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </Form.Item>
        
        <PrimaryButton
          Title="Confirm"
          htmlType="submit"
          // onClick={onCreateWallet}
          disabled={isPending}
        />
      </Form>
    </div>
  );
};

export default AddAccountName;
