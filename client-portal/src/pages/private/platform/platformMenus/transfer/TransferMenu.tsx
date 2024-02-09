import { Col, Row } from "antd";
import { WalletIcon } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./transferMenu.scss";

interface TransferMenuProps {
  setIsRightSubDrawerContent: (value: string | null) => void;
}

const TransferMenu: React.FunctionComponent<TransferMenuProps> = ({
  setIsRightSubDrawerContent,
}) => {
  const warning = true;

  return (
    <div className="transferMenu">
      <Input
        icon={<img src="/menu-images/uk-flag.png" />}
        className="currencyInput"
        placeholder="USD 0.00"
        title="From: USD Account"
      />

      <MenuListCard
        className="walletSelect"
        title="Select the account"
        icon={<WalletIcon />}
        onClick={() => setIsRightSubDrawerContent("select-account")}
      />

      <div className="amountInputs">
        <Row gutter={[12, 12]} justify="start">
          <Col span={12}>
            <Input title="Amount, USD" />
          </Col>
          <Col span={12}>
            <Input title="Amount" />
          </Col>
          {warning ? (
            <Col span={24}>
              <p className="warningText">
                Transfer between these accounts is not possible
              </p>
            </Col>
          ) : null}
        </Row>
      </div>

      <MenuListCard title="Transfer" textCenter />

      <p className="infoText">Instant money transfer</p>
    </div>
  );
};

export default TransferMenu;
