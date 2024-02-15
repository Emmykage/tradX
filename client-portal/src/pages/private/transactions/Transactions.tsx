import { useCallback, useMemo, useState } from "react";

import { TransactionPart, TradesPart, ProfilePart } from "./parts";
import { tableData } from "./dummy";

import "./transactions.scss";

interface TransactionsProps {};

const Transactions: React.FunctionComponent<TransactionsProps> = () => {
  const [visiableIndex, setVisiableIndex] = useState(0);
  const headers = useMemo(() => ["Transactions", "Trades", "Profile"], []);

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

  return (
    <div className="transactions-container">
        <ul className="tabs-headers">
          {headers.map((item, index) => (
            <li
              key={`${item}-${index}`}
              // @ts-expect-error
              isActive={index === visiableIndex && "true"}
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
