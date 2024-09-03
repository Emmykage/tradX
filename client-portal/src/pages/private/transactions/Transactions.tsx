import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";

import { TransactionPart, TradesPart, ProfilePart } from "./parts";

import "./transactions.scss";
import { useCookies } from "react-cookie";
import useTransactions from "api/wallet/useTransactions";

interface TransactionsProps {}

const Transactions: React.FunctionComponent<TransactionsProps> = () => {
  const [cookies] = useCookies(["access_token"]);

  const [visiableIndex, setVisiableIndex] = useState(0);
  const headers = useMemo(() => ["Transactions", "Trades", "Profile"], []);

  const { mutate, data:newData } = useTransactions({
    onSuccess: () => {},
    onError: (error) => {
      console.log("fetching wallets error", error);
    },
  });
  const data:any = []
  
  console.log(data);

  useEffect(() => {
    mutate({token: cookies.access_token});
  }, [cookies.access_token, mutate]);

  const { t } = useTranslation();

  const tabsBodyHandler = useCallback(() => {
    switch (visiableIndex) {
      case 0:
        return data ? <TransactionPart data={data.results} /> : "Loading...";
      case 1:
        return <TradesPart data={data.results} />;
      case 2:
        return <ProfilePart />;
      default:
        return data ? <TransactionPart data={data.results} /> : "Loading...";
    }
  }, [visiableIndex, data]);

  return (
    <div className="transactions-container">
      <ul className="tabs-headers">
        {headers.map((item, index) => (
          <li
            key={`${item}-${index}`}
            style={{
              color: index === visiableIndex ? "#0094FF" : "#67696D",
              borderBottom:
                index === visiableIndex ? "0.125rem solid #0094FF" : undefined,
            }}
            onClick={() => setVisiableIndex(index)}
          >
            {t(item)}
          </li>
        ))}
      </ul>
      {tabsBodyHandler()}
    </div>
  );
};

export default withTranslation()(Transactions);
