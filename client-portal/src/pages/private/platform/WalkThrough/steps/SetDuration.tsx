import TradeForm from "../../../../../components/tradeForm/TradeForm";

interface SetDurationProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
}

const SetDuration: React.FC<SetDurationProps> = ({
  className,
  setStep,
  open,
}) => {
  return (
    <div className={`walkthroughStep setDurationStep ${className}`}>
      <div className="setDurationStepLeft">
        <img
          className="euroUsdButton active"
          src="/walkthrough/eur-usd-btn-2.png"
        />
      </div>
      <div className="tradingForm">
        <TradeForm
          defaultAmount="100"
          defaultDuration="2 min"
          coinInfo={false}
          showProfit={false}
          showSetupOrder={false}
          durationTooltip={open}
          hintDuration
          disabled
          onDecreaseDuration={() => setStep(9)}
        />
      </div>
    </div>
  );
};

export default SetDuration;
