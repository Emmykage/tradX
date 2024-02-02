import { InfoCircleIcon } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import "./verificationMenu.scss";

interface VerificationMenuProps {}

const VerificationMenu: React.FunctionComponent<VerificationMenuProps> = () => {
  return (
    <div className="verificationsContainer">
      <div className="verificationBadge">
        <img src="/menu-images/verification-img.png" />
      </div>

      <MainItemCard pointer={false} className="infoCard" variant={2}>
        <InfoCircleIcon />
        <p>
          You don`t need to get verified for now. We`ll you know when you need
          to.
        </p>
      </MainItemCard>

      <MainItemCard pointer={false} className="verificationDetail" variant={2}>
        <p>
          Verificarion is a mandatory process for financial market participants.
          Whith its help, we we`re able to create a safe space for trading where
          you can be sure that your funds are secure.
        </p>
      </MainItemCard>

      <MainItemCard className="verificationLearnMore" variant={2}>
        <p>Learn More</p>
      </MainItemCard>
    </div>
  );
};

export default VerificationMenu;
