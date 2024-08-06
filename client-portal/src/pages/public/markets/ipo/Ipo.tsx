import Navbar from "pages/public/home/navbar/Navbar";
import "./Ipo.scss";
import { WhyTradeIPOs, HowItWorks, IPOStocks } from "./data";
import InfoBlock from "../components/infoBlock/InfoBlock";
import CapitalIPO from "./capitalIPO/CapitalIPO";
import InfoBlockWithButton from "../components/infoBlockWithButton/InfoBlockWithButton";

export const Ipo = () => {
  return (
    <div className="bondsContainer">
      <Navbar />
      <InfoBlock item={WhyTradeIPOs} />
      <InfoBlockWithButton item={IPOStocks} />
      <InfoBlock item={HowItWorks} />
      <CapitalIPO />
    </div>
  );
};
