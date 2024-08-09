import "./Shares.scss";

import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import DescriptionBlock from "./descriptionBlock/DescriptionBlock";
import IpoTrading from "./ipoTrading/IpoTrading";
import Navbar from "pages/public/home/navbar/Navbar";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";
import RegisterBlock from "../components/registerBlock/RegisterBlock";
import TradCalc from "../../../../components/tradCalc/TradCalc";

const Shares = () => {
  return (
    <div className="sharesContainer">
      <Navbar />
      <InfoBlockWithList item={InfoBlockWithListData} />
      <DescriptionBlock />
      <IpoTrading />
      <div className="revertCompanents">
        <TradCalc />
        <JoinInThreeSteps />
      </div>
      <NeedMoreInfo items={NeedMoreInfoData} />
      <RegisterBlock />
    </div>
  );
};

export default Shares;
