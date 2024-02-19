import { CardsIcons, UsdIcon2 } from "../../../../../assets/icons";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import DepositInput from "../../../../../components/depositInput/DepositInput";
import "./WithdrawPayment.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";

interface WithdrawPaymentProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}
/**
 * 
 * @returns onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("");
          }}
 */
const WithdrawPayment: FC<WithdrawPaymentProps> = ({
  setIsRightSubDrawerContent,
  setIsRightSubDrawerOpen
}) => {
  return (
    <div className="withdraw-payment">
      {/* <div className="withdrawTitle">Withdraw</div> */}
      <div className="withdraw-payment-buttons">
        <DepositCard
          variant={2}
          CountryIcon={<UsdIcon2 />}
          account="From USD Account"
          amount="USD 30"
          icon
        />
        <DepositCard
          variant={2}
          CountryIcon={<CardsIcons />}
          account="To Bank Cards"
          amount="540691...4595"
          icon
        />
        <DepositInput
          border
          placeholderColor
          marginTop
          classname="bordercolor"
          placeholder="Amount - USD"
        />
      </div>
      <div className="withdraw-details">
        <div className="withdraw-transfer">
          <p>Transfer Amount - USD</p>
          <p>0.00</p>
        </div>
        <div className="hr" />
        <div className="withdraw-transfer">
          <p>Comission - USD</p>
          <p>0.00</p>
        </div>
        <div className="hr" />
        <div className="withdraw-transfer">
          <p>Total - USD</p>
          <p>0.00</p>
        </div>
        <div className="hr" />
      </div>
      <PaymentListItemCard title="Withdraw" onClick={() => {
        setIsRightSubDrawerOpen(true);
        setIsRightSubDrawerContent("select-withdarw-request");
      }} />
    </div>
  );
};

export default WithdrawPayment;
