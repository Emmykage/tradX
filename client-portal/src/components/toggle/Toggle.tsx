import { Switch } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./toggle.scss";

interface ToggleProps {
  label?: string;
  subtext?: string;
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}

const Toggle: React.FunctionComponent<ToggleProps> = ({
  label,
  subtext,
  onChange,
  defaultChecked = false,
}) => {
  return (
    <MainItemCard className="toggleContainer" variant={2}>
      <div className="toggleTextContainer">
        {label ? <p className="toggleLabel">{label}</p> : null}
        {subtext ? <p className="toggleSubtext">{subtext}</p> : null}
      </div>
      <Switch defaultChecked={defaultChecked} onChange={onChange} />
    </MainItemCard>
  );
};

export default Toggle;
