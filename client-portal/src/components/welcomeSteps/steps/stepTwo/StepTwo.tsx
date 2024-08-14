import MyButton from "components/UI/buttons/MyButton";
import "./StepTwo.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import data from "./data.json";

import SecondStepIcon from '../../../../../public/welcome-icons/welcome_step_two_background.png'

interface StepTwoProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
}

const StepTwo: FC<StepTwoProps> = ({ setStep }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };
  
  const getFirstStep = () => {
    const newArr = [...data?.assets];
    return newArr.slice(0,6);
  };

  const getSecondStep = () => {
    const newArr = [...data?.assets];
    return newArr.slice(6,12);
  };

  return (
    <div className="relative h-full flex justify-end flex-col">
      <div className="absolute h-full overflow-hidden top-[-12%] " >
        <img src={SecondStepIcon} />
      </div>
      <div className="relative">
        <div className="stepTwoItems flex flex-col gap-y-3.5 lg:gap-y-9 ">
            <div className="flex justify-center gap-x-3  lg:gap-x-7 gap-y-3.5 flex-wrap zoom-in">
              {getFirstStep().map((item, index) => (
                <div className="stepTwoItemCard min-w-[43%] md:min-w-fit flex items-center gap-x-3.5" key={index + item.name}>
                    <div className="w-[35px] h-[35px] bg-[#2D3138] rounded-full flex items-center justify-center ">
                      <img className="w-[24px] h-[24px]" src={item.image} alt="" /> 
                    </div>
                  <h6 className="font-medium text-base md:text-[18px] lg:text-[24.593px] text-white">{item.name}</h6>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-x-3  lg:gap-x-7 gap-y-3.5 flex-wrap zoom-in-2">
              {getSecondStep().map((item, index) => (
                 <div className="stepTwoItemCard min-w-[43%] md:min-w-fit flex items-center gap-x-3.5" key={index + item.name}>
                    <div className="w-[35px] h-[35px] bg-[#2D3138] rounded-full flex items-center justify-center ">
                      <img className="w-[24px] h-[24px]" src={item.image} alt="" /> 
                    </div>
                  <h6 className="font-medium text-base md:text-[18px] lg:text-[24.593px] text-white">{item.name}</h6>
                </div>
              ))}
            </div>
    
        </div>
        <div className="mt-6 lg:mt-[179px] w-[95%] md:w-full  xl:w-[904px] max-w-[904px] mx-auto">
          <h2 className="text-[21px] text-center text-white ">{t("walkthroughStocksSubText")}</h2>
          <div className="mt-9 mb-12 md:mb-16 lg:mb-16 mx-auto max-w-[182px] md:max-w-[360px]">
            <MyButton text="next" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
