import Navbar from "pages/public/home/navbar/Navbar";
import "./Etf.scss";
import Header from "./header/Header";
import EtfOpportunities from "./etfOpportunities/EtfOpportunities";

const Etf = () => {
  return (
    <div className="etfContainer">
      <Navbar />
      <Header />
      <EtfOpportunities />
    </div>
  );
};

export default Etf;
