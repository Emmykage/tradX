import { Col, Row } from "antd";
import {
  DepositsIcon2,
  EuroFlag,
  InfoCircleIcon,
} from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import "./transferMenu.scss";
import TransferInput from "../../../../../components/transferInput/TransferInput";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";

interface TransferMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const TransferMenu: FC<TransferMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="transferMenu">
      {/* <div className="withdrawTitle">Withdraw</div> */}
      <TransferInput
        subtitle="From"
        className="promoCodeInput"
        icon={<EuroFlag />}
        title="EUR Account"
        placeholder="EUR 0.00"
        suffixIcon={<InfoCircleIcon stroke="#F58615" />}
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-account");
        }}
      />
      <MenuListCard
        variant={2}
        icon={<DepositsIcon2 />}
        title="Select Account"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-account");
        }}
      />
      <div className="amountInputs">
        <Row gutter={[20, 12]} justify="start">
          <Col span={12}>
            <Input variant={2} title="Amount, " subTitle=" EUR" />
          </Col>
          <Col span={12}>
            <Input variant={2} title="-" />
          </Col>
        </Row>
      </div>
      <PrimaryButton
        Title="Transfer"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("transfer-successful");
        }}
      />
    </div>
  );
};

export default TransferMenu;
