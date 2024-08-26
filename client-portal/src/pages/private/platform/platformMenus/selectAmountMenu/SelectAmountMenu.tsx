import { Col, Row } from "antd";
import "./SelectAmountMenu.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import AmountCard from "../../../../../components/amountCard/AmountCard";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import { NumberInputIcon } from "../../../../../assets/icons";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import { useAppSelector } from "@store/hooks";
import IocnPlaceholder from "assets/icons/IocnPlaceholder";

interface SelectAmountMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const SelectAmountMenu: FC<SelectAmountMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const { selectedWallet } = useAppSelector((state) => state.wallet);
  const { amount } = useAppSelector((state) => state.payment);

  const currency = selectedWallet?.account_type__symbol || "";

  return (
    <div className="selectAmountMenuCon">
      <div className="selectedAmountdiv">
        <DepositCard
          CountryIcon={
            selectedWallet?.account_type__image || <IocnPlaceholder />
          }
          input
          account="Deposit Amount"
          amount={amount}
          currency="EUR"
          cardIcon={<NumberInputIcon />}
        />
      </div>
      <Row gutter={[25, 10]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconGold amount={10000} currency={currency} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconGold amount={5000} currency={currency} />
        </Col>
      </Row>
      <Row style={{ marginTop: "1.25rem" }} gutter={[25, 10]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconSilver amount={2500} currency={currency} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconSilver amount={2000} currency={currency} />
        </Col>
      </Row>
      <Row style={{ marginTop: "1.25rem" }} gutter={[25, 10]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={1500} currency={currency} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={1000} currency={currency} />
        </Col>
      </Row>
      <Row
        style={{ marginTop: "1.25rem", marginBottom: "7.5rem" }}
        gutter={[25, 10]}
      >
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={500} currency={currency} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={250} currency={currency} />
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
