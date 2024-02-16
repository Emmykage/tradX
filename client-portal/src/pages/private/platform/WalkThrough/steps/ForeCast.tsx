import { useEffect, useState } from "react";
import { staticData } from "../data/initialGraphData";
import ChartComponent from "../components/WalkthroughChart";

interface ForeCastProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ForeCast: React.FC<ForeCastProps> = ({ className, setStep }) => {
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    <div className={`walkthroughStep forecastStep ${className}`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
      <img className="euroUsdButton" src="/walkthrough/eur-usd-btn.png" />
      <p className="walkthroughSubtext">
        Traders make forecasts on the price will change in the near future. such
        a forecast is called a “trade”.
      </p>

      <button className="walkthroughButton" onClick={() => setStep(5)}>
        Next
      </button>
    </div>
  );
};

export default ForeCast;
