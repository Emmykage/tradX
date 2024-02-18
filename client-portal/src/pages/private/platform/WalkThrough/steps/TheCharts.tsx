import { useEffect, useState } from "react";
import ChartComponent from "../components/WalkthroughChart";
import { staticData } from "../data/initialGraphData";

interface TheChartsProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const TheCharts: React.FC<TheChartsProps> = ({ className, setStep }) => {
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    <div className={`walkthroughStep theChartsStep ${className}`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
      <img className="euroUsdButton" src="/walkthrough/eur-usd-btn.png" />
      <p className="walkthroughSubtext">
        The charts shows how the price of an assets changes. If the line on the
        chart is going down, it means the price is falling. If it’s going up,
        the price is rising
      </p>

      <button className="walkthroughButton" onClick={() => setStep(4)}>
        Next
      </button>
    </div>
  );
};

export default TheCharts;
