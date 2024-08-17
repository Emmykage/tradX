import { useTranslation, withTranslation } from "react-i18next";
import TestWalkThrough from "components/welcomeSteps/components/modal/TestWalkThrough";
import { AreaChart } from "pages/private/platform/MainChart/AreaChart.tsx";
import { useEffect, useState } from "react";
import MyButton from "components/UI/buttons/MyButton";
import "./StepTen.scss";

interface StepTenProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  chartData: any;
  trade: string;
  handleClick?: any;
}

const StepTen: React.FC<StepTenProps> = ({
  step,
  setStep,
  chartData,
  trade
}) => {
  const { t } = useTranslation();
  const minuteToUnixTimeStamp = (t:number) => {
    const unix = Math.floor(Date.now() / 1000);
    const minutesToSeconds = t * 60;
    return unix + minutesToSeconds;
  };
  const [endTime, setEndTime] = useState(minuteToUnixTimeStamp(0.3333333333333333));
  const [time, setTime] = useState(20);
  const [timeLeft, setTimeLeft] = useState(time);
  const [tradeFinished, setTradeFinished] = useState(false);
  useEffect(() => {

    const timerId = setInterval(() => {
        const now = Math.floor(Date.now() / 1000);
        const remaining = endTime - now;

        if (remaining <= 0) {
            setTimeLeft(0);
            setTradeFinished(true);
            clearInterval(timerId);
        } else {
            setTimeLeft(remaining);
        }
    }, 1000);

    return () => clearInterval(timerId);
}, [endTime]);

const formatTimeHIS = (seconds: number, { short = false } = {})  => {
  const pad = (num: any) => num < 10 ? `0${num}` : num

  const H = pad(Math.floor(seconds / 3600))
  const i = pad(Math.floor(seconds % 3600 / 60))
  const s = pad(seconds % 60)

  if (short) {
    let result = ''
    if (H > 0) result += `${+H}:`
    result += `${H > 0 ? i : +i}:${s}`
    return result
  } else {
    return `${i}:${s}`
  }
}

  return (
    <div className="welcomeStepTen overflow-hidden relative ">
        <div className="grid grid-cols-8 gap-4 items-center">
          <div className="col-span-8 sm:col-span-8 lg:col-span-6 relative">
            <AreaChart chartData={chartData} liveLoading={true}  tradeType={trade} />
            <div className=" w-[100%] md:w-full xl:w-[904px] max-w-[904px] mx-auto bottom-0  z-[30] absolute">
                <div className={`mt-6 lg:mt-[179px] md:w-[70%]   mx-auto ${tradeFinished? 'zoom-in': 'hidden'} `}>
                  <h2 className="text-[18px] md:text-[21px] text-center text-white px-2">{t("walkthroughChooseTradeSubTexts")}</h2>
                  <div className="mt-4 md:mt-9 mb-12 md:mb-16 lg:mb-16 mx-auto max-w-[250px] md:max-w-[360px]">
                    <MyButton text={t("completeTraining")} handleClick={()=> setStep(12)} />
                  </div>
                </div>
              {!tradeFinished && (
                <>
                  <h2 className="text-[18px] md:text-[21px] text-center text-white ">{t("waitForTradeResult")} {formatTimeHIS(timeLeft)}</h2>
                  <div className="mt-9 mb-12 md:mb-16 lg:mb-16 mx-auto max-w-[182px] md:max-w-[360px]" />
                </>
              )}
              
            </div>
          </div>
        
          <div className="modal flex justify-end col-span-8 sm:col-span-8 lg:col-span-2">
            <div className="max-w-[315px] w-full  px-5">
              <TestWalkThrough setStep={setStep} step={step}/>
            </div>
        </div>
    </div>
  </div>

)
  ;
};

export default withTranslation()(StepTen);

