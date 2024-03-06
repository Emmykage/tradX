import MainItemCard from "../mainItemCard/MainItemCard";
import "./input.scss";

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  subTitle?: string;
  variant?: 1 | 2 | 3;
  disabled?: boolean;
  value?: string;
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
  subTitle,
  disabled,
  value,
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
          {title ? (
            <label>
              {title} <span> {subTitle}</span>
            </label>
          ) : null}
          <input
            disabled={disabled}
            type={type}
            onChange={onChange}
            defaultValue={defaultValue}
            placeholder={placeholder}
            value={value}
            {...rest}
          />
        </div>
        {suffixIcon ? <div className="suffixIcon">{suffixIcon}</div> : null}
      </MainItemCard>
    </div>
  );
};

export default Input;
