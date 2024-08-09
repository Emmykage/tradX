import Navbar from "pages/public/home/navbar/Navbar";
import "./Etf.scss";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data";

//components
import Header from "./header/Header";
import EtfOpportunities from "./etfOpportunities/EtfOpportunities";
import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";
import RegisterBlock from "../components/registerBlock/RegisterBlock";
import TradCalc from "../../../../components/tradCalc/TradCalc";

const Etf = () => {
  return (
    <div className="etfContainer">
      <Navbar />
      <Header />
      <EtfOpportunities />
      <InfoBlockWithList item={InfoBlockWithListData} />
      <div className="revertCompanents">
        <TradCalc />
        <JoinInThreeSteps />
      </div>
      <NeedMoreInfo items={NeedMoreInfoData} />
      <RegisterBlock />
    </div>
  );
};

export default Etf;
