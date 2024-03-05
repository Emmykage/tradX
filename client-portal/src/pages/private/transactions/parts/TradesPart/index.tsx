import { Tabs } from "antd";
import { FC, useState } from "react";
import TransactionTable from "../DataTable";
import { columns } from "../../dummy";

import "../../transactions.scss";
import "./trades.scss";
import UserTools from "./sections/UserTools";
import { ITransaction } from "@interfaces";

interface TradesPartProps {
  data: ITransaction[];
}
export const TradesPart: FC<TradesPartProps> = ({data}) => {
  const [tabKey, setTabKey] = useState<string>("fixedTime");
  const [tableData, setTableData] = useState(data);
  
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
      <UserTools
        tabs={items}
        tabKey={tabKey}
        setTabKey={setTabKey}
        setTableData={setTableData}
      />
      <TransactionTable columns={columns} data={tableData} />
    </>
  );
};

export default TradesPart;
