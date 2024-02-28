import { Button, Typography } from "antd";
import { FC, Dispatch, SetStateAction, useEffect, useState } from "react";
import { paymentMethodData, filterListButtons } from "./constants";
import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";

import "./PaymentMethod.scss";
import { RightSubDrawerContent } from "../../types";
import { PaymentMethodDataType } from "./types";

interface PaymentMethodProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PaymentMethod: FC<PaymentMethodProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const [paymentType, setPaymentType] = useState<string>("All");

  const titleHandler = (titleKey: string) => {
    switch (titleKey) {
      case "bankCards":
        return "Bank Cards";
      case "ePaymentSystems":
        return "E-Payment Systems";
      case "crypto":
        return "Crypto";
      default:
        return "All";
    }
  };

  useEffect(() => {
    console.log(Object.keys(paymentMethodData));
  }, []);

  return (
    <div>
      <div className="payment-methods-filter-btns">
        <ArrowsSlider>
          {filterListButtons.map((paymentType: string) => (
            <Button
              className="payment-methods-filter-btn"
              key={paymentType}
              onClick={() => setPaymentType(paymentType)}
            >
              {titleHandler(paymentType)}
            </Button>
          ))}
        </ArrowsSlider>
      </div>

      <div>
        {paymentType === "All" ? (
          <>
            {Object.keys(paymentMethodData).map((method) => {
              const paymentMethod =
                paymentMethodData[method as keyof PaymentMethodDataType];
              if (paymentMethod && paymentMethod.length > 0) {
                return (
                  <div key={method} className="payment-method-list">
                    <Typography.Text className="payment-method-list-title">
                      {titleHandler(method).toUpperCase()}
                    </Typography.Text>
                    {paymentMethod.map((item, index: number) => (
                      <div
                        className="payment-method-list-item"
                        key={`${index}-${item.name}`}
                        onClick={() => {
                         if (method === "crypto") {
                           setIsRightSubDrawerOpen(true);
                           setIsRightSubDrawerContent("crypto-payment");
                         } else {
                           setIsRightSubDrawerOpen(true);
                           setIsRightSubDrawerContent("payments-deposit");
                         }
                        }}
                      >
                        {item.methodIcon}{" "}
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
            {paymentMethodData[paymentType as keyof PaymentMethodDataType]?.map((item, index: number) => (
              <div
                className="payment-method-list-item"
                key={index}
                onClick={() => {
                  
                  if (paymentType === "crypto") {
                    setIsRightSubDrawerOpen(true);
                    setIsRightSubDrawerContent("crypto-payment");
                  } else {
                    setIsRightSubDrawerOpen(true);
                    setIsRightSubDrawerContent("payments-deposit");
                  }
                  
                }}
              >
                {item.methodIcon} <Typography.Text>{item.name}</Typography.Text>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
