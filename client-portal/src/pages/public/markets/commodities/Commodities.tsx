import "./Commodities.scss";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data";

//components
import Navbar from "pages/public/home/navbar/Navbar";
import CommoditiesUpDown from "./commoditiesUpDown/CommoditiesUpDown";
import CommodityStocks from "./commodityStocks/CommodityStocks";
import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";

const Commodities = () => {
  return (
    <div className="commoditiesContainer">
      <Navbar />
      <CommoditiesUpDown />
      <InfoBlockWithList item={InfoBlockWithListData} />
      <CommodityStocks />
      <JoinInThreeSteps />
      <NeedMoreInfo items={NeedMoreInfoData} />
    </div>
  );
};

export default Commodities;
