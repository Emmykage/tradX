import { FC } from "react";
import { Button, Table, TableColumnsType } from "antd";
import moment from "moment";

import { ITransaction } from "@interfaces";

import {
  StatusHandler,
  TransferTypeHandler,
  methodIconHandler,
} from "../../helpers";
import "../../transactions.scss";
import "./dataTable.scss";

interface TransactionTableProps {
  data: ITransaction[];
  columns: TableColumnsType<ITransaction>;
}
const TransactionTable: FC<TransactionTableProps> = ({ data, columns }) => {
  return (
    <>
      {data?.length === 0 ? (
        <>
          <div className="user-options-bar report-section">
            <p className="report-msg-text">
              You can get this report in an emaill. We’ll send it to
              support@moneybee.loan
            </p>
            <Button className="get-report-btn">Get Report</Button>
          </div>
          <div className="user-options-bar no-data-available-section">
            <p>No data available</p>
          </div>
        </>
      ) : (
        <div className="transaction-table-body">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="small"
            className="custom-table-pc-view"
          />
          <div className="custom-table-mobile-view">
            {data?.map((elm) => (
              <div className="custom-transactions-table-item-body">
                <div className="custom-transactions-table-child">
                  <p>
                    {moment(elm.created_at).format("Do MMM YYYY")}
                    <br />
                    {moment(elm.created_at).format("hh:mm:ss")}
                  </p>
                  <p
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    <TransferTypeHandler type={elm.type} />
                    <p>{elm.id}</p>
                  </p>

                  <div>{methodIconHandler("Bank Card")}</div>
                </div>
                <div className="custom-transactions-table-child">
                  <StatusHandler status={elm.status} />
                  <div className="amount-container">
                    <Button>Copy</Button>
                    <div style={{ marginTop: "14px" }}>
                      <p>{elm.currency}</p>
                      <p>{elm.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionTable;
