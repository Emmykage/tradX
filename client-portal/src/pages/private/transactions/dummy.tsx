import { TableColumnsType } from "antd";
import { DataType } from "./types";

export const columns: TableColumnsType<DataType> = [
  {
    title: "Date and Time",
    dataIndex: "dateAndTime",
    key: "dateAndTime",
    render: (value) => <span>{value}</span>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (value) => <span>{value}</span>,
  },
  {
    title: "Payment System",
    dataIndex: "paymentSystem",
    key: "paymentSystem",
    render: (value) => <span>{value}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (value) => <span>{value}</span>,
  },
  {
    title: "Account",
    dataIndex: "account",
    key: "account",
    render: (value) => <span>{value}</span>,
  },
  {
    title: "Ammount",
    dataIndex: "ammount",
    key: "ammount",
    render: (value) => <span>{value}</span>,
  },
];

export const tableData: DataType[] | [] = [
  {
    dateAndTime: "30th Jan. 2024 07:31:24",
    type: "Deposit Request no. 7767578987",
    paymentSystem: "Bank Card",
    status: "Pending",
    account: "USD Account",
    ammount: "+30.00",
  },
  {
    dateAndTime: "30th Jan. 2024 07:31:24",
    type: `Deposit \n Request no. 7767578987`,
    paymentSystem: "Bank Card",
    status: "Failed",
    account: "USD Account",
    ammount: "+30.00",
  },
];