import { Input as InputOriginal } from "antd";
import "./input.scss";
import MainItemCard from "../mainItemCard/MainItemCard";

interface InputProps {
  placeholder?: string;
  title?: string;
  className?: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  title,
  className,
}) => {
  return (
    <MainItemCard
      variant={2}
      pointer={false}
      className={`input_main ${className ? className : ""}`}
    >
      {title ? <label>{title}</label> : null}
      <InputOriginal placeholder={placeholder} />
    </MainItemCard>
  );
};

export default Input;
