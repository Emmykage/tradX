import {
  CaretDownIcon,
  DropUpIcon,
  ProfileIcon,
  WalletIcon,
} from "../../assets/icons";
import "./topbar.scss";

interface TopbarProps {
  isDrawerOpen: boolean;
  setIsRightDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRightDrawerContent: React.Dispatch<React.SetStateAction<string | null>>;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDrawer: React.Dispatch<
    React.SetStateAction<
      "trades" | "market" | "events" | "help" | "assets" | null
    >
  >;
  currentDrawer: "trades" | "market" | "events" | "help" | "assets" | null;
}

const Topbar: React.FunctionComponent<TopbarProps> = ({
  isDrawerOpen,
  setIsRightDrawerOpen,
  setIsRightDrawerContent,
  setIsDrawerOpen,
  setCurrentDrawer,
  currentDrawer,
}) => {
  return (
    <div className="topbarContainer" id="topbarContainer">
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
            <span className="currency">EUR/USD</span>
            <span>OTC</span>
            <span className="percent">82%</span>
          </div>
        </div>
      </div>
      <div className="payProfileTab">
        <div
          className="demo"
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("account");
          }}
        >
          <span className="dem">Demo Account</span>
          <div className="amount">
            <p className="value">Đ9.996.90</p>
            <CaretDownIcon />
          </div>
        </div>
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
            <ProfileIcon />
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
            <ProfileIcon />
          </button>
        </div>
        <div
          className="demo"
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("account");
          }}
        >
          <span className="dem">Demo Account</span>
          <div className="amount">
            <p className="value">Đ9.996.90</p>
            <CaretDownIcon />
          </div>
        </div>
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
