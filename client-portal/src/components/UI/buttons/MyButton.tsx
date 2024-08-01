import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./MyButton.scss";

interface MyButtonProps {
  text: string;
  background?: string;
  color?: string
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: FC<MyButtonProps> = ({ background, color, text, handleClick }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={handleClick}
      style={{
          background: background ? background : "#ff0000",
          color: color ? color : "#ffffff",
      }}
      className="button"
    >
      {t(text)}
    </button>
  );
};

export default MyButton;
