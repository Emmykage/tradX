import { Button, Tooltip } from "antd";

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
  const TooltipContent = () => (
    <div>
      <p>
        FTT assets vary in profitability. In this case, you will receive 82% of
        profit if, when the trade expires, the chart will still be moving in the
        correct direction.
      </p>
      <Button onClick={() => setStep(7)}>I understand</Button>
    </div>
  );
  return (
    <div className={`walkthroughStep profitablityStep ${className}`}>
      <Tooltip
        rootClassName="walkthroughTooltip"
        placement="bottom"
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
