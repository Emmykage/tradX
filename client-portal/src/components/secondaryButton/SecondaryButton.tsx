import { useAppSelector } from "@store/hooks";
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
  const {themeSelect} = useAppSelector(state => state.themeBg)
  return (
    <div
      className={`${themeSelect} SecondaryButtonContainer ${
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
