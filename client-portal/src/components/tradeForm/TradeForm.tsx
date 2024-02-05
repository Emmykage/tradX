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
  bottomSidebarHeight: number;
}

const TradeForm: React.FunctionComponent<TradeFormProps> = ({
  bottomSidebarHeight,
}) => {
  return (
    <div
      className="trade-form"
      id="tradeForm"
      style={{
        marginBottom: window.innerWidth <= 767 ? bottomSidebarHeight : 0,
      }}
    >
      <div className="coinInfo">
        <div className="timeMode">
          <p className="coinTitle">EUR/USD OTC</p>
          <p className="timeSubtext">Fixed Time</p>
        </div>
        <InfoCircleIconSmall />
      </div>

      <div className="amountsWrapper">
        <div className="amountContainer">
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
        </div>

        <div className="amountContainer">
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
        </div>
      </div>

      <div className="buttonsWrapper">
        <div className="upNdown">
          <button className="setupOrder">
            <div className="buttonContent">
              <span>Setup</span>
              <span>Order</span>
            </div>
            <TimerIcon />
          </button>
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
      </div>
      <p className="profit">Profit: + Đ0.82</p>
    </div>
  );
};

export default TradeForm;
