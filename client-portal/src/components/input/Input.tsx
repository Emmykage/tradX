import { Input as InputOriginal, InputProps as OriginalInputProps } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./input.scss";

interface InputProps extends OriginalInputProps {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  title,
  className,
  icon,
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
    </MainItemCard>
  );
};

export default Input;
