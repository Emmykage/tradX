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
import StepEleven from "./stepEleven/StepEleven.tsx";
import StepTen from "./stepTen/StepTen.tsx";
import StepOne from './stepOne/StepOne.tsx'
import CountDown from "components/countDown/CountDown.tsx";
import LastStep from "./lastStep/LastStep.tsx";
import StepElevenDown from "./stepElevenDown/StepElevenDown.tsx";

const WelcomeSteps = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState(20);
  const [displayTimer, setDisplayTimer] = useState(true);
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
        return <StepSeven setStep={setStep} step={step} trade={trade} setTrade={setTrade} />;
      case 10:
        return  <StepTen setStep={setStep} step={step} />;
      case 11:
        if(trade && trade == 'up'){
          console.log('down');
          return  <StepEleven handleClick={onSkipWalkthrough} setStep={setStep} step={step} />;
        }else if(trade && trade == 'down'){
          console.log('down ');
         return  <StepElevenDown handleClick={onSkipWalkthrough} setStep={setStep} step={step}/>;
        }
        
      case 12:
        return <LastStep/>;
      default:
        return <StepOne setStep={setStep} />;
    }
  };

  // useEffect(() => {
  //   if (displayTimer && time > 0) {
  //     const timerInterval = setTimeout(() => {
  //       setTime((prevTime) => prevTime - 1);

  //       if (time <= 1) {
  //         setDisplayTimer(false);
  //         setStep(11);
  //       }
  //     }, 230);

  //     return () => clearTimeout(timerInterval);
  //   }
  // }, [displayTimer, time]);

  useEffect(()=>{
    setTimeout(() => {
      if(step === 10){
        setStep(11)
      }
    }, 60000);
  },[step])
  return (
    <div className="welcomeSteps">
      {step === 10 && (
        <div className="info">
          <CountDown time={1} color="white"/>
          
        </div>
      )}
      {step > 2 && (
        <div className="image_slide">
          <img
            className="image"
            src="welcome-icons/w_backgroung.png"
    //         srcSet="
    //   welcome-icons/w_backgroung_mobile.png 428w,
    //   welcome-icons/w_backgroung_tablet.png 834w,
    //   welcome-icons/w_backgroung.png 1200w
    // "
            alt=""
          />
        </div>
      )}

      <div className="content">
        <WelcomeHeader step={step} setStep={setStep} />
        {renderStep()}
      </div>
    </div>
    // <StepOne setStep={setStep}/>
  );
};

export default WelcomeSteps;
