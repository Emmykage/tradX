import MarketSubMenuCard from "../../../../../components/marketSubMenuCard/MarketSubMenuCard";
import MarketSubMenuSlider from "../../../../../components/marketSubMenuSlider/MarketSubMenuSlider";
import "./marketSubMenu.scss";

const MarketSubMenuList = [
  {
    id: 1,
    title: "Duet +1",
    rating: "5.0",
    price: "8.00",
    total: "173,125",
    img: "/market-menu-images/market-sub-menu-images/Duet.svg",
  },
  {
    id: 2,
    title: "2D",
    rating: "5.0",
    price: "23.00",
    total: "29,960",
    img: "/market-menu-images/market-sub-menu-images/2D.svg",
  },
  {
    id: 3,
    title: "U Turn",
    rating: "4.3",
    price: "22.00",
    total: "13,883",
    img: "/market-menu-images/market-sub-menu-images/UTurn.svg",
  },
  {
    id: 4,
    title: "Ichimoku Lines",
    rating: "4.3",
    price: "15.00",
    total: "11,363",
    img: "/market-menu-images/market-sub-menu-images/Lines.svg",
  },
  {
    id: 5,
    title: "Trend Hunter",
    rating: "4.1",
    price: "30.00",
    total: "22,075",
    img: "/market-menu-images/market-sub-menu-images/TrendHunter.svg",
  },
  {
    id: 6,
    title: "MACD Power",
    rating: "4.0",
    price: "20.00",
    total: "17,035",
    img: "/market-menu-images/market-sub-menu-images/MACDPower.svg",
  },
];

const MarketSubMenu = () => {
  return (
    <div className="marketSubMenu">
      <MarketSubMenuSlider
        title="Forex"
        desc="Strategies, signals, and themes designed for trading on crypto
              assets"
        img="/market-menu-images/Forex.png"
        bgImg="/market-menu-images/forex.svg"
        bgCol="red"
      />
      {MarketSubMenuList.map((item) => (
        <MarketSubMenuCard
          key={item.id}
          img={item.img}
          title={item.title}
          rating={item.rating}
          price={item.price}
          total={item.total}
        />
      ))}
    </div>
  );
};

export default MarketSubMenu;
