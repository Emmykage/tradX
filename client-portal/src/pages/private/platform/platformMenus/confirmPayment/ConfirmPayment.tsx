import { BlueCardIcon } from "../../../../../assets/icons";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import "./confirmPayment.scss";

const ConfirmPayment = () => {
  return (
    <div className="confirmPayment">
      <div className="header">
        <BlueCardIcon />
        <p>Payment Amount</p>
        <h2>EUR 250</h2>
      </div>
      <div className="body">
        <div className="bodyItem">
          <p>Payment Method</p>
          <div className="bodyItemCard">Bank Card</div>
        </div>
        <hr />
        <div className="bodyItem">
          <p>Deposit Account</p>
          <div className="bodyItemCard">Bank USD Account #2859844961</div>
        </div>
        <hr />
        <div className="bodyItem">
          <p>Currency</p>
          <div className="bodyItemCard">EUR</div>
        </div>
        <hr />
      </div>
      <p className="footerText">
        You will be redirected to the payment system page afterwards
      </p>
      <PrimaryButton Title="Confirm" onClick={() => null} />
    </div>
  );
};

export default ConfirmPayment;
