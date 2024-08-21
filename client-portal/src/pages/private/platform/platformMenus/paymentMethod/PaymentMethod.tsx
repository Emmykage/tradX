import { Button, Typography } from "antd";
import { FC, Dispatch, SetStateAction, useEffect, useState } from "react";
import { paymentMethodData, filterListButtons } from "./constants";
import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import "./PaymentMethod.scss";
import { RightSubDrawerContent } from "../../types";
import { PaymentMethodDataType } from "./types";
import { useDispatch } from "react-redux";
import { setPaymentMethod, setPaymentMethodList } from "@store/slices/payment";
import { useAppSelector } from "@store/hooks";
import useQRCodeList from "api/wallet/useQrCodeList";
import { useCookies } from "react-cookie";

interface PaymentMethodProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PaymentMethod: FC<PaymentMethodProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const dispatch = useDispatch();
  const { paymentMethodList,selectedPaymentMethod } = useAppSelector((state) => state.payment);
  const [paymentType, setPaymentType] = useState<string>("all");
  const [cookies] = useCookies(["access_token"]);

    // GET the web-socket ticket for validation after the app running
    const { mutate } = useQRCodeList({
      onSuccess: (data) => {
       dispatch(setPaymentMethodList(data.results))
      },
    });

    useEffect(() => {
      console.log('effect runned');
        mutate(cookies.access_token);
    }, []);

  const titleHandler = (titleKey: string) => {
    switch (titleKey) {
      case "bank":
        return "Bank Cards";
      case "epayment":
        return "E-Payment Systems";
      case "crypto":
        return "Crypto";
      default:
        return "All";
    }
  };

  // useEffect(() => {
  //   console.log(Object.keys(paymentMethodData));
  // }, []);

  const {themeSelect} = useAppSelector(state => state.themeBg)
  console.log(paymentMethodList);
  console.log(paymentMethodList?.map((item)=>item.type));
  const paymentMethodListWithAll = [
    { type: "all" },
    ...(paymentMethodList || []),
  ];
  const filteredPaymentMethods = paymentMethodList?.filter((method) => 
    paymentType === "all" || method.type === paymentType
  );
  console.log(filteredPaymentMethods);
  return (
    <div className={themeSelect}>
      <div className="payment-methods-filter-btns">
        <ArrowsSlider>
          
          {
          
          paymentMethodListWithAll?.map((paymentMethods) => {
            console.log(paymentMethods.type);
           return (
            <Button
              className="payment-methods-filter-btn"
              key={paymentMethods.type}
              onClick={() => setPaymentType(paymentMethods.type)}
            >
              {titleHandler(paymentMethods.type)}
            </Button>
          )})}
        </ArrowsSlider>
      </div>

      <div>
        {paymentType === "all" ? (
          <>
            {paymentMethodListWithAll?.map((method) => {
            
              if (method) {
                return (
                  <div key={method.type} className="payment-method-list">
                    <Typography.Text className="payment-method-list-title">
                      {titleHandler(method?.type).toUpperCase()}
                    </Typography.Text>
                    {filteredPaymentMethods
  ?.filter(item => method.type === "all" || item.type === method.type)
  .map((item, index: number) => (
    <div
      className={`payment-method-list-item ${selectedPaymentMethod?.name === item?.name ? 'active-payment-method-list-item' : ''}`}
      key={`${index}-${item.name}`}
      onClick={() => {
        if (item?.type === "crypto") {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("crypto-payment");
          dispatch(setPaymentMethod(item));

        } else {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("payments-deposit");
          dispatch(setPaymentMethod(item));
        }
      }}
    >
      <img src={item.icon} alt="" />
      <Typography.Text>{item.name}</Typography.Text>
    </div>
  ))}

                  </div>
                );
              }
            })}
          </>
        ) : (
          <div>
            <Typography.Text className="payment-method-list-title">
              {titleHandler(paymentType).toUpperCase()}
            </Typography.Text>
            {filteredPaymentMethods?.map((item, index: number) => (
              <div
                className="payment-method-list-item"
                key={index}
                onClick={() => {
                  
                  if (paymentType === "crypto") {
                    setIsRightSubDrawerOpen(true);
                    setIsRightSubDrawerContent("crypto-payment");
                    dispatch(setPaymentMethod(item));

                  } else {
                    setIsRightSubDrawerOpen(true);
                    setIsRightSubDrawerContent("payments-deposit");
                    dispatch(setPaymentMethod(item));
                  }
                  
                }}
              >
                <img src={item.icon} alt="" />
                 <Typography.Text>{item.name}</Typography.Text>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
