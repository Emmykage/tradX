import { useEffect, useState } from "react";
import StepOne from "./stepOne/StepOne.tsx";
import "./WelcomeSteps.scss";
import { useCookies } from "react-cookie";
import StepTwo from "./stepTwo/StepTwo.tsx";
import StepThree from "./stepThree/StepThree.tsx";
import StepFour from "./stepFour/StepFour.tsx";
import StepFive from "./stepFive/StepFive.tsx";
import StepSix from "./stepSix/StepSix.tsx";
import StepSeven from "./stepSeven/StepSeven.tsx";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@store/hooks.ts";
import useUpdateUser from "api/user/useUpdateUser.ts";
import { setUser } from "@store/slices/user/index.ts";
import WelcomeHeader from "../components/welcomeHeader/WelcomeHeader.tsx";

const WelcomeSteps = () => {
  const { t } = useTranslation();

  const [step, setStep] = useState<number>(1);
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
        return <StepTwo setStep={setStep} />;
      case 3:
        return <StepThree setStep={setStep} step={step} />;
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
        return <StepSeven setStep={setStep} step={step} />;
      default:
        return <StepOne setStep={setStep} />;
    }
  };

  return (
    <div className="welcomeSteps">
      {step === 10 && (
        <div className="info">
          <div className="text">{t("walkthroughChooseTrade", {})}</div>
        </div>
      )}
      {/* {step > 2 && (
        <div className="image_slide">
          <img
            className="image"
            src="welcome-icons/w_backgroung.png"
            srcSet="
      welcome-icons/w_backgroung_mobile.png 428w,
      welcome-icons/w_backgroung_tablet.png 834w,
      welcome-icons/w_backgroung.png 1200w
    "
            alt=""
          />
        </div>
      )} */}

      <div className="content">
        <WelcomeHeader step={step} setStep={setStep} />
        {renderStep()}
      </div>
    </div>
  );
};

export default WelcomeSteps;
