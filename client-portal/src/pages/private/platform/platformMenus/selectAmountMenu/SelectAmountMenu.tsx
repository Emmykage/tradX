import { Col, Row } from "antd";
import "./SelectAmountMenu.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import AmountCard from "../../../../../components/amountCard/AmountCard";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import { EuroFlag, NumberInputIcon } from "../../../../../assets/icons";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";

interface SelectAmountMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const SelectAmountMenu: FC<SelectAmountMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="selectAmountMenuCon">
      <div className="selectedAmountdiv">
        <DepositCard
          CountryIcon={<EuroFlag />}
          input
          account="Deposit Amount"
          amount="USD 30"
          cardIcon={<NumberInputIcon />}
        />
      </div>
      <Row gutter={[25, 10]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconGold amount={"EUR 10,000"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconGold amount={"EUR 5,000"} />
        </Col>
      </Row>
      <Row style={{ marginTop: "1.25rem" }} gutter={[25, 10]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconSilver amount={"EUR 2,500"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconSilver amount={"EUR 2,000"} />
        </Col>
      </Row>
      <Row style={{ marginTop: "1.25rem" }} gutter={[25, 10]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"EUR 1,500"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"EUR 1,000"} />
        </Col>
      </Row>
      <Row
        style={{ marginTop: "1.25rem", marginBottom: "7.5rem" }}
        gutter={[25, 10]}
      >
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"EUR $500"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"EUR $250"} />
        </Col>
      </Row>
      <PrimaryButton
        Title="Confirm"
        className="confirmButton"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("payments-deposit");
        }}
      />
    </div>
  );
};

export default SelectAmountMenu;
