import { Typography } from "antd";
import { UsdIcon2, UsdtIcon } from "../../../../../assets/icons";
import "./WithdrawAccount.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";


interface WithdrawAccountProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const WithdrawAccount: FC<WithdrawAccountProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div>
      <div className="main">
        <MainItemCard
          variant={2}
          className="main-card"
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("withdraw-payment");
          }}
        >
          <div className="first-account">
            <UsdIcon2 />
            <div className="account-type">
              <Typography.Text className="account-flag">
                USD Account
              </Typography.Text>
              <Typography.Text className="account-amount">
                USD 0.00
              </Typography.Text>
            </div>
          </div>
        </MainItemCard>

        <MainItemCard
          variant={2}
          className="main-card"
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("withdraw-payment");
          }}
        >
          <div className="first-account">
            <UsdtIcon />
            <div className="account-type">
              <Typography.Text className="account-flag">
                USDT Account
              </Typography.Text>
              <Typography.Text className="account-amount">
                USD 0.00
              </Typography.Text>
            </div>
          </div>
        </MainItemCard>

        <MainItemCard
          variant={2}
          className="main-card"
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("withdraw-payment");
          }}
        >
          <div className="first-account">
            <UsdIcon2 />
            <div className="account-type">
              <Typography.Text className="account-flag">
                USD Account
              </Typography.Text>
              <Typography.Text className="account-amount">
                USD 0.00
              </Typography.Text>
            </div>
          </div>
        </MainItemCard>
      </div>
    </div>
  );
};

export default WithdrawAccount;
