import { CardsIcons, UsdIcon2 } from "../../../../../assets/icons";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import DepositInput from "../../../../../components/depositInput/DepositInput";
import "./WithdrawPayment.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";

const WithdrawPayment = () => {
  return (
    <div className="withdraw-payment">
      {/* <div className="withdrawTitle">Withdraw</div> */}
      <div>
        <DepositCard
          CountryIcon={<UsdIcon2 />}
          account="From USD Account"
          amount="USD 30"
          icon
        />
        <DepositCard
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
      <PaymentListItemCard title="Withdraw" />
    </div>
  );
};

export default WithdrawPayment;
