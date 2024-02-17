import { useEffect, useState } from "react";
import { Button, Tooltip } from "antd";
import ChartComponent from "../components/WalkthroughChart";
import { staticData } from "../data/initialGraphData";

interface ProfitablityProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
}

const Profitablity: React.FC<ProfitablityProps> = ({
  className,
  setStep,
  open,
}) => {
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  const TooltipContent = () => (
    <div>
      <p>
        FTT assets vary in profitability. In this case, you will receive 82% of
        profit if, when the trade expires, the chart will still be moving in the
        correct direction.
      </p>
      <Button onClick={() => setStep(7)}>I Understand</Button>
    </div>
  );
  return (
    <div className={`walkthroughStep profitablityStep ${className}`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
      <Tooltip
        rootClassName="walkthroughTooltip"
        placement="bottomRight"
        title={<TooltipContent />}
        color="#1973FA"
        open={open}
      >
        <img
          className="euroUsdButton active"
          src="/walkthrough/eur-usd-btn-active.png"
        />
      </Tooltip>
    </div>
  );
};

export default Profitablity;
