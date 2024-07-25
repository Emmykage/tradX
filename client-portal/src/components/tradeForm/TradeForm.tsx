import { Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";

import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  InfoCircleIconSmall,
  PlusIcon,
  SubtractIcon,
  TimerIcon,
} from "../../assets/icons";
import "./tradeform.scss";
import { useAppSelector } from "@store/hooks";
import { changeAmount, changeDuration, setAmount, SetDuration, setTrade, TradeStates } from "@store/slices/trade";
import { useDispatch } from "react-redux";

interface TradeFormProps {
  bottomSidebarHeight?: number;
  coinInfo?: boolean;
  showProfit?: boolean;
  showSetupOrder?: boolean;
  disabled?: boolean;
  defaultAmount?: string;
  defaultDuration?: string;
  amountTooltip?: boolean;
  durationTooltip?: boolean;
  hintTradesTooltip?: boolean;
  hintPlus?: boolean;
  hintDuration?: boolean;
  hintTrades?: boolean;
  handleUserInputUp?: () => void;
  handleUserInputDown?: () => void;
  profitPercent?: string;
  amountTooltipPlacement?: TooltipPlacement;
  durationTooltipPlacement?: TooltipPlacement;
  hintTradesTooltipPlacement?: TooltipPlacement;
}

const TradeForm: React.FunctionComponent<TradeFormProps> = ({
  bottomSidebarHeight,
  coinInfo = true,
  showProfit = true,
  showSetupOrder = true,
  disabled = false,
  defaultAmount,
  defaultDuration,
  amountTooltip = false,
  durationTooltip = false,
  hintTradesTooltip = false,
  hintPlus = false,
  hintDuration = false,
  hintTrades = false,
  handleUserInputUp,
  handleUserInputDown,
  profitPercent,
  amountTooltipPlacement = "left",
  durationTooltipPlacement = "left",
  hintTradesTooltipPlacement = "left",
}) => {

  const { duration,finished,amount,trade } = useAppSelector(
    (state: { trades: TradeStates }) => state.trades
  );
  const dispatch = useDispatch();



  const handleInputUp = ()=>{
    console.log('up');
    console.log(amount);
    console.log(duration);
    
    // dispatch(setTrade('up'))

  }
  const handleInputDown = ()=>{
    console.log('Down');
    console.log(amount);
    console.log(duration);

    // dispatch(setTrade('up'))
  }

  const handleIncreaseDuration = ()=>{
    console.log('increase duration');
    dispatch(changeDuration('increase'))
  }
  const handleDecreaseDuration = ()=>{
    console.log('decrease duration');
    if(duration > 1){
  
      dispatch(changeDuration('decrease'))
    }
  }
  const handleIncreaseAmount = ()=>{
   dispatch(changeAmount('increase'))
  }
  const handleDecreaseAmount = ()=>{
    if(amount > 0){
  
      dispatch(changeAmount('decrease'))
    }
  }
  return (
    <div
      className={`trade-form ${disabled ? "disabled" : ""}`}
      id="tradeForm"
      style={{
        marginBottom: window.innerWidth <= 767 ? bottomSidebarHeight : 0,
      }}
    >
      {coinInfo ? (
        <div className="coinInfo">
          <div className="timeMode">
            <p className="coinTitle">EUR/USD OTC</p>
            <p className="timeSubtext">Fixed Time</p>
          </div>
          <InfoCircleIconSmall />
        </div>
      ) : null}

      <div className="amountsWrapper">
        <div className="amountContainer">
          <Tooltip
            rootClassName="walkthroughTooltip amountTooltip"
            placement={amountTooltipPlacement}
            title="Set the investment amount at $100. Don’t worry, this is test money."
            color="#1973FA"
            open={amountTooltip}
          >
            <div className="amount">
              <label htmlFor="amount">Amount, Đ</label>
              <input
                type="number"
                name="amount"
                value={amount}
                id="amounts"
                onChange={(e)=>dispatch(setAmount(parseInt(e.target.value)))}
                disabled={disabled}
                defaultValue={defaultAmount}
              />
            </div>
          </Tooltip>

          <div className="mathButtons">
            <button disabled={disabled} onClick={handleDecreaseAmount}>
              <SubtractIcon />
            </button>
            <button
              disabled={hintPlus ? false : disabled}
              className={`${hintPlus ? "hint" : ""}`}
              onClick={handleIncreaseAmount}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="amountContainer">
          <Tooltip
            rootClassName="walkthroughTooltip amountTooltip"
            placement={durationTooltipPlacement}
            title="Select 1 minute as the duration of the trade."
            color="#1973FA"
            open={durationTooltip}
          >
            <div className="amount duration">
              <label htmlFor="duration">Duration</label>
              <input
                type={disabled ? "text" : "text"}
                name="duration"
                id="duration"
                value={`${duration} min`}
                // onChange={(e)=>SetDuration(e.target.value)}
                disabled={disabled}
                defaultValue={defaultDuration}
              />
            </div>
          </Tooltip>

          <div className="mathButtons">
            <button
              disabled={hintDuration ? false : disabled}
              className={`${hintDuration ? "hint" : ""}`}
              onClick={handleDecreaseDuration}
            >
              <SubtractIcon />
            </button>
            <button disabled={disabled} onClick={handleIncreaseDuration}>
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="buttonsWrapper">
        <Tooltip
          rootClassName="walkthroughTooltip amountTooltip"
          placement={hintTradesTooltipPlacement}
          title="Look at the chart and decide where it will go next: Up or Down"
          color="#1973FA"
          open={hintTradesTooltip}
        >
          <div className="upNdown">
            {showSetupOrder ? (
              <button className="setupOrder">
                <div className="buttonContent">
                  <span>Setup</span>
                  <span>Order</span>
                </div>
                <TimerIcon />
              </button>
            ) : null}
            <button
              onClick={handleInputUp}
              disabled={!hintTrades && disabled}
              className={`up ${hintTrades ? "hint" : ""}`}
            >
              <div className="textContainerBtns">
                <span>Up</span>
                {profitPercent ? (
                  <span className="percentText">{profitPercent}</span>
                ) : null}
              </div>
              <span>
                <ArrowUpRightIcon />
              </span>
            </button>
            <button
              onClick={handleInputDown}
              disabled={!hintTrades && disabled}
              className={`down ${hintTrades ? "hint" : ""}`}
            >
              <div className="textContainerBtns">
                <span>Down</span>
                {profitPercent ? (
                  <span className="percentText">{profitPercent}</span>
                ) : null}
              </div>
              <span>
                <ArrowDownRightIcon />
              </span>
            </button>
          </div>
        </Tooltip>
      </div>
      {showProfit ? <p className="profit">Profit: + Đ0.82</p> : null}
    </div>
  );
};

export default TradeForm;
