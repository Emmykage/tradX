import { useEffect, useState } from "react";
import { staticData } from "../data/initialGraphData";
import ChartComponent from "../components/WalkthroughChart";

interface FixedDurationProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FixedDuration: React.FC<FixedDurationProps> = ({
  className,
  setStep,
}) => {
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    <div className={`walkthroughStep fixedDurationStep ${className}`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
      <img className="euroUsdButton" src="/walkthrough/eur-usd-btn.png" />
      <p className="walkthroughSubtext">
        Trades of fixed duration that offer a fixed profit are know as Fixed
        Time Trades or FTT.
      </p>

      <button className="walkthroughButton" onClick={() => setStep(6)}>
        Next
      </button>
    </div>
  );
};

export default FixedDuration;
