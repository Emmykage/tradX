import { Col, Row } from "antd";
import {
  DepositsIcon2,
  InfoCircleIcon,
  UsdSquareIcon,
} from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import "./transferMenu.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import TransferInput from "../../../../../components/transferInput/TransferInput";
import { Dispatch, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";

interface TransferMenuProps {
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const TransferMenu: React.FunctionComponent<TransferMenuProps> = () => {
  return (
    <div className="transferMenu">
      {/* <div className="withdrawTitle">Withdraw</div> */}
      <TransferInput
        subtitle="From"
        className="promoCodeInput"
        icon={<UsdSquareIcon />}
        title="USD Account"
        placeholder="USD 0.00"
        suffixIcon={<InfoCircleIcon stroke="#F58615" />}
      />
      <PaymentListItemCard icon={<DepositsIcon2 />} title="Select Account" />
      <div className="amountInputs">
        <Row gutter={[12, 12]} justify="start">
          <Col span={12}>
            <Input variant={1} title="Amount, USD" />
          </Col>
          <Col span={12}>
            <Input variant={1} title="Amount, PKR" />
          </Col>
        </Row>
      </div>
      <PaymentListItemCard title="Transfer" />
    </div>
  );
};

export default TransferMenu;
