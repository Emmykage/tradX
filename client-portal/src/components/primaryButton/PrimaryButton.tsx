import "./primaryButton.scss";

const PrimaryButton = ({
  Title,
  onClick,
  className,
}: {
  Title: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div className={`ButtonContainer ${className}`} onClick={onClick}>
      {Title}
    </div>
  );
};

export default PrimaryButton;
