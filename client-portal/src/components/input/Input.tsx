import { Input as InputOriginal, InputProps as OriginalInputProps } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./input.scss";

interface InputProps extends OriginalInputProps {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  variant?: 1 | 2 | 3;
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
  variant = 2,
  ...rest
}) => {
  return (
    <div className="inputContainer">
      <MainItemCard
        variant={variant}
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
    </div>
  );
};

export default Input;
