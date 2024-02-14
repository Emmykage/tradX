
import { Button, Select, Tabs } from "antd";
import { FC, useState } from "react";
import { FillCaretDownIcon } from "../../../../../assets/icons";
import { DataType } from "../../types";
import TransactionTable from "../DataTable";
import { columns } from "../../dummy";

import "../../transactions.scss";
import "./trades.scss"

const items = [
      {
        label: "Fixed Time",
        key: "fixedTime",
        children: "Fixed Time Tab",
      },
      {
        label: "Forex",
        key: "forex",
        children: "Forex Tab Content",
      },
    ];

 const accountsOptions = [
        { value: "all", label: "All Accounts" },
        { value: "usd", label: "USD Account" },
        { value: "EUR", label: "EURO Account" },
        { value: "BTC", label: "BITCOIN Account" },
        { value: "ETH", label: "ETHIRIOM Account" },
        { value: "$$", label: "Unknown Account" },
      ];


interface TradesPartProps {
  data: DataType[];
}
export const TradesPart:FC<TradesPartProps> = ({ data }) => {
  const [currentTabKey, setCurrentTabKey] = useState("fixedTime");

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="middle"
        items={items}
        onChange={(e) => console.log(e)}
      />
      <div className="user-options-bar">
        <div className="user-option-control-item">
          <label>Account Type</label>
          <Select
            onClick={(e) => console.log(e)}
            defaultValue="All Accounts"
            options={accountsOptions}
            suffixIcon={<FillCaretDownIcon />}
          />
        </div>
      </div>
      <div className="user-options-bar">
        <p className="report-msg-text">
          You can get this report in an emaill. We’ll send it to
          support@moneybee.loan
        </p>
        <Button className="get-report-btn" >Get Report</Button>
      </div>

      {data.length === 0 ? (
        <div className="user-options-bar">
          <p>No data available</p>
        </div>
      ) : (
        <TransactionTable columns={columns} data={data} />
      )}
    </>
  );
}

export default TradesPart