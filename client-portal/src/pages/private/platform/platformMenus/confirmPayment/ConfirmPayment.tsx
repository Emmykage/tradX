import { Dispatch, FC, SetStateAction, useCallback } from "react";
import { useAppSelector } from "@store/hooks";
import { BlueCardIcon } from "../../../../../assets/icons";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import "./confirmPayment.scss";
import { RightSubDrawerContent } from "../../types";

interface ConfirmPaymentProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const ConfirmPayment: FC<ConfirmPaymentProps> = (
  {
    setIsRightSubDrawerOpen,
    setIsRightSubDrawerContent,
  }
) => {
  const { amount, selectedPaymentMethod } = useAppSelector((state) => state.payment);

  const handleConfirmationClick = () => {
      if(selectedPaymentMethod?.name ==="Bank Cards"){
          setIsRightSubDrawerContent("card-details-menu");
        
        }else{
        setIsRightSubDrawerContent("card-details-menu");
        setIsRightSubDrawerContent("deposit-confirm-payment");
      }
  };
  return (
    <div className="confirmPayment">
      <div className="header">
        {/* <BlueCardIcon /> */}
        {selectedPaymentMethod?.methodIcon}
        <p>Payment Amount</p>
        <h2>EUR {amount}</h2>
      </div>
      <div className="body">
        <div className="bodyItem">
          <p>Payment Method</p>
          <div className="bodyItemCard">{selectedPaymentMethod?.name}</div>
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
      <PrimaryButton Title="Confirm" onClick={() => handleConfirmationClick()} />
    </div>
  );
};

export default ConfirmPayment;
