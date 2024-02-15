import { FC, useMemo } from 'react'
import { Select } from "antd";
import { FillCaretDownIcon } from '../../../../../assets/icons';
import { DataType } from '../../types';
import { columns } from '../../dummy';
import TransactionTable from '../DataTable';

import "../../transactions.scss";
import "./transaction.scss"

interface TransactionPartProps {
  data: DataType[];
}
export const TransactionPart:FC<TransactionPartProps> = ({ data }) => {
    const accountsOptions = useMemo(
      () => [
        { value: "all", label: "All Accounts" },
        { value: "usd", label: "USD Account" },
        { value: "EUR", label: "EURO Account" },
        { value: "BTC", label: "BITCOIN Account" },
        { value: "ETH", label: "ETHIRIOM Account" },
        { value: "$$", label: "Unknown Account" },
      ],
      []
    );
  return (
    <>
      <div className="user-options-bar user-options-transactions">
        <div className="user-option-control-item transaction-part">
          <label>Accounts</label>
          <Select
            onClick={(e) => console.log(e)}
            defaultValue="All Accounts"
            options={accountsOptions}
            suffixIcon={<FillCaretDownIcon />}
          />
        </div>

        <div className="user-control-period">
          <div className="user-option-control-item transaction-part">
            <label>Period</label>
            <Select
              onClick={(e) => console.log(e)}
              defaultValue="All Accounts"
              options={accountsOptions}
              suffixIcon={<FillCaretDownIcon />}
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

            <Select
              onClick={(e) => console.log(e)}
              defaultValue="All Accounts"
              options={accountsOptions}
              suffixIcon={<FillCaretDownIcon />}
            />
          </div>
        </div>

        <div className="user-option-control-item transaction-part">
          <label>Transaction Type or Status</label>
          <Select
            onClick={(e) => console.log(e)}
            defaultValue="All Accounts"
            options={accountsOptions}
            suffixIcon={<FillCaretDownIcon />}
          />
        </div>
      </div>
      <TransactionTable columns={columns} data={data} />
    </>
  );
}

export default TransactionPart