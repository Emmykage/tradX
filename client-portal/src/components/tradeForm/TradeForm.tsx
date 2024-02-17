import { Tooltip } from "antd";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  InfoCircleIconSmall,
  PlusIcon,
  SubtractIcon,
  TimerIcon,
} from "../../assets/icons";
import "./tradeform.scss";

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
  onIncreaseAmount?: () => void;
  onDecreaseDuration?: () => void;
  handleUserInputUp?: () => void;
  handleUserInputDown?: () => void;
  profitPercent?: string;
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
  onIncreaseAmount,
  onDecreaseDuration,
  handleUserInputUp,
  handleUserInputDown,
  profitPercent,
}) => {
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
            placement="left"
            title="Set the investment amount at $100. Don’t worry, this is test money."
            color="#1973FA"
            open={amountTooltip}
          >
            <div className="amount">
              <label htmlFor="amount">Amount, Đ</label>
              <input
                type="number"
                name="amount"
                id="amounts"
                disabled={disabled}
                defaultValue={defaultAmount}
              />
            </div>
          </Tooltip>

          <div className="mathButtons">
            <button disabled={disabled}>
              <SubtractIcon />
            </button>
            <button
              disabled={hintPlus ? false : disabled}
              className={`${hintPlus ? "hint" : ""}`}
              onClick={onIncreaseAmount}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="amountContainer">
          <Tooltip
            rootClassName="walkthroughTooltip amountTooltip"
            placement="left"
            title="Select 1 minute as the duration of the trade."
            color="#1973FA"
            open={durationTooltip}
          >
            <div className="amount duration">
              <label htmlFor="duration">Duration</label>
              <input
                type={disabled ? "text" : "number"}
                name="duration"
                id="duration"
                disabled={disabled}
                defaultValue={defaultDuration}
              />
            </div>
          </Tooltip>

          <div className="mathButtons">
            <button
              disabled={hintDuration ? false : disabled}
              className={`${hintDuration ? "hint" : ""}`}
              onClick={onDecreaseDuration}
            >
              <SubtractIcon />
            </button>
            <button disabled={disabled}>
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="buttonsWrapper">
        <Tooltip
          rootClassName="walkthroughTooltip amountTooltip"
          placement="left"
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
              onClick={handleUserInputUp}
              disabled={!hintTrades && disabled}
              className={`up ${hintTrades ? "hint" : ""}`}
            >
              <div className="textContainerBtns">
                <span>Up</span>
                {profitPercent ? <span className="percentText">{profitPercent}</span> : null}
              </div>
              <span>
                <ArrowUpRightIcon />
              </span>
            </button>
            <button
              onClick={handleUserInputDown}
              disabled={!hintTrades && disabled}
              className={`down ${hintTrades ? "hint" : ""}`}
            >
              <div className="textContainerBtns">
                <span>Down</span>
                {profitPercent ? <span className="percentText">{profitPercent}</span> : null}
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
