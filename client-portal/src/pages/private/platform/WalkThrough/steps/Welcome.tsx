interface WelcomeProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Welcome: React.FC<WelcomeProps> = ({ className, setStep }) => {
  return (
    <div className={`walkthroughStep welcomeStep ${className}`}>
      <img
        className="welcomeImg"
        src="/walkthrough/welcome.png"
        alt="Welcome Illustration"
      />

      <p className="walkthroughHeading">Welcome!</p>

      <p className="walkthroughSubtext">
        We’ll help you take your first steps on our online trading platform
      </p>

      <button className="walkthroughButton" onClick={() => setStep(2)}>
        Start training
      </button>
    </div>
  );
};

export default Welcome;
