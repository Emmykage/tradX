import { useCallback, useMemo, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";

import { TransactionPart, TradesPart, ProfilePart } from "./parts";
import { tableData } from "./dummy";

import "./transactions.scss";

interface TransactionsProps {};

const Transactions: React.FunctionComponent<TransactionsProps> = () => {
  const [visiableIndex, setVisiableIndex] = useState(0);
  const headers = useMemo(() => ["Transactions", "Trades", "Profile"], []);

    const { t, i18n } = useTranslation();
    
  const tabsBodyHandler = useCallback(
    () => {
      switch (visiableIndex) {
        case 0:
          return <TransactionPart data={tableData} />;
        case 1:
          return <TradesPart data={[]} />;
        case 2:
          return <ProfilePart />;
        default:
          return <TransactionPart data={tableData} />;
      }
    },
    [visiableIndex]
  );

  console.log(t("title"))

  return (
    <div className="transactions-container">
      {t("title")}
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
            {item}
          </li>
        ))}
      </ul>
      {tabsBodyHandler()}
    </div>
  );
};

export default Transactions;
