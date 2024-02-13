import { useState } from "react";
import {
  AdvancePlusIcon,
  ArrowUpOS,
  IndicatorIcon,
  PercentageIcon,
  PlayIcon,
  StrategyIcon,
  TradeStopIcon,
} from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import Modal from "../../../../../components/modal/Modal";
import "./tradersWay.scss";

interface TradersWayMenuProps {}

type TraderOption = {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  active?: boolean;
  description?: string;
};

const TradersWayMenu: React.FunctionComponent<TradersWayMenuProps> = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<TraderOption | null>(null);

  const CardSuffix = ({
    icon,
    text,
  }: {
    icon: React.ReactNode;
    text: string;
  }) => (
    <div className="optionSuffix">
      {icon}
      <p>{text}</p>
    </div>
  );

  const NumberIcon = ({ value }: { value: string }) => (
    <div className="tradesWayOption">
      <p className="optionText">{value}</p>
    </div>
  );

  const traderOptions: TraderOption[] = [
    {
      title: "Barcode",
      value: "1",
      subtitle: "Trading Strategy",
      icon: <StrategyIcon color="#0094FF" />,
      active: true,
      description:
        "This strategy is based on the DeMarker oscillator and works best on volatile currency pairs.",
    },
    {
      title: "Kind Martin",
      value: "2",
      subtitle: "Trading Strategy",
      icon: <StrategyIcon />,
    },
    {
      title: "StochRSI",
      value: "3",
      subtitle: "Indicator",
      icon: <IndicatorIcon />,
    },
    {
      title: "Friday",
      value: "4",
      subtitle: "Trading Strategy",
      icon: <StrategyIcon />,
    },
    {
      title: "Advanced for 24 hours",
      value: "5",
      subtitle: "Bonus",
      icon: <AdvancePlusIcon />,
    },
    {
      title: "Advanced for half price",
      value: "6",
      subtitle: "Bonus",
      icon: <AdvancePlusIcon />,
    },
    {
      title: "Millenium",
      value: "7",
      subtitle: "Trading Strategy",
      icon: <StrategyIcon />,
    },
    {
      title: "Trailing Stop Loss",
      value: "8",
      subtitle: "Improved Forex",
      icon: <TradeStopIcon />,
    },
    {
      title: "Risk Free Trades",
      value: "9",
      subtitle: "Bonus",
      icon: <AdvancePlusIcon />,
    },
    {
      title: "Up to 89% profitability",
      value: "10",
      subtitle: "Trading Terms",
      icon: <PercentageIcon />,
    },
    {
      title: "New Status: Advanced",
      value: "11",
      subtitle: "Bonus",
      icon: <AdvancePlusIcon />,
    },
  ];

  return (
    <div className="tradersWay">
      <p className="menuText">
        Each status gives you different paths along the Trader's Way. Each path
        consists of several levels you can reach by trading and gaining XP. Each
        level gives you a unique reward. Once you've unlocked all of the levels
        and reached the end, you'll be upgraded to the next status. Your
        progress on the Trader's Way resets every 30 days.
      </p>

      <MenuListCard
        variant={3}
        title="From Starter to Advanced"
        subtitle="Trading Guide"
        icon={<PlayIcon />}
      />

      <div className="timeContainer">
        <p className="timeCountdown">22:02:21:27</p>
        <div className="timeLeftContainer">
          <p className="timeLeftText">
            Time Left until the Current Trader`s Way Stage Ends
          </p>
          <ArrowUpOS />
        </div>
      </div>

      <div className="levelBar">
        <p>LEVEL 1</p>
        <p className="levelText">0/50 XP</p>
      </div>

      <div className="traderOptions">
        {traderOptions?.map((item) => (
          <MenuListCard
            disabled={!item?.active}
            textCenter
            title={item.title}
            icon={<NumberIcon value={item.value} />}
            suffix={<CardSuffix text={item.subtitle} icon={item.icon} />}
            onClick={() => {
              if (item.active) {
                setModalOpen(true);
                setSelectedItem(item);
              }
            }}
          />
        ))}
      </div>

      <Modal
        open={isModalOpen}
        setOpen={setModalOpen}
        rootClassName="tradersWayModal"
      >
        <div className="modalBadge">{selectedItem?.subtitle}</div>
        {/* <div className="modalIcon">{selectedItem?.icon}</div> */}
        <p className="modalHeading">{selectedItem?.title}</p>
        <p className="modalText">{selectedItem?.description}</p>
        <button className="modalButton">Use</button>
      </Modal>
    </div>
  );
};

export default TradersWayMenu;
