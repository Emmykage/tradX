import { useEffect, useState } from "react";

import "./walkThrough.scss";
import "./steps/steps.scss";

import { Button } from "antd";
import useUpdateUser from "api/user/useUpdateUser";
import { setUser } from "@store/slices/user";
import { useAppDispatch } from "@store/hooks";
import { useCookies } from "react-cookie";
import WelcomeHeader from "./components/welcomeHeader/WelcomeHeader";
import StepOne from "./steps/stepOne/StepOne";
import StepTwo from "./steps/stepTwo/StepTwo";
import StepThree from "./steps/stepThree/StepThree";
import StepFour from "./steps/stepFour/StepFour";
import StepFive from "./steps/stepFive/StepFive";
import StepSix from "./steps/stepSix/StepSix";
import StepSeven from "./steps/stepSeven/StepSeven";
import StepTen from "./steps/stepTen/StepTen";
import StepEleven from "./steps/stepEleven/StepEleven";

interface WalkThroughProps {
  className?: string;
  tradeFormHeight: number;
}

const WalkThrough: React.FC<WalkThroughProps> = ({
  className,
  tradeFormHeight,
}) => {
  const [step, setStep] = useState<number>(3);

  const [cookies, setCookie] = useCookies(["step", "access_token"]);

  const dispatch = useAppDispatch();

  const { mutate } = useUpdateUser({
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
  });

  const onSkipWalkthrough = () => {
    mutate({
      data: {
        is_walkthrough_completed: true,
      },
      token: cookies.access_token,
    });
    setStep(0);
  };

  useEffect(() => {
    const savedStep = cookies.step;
    if (savedStep) {
      // setStep(Number(savedStep));
    }
  }, []);

  useEffect(() => {
    setCookie("step", step.toString(), { path: "/", maxAge: 604800 });
  }, [step, setCookie]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne setStep={setStep} />;
      case 2:
        return (
          <StepTwo
            className={`${step === 2 ? "active" : ""}`}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <StepThree
            className={`${step === 3 ? "active" : ""}`}
            setStep={setStep}
            step={step}
          />
        );
      case 4:
        return <StepFour setStep={setStep} step={step} />;
      case 5:
        return <StepFive setStep={setStep} step={step} />;
      case 6:
        return <StepSix setStep={setStep} step={step} />;
      case 7:
        return <StepSeven setStep={setStep} step={step} />;
      case 8:
        return <StepSeven setStep={setStep} step={step} />;
      case 9:
        return <StepSeven setStep={setStep} step={step} />;
      case 10:
        return (
          <StepTen
            className="active"
            tradeFormHeight={85}
            onSkipWalkthrough={onSkipWalkthrough}
            setStep={setStep}
            step={step}
          />
        );
      case 11:
        return (
          <StepEleven
            className="active"
            tradeFormHeight={85}
            setStep={setStep}
            step={step}
          />
        );
      default:
        return <StepOne setStep={setStep} />;
    }
  };

  return (
    <div className={`walkthroughContainer welcomeSteps ${className}`}>
      <WelcomeHeader step={step} setStep={setStep} />
      {renderStep()}
    </div>
  );
};

export default WalkThrough;
