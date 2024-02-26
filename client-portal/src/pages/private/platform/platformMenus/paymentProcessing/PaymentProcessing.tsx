import { TimerIcon2, UsdtIcon } from "../../../../../assets/icons";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import "./paymentProcessing.scss";

const PaymentProcessing = () => {
  return (
    <div className="paymentProcessing">
      <div className="header">
        <TimerIcon2 />
        <h2>Payment still being processed</h2>
        <p>We’ll notify you once your funds have been deposited</p>
      </div>
      <div className="paymentBody">
        <div className="bodyHeader">
          <UsdtIcon />
          <h2>250 EUR</h2>
        </div>
        <div className="paymentBodyCard">Estimated deposit time: 2 hours</div>
      </div>
      <PrimaryButton className="button" Title="Finalize" onClick={() => null} />
    </div>
  );
};

export default PaymentProcessing;
