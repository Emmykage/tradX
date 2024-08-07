import "./Bonds.scss";
import {
  InfoBlockData,
  InfoBlockWithButtonData,
  NeedMoreInfoData,
} from "./data";

//components
import InfoBlock from "../components/infoBlock/InfoBlock";
import InfoBlockWithButton from "../components/infoBlockWithButton/InfoBlockWithButton";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";
import Navbar from "pages/public/home/navbar/Navbar";

const Bonds = () => {
  return (
    <div className="bondsContainer">
      <Navbar />
      <InfoBlock item={InfoBlockData} />
      <InfoBlockWithButton item={InfoBlockWithButtonData} />
      <JoinInThreeSteps />
      <NeedMoreInfo items={NeedMoreInfoData} />
    </div>
  );
};

export default Bonds;
