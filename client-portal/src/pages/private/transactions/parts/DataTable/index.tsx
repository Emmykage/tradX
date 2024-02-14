import { FC } from 'react';
import { Table, TableColumnsType } from "antd";

import "../../transactions.scss";
import { DataType } from '../../types';

interface TransactionTableProps {
  data: DataType[];
  columns: TableColumnsType<DataType>;
}
const TransactionTable: FC<TransactionTableProps> = ({ data, columns }) => {
  return (
    <div className="transaction-tab-body">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default TransactionTable