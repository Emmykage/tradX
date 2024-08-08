import { Tooltip } from "antd";
import "./testWalkThrough.scss";
import {
 
  ArrowDownRightIconColor,
  ArrowUpRightIconColor,
  PlusIcon,
  SubtractIcon,
} from "assets/icons";
import { FC, useEffect, useState } from "react";

interface FormData {
  duration: number;
  amount: number;
}

interface TestWalkThroughProps {
  step: number;
  setStep: (step: number | ((prevStep: number) => number)) => void;
  setTrade?: (trade: string | ((prevTrade: string) => string)) => void;
  trade?: string;
}

const TestWalkThrough: FC<TestWalkThroughProps> = ({ step, setStep,trade,setTrade }) => {
  const [tradeForm, setFormData] = useState<FormData>({
    duration: 2,
    amount: 90,
  });

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getWidthStyle = () => {
    return windowWidth < 834 && step >= 7 ? "topLeft" : "left";
  };

  const getWidthDownStyle = () => {
    return windowWidth < 834 && step >= 7 ? "bottomLeft" : "left";
  };

  return (
      <div className="walkThroughSidebarContainer">
        <div className="walkThroughTopBarInputs">

        <div className="amountInputContainer">
        <Tooltip
              rootClassName="walkthroughTooltip amountTooltip"
              placement={getWidthStyle()}
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
                          return {
                            ...prevAmount,
                            amount: prevAmount.amount + 10,
                          };
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
        </div>

        <div className="durationInputContainer">
        <Tooltip
              rootClassName="walkthroughTooltip amountTooltip"
              placement={getWidthStyle()}
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

        </div>
        </div>
        
     <div className="bottomButtonNDownContainer">


  <div className="walkThroughSidbarUpDown">
      <div className="walkThroughupNdown">
    <Tooltip
      rootClassName="walkthroughTooltip amountTooltip"
      placement={getWidthDownStyle()}
      title="Look at the chart and decide where it will go next: Up or Down"
      color="#1973FA"
      
      open={step == 9}
    >
        <button
          disabled={step !== 9 && step !== 10 && step !== 11}
          style={{
            backgroundColor: `${
              step == 9 || step == 11 ? "#00AB1B" : ""
            }`,
          }}
          onClick={() => {
            console.log(step);
            if (step == 9 && setTrade) {
              setStep((prevStep) => prevStep + 1);
              setTrade('up')
              console.log('up is clicked');
            }}
          }
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
    </Tooltip>
      </div>
    <div className="walkThroughupNdown">
      <button
        disabled={step !== 9 && step !== 10 && step !== 11}
        style={{
          backgroundColor: `${step == 9 || step == 11 ? "#F15131" : ""}`,
          color: `${step == 10 ? "#ffffff" : ""}`,
        }}
        onClick={()=>{
           if (step == 9 && setTrade) {
          setStep((prevStep) => prevStep + 1);
          setTrade('down')
          console.log('down is clicked');
        }}
        }
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

      </div>
  );
};

export default TestWalkThrough;



{/* <div className="testContainer">
      <div className="walkThroughSidbarContainer">
      <div className="walkThroughSidbarTwoBlocks">
          <div className="walkThroughSidbarItems">
            <div  className="sidebarUpperInput">

            <Tooltip
              rootClassName="walkthroughTooltip amountTooltip"
              placement={getWidthStyle()}
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
                          return {
                            ...prevAmount,
                            amount: prevAmount.amount + 10,
                          };
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
            </div>
          </div>
          <div className="sidebarLowerInput">

          <div className="walkThroughSidbarItems">
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
          </div>
        </div>
                </div>

                <div className="bottomButtonNDownContainer">


        <div className="walkThroughSidbarUpDown">
            <div className="walkThroughupNdown">
          <Tooltip
            rootClassName="walkthroughTooltip amountTooltip"
            placement={getWidthDownStyle()}
            title="Look at the chart and decide where it will go next: Up or Down"
            color="#1973FA"
            
            open={step == 9}
          >
              <button
                disabled={step !== 9 && step !== 10 && step !== 11}
                style={{
                  backgroundColor: `${
                    step == 9 || step == 11 ? "#00AB1B" : ""
                  }`,
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
          </Tooltip>
            </div>
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
      </div>
    </div> */}