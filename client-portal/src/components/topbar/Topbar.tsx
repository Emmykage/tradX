import { CSSProperties } from "react";

import { useAppSelector } from "@store/hooks";
import { UserSliceState } from "@store/slices/user";
import { WalletSliceState } from "@store/slices/wallet";

import Loading from "components/loading";
import {
  CaretDownIcon,
  DropUpIcon,
  ProfileIcon,
  WalletIcon,
} from "../../assets/icons";
import {
  CurrentDrawerType,
  RightDrawerContent,
} from "../../pages/private/platform/types";
import "./topbar.scss";

interface TopbarProps {
  isDrawerOpen: boolean;
  setIsRightDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRightDrawerContent: React.Dispatch<
    React.SetStateAction<RightDrawerContent>
  >;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDrawer: React.Dispatch<React.SetStateAction<CurrentDrawerType>>;
  currentDrawer: CurrentDrawerType;
  style?: CSSProperties;
}

const Topbar: React.FunctionComponent<TopbarProps> = ({
  isDrawerOpen,
  setIsRightDrawerOpen,
  setIsRightDrawerContent,
  setIsDrawerOpen,
  setCurrentDrawer,
  currentDrawer,
  style,
}) => {
  const { user, loading } = useAppSelector(
    (state: { user: UserSliceState }) => state.user
  );

  const { selectedWallet } = useAppSelector(
    (state: { wallet: WalletSliceState }) => state.wallet
  );

  const { symbol } = useAppSelector((state) => state.markets);

  const ProfileImage = () => {
    if (loading) {
      return <Loading size="small" />;
    }

    return user?.profile_picture ? (
      <img
        src={user.profile_picture}
        alt="profile-img"
        className="profile-img"
      />
    ) : (
      <ProfileIcon />
    );
  };

  const WalletsButton = () => (
    <div
      className="demo"
      onClick={() => {
        setIsRightDrawerOpen(true);
        setIsRightDrawerContent("account");
      }}
    >
      <span className="dem">{selectedWallet?.name || "Demo Account"}</span>
      <div className="amount">
        <p className="value">
          {selectedWallet?.account_type__symbol || "D"}{" "}
          {selectedWallet?.available_balance || "9,999.00"}
        </p>
        <CaretDownIcon />
      </div>
    </div>
  );

  return (
    <div className="topbarContainer" id="topbarContainer" style={style}>
      <div
        className="conversionTab"
        onClick={() => {
          setIsDrawerOpen(
            isDrawerOpen && currentDrawer === "assets" ? false : true
          );
          setCurrentDrawer("assets");
        }}
      >
        <div className="convImg">
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703146258/conv_e2znxe.png"
            alt="conv"
          />
        </div>
        <div className="convDetails">
          <div className="topConv">
            <span className="currency">{symbol}</span>
            <span>OTC</span>
            <span className="percent">85%</span>
          </div>
        </div>
      </div>
      <div className="payProfileTab">
        <WalletsButton />
        <button
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("payments");
          }}
          className="payments"
        >
          Payments
        </button>
        <div className="profileButtons">
          <button
            className="dropup-icon"
            onClick={() => {
              setIsRightDrawerOpen(true);
              setIsRightDrawerContent("profile");
            }}
          >
            <DropUpIcon />
          </button>
          <button
            className="profile"
            onClick={() => {
              setIsRightDrawerOpen(true);
              setIsRightDrawerContent("profile");
            }}
          >
            <ProfileImage />
          </button>
        </div>
      </div>

      <div className="payProfileTab payProfileTabMobile">
        <div className="profileButtons">
          <button
            className="profile"
            onClick={() => {
              setIsRightDrawerOpen(true);
              setIsRightDrawerContent("profile");
            }}
          >
            <ProfileImage />
          </button>
        </div>
        <WalletsButton />
        <button
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("payments");
          }}
          className="profile"
        >
          <WalletIcon />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
