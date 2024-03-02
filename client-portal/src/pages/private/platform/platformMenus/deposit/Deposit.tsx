import { Col, Row, Typography } from "antd";
import "./Deposit.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import {
  EuroFlag,
  PaymentIcon,
  PromoCodeIcon,
} from "../../../../../assets/icons";
import { Dispatch, FC, SetStateAction, useCallback, useMemo } from "react";
import { RightSubDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import SecondaryButton from "../../../../../components/secondaryButton/SecondaryButton";
import useStripeCheckout from "api/srtipe/useStripeCheckout";
import { useAppSelector } from "@store/hooks";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

interface DepositProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const Deposit: FC<DepositProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  
  const { mutate: checkoutMutate } = useStripeCheckout({});

  const { amount } = useAppSelector((state) => state.payment)
  const { wallets } = useAppSelector((state) => state.wallet);

  const [cookies] = useCookies(["access_token"]);

  const walletId = useMemo(() => {
    if(wallets.length > 0) return wallets[0]?.id;
    return undefined;
  },[])
  

  const checkoutHandler = useCallback(() => {
    if (amount && walletId) {
      return checkoutMutate(
        {
          amount,
          walletId,
          token: cookies.access_token,
        },
        {
          onSuccess: (data) => {
            console.log({data});
            return window.location.replace(data?.checkout_url);
          },
          // @ts-expect-error
          // TODO - Fix error message type error
          onError: (error) => toast.error(error?.message),
        }
      );
    } else {
      toast.error("Amount or Walled invalid");
    }
  }, [amount, walletId, cookies]);

  return (
    <div className="deposit">
      <Typography.Text className="deposit-subtext">
        USD Account #65715654
      </Typography.Text>
      <div className="hr" />
      <div className="CurrentBalance">
        <p>Current Balance</p>
        <h3>EUR 00.0</h3>
      </div>
      <DepositCard
        account="Deposit Amount"
        amount={amount}
        currency="EUR"
        CountryIcon={<EuroFlag />}
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-deposit-amount");
        }}
      />
      {/* <DepositCard
        account="Payment Method"
        amount="Card"
        CountryIcon={<PaymentIcon />}
        disabled
        icon
        onClick={() => {
          // setIsRightSubDrawerOpen(true);
          // setIsRightSubDrawerContent("payment-method");
        }}
      /> */}
      <Row gutter={16} className="buttonsContainer">
        <Col span={12}>
          <PrimaryButton
            disabled={!amount}
            onClick={() => {
              // todo - This flow is commented current time, until the back-end methods will be ready
              // setIsRightSubDrawerOpen(true);
              // setIsRightSubDrawerContent("card-details-menu");
              // ** Calling the checkout end-point when the user click's on next
              checkoutHandler();
            }}
            className="payment-card-next-button"
            Title="Next"
          />
        </Col>
        <Col span={12}>
          <SecondaryButton
            Title="Promo Code"
            className="PromoCode"
            icon={<PromoCodeIcon />}
            onClick={() => {
              setIsRightSubDrawerOpen(true);
              setIsRightSubDrawerContent("payments-promo-code");
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Deposit;
