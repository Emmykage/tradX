import MarketSubMenuCard from "../../../../../components/marketSubMenuCard/MarketSubMenuCard";
import MarketSubMenuSlider from "../../../../../components/marketSubMenuSlider/MarketSubMenuSlider";
import { StrategiesMarketSubMenuList } from "./constants";
import "./marketSubMenu.scss";

const StrategiesMarketSubMenu = () => {
  return (
    <div className="marketSubMenu">
      <MarketSubMenuSlider
        title="Signals"
        desc="Algorithm-based recommendations on when to open trades"
        img="/market-menu-images/ChessKing.svg"
        bgImg=""
        bgCol="sky"
      />
      {StrategiesMarketSubMenuList.map((item) => (
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

export default StrategiesMarketSubMenu;
