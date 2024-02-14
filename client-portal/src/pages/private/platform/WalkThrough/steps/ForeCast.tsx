interface ForeCastProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ForeCast: React.FC<ForeCastProps> = ({ className, setStep }) => {
  return (
    <div className={`walkthroughStep forecastStep ${className}`}>
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
