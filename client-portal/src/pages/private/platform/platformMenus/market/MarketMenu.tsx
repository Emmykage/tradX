import { useNavigate } from "react-router-dom";
import "./marketMenu.scss";
import {
  ArrowRightIcon,
  ArrowRightOS,
  RightArrowIcon,
} from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import CarouselSlider from "../../../../../components/carouselSlider/CarouselSlider";
import BoostCubes from "../boostClubes/BoostCubes";

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

      {/* <CarouselSlider>
        <MainItemCard></MainItemCard>
        <MainItemCard></MainItemCard>
        <MainItemCard></MainItemCard>
      </CarouselSlider> */}
      {/* <BoostCubes /> */}
      {/* <div className="carousel-wrapper">
        <div className="flexItems">
          <div className="text">
            <p className="giftHead">Forex</p>
            <p className="prof">
              Professional tools to help predict market trends{" "}
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703602367/bag-dynamic-color_hrvnwe.png"
            alt="gift-bag"
          />
        </div>
      </div>
      <div className="trade-conditions">
        <div className="imgWrap">
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703603004/coin_g0cie0.png"
            alt="coin"
          />
        </div>
        <div className="texts">
          <p className="tr-head">Trading Conditions</p>
          <p className="tr-txt">
            Features that provide more benefitial trading conditions
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default MarketMenu;
