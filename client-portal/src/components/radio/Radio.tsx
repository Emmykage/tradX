import Radio from "antd/es/radio";
import "./radio.scss";

interface RadioProps {
  label?: string;
  id?: string;
  subtext?: string;
  onChange?: () => void;
  checked?: boolean;
  infoText?: string;
  onClickInfo?: () => void;
}

const RadioInput: React.FunctionComponent<RadioProps> = ({
  label,
  subtext,
  onChange,
  checked = false,
  infoText,
  id="radio-button",
  onClickInfo,
}) => {

    return (
        <div className="customRadio">
            <input type="radio" id={id} checked={checked} onChange={onChange} />
            <label htmlFor={id} className="radio-label">{label}</label>
        </div>
    )
};

export default RadioInput;
