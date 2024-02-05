import { Input as InputOriginal } from "antd";
import "./input.scss";
import MainItemCard from "../mainItemCard/MainItemCard";

interface InputProps {
  placeholder?: string;
  title?: string;
}

const Input: React.FunctionComponent<InputProps> = ({ placeholder, title }) => {
  return (
    <MainItemCard variant={2} pointer={false} className="input_main">
      {title ? <label>{title}</label> : null}
      <InputOriginal placeholder={placeholder} />
    </MainItemCard>
  );
};

export default Input;
