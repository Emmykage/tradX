import { Dispatch, SetStateAction, useState } from "react";
import { Typography } from "antd";

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
      <Input
        placeholder="Account Name"
        title="Account Name"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <PrimaryButton
        Title="Confirm"
        onClick={onCreateWallet}
        disabled={isPending}
      />
    </div>
  );
};

export default AddAccountName;
