import { Input as InputOriginal } from "antd";
import "./input.scss";
import MainItemCard from "../mainItemCard/MainItemCard";

interface InputProps {
  placeholder?: string;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  title,
  className,
  icon,
}) => {
  return (
    <MainItemCard
      variant={2}
      pointer={false}
      className={`input_main ${className ? className : ""}`}
    >
      {icon ? <div className="inputIcon">{icon}</div> : null}
      <div className="inputContainer">
        {title ? <label>{title}</label> : null}
        <InputOriginal placeholder={placeholder} />
      </div>
    </MainItemCard>
  );
};

export default Input;
