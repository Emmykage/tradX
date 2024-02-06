import { Switch } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./toggle.scss";

interface ToggleProps {
  label?: string;
  subtext?: string;
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  infoText?: string;
  onClickInfo?: () => void;
}

const Toggle: React.FunctionComponent<ToggleProps> = ({
  label,
  subtext,
  onChange,
  defaultChecked = false,
  infoText,
  onClickInfo,
}) => {
  return (
    <MainItemCard className="customToggle" variant={2} pointer={false}>
      <div className="toggleContainer">
        <div className="toggleTextContainer">
          {label ? <p className="toggleLabel">{label}</p> : null}
          {subtext ? <p className="toggleSubtext">{subtext}</p> : null}
        </div>
        <Switch defaultChecked={defaultChecked} onChange={onChange} />
      </div>
      {infoText ? (
        <p className="infoText" onClick={onClickInfo}>
          {infoText}
        </p>
      ) : null}
    </MainItemCard>
  );
};

export default Toggle;
