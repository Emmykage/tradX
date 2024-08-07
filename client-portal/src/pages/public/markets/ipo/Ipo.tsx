import "./Ipo.scss";
import { WhyTradeIPOs, HowItWorks, IPOStocks, NeedMoreInfoData } from "./data";

//components
import Navbar from "pages/public/home/navbar/Navbar";
import InfoBlock from "../components/infoBlock/InfoBlock";
import CapitalIPO from "./capitalIPO/CapitalIPO";
import InfoBlockWithButton from "../components/infoBlockWithButton/InfoBlockWithButton";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";

export const Ipo = () => {
  return (
    <div className="bondsContainer">
      <Navbar />
      <InfoBlock item={WhyTradeIPOs} />
      <InfoBlockWithButton item={IPOStocks} />
      <InfoBlock item={HowItWorks} />
      <CapitalIPO />
      <JoinInThreeSteps />
      <NeedMoreInfo items={NeedMoreInfoData} />
    </div>
  );
};
