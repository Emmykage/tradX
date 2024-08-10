import "./Commodities.scss";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data";

//components
import Navbar from "pages/public/home/navbar/Navbar";
import CommoditiesUpDown from "./commoditiesUpDown/CommoditiesUpDown";
import CommodityStocks from "./commodityStocks/CommodityStocks";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";
import RegisterBlock from "../components/registerBlock/RegisterBlock";
import TradCalc from "../../../../components/tradCalc/TradCalc";
import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";

const Commodities = () => {
  return (
    <div className="commoditiesContainer">
      <Navbar />
      {/* <UsingOurCfd /> */}
      {/* <CfdTradWhyTrade /> */}
      {/* <CfdTradMuchMore /> */}
      <CommoditiesUpDown />
      <InfoBlockWithList item={InfoBlockWithListData} />
      <CommodityStocks />
      {/* <TradCalc titleHeader="Forex Margin Calculator" /> */}
      <div className="revertCompanents">
        <TradCalc />
        <JoinInThreeSteps />
      </div>
      <NeedMoreInfo items={NeedMoreInfoData} />
      <RegisterBlock />
    </div>
  );
};

export default Commodities;
