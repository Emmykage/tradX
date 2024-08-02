import "./StepSix.scss";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { staticData } from "components/welcomeSteps/data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";

interface StepSixProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepSix: FC<StepSixProps> = ({ step }) => {
  const [graphData, setGraphData] = useState<any>([]);
  const { t } = useTranslation();

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    <div className={`walkthroughStep theChartsStep active`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
    </div>
  );
};

export default StepSix;
