import { useTranslation } from "react-i18next";
import "./InfoBlockWithButton.scss";
import { FC } from "react";

interface InfoBlockWithButtonProps {
  item: {
    image: string;
    title: string;
    text: string;
    buttonText: string
  };
}

const InfoBlockWithButton: FC<InfoBlockWithButtonProps> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="infoBlockWithButtonContainer">
      <div>
        <h2>{t(item.title)}</h2>
        <span>{t(item.text)}</span>
        <button>{t(item.buttonText)}</button>
      </div>
      <img src={item.image} alt="" />
    </div>
  );
};

export default InfoBlockWithButton;
