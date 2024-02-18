import { ReactNode } from "react";
import { Select as SelectOriginal } from "antd";
import { DropdownIcon } from "../../assets/icons";
import "./selectList.scss";

interface SelectProps {
  handleChange?: (value: any) => void;
  onClick?: (value: any) => void;
  onBlur?: (value: any) => void;
  options?: { value: string; label: string | ReactNode }[];
  defaultValue?: string;
  label: string;
  icon?: ReactNode;
  background?: string;
  height?: string;
}

const Select: React.FunctionComponent<SelectProps> = ({
  handleChange,
  onClick,
  onBlur,
  options = [],
  defaultValue = "",
  label,
  icon,
  background,
  height,
}) => {
  return (
    <div className={`selectContainer`}>
      <div className={`selectList ${icon ? "withIcon" : ""}`}>
        {icon ? <div className="iconContainer">{icon}</div> : null}
        {label && <label>{label}</label>}
        <SelectOriginal
          defaultValue={defaultValue}
          style={{ width: 120 }}
          onChange={handleChange}
          options={options}
          suffixIcon={<DropdownIcon />}
          rootClassName={`customSelectDropdown ${height ? height : ""} ${
            background ? background : ""
          }`}
          onClick={onClick}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default Select;
