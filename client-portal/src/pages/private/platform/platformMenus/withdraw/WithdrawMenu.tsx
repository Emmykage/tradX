import { UsdIcon2 } from "../../../../../assets/icons";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import WithdrawCard from "../../../../../components/withdrawCard/WithdrawCard";
import { Dispatch, FC, SetStateAction } from "react";

import "./withdrawMenu.scss";
import { RightSubDrawerContent } from "../../types";
import { Col, Row } from "antd";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import SecondaryButton from "../../../../../components/secondaryButton/SecondaryButton";

interface WithdrawMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const WithdrawMenu: FC<WithdrawMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="WithdrawMenu">
      {/* <div className="withdrawTitle">Withdraw</div> */}
      <DepositCard
        CountryIcon={<UsdIcon2 />}
        account="From EUR Account"
        amount="EUR 250"
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-withdraw-account");
        }}
      />
      <WithdrawCard
        setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
        setIsRightSubDrawerContent={setIsRightSubDrawerContent}
      />
      <Row gutter={15} className="buttonsRow">
        <Col span={12}>
          <PrimaryButton Title="Select Account" onClick={() => null} />
        </Col>
        <Col span={12}>
          <SecondaryButton Title="Wire Transfer" onClick={() => null} />
        </Col>
      </Row>
    </div>
  );
};

export default WithdrawMenu;
