import "./Shares.scss";

import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import DescriptionBlock from "./descriptionBlock/DescriptionBlock";
import IpoTrading from "./ipoTrading/IpoTrading";
import Navbar from "pages/public/home/navbar/Navbar";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data"
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";

const Shares = () => {
  return (
    <div className="sharesContainer">
      <Navbar />
      <InfoBlockWithList item={InfoBlockWithListData} />
      <DescriptionBlock />
      <IpoTrading />
      <JoinInThreeSteps />
      <NeedMoreInfo items={NeedMoreInfoData} />
    </div>
  );
};

export default Shares;
