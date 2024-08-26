import { Button, Typography } from "antd";
import { FC, Dispatch, SetStateAction, useState } from "react";
import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import "./PaymentMethod.scss";
import { RightSubDrawerContent } from "../../types";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "@store/slices/payment";
import { useAppSelector } from "@store/hooks";

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
  console.log("unmapped",paymentMethodList);
  console.log("mapped list",paymentMethodList?.map((item)=>item.type));
  const paymentMethodListWithAll = [
    { type: "all" },
    ...(paymentMethodList || []),
  ];
  const allPaymentMethods = paymentMethodListWithAll?.filter(() => true);
  const filteredPaymentMethods = paymentMethodListWithAll?.filter(
    (method) => paymentType === "all" || method.type === paymentType
  );

  // Group payment methods by their type
  const groupedPaymentMethods = filteredPaymentMethods?.reduce<{ [type: string]: any[] }>(
    (groups, item) => {
      const group = groups[item.type] || [];
      group.push(item);
      groups[item.type] = group;
      return groups;
    },
    {}
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
      
    <div>
      {/* Display "All" category */}
      {
        paymentType === 'all' && (
          
      
      <div className="payment-method-list">
        <Typography.Text className="payment-method-list-title">
          {titleHandler("all").toUpperCase()}
        </Typography.Text>
        {allPaymentMethods?.map((item, index) => (
          <div
            className={`payment-method-list-item ${
              selectedPaymentMethod?.name === item?.name ? 'active-payment-method-list-item' : ''
            }`}
            key={`${index}-${item.name}`}
            onClick={() => {
              setIsRightSubDrawerOpen(true);
              setIsRightSubDrawerContent(item.type === "crypto" ? "crypto-payment" : "payments-deposit");
              dispatch(setPaymentMethod(item));
            }}
          >
            <img src={item.icon} alt={item.name} />
            <Typography.Text>{item.name}</Typography.Text>
          </div>
        ))}
      </div>
      ) 
    }
      {/* Display each type except "All" */}
      {Object.entries(groupedPaymentMethods || {})
        .filter(([type]) => type !== "all")
        .map(([type, items]) => (
          <div key={type} className="payment-method-list">
            <Typography.Text className="payment-method-list-title">
              {titleHandler(type).toUpperCase()}
            </Typography.Text>
            {items.map((item, index) => (
              <div
                className={`payment-method-list-item ${
                  selectedPaymentMethod?.name === item?.name ? 'active-payment-method-list-item' : ''
                }`}
                key={`${index}-${item.name}`}
                onClick={() => {
                  setIsRightSubDrawerOpen(true);
                  setIsRightSubDrawerContent(item.type === "crypto" ? "crypto-payment" : "payments-deposit");
                  dispatch(setPaymentMethod(item));
                }}
              >
                <img src={item.icon} alt={item.name} />
                <Typography.Text>{item.name}</Typography.Text>
              </div>
            ))}
          </div>
        ))}
    </div>
  

           </div>
    </div>
  );
};

export default PaymentMethod;
