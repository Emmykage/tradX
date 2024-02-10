import { useNavigate } from "react-router-dom";
import "./marketMenu.scss";
import { ArrowRightOS } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import CarouselSlider from "../../../../../components/carouselSlider/CarouselSlider";

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
      <ArrowRightOS />
    </MainItemCard>
  );
};

const MarketMenu: React.FunctionComponent<MarketMenuProps> = () => {
  return (
    <div className="market-menu">
      <MarketLink text="My Purchases & Rewards" />
      <MarketLink text="My Published Strategies" />
      <CarouselSlider>
        <div className="menuSecondCardCon">
          <MainItemCard className="menuSecondCard">
            <p className="menuSecondCardText1">Astro</p>
            <p className="menuSecondCardText2">
              Astrology-based tools to help align your trades with the stars
            </p>
          </MainItemCard>
        </div>
        <div className="menuSecondCardCon">
          <MainItemCard className="menuSecondCard">
            <p className="menuSecondCardText1">Astro</p>
            <p className="menuSecondCardText2">
              Astrology-based tools to help align your trades with the stars
            </p>
          </MainItemCard>
        </div>
        <div className="menuSecondCardCon">
          <MainItemCard className="menuSecondCard">
            <p className="menuSecondCardText1">Astro</p>
            <p className="menuSecondCardText2">
              Astrology-based tools to help align your trades with the stars
            </p>
          </MainItemCard>
        </div>
      </CarouselSlider>
      <div className="menuthirdCardCon">
        <MainItemCard className="menuthirdCard">
          <p className="menuthirdCardText1">Trading Conditions</p>
          <p className="menuthirdCardText2">
            Astrology-based tools to help align your trades with the stars
          </p>
        </MainItemCard>
      </div>
      <div className="menuthirdCardCon">
        <MainItemCard className="menuthirdCard">
          <p className="menuthirdCardText1">Signals</p>
          <p className="menuthirdCardText2">
            Algorithm-based recommendations on when to open trades
          </p>
        </MainItemCard>
      </div>
      <div className="menuthirdCardCon">
        <MainItemCard className="menuthirdCard">
          <p className="menuthirdCardText1">Custom Strategies</p>
          <p className="menuthirdCardText2">
            Buy trader-created strategies best suited to your trading style
          </p>
        </MainItemCard>
      </div>
    </div>
  );
};

export default MarketMenu;
