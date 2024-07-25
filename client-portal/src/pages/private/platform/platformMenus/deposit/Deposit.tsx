import { Col, Row, Spin, Typography } from "antd";
import "./Deposit.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import { PaymentIcon, PromoCodeIcon } from "../../../../../assets/icons";
import { Dispatch, FC, SetStateAction, useCallback } from "react";
import { RightSubDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import SecondaryButton from "../../../../../components/secondaryButton/SecondaryButton";
import useStripeCheckout from "api/srtipe/useStripeCheckout";
import { useAppSelector } from "@store/hooks";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import IocnPlaceholder from "assets/icons/IocnPlaceholder";

interface DepositProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const Deposit: FC<DepositProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const { mutate: checkoutMutate, isPending } = useStripeCheckout({});

  const { amount, selectedPaymentMethod } = useAppSelector((state) => state.payment);
  const { selectedWallet } = useAppSelector((state) => state.wallet);

  const [cookies] = useCookies(["access_token"]);

  const checkoutHandler = useCallback(() => {
    // console.log(amount, 'here');
    if (amount && selectedWallet?.id) {
      return checkoutMutate(
        {
          amount,
          walletId: selectedWallet.id,
          token: cookies.access_token,
        },
        {
          onSuccess: (data) => {
            console.log({ data });
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
  }, [amount, selectedWallet?.id, cookies]);

  const paymentCheckoutHandler = useCallback(() => {
  
    if (amount && selectedPaymentMethod?.name) {
      setIsRightSubDrawerContent("deposit-confirm-payment");
      // return checkoutMutate(
      //   {
      //     amount,
      //     walletId: selectedWallet.id,
      //     token: cookies.access_token,
      //   },
      //   {
      //     onSuccess: (data) => {
      //       console.log({ data });
      //       return window.location.replace(data?.checkout_url);
      //     },
      //     // @ts-expect-error
      //     // TODO - Fix error message type error
      //     onError: (error) => toast.error(error?.message),
      //   }
      // );
    } else {
      toast.error("Amount or Payment method invalid");
    }
  }, [amount, selectedPaymentMethod?.name, cookies]);

  return (
    <div className="deposit">
      <Typography.Text className="deposit-subtext">
        {selectedWallet?.name}
      </Typography.Text>
      <div className="hr" />
      <div className="CurrentBalance">
        <p>Current Balance</p>
        <h3>
          {selectedWallet?.account_type__symbol}{" "}
          {selectedWallet?.available_balance}
        </h3>
      </div>
      <DepositCard
        account="Deposit Amount"
        amount={amount}
        currency={selectedWallet?.account_type__symbol || ""}
        CountryIcon={selectedWallet?.account_type__image || <IocnPlaceholder />}
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-deposit-amount");
        }}
      />
      <DepositCard
        account="Payment Method"
        amount={selectedPaymentMethod?.name}
        CountryIcon={selectedPaymentMethod?.methodIcon}
        // currency={selectedWallet?.account_type__symbol || ""}
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("payment-method");
        }}
      />
      {isPending ? (
        <Spin className="pending-spinner" size="large" />
      ) : (
        <Row gutter={16} className="buttonsContainer">
          <Col span={12}>
            <PrimaryButton
              disabled={!amount}
              onClick={() => {
                // todo - This flow is commented current time, until the back-end methods will be ready
                setIsRightSubDrawerOpen(true);
                paymentCheckoutHandler();
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
      )}
    </div>
  );
};

export default Deposit;
