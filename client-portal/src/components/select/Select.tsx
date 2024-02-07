import { ReactNode } from "react";
import { Select as SelectOriginal } from "antd";
import { DropdownIcon } from "../../assets/icons";
import "./selectList.scss";

interface SelectProps {
  handleChange?: (value: any) => void;
  options?: { value: string; label: string }[];
  defaultValue?: string;
  label: string;
  icon?: ReactNode;
}

const Select: React.FunctionComponent<SelectProps> = ({
  handleChange,
  options = [],
  defaultValue = "",
  label,
  icon,
}) => {
  return (
    <div className="selectContainer">
      <div className={`selectList ${icon ? "withIcon" : ""}`}>
        {icon ? <div className="iconContainer">{icon}</div> : null}
        {label && <label>{label}</label>}
        <SelectOriginal
          defaultValue={defaultValue}
          style={{ width: 120 }}
          onChange={handleChange}
          options={options}
          suffixIcon={<DropdownIcon />}
          rootClassName="customSelectDropdown"
        />
      </div>
    </div>
  );
};

export default Select;
