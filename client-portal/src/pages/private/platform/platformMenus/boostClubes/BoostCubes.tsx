import CarouselSlider from "../../../../../components/carouselSlider/CarouselSlider";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./boostCubes.scss";

interface BoostCubesProps {}

const BoostCubes: React.FunctionComponent<BoostCubesProps> = () => {
  return (
    <div className="boostCubes">
      <CarouselSlider>
        <div className="boostCubesCarouselItem">
          <div className="textContainer">
            <p className="infoText">
              Make your first USDT deposit and receive a Boost Cue
            </p>
          </div>
          <MenuListCard title="Make Deposit" textCenter />
        </div>
        <div className="boostCubesCarouselItem">
          <div className="textContainer">
            <p className="infoText">
              Invite your friends to trade and receive a Boost Cube
            </p>
          </div>
          <MenuListCard title="Open Referral Program" textCenter />
        </div>
      </CarouselSlider>
    </div>
  );
};

export default BoostCubes;
