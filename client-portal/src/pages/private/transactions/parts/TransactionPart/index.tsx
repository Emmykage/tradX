import { FC, useEffect, useMemo, useState } from "react";
import { Select, DatePicker } from "antd";
import { FillCaretDownIcon } from "../../../../../assets/icons";
import { ITransaction } from "@interfaces";
import { columns } from "../../dummy";
import TransactionTable from "../DataTable";

import "../../transactions.scss";
import "./transaction.scss";
import { dateFormter } from "helpers/dateFormter";
import useTransactions from "api/wallet/useTransactions";
import { useCookies } from "react-cookie";
import { useAppSelector } from "@store/hooks";
import { statusAndTypesList } from "../../constants";


interface TransactionPartProps {
  data: ITransaction[];
}

export const TransactionPart: FC<TransactionPartProps> = ({ data }) => {
  const [cookies] = useCookies(["access_token"]);

  const { wallets } = useAppSelector((state) => state.wallet);

  const [tableData, setTableData] = useState(data);

  const [currency, setCurrency] = useState<string>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [type, setType] = useState<string>();

  const { mutate: transactionsMutate } = useTransactions({});

  const accountsOptions = useMemo(
    () =>
      wallets.map(({ account_type__symbol, name }) => ({
        value: account_type__symbol,
        label: name,
      })),
    [wallets]
  );

  const typeOrStatusHandler = (value: string) => {
    const findItem = statusAndTypesList.filter((item) => item.value === value)[0];
    
    if (findItem) {
      setStatus(undefined);
      setType(undefined);
      
      if (findItem.type === "status") return setStatus(findItem?.value);
      return setType(findItem?.value);
    }
  };

  useEffect(() => {
    if (currency || startDate || endDate || status || type) {
      transactionsMutate(
        {
          token: cookies.access_token,
          options: {
            currency,
            date_from: startDate,
            date_to: endDate,
            status,
            type,
          },
        },
        {
          onSuccess: (data) => setTableData(data.results),
        }
      );
    }
  }, [currency, startDate, endDate, status, type]);

  return (
    <>
      <div className="user-options-bar user-options-transactions">
        <div className="user-option-control-item transaction-part">
          <label>Accounts</label>
          <Select
            onChange={setCurrency}
            options={accountsOptions}
            suffixIcon={<FillCaretDownIcon />}
          />
        </div>

        <div className="user-control-period">
          <div className="user-option-control-item transaction-part">
            <label>Period</label>
            <DatePicker
              size="large"
              placeholder="Start Date"
              format="YYYY-MM-DD"
              onChange={(event) => {
                if (event) setStartDate(dateFormter(event.toDate()));
              }}
            />
          </div>

          <span
            style={{
              height: "42px",
              padding: "0 1rem",
            }}
          >
            -
          </span>

          <div className="user-option-control-item transaction-part">
            <label>
              <br />
            </label>

            <DatePicker
              size="large"
              onChange={(event) => {
                if (event) setEndDate(dateFormter(event.toDate()));
              }}
              placeholder="End Date"
              format="YYYY-MM-DD"
            />
          </div>
        </div>

        <div className="user-option-control-item transaction-part">
          <label>Transaction Type or Status</label>
          <Select
            onChange={typeOrStatusHandler}
            options={statusAndTypesList}
            suffixIcon={<FillCaretDownIcon />}
          />
        </div>
      </div>
      {data ? <TransactionTable columns={columns} data={tableData} /> : null}
    </>
  );
};
export default TransactionPart;