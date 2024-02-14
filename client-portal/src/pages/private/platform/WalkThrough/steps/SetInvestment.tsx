import TradeForm from "../../../../../components/tradeForm/TradeForm";

interface SetInvestmentProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
}

const SetInvestment: React.FC<SetInvestmentProps> = ({
  className,
  setStep,
  open,
}) => {
  return (
    <div className={`walkthroughStep setInvestmentStep ${className}`}>
      <div className="setInvestmentStepLeft">
        <img
          className="euroUsdButton active"
          src="/walkthrough/eur-usd-btn-2.png"
        />
      </div>
      <div className="tradingForm">
        <TradeForm
          defaultAmount="90"
          defaultDuration="2 min"
          coinInfo={false}
          showProfit={false}
          showSetupOrder={false}
          amountTooltip={open}
          hintPlus
          disabled
          onIncreaseAmount={() => setStep(8)}
        />
      </div>
    </div>
  );
};

export default SetInvestment;
