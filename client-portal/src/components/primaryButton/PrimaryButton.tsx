import "./primaryButton.scss";

const PrimaryButton = ({
  Title,
  onClick,
  className,
  disabled,
}: {
  Title: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <div
      className={`ButtonContainer ${disabled ? "disable" : ""} ${className}`}
      onClick={onClick}
    >
      {Title}
    </div>
  );
};

export default PrimaryButton;
