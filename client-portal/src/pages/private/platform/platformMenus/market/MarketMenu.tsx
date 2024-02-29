import { useNavigate } from "react-router-dom";
import "./marketMenu.scss";
import { ArrowRightOS } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import CarouselSlider from "../../../../../components/carouselSlider/CarouselSlider";
import { Col, Row } from "antd";
import MarketSubMenuSlider from "../../../../../components/marketSubMenuSlider/MarketSubMenuSlider";

interface MarketMenuProps {}

const MarketLink = ({ text, link }: { text: string; link?: string }) => {
  const navigate = useNavigate();
  return (
    <MainItemCard
      onClick={() => navigate(link || "")}
      className="menufirstCard"
      variant={2}
    >
      <p className="menufirstCardText">{text}</p>
      <ArrowRightOS width="22" height="22" />
    </MainItemCard>
  );
};

const MarketMenuList = [
  {
    id: 1,
    title: "Trading Conditions",
    desc: "Features that provide more benefitial trading conditions",
    img: "/market-menu-images/TradingCondition.svg",
  },
  {
    id: 2,
    title: "Signals",
    desc: "Algorithm-based recommendations on when to open trades",
    img: "/market-menu-images/Signals.svg",
  },
  {
    id: 3,
    title: "Custom Strategies",
    desc: "Buy trader-created strategies best suited to your trading style",
    img: "/market-menu-images/CustomStrategies.svg",
  },
  {
    id: 4,
    title: "Strategies",
    desc: "Ready-to-use sets of tools that make it easier to spot entry and exit points",
    img: "/market-menu-images/ChessKing.svg",
  },
  {
    id: 5,
    title: "Indicators",
    desc: "Ready-to-use sets of tools that make it easier to spot entry and exit points",
    img: "/market-menu-images/PlusPurple.svg",
  },
  {
    id: 6,
    title: "Themes",
    desc: "Different color themes for customizing the appearance of the interface",
    img: "/market-menu-images/Themes.svg",
  },
  {
    id: 7,
    title: "Advisers",
    desc: "Indicator-based signals that help identify entry points",
    img: "/market-menu-images/Ideas.svg",
  },
];

const MarketMenu: React.FunctionComponent<MarketMenuProps> = () => {
  return (
    <div className="market-menu">
      <MarketLink text="My Purchases & Rewards" />
      <MarketLink text="My Published Strategies" />
      <CarouselSlider>
        <MarketSubMenuSlider
          title="Astro"
          desc="Astrology-based tools to help align your trades with the stars"
          img="/market-menu-images/Astro.png"
          bgImg="/market-menu-images/astro.svg"
          bgCol="purple"
        />
        <MarketSubMenuSlider
          title="Forex"
          desc="Strategies, signals, and themes designed for trading on crypto
              assets"
          img="/market-menu-images/Forex.png"
          bgImg="/market-menu-images/forex.svg"
          bgCol="red"
        />
        <MarketSubMenuSlider
          title="Crypto"
          desc="Strategies, signals, and themes designed for trading on crypto
              assets"
          img="/market-menu-images/Crypto.png"
          bgImg="/market-menu-images/crypto.svg"
          bgCol="green"
        />
      </CarouselSlider>
      {MarketMenuList.map((item) => (
        <div key={item.id} className="menuthirdCardCon">
          <MainItemCard className="menuthirdCard">
            <Row className="menuThirdCardRow">
              <Col span={15}>
                <p className="menuthirdCardText1">{item.title}</p>
                <p className="menuthirdCardText2">{item.desc}</p>
              </Col>
              <Col span={3}></Col>
              <Col span={6} className="svgs">
                <img src={item.img} alt="" />
              </Col>
            </Row>
          </MainItemCard>
        </div>
      ))}
    </div>
  );
};

export default MarketMenu;
