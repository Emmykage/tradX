import "./Crypto.scss";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data";

import Navbar from "pages/public/home/navbar/Navbar";
import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";
import RegisterBlock from "../components/registerBlock/RegisterBlock";
import TradCalc from "../../../../components/tradCalc/TradCalc";

const Crypto = () => {
  return (
    <div className="cryptoContainer">
      <Navbar />
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

export default Crypto;
