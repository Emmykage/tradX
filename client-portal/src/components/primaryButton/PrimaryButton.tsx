import "./primaryButton.scss";

const PrimaryButton = ({
  Title,
  onClick,
  className,
  disabled,
  icon,
}: {
  Title: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={`ButtonContainer ${disabled ? "disable" : ""} ${className}`}
      onClick={onClick}
    >
      {icon}
      {Title}
    </div>
  );
};

export default PrimaryButton;
