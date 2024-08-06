import Navbar from "pages/public/home/navbar/Navbar";
import "./Bonds.scss";
import InfoBlock from "../components/infoBlock/InfoBlock";
import { InfoBlockData, InfoBlockWithButtonData } from "./data"
import InfoBlockWithButton from "../components/infoBlockWithButton/InfoBlockWithButton";


const Bonds = () => {
  return (
    <div className="bondsContainer">
      <Navbar />
      <InfoBlock item={InfoBlockData} />
      <InfoBlockWithButton item={InfoBlockWithButtonData} />
    </div>
  );
};

export default Bonds;
