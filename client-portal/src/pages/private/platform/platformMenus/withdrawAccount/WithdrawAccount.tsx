import { Typography } from "antd";
import { UsdIcon2, UsdtIcon } from "../../../../../assets/icons";
import "./WithdrawAccount.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";

const WithdrawAccount = () => {
  return (
    <div>
      {/* <div className="withdrawTitle">Select Account</div> */}
      <div className="main">
        <MainItemCard variant={2} className="main-card">
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
        <div className="select-account">
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
        <div className="select-account">
          <UsdIcon2 />
          <div className="account-type">
            <Typography.Text className="account-flag">
              USD Account 3
            </Typography.Text>
            <Typography.Text className="account-amount">
              USD 0.00
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawAccount;
