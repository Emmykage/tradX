import { Dispatch, FC, SetStateAction } from "react";
import { DatePicker, Select } from "antd";
import { CalendarIcon, FillCaretDownIcon } from "../../../../../../assets/icons";
import { accountsOptions } from "../../../dummy";


import "../trades.scss";

interface UserToolsProps {
  tabKey: string;
  setTabKey: Dispatch<SetStateAction<string>>;
  tabs: {
    label: string;
    key: string;
  }[];
}

const UserTools:FC<UserToolsProps> = ({ setTabKey, tabs }) => {
  
  return (
    <div className="user-options-bar user-options-trades">
      <div className="user-option-control-item trades-user-option-select-box tradex-select-tabkey">
        <Select
          onChange={setTabKey}
          defaultValue="Forex"
          options={tabs}
          suffixIcon={<FillCaretDownIcon />}
        />
      </div>

      <div className="user-option-control-item trades-user-option-select-box">
        <label>Account Type</label>
        <Select
          onClick={(e) => console.log(e)}
          defaultValue="All Accounts"
          options={accountsOptions}
          suffixIcon={<FillCaretDownIcon />}
        />
      </div>
      <div className="user-option-control-item trades-user-option-select-box">
        <label>Assest</label>
        <Select
          onClick={(e) => console.log(e)}
          defaultValue="All"
          options={accountsOptions}
          suffixIcon={<FillCaretDownIcon />}
        />
      </div>

      <div className="user-option-control-item trades-user-option-select-box select-item-status">
        <label>Status</label>
        <Select
          onClick={(e) => console.log(e)}
          defaultValue="All"
          options={accountsOptions}
          suffixIcon={<FillCaretDownIcon />}
        />
      </div>
      <div className="trades-select-date-pickers">
        <div className="user-option-control-item trades-user-option-select-box">
          <DatePicker
            size="large"
            suffixIcon={<CalendarIcon />}
            className="trades-user-tools-date-picker"
          />
        </div>
        <p>-</p>
        <div className="user-option-control-item trades-user-option-select-box">
          <DatePicker
            size="large"
            suffixIcon={<CalendarIcon />}
            className="trades-user-tools-date-picker"
          />
        </div>
      </div>
    </div>
  );
};

export default UserTools;
