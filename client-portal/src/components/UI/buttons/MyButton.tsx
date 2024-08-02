import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./MyButton.scss";

interface MyButtonProps {
  text: string;
  width?: string;
  background?: string;
  color?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: FC<MyButtonProps> = ({ background, width, color, text, handleClick }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={handleClick}
      style={{
          background: background ? background : "#ff0000",
          color: color ? color : "#ffffff",
          width: width ? width : "100%",
      }}
      className="button"
    >
      {t(text)}
    </button>
  );
};

export default MyButton;
