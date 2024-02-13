import { Col, Row } from "antd";
import "./SelectAmountMenu.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import AmountCard from "../../../../../components/amountCard/AmountCard";

const SelectAmountMenu = () => {
  return (
    <div className="selectAmountMenuCon">
      <div className="selectedAmountdiv">
        <DepositCard account="Deposit Amount" amount="USD 30" icon />
      </div>
      <Row gutter={[28, 16]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconGold amount={"USD 5,000"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconGold amount={"USD 5,000"} />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }} gutter={[28, 16]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconSilver amount={"USD 300"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard iconSilver amount={"USD 200"} />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }} gutter={[28, 16]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"USD 100"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"USD 30"} />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }} gutter={[28, 16]}>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"USD 20"} />
        </Col>
        <Col lg={12} md={24} sm={24}>
          <AmountCard amount={"USD 10"} />
        </Col>
      </Row>
      <div className="confrimBtn">
        <PaymentListItemCard border title="Confirm" />
      </div>
    </div>
  );
};

export default SelectAmountMenu;
