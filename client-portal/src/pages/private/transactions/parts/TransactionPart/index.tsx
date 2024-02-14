import { FC, useMemo } from 'react'
import { Select } from "antd";
import { FillCaretDownIcon } from '../../../../../assets/icons';
import { DataType } from '../../types';
import { columns } from '../../dummy';
import TransactionTable from '../DataTable';

import "../../transactions.scss";

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
      <div className="user-options-bar">
        <div className="user-option-control-item">
          <label>Accounts</label>
          <Select
            onClick={(e) => console.log(e)}
            defaultValue="All Accounts"
            options={accountsOptions}
            suffixIcon={<FillCaretDownIcon />}
          />
        </div>

        <div style={{ display: "flex", alignItems: "end" }}>
          <div className="user-option-control-item">
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

          <div className="user-option-control-item">
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

        <div className="user-option-control-item">
          <label>Accounts</label>
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