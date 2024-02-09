import { Radio, RadioChangeEvent } from "antd";
import "./addAccount.scss";
import { useState } from "react";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";

interface AddAccountMenuProps {}

const AddAccountMenu: React.FunctionComponent<AddAccountMenuProps> = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="addAccount">
      <p className="menuText">
        Select the type of currency of the account you plan to trade with.
      </p>

      <Radio.Group onChange={onChange} value={value}>
        <div className="radioGroupVerticle">
          <Radio value={1}>USD - U.S.dollar</Radio>
          <Radio value={2}>USDT - USDT</Radio>
          <Radio value={3}>EUR - Euro</Radio>
        </div>
      </Radio.Group>

      <MenuListCard className="nextButton" title="Next" textCenter />
    </div>
  );
};

export default AddAccountMenu;
