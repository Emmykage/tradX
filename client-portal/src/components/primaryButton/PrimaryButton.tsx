import { Spin } from "antd";
import "./primaryButton.scss";

const PrimaryButton = ({
  Title,
  onClick,
  className,
  disabled,
  icon,
  htmlType,
  loading,
}: {
  Title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  loading?: boolean;
}) => {
  const buttonType = htmlType || "button";

  return (
    <button
      type={buttonType}
      className={`ButtonContainer ${disabled ? "disable" : ""} ${className}`}
      onClick={onClick}
    >
      {icon}
      {Title}
      {loading ? <Spin size="small" /> : null}
    </button>
  );
};

export default PrimaryButton;
