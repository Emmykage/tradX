import "./Commodities.scss";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data";

//components
import CommoditiesUpDown from "./commoditiesUpDown/CommoditiesUpDown";
import CommodityStocks from "./commodityStocks/CommodityStocks";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";
import RegisterBlock from "../components/registerBlock/RegisterBlock";
import TradCalc from "../../../../components/tradCalc/TradCalc";
import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import Navbar from "pages/public/home/commonComponents/navbar/Navbar";
import Footer from "pages/public/home/main/footer/Footer";
import HeadIntro from "pages/public/home/commonComponents/headIntro/HeadIntro";
import CategorySlider from "pages/public/home/commonComponents/categorySlider/CategorySlider";
import TradeTable from "pages/public/home/commonComponents/tradeTable/TradeTable";

import OilImage from '../../../../assets/categorySlider/oil.png'
import GoldImage from '../../../../assets/categorySlider/gold.png'
import GasImage from '../../../../assets/categorySlider/gas.png'

const Commodities = () => {
    const title = 'Commodities'
    const detail = "Speculate on the raw materials driving the global economy. Sign up to trade CFDs on energy markets like Oil and Gas, metals like gold and silver, and soft commodities like corn and cocoa."
    const buttonTitle = 'Trade Commodities'

    const allPairsData =[
      {
        title: "UKOIL",
        subtitle: "Brent Oil",
        category: "COMMODITIES",
        value: "80.90",
        change: "-2.02%",
        image: OilImage
      },
      {
        title: "Gold",
        subtitle: "Gold",
        category: "COMMODITIES",
        value: "1930.50",
        change: "+0.75%",
        image: GoldImage
      },
      {
        title: "Natural Gas",
        subtitle: "Natural Gas",
        category: "COMMODITIES",
        value: "2.585",
        change: "-1.15%",
        image: GasImage
      }
    ];
  return (
    <div className="commoditiesContainer">
      <Navbar />
      {/* <UsingOurCfd /> */}
      {/* <CfdTradWhyTrade /> */}
      {/* <CfdTradMuchMore /> */}
      <HeadIntro title={title} detail={detail} buttonTitle={buttonTitle}/>
      <CategorySlider allPairsData={allPairsData} />
      <TradeTable/>
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
      <Footer/>
    </div>
  );
};

export default Commodities;
