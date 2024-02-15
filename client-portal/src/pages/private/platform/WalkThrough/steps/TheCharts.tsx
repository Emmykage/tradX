import { useEffect, useState } from "react";
import ChartComponent, { DataPoint } from "../components/WalkthroughChart";
import { initialData } from "../data/initialGraphData";

interface TheChartsProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const TheCharts: React.FC<TheChartsProps> = ({ className, setStep }) => {
  const [graphData, setGraphData] = useState<DataPoint[]>([]);

  useEffect(() => {
    setGraphData(initialData);
  }, []);

  return (
    <div className={`walkthroughStep theChartsStep ${className}`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
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
