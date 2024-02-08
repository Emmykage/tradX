import { Input as InputOriginal, InputProps as OriginalInputProps } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./input.scss";

interface InputProps extends OriginalInputProps {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  title,
  className,
  icon,
  suffixIcon,
  defaultValue,
  onChange,
  type,
  ...rest
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
        <InputOriginal
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          type={type}
          {...rest}
        />
      </div>
      {suffixIcon ? <div className="suffixIcon">{suffixIcon}</div> : null}
    </MainItemCard>
  );
};

export default Input;
