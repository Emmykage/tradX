import DescriptionBlock from "./descriptionBlock/DescriptionBlock";
import IpoTrading from "./ipoTrading/IpoTrading";
import "./Shares.scss";
import Navbar from "pages/public/home/navbar/Navbar";

const Shares = () => {
  return (
    <div className="sharesContainer">
      <Navbar />
      <DescriptionBlock />
      <IpoTrading />
    </div>
  );
};

export default Shares;
