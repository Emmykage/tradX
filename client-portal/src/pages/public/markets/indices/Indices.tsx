import "./Indices.scss";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data";

import Navbar from "pages/public/home/navbar/Navbar";
import WaysTrade from "./waysTrade/WaysTrade";
import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";
import RegisterBlock from "../components/registerBlock/RegisterBlock";
import TradCalc from "../../../../components/tradCalc/TradCalc";

const Indices = () => {
  return (
    <div className="indicesContainer">
      <Navbar />
      <InfoBlockWithList item={InfoBlockWithListData} />
      <WaysTrade />
      <div className="revertCompanents">
        <TradCalc />
        <JoinInThreeSteps />
      </div>
      <NeedMoreInfo items={NeedMoreInfoData} />
      <RegisterBlock />
    </div>
  );
};

export default Indices;
