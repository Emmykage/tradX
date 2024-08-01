import { Tooltip } from "antd";
import "./testWalkThrough.scss";
import {
  ArrowDownRightIconColor,
  ArrowUpRightIconColor,
  PlusIcon,
  SubtractIcon,
} from "assets/icons";
import { FC, useState } from "react";

interface FormData {
  duration: number;
  amount: number;
}

interface TestWalkThroughProps {
  step: number;
  setStep: (step: number | ((prevStep: number) => number)) => void;
}

const TestWalkThrough: FC<TestWalkThroughProps> = ({ step, setStep }) => {
  const [tradeForm, setFormData] = useState<FormData>({
    duration: 2,
    amount: 90,
  });
  
  return (
    <div className="testContainer">
      <div className="walkThroughSidbarContainer">
        <Tooltip
          rootClassName="walkthroughTooltip amountTooltip"
          placement={"left"}
          title="Set the investment amount at $100. Don’t worry, this is training money."
          color="#1973FA"
          open={step == 7}
        >
          <div
            className="walkthroughInputContent"
            style={{ backgroundColor: "#283645" }}
          >
            <label htmlFor="amount">Amount , $</label>
            <input
              type="number"
              value={tradeForm.amount}
              disabled={step !== 7}
            />
          </div>
        </Tooltip>
        <div className="walkThroughButtonsContainer">
          <div className="walkThroughButtons">
            <button
              // onClick={() => {
              //   if (step === 7) {
              //     setFormData((prevAmount) => {
              //       if (
              //         prevAmount.amount !== undefined &&
              //         prevAmount.amount > 1
              //       ) {
              //         return { ...prevAmount, amount: prevAmount.amount - 1 };
              //       }
              //       return prevAmount;
              //     });
              //   }
              // }}
            >
              <SubtractIcon />
            </button>
          </div>

          <div className="walkThroughButtons">
            <button
              style={{ backgroundColor: `${step === 7 ? "#0094FF" : ""}` }}
              onClick={() => {
                console.log(tradeForm.amount);

                if (step === 7) {
                  // if (tradeForm.amount + 1 == 100) {
                  //   setStep((prevStep) => prevStep + 1);
                  // }
                  setStep((prevStep) => prevStep + 1);
                  setFormData((prevAmount) => {
                    if (
                      prevAmount.amount !== undefined &&
                      prevAmount.amount > 0
                    ) {
                      return { ...prevAmount, amount: prevAmount.amount + 10 };
                    }
                    return prevAmount;
                  });
                }
              }}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <Tooltip
          rootClassName="walkthroughTooltip amountTooltip"
          placement={"left"}
          title="Select 1 minute as the duration of the trade"
          color="#1973FA"
          open={step == 8}
        >
          <div className="walkthroughInputContent">
            <label htmlFor="amount">Duration</label>
            <input type="text" value={`${tradeForm.duration} min`} />
          </div>
        </Tooltip>
        <div className="walkThroughButtonsContainer">
          <div className="walkThroughButtons">
            <button
              style={{ backgroundColor: `${step === 8 ? "#0094FF" : ""}` }}
              onClick={() => {
                console.log(tradeForm.duration);

                if (step == 8) {
                  if (tradeForm.duration - 1 == 1) {
                    setStep((prevStep) => prevStep + 1);
                  }
                  setFormData((prevDuration) => {
                    if (
                      prevDuration.duration !== undefined &&
                      prevDuration.duration > 1
                    ) {
                      return {
                        ...prevDuration,
                        duration: prevDuration.duration - 1,
                      };
                    }
                    return prevDuration;
                  });
                }
              }}
            >
              <SubtractIcon />
            </button>
          </div>

          <div className="walkThroughButtons">
            <button
              // onClick={() => {
              //   if (step === 8) {
              //     setFormData((prevDuration) => {
              //       if (
              //         prevDuration.duration !== undefined &&
              //         prevDuration.duration > 0
              //       ) {
              //         return {
              //           ...prevDuration,
              //           duration: prevDuration.duration + 1,
              //         };
              //       }
              //       return prevDuration;
              //     });
              //   }
              // }}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <Tooltip
          rootClassName="walkthroughTooltip amountTooltip"
          placement={"left"}
          title="Look at the chart and decide where it will go next: Up or Down"
          color="#1973FA"
          open={step == 9}
        >
          <div className="walkThroughupNdown">
            <button
              disabled={step !== 9 && step !== 10 && step !== 11}
              style={{
                backgroundColor: `${step == 9 || step == 11 ? "#00AB1B" : ""}`,
              }}
              onClick={() => {
                console.log(step);
                if (step == 9) {
                  setStep((prevStep) => prevStep + 1);
                }
              }}
            >
              <div className="walkThroughupNdownTitle">
                <h2>Up</h2>
                <span>+82%</span>
              </div>

              <div className="walkThroughBUttonIcon">
                <ArrowUpRightIconColor
                  color={
                    step !== 9 && step !== 10 && step !== 11
                      ? " #ffffff5e"
                      : " #ffffff"
                  }
                />
              </div>
            </button>
          </div>
        </Tooltip>
        <div className="walkThroughupNdown">
          <button
            disabled={step !== 9 && step !== 10 && step !== 11}
            style={{
              backgroundColor: `${step == 9 || step == 11 ? "#F15131" : ""}`,
              color: `${step == 10 ? "#ffffff" : ""}`,
            }}
          >
            <div className="walkThroughupNdownTitle">
              <h2>Down</h2>
              <span>+82%</span>
            </div>

            <div className="walkThroughBUttonIcon">
              <ArrowDownRightIconColor
                color={
                  step !== 9 && step !== 10 && step !== 11
                    ? " #ffffff5e"
                    : " #ffffff"
                }
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestWalkThrough;
