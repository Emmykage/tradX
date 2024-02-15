
import { Button, Select, Tabs } from "antd";
import { FC, useMemo, useState } from "react";
import { FillCaretDownIcon } from "../../../../../assets/icons";
import { DataType } from "../../types";
import TransactionTable from "../DataTable";
import { accountsOptions, columns } from "../../dummy";

import "../../transactions.scss";
import "./trades.scss"
import UserTools from "./sections/UserTools";




interface TradesPartProps {
  data: DataType[];
}
export const TradesPart:FC<TradesPartProps> = ({ data }) => {
  const [tabKey, setTabKey] = useState<string>("fixedTime");

  const items = [
      {
        label: "Fixed Time",
        key: "fixedTime",
      },
      {
        label: "Forex",
        key: "forex",
      },
    ];

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="middle"
        items={items}
        onChange={setTabKey}
        className="transactions-trades-tabs"
      />
      <UserTools tabs={items} tabKey={tabKey} setTabKey={setTabKey} />
      <TransactionTable columns={columns} data={data} />
    </>
  );
}

export default TradesPart