import { FC } from 'react';
import { Button, Table, TableColumnsType } from "antd";

import { DataType } from '../../types';

import "../../transactions.scss";
import "./dataTable.scss";


interface TransactionTableProps {
  data: DataType[];
  columns: TableColumnsType<DataType>;
}
const TransactionTable: FC<TransactionTableProps> = ({ data, columns }) => {
  return (
    <>
      {data.length === 0 ? (
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
            {data.map((elm) => (
              <div className="custom-transactions-table-item-body">
                <div className="custom-transactions-table-child">
                  <p>{elm.dateAndTime}</p>
                  <p style={{
                    whiteSpace: "pre-line"
                  }}>{elm.type}</p>
                  <p>{elm.paymentSystem}</p>
                </div>
                <div className="custom-transactions-table-child">
                  <p>{elm.status}</p>
                  <div style={{display:"flex", flexDirection:"column"}}>
                    <Button>Copy</Button>
                    <div style={{marginTop: "14px"}}>
                    <p>
                    {elm.account}
                    </p>
                    <p>
                    {elm.ammount}
                    </p>
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

export default TransactionTable