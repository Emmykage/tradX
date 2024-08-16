import { useEffect, useState } from "react";
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
import StepTen from "./stepTen/StepTen.tsx";
import StepOne from './stepOne/StepOne.tsx';
import LastStep from "./lastStep/LastStep.tsx";
import { initialAreaData } from "pages/private/platform/MainChart/areaData.ts";

const WelcomeSteps = () => {
  const { t } = useTranslation();
  const [areaChartInitialData, setAreaChartInitialData]: any = useState(initialAreaData);
  const [step, setStep] = useState<number>(1);
  const [trade,setTrade] = useState<string>('down')
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
      setStep(Number(savedStep));
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
        return <StepThree setStep={setStep} step={step} chartData={areaChartInitialData} />;
      case 4:
        return <StepFour setStep={setStep} step={step} chartData={areaChartInitialData}  />;
      case 5:
        return <StepFive setStep={setStep} step={step} chartData={areaChartInitialData} />;
      case 6:
        return <StepSix setStep={setStep} step={step}  chartData={areaChartInitialData} />;
      case 7:
        return <StepSeven setStep={setStep} step={step} chartData={areaChartInitialData} />;
      case 8:
        return <StepSeven setStep={setStep} step={step} chartData={areaChartInitialData} />;
      case 9:
        return <StepSeven setStep={setStep} step={step} trade={trade} setTrade={setTrade} chartData={areaChartInitialData} />;
      case 10:
        return  <StepTen setStep={setStep} step={step} chartData={areaChartInitialData} trade={trade} />;
      case 11:
        if(trade && trade == 'up'){
         return <StepTen setStep={setStep} handleClick={onSkipWalkthrough} step={step} chartData={areaChartInitialData} trade={trade} />;
        }else if(trade && trade == 'down'){
        return  <StepTen setStep={setStep} step={step} handleClick={onSkipWalkthrough}  chartData={areaChartInitialData} trade={trade} />;
        }
        
      case 12:
        return <LastStep/>;
      default:
        return <StepOne setStep={setStep} />;
    }
  };

  useEffect(()=>{
    setTimeout(() => {
      if(step === 10){
        setStep(11)
      }
    }, 20000);
  },[step]);
  return (
    <div className="welcomeSteps relative">
       <WelcomeHeader step={step} setStep={setStep} />
        <div className="content relative">
          {renderStep()}
        </div>
    </div>
  );
};

export default WelcomeSteps;
