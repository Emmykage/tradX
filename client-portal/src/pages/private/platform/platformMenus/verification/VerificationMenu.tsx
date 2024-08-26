import { Dispatch, SetStateAction } from "react";
import { InfoCircleIcon } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import "./verificationMenu.scss";
import { RightSubDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import { useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom";

interface VerificationMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const VerificationMenu: React.FunctionComponent<VerificationMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const {themeSelect} = useAppSelector(state => state.themeBg)
  const navigate = useNavigate()
  return (
    <div className={`${themeSelect} verificationsContainer`}>
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
      <div className="learnMoreButton">
        <PrimaryButton
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("verification-helpcenter-menu");
          }}
          className="verificationLearnMore"
          Title="Learn More"
        />
      </div>

      <div className="kycVerifyButton">
        <PrimaryButton
          onClick={() => {
            navigate("/kyc-document/?query=biodata-kyc")
          }}
          className="verificationLearnMore"
          Title="KYC Verification"
        />
      </div>
    </div>
  );
};

export default VerificationMenu;
