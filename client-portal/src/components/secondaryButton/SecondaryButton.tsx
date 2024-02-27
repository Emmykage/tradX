import "./secondaryButton.scss";

const SecondaryButton = ({
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
      className={`SecondaryButtonContainer ${
        disabled ? "disable" : ""
      } ${className}`}
      onClick={onClick}
    >
      {icon}
      {Title}
    </div>
  );
};

export default SecondaryButton;
