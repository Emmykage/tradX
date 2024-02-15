import { Typography } from "antd";
import { PakIconSquare, UsdSquareIcon } from "../../../../../assets/icons";
import "./TransferAccountSelectMenu.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";

const TransferAccountSelectMenu = () => {
  return (
    <div className="main-div">
      {/* <div className="withdrawTitle">To:</div> */}
      <div className="main">
        <MainItemCard variant={2} className="main-card">
          <div className="first-account">
            <UsdSquareIcon />
            <div className="account-type">
              <Typography.Text className="account-flag">
                USD Account <span className="account-flag-span">#65715654</span>
              </Typography.Text>
              <Typography.Text className="account-amount">
                USD 0.00
              </Typography.Text>
            </div>
          </div>
        </MainItemCard>
        <div className="select-account">
          <PakIconSquare />
          <div className="account-type">
            <Typography.Text className="account-flag">
              PKR Account <span className="account-flag-span">#65715654</span>
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

export default TransferAccountSelectMenu;
