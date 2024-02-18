import { Typography } from "antd";
import { UsdSquareIcon } from "../../../../../assets/icons";
import "./TransferAccountSelectMenu.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";

interface TransferAccountSelectMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}


const TransferAccountSelectMenu: FC<TransferAccountSelectMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="main-div">
      <div className="withdrawTitle">To:</div>
      <div className="main">
        <MainItemCard variant={2} className="main-card" onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("transfer")
        }}>
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
        <MainItemCard variant={2} className="main-card" onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("transfer");
        }}>
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
      </div>
    </div>
  );
};

export default TransferAccountSelectMenu;
