import { Dispatch, SetStateAction } from "react";
import { InfoCircleIcon } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import "./verificationMenu.scss";
import { RightSubDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import { useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom";

interface VerificationMenuProps {
  setIsRightSubDrawerOpen?: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent?: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const VerificationMenu: React.FunctionComponent<VerificationMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const { themeSelect } = useAppSelector((state) => state.themeBg);
  const navigate = useNavigate();

  return (
    <div className={`${themeSelect} verificationsContainer max-w-3xl m-auto`}>
      <div className="verificationBadge">
        <img src="/menu-images/verification-img.png" />
      </div>
      <div className="kycVerifyButton w-1/2 m-auto">
        <PrimaryButton
          onClick={() => {
            navigate("/kyc-document/?query=biodata-kyc");
          }}
          className="verificationLearnMore"
          Title="KYC Verification"
        />
      </div>

      {/* <MainItemCard pointer={false} className="verificationDetail" variant={2}>
        <p>
          Verification is a mandatory process for financial market participants.
          With its help, we're able to create a safe space for trading where
          you can be sure that your funds are secure.
        </p>
      </MainItemCard> */}
      <div className="learnMoreButton w-1/2 m-auto">
        <PrimaryButton
          onClick={() => {
            if (setIsRightSubDrawerOpen) {
              setIsRightSubDrawerOpen(true);
            }
            if (setIsRightSubDrawerContent) {
              setIsRightSubDrawerContent("verification-helpcenter-menu");
            }
          }}
          className="verificationLearnMore"
          Title="Learn More"
        />
      </div>
    </div>
  );
};

export default VerificationMenu;
