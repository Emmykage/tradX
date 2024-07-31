import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StepOne from "../stepOne/StepOne";
import WelcomeHeader from "../welcomeHeader/WelcomeHeader";
import "./WelcomeSteps.scss";
import { useCookies } from "react-cookie";
import StepTwo from "../stepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";

const WelcomeSteps = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState<number>(3);
  const [cookies, setCookie, removeCookie] = useCookies(["step"]); // Используем хук useCookies

  // useEffect(() => {
  //   const savedStep = cookies.step;
  //   if (savedStep) {
  //     // setStep(Number(savedStep));
  //     setStep(Number(1));
  //   }
  // }, []);

  // useEffect(() => {
  //   setCookie("step", step.toString(), { path: "/", maxAge: 604800 });
  // }, [step, setCookie]);


  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne setStep={setStep} />;
      case 2:
        return <StepTwo setStep={setStep} />;
      case 3:
        return <StepThree setStep={setStep} />;
      default:
        return <StepOne setStep={setStep} />;
    }
  };

  console.log(step);

  return (
    <div className="welcomeSteps">
      <WelcomeHeader step={step} />
      {renderStep()}
    </div>
  );
};

export default WelcomeSteps;
