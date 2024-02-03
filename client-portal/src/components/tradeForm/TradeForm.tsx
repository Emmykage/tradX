import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  InfoCircleIconSmall,
  PlusIcon,
  SubtractIcon,
  TimerIcon,
} from "../../assets/icons";
import "./tradeform.scss";

interface TradeFormProps {}

const TradeForm: React.FunctionComponent<TradeFormProps> = () => {
  return (
    <div className="trade-form">
      <div className="coinInfo">
        <div>
          <p className="coinTitle">EUR/USD OTC</p>
          <p className="timeSubtext">Fixed Time</p>
        </div>
        <InfoCircleIconSmall />
      </div>

      <div className="amount">
        <label htmlFor="amount">Amount, Đ</label>
        <input type="number" name="amount" id="amounts" />
      </div>

      <div className="mathButtons">
        <button>
          <SubtractIcon />
        </button>
        <button>
          <PlusIcon />
        </button>
      </div>

      <div className="amount">
        <label htmlFor="amount">Duration</label>
        <input type="number" name="amount" id="amount" />
      </div>

      <div className="mathButtons">
        <button>
          <SubtractIcon />
        </button>
        <button>
          <PlusIcon />
        </button>
      </div>

      <div className="setupOrder">
        <button>
          <div className="buttonContent">
            <span>Setup</span>
            <span>Order</span>
          </div>
          <TimerIcon />
        </button>
      </div>

      <div className="upNdown">
        <button className="up">
          <span>Up</span>
          <span>
            <ArrowUpRightIcon />
          </span>
        </button>
        <button className="down">
          <span>Down</span>
          <span>
            <ArrowDownRightIcon />
          </span>
        </button>
      </div>
      <p className="profit">Profit: + Đ0.82</p>
    </div>
  );
};

export default TradeForm;
