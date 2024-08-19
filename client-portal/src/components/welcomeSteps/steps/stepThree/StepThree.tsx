import MyButton from "components/UI/buttons/MyButton";
import "./StepThree.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { AreaChart } from "pages/private/platform/MainChart/AreaChart";

interface StepThreeProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
  chartData: any;
}

const StepThree: FC<StepThreeProps> = ({ setStep, step, chartData }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeStepThree overflow-hidden relative">
      <AreaChart chartData={chartData} liveLoading />
    

      <div className="mt-6 lg:mt-[179px] w-[95%] md:w-full  step-three-content xl:w-[904px] max-w-[904px] mx-auto  z-[10] absolute">
        <h2 className="text-[18px] md:text-[21px] text-center text-white ">{t("walkthroughChartsSubText")}</h2>
        <div className="mt-9 mb-12 md:mb-16 lg:mb-16 mx-auto max-w-[182px] md:max-w-[360px]">
          <MyButton text="next" handleClick={handleClick} />
        </div>
      </div>
      
    </div>
  );
};

export default StepThree;

