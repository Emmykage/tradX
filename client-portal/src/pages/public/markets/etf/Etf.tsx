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
import Navbar from "pages/public/home/commonComponents/navbar/Navbar";
import HeadIntro from "pages/public/home/commonComponents/headIntro/HeadIntro";
import CategorySlider from "pages/public/home/commonComponents/categorySlider/CategorySlider";
import TradeTable from "pages/public/home/commonComponents/tradeTable/TradeTable";
import Footer from "pages/public/home/main/footer/Footer";

import EtfImage from '../../../../assets/categorySlider/ETF.png'

const Etf = () => {
  const title = 'ETFs'
    const detail = "Trade CFD ETFs - Exchange Traded Funds – to gain exposure to a wide range of stock markets, sectors, commodities, bonds and currencies. Buy the ones you like, short the ones you don’t."
    const buttonTitle = 'Trade ETFs'

    const allPairsData =[
      {
        title: "FTGC",
        subtitle: "First Trust Global Com",
        category: "COMMODITIES",
        value: "80.90",
        change: "-2.02%",
        image: EtfImage
      },
      {
        title: "INVESCO",
        subtitle: "Invesco",
        category: "COMMODITIES",
        value: "80.90",
        change: "-2.02%",
        image: EtfImage
      },
      {
        title: "DELLTECH",
        subtitle: "Dell",
        category: "COMMODITIES",
        value: "1.579",
        change: "-7.44%",
        image: EtfImage
      }
    ];
  return (
    <div className="etfContainer">
      <Navbar />
      <HeadIntro title={title} detail={detail} buttonTitle={buttonTitle} />
      <CategorySlider allPairsData={allPairsData}/>
      <TradeTable/>
      <Header />
      <EtfOpportunities />
      <InfoBlockWithList item={InfoBlockWithListData} />
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

export default Etf;
