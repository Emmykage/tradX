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
import RegisterBlock from "../components/registerBlock/RegisterBlock";
import TradCalc from "../../../../components/tradCalc/TradCalc";

const Bonds = () => {
  return (
    <div className="bondsContainer">
      <Navbar />
      <InfoBlock item={InfoBlockData} />
      <InfoBlockWithButton item={InfoBlockWithButtonData} />
      <div className="revertCompanents">
        <TradCalc />
        <JoinInThreeSteps />
      </div>
      <NeedMoreInfo items={NeedMoreInfoData} />
      <RegisterBlock />
    </div>
  );
};

export default Bonds;
