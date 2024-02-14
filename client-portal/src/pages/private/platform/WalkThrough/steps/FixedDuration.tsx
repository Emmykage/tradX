interface FixedDurationProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FixedDuration: React.FC<FixedDurationProps> = ({
  className,
  setStep,
}) => {
  return (
    <div className={`walkthroughStep fixedDurationStep ${className}`}>
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
