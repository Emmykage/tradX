import "./Indices.scss";
import { InfoBlockWithListData, NeedMoreInfoData } from "./data"

import Navbar from "pages/public/home/navbar/Navbar";
import WaysTrade from "./waysTrade/WaysTrade";
import InfoBlockWithList from "../components/infoBlockWithList/InfoBlockWithList";
import JoinInThreeSteps from "../components/joinInThreeSteps/JoinInThreeSteps";
import NeedMoreInfo from "../components/needMoteInfo/NeedMoreInfo";

const Indices = () => {
  return (
    <div className="indicesContainer">
      <Navbar />
      <InfoBlockWithList item={InfoBlockWithListData} />
      <WaysTrade />
      <JoinInThreeSteps />
      <NeedMoreInfo items={NeedMoreInfoData} />
    </div>
  );
};

export default Indices;
