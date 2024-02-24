import { Switch } from "antd";
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
    <div className="customToggle">
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
    </div>
  );
};

export default Toggle;
