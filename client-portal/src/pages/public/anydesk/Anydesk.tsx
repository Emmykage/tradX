import { Button, Col, Row, Typography } from "antd";
import {
  AndroidIcon,
  // AnydeskAndroidIcon,
  // AnydeskChromeIcon,
  // AnydeskIOSIcon,
  AnydeskLogo,
  // AnydeskMacIcon,
  // AnydeskWindowsIcon,
  // AppStoreIcon,
  ChromeIcon,
  ElipseShadow,
  ElipseShadow2,
  EyeIcon,
  // GooglePlayStoreIcon,
  IOSIcon,
  MacOSIcon,
  NotificationIcon3,
  ProfileIcon2,
  SearchIcon,
  TickMarkIcon,
  WindowsIcon,
} from "../../../assets/icons";
import "./Anydesk.scss";
import { useState } from "react";

const AnydeskContentList = [
  {
    title: " for Windows",
    description: "Your Remote Desktop Software for Windows",
    tags: [
      "Lightly designed.",
      "Smooth Remote Desktop connections.",
      "Easy Online Remote Collaboration.",
      "Compatible with earlier Windows versions.",
      "Always free updates.",
    ],
    // icon: <AnydeskWindowsIcon />,
    icon2: "elipse",
  },
  {
    title: " for Mac",
    description: "Your Remote Desktop Software for Mac",
    tags: [
      "Super-fast remote connections.",
      "Stable and secure Performance.",
      "Quick and simple setup.",
      "Cross-compatibility between different OS and versions.",
      "Flexible license models.",
    ],
    // icon: <AnydeskMacIcon />,
    icon2: "elipse",
  },
  {
    title: " for iOS",
    description: "Your Remote Desktop Software for iOS",
    tags: [
      "Seamless and stable remote desktop for iOS devices.",
      "Connectivity across a broad range of applications.",
      "Remote Access and remote control from any location.",
      "Unparalleled performance and security.",
    ],
    // icon: <AnydeskIOSIcon />,
    // playStoreIcon: <AppStoreIcon />,
  },
  {
    title: " for Android",
    description: "Your Remote Desktop Software for Android",
    tags: [
      "Ultimate Remote Access app for Android.",
      "Seamless connectivity in any situation, for any use case.",
      "Unparalleled performance.",
      "Flexible license models.",
      "Easily customized.",
    ],
    // icon: <AnydeskAndroidIcon />,
    // playStoreIcon: <GooglePlayStoreIcon />,
  },
  {
    title: " for Chrome OS",
    description: "Your Remote Desktop Software for Chrome OS",
    tags: [
      "Ultimate Remote Access app for Chromebook.",
      "Seamless connectivity in any situation, for any use case.",
      "Unparalleled performance.",
      "Easy to set up and use.",
      "Flexible license models.",
      "Easily customization.",
    ],
    // icon: <AnydeskChromeIcon />,
    icon2: "elipse",
    // playStoreIcon: <GooglePlayStoreIcon />,
  },
];

const icons = [
  { icon: <WindowsIcon />, name: "Windows", border: "border" },
  { icon: <MacOSIcon />, name: "macOS" },
  { icon: <ChromeIcon />, name: "Chrome OS" },
  { icon: <AndroidIcon />, name: "Android" },
  { icon: <IOSIcon />, name: "IOS" },
];

const Anydesk = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavigationToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="anydesk">
      <nav className={`${toggleMenu ? "nav-top" : ""}`}>
        <div className="anydesk-logo">
          <AnydeskLogo />
        </div>
        <div className="anydesk-links">
          <p>Download</p>
          <p>Movement</p>
          <p>Bills</p>
          <p>Support</p>
          <SearchIcon />
          <EyeIcon />
          <NotificationIcon3 />
          <ProfileIcon2 />
        </div>
        {toggleMenu && (
          <div className="mobile-anydesk-links">
            <p>Download</p>
            <p>Movement</p>
            <p>Bills</p>
            <p>Support</p>
            <SearchIcon />
            <EyeIcon />
            <NotificationIcon3 />
            <ProfileIcon2 />
          </div>
        )}
        {!toggleMenu ? (
          <div onClick={handleNavigationToggle} className="hamburger-icon">
            <div className="ham-line-1"></div>
            <div className="ham-line-2"></div>
            <div className="ham-line-3"></div>
          </div>
        ) : (
          <div
            onClick={handleNavigationToggle}
            className="hamburger-icon-cross"
          >
            <div className="ham-cross-1"></div>
            <div className="ham-cross-2"></div>
          </div>
        )}
      </nav>

      <div className="rectangle-anydesk-bar"></div>
      <Typography.Title className="anydesk-title">
        All Platforms. All Devices.
      </Typography.Title>
      <div className="anydesk-devices">
        <Row className="anydesk-devices-row" gutter={40}>
          {icons.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={8} xs={12}>
              <div
                className={`anydesk-devices-col ${item.border ? "border" : ""}`}
              >
                {item.icon}
              </div>
              <div className="anydesk-devices-col-title">{item.name}</div>
            </Col>
          ))}
        </Row>
      </div>
      {AnydeskContentList &&
        AnydeskContentList.map((item, index) => (
          <Row key={index} className="anydesk-download">
            <Col xl={12} lg={24} className="anydesk-text">
              <Typography className="anydesk-download-title">
                <span className="anydesk-download-title-span">AnyDesk </span>{" "}
                {item.title}
              </Typography>
              <div className="rectangle-anydesk-smallbar"></div>
              <Typography.Text className="anydesk-download-text">
                {item.description}
              </Typography.Text>
              <div className="anydesk-download-contents">
                {item.tags.map((tag, index) => (
                  <div key={index} className="anydesk-download-content-tagline">
                    <div>
                      <TickMarkIcon />
                    </div>
                    <div>{tag}</div>
                  </div>
                ))}
              </div>
              {/* {item.playStoreIcon && (
                <div className="anydesk-playstore-icons">
                  <div className="playstore-image-shadow">
                    <ElipseShadow2 />
                  </div>
                  <div className="playstore-image">{item.playStoreIcon}</div>
                </div>
              )} */}
              <Button className="download-button">Download</Button>
            </Col>
            <Col xl={12} lg={24} className="anydesk-images">
              {item.icon2 === "elipse" && (
                <div className="anydesk-image-shadow">
                  <ElipseShadow />
                </div>
              )}
              {/* <div className="anydesk-image">{item.icon}</div> */}
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default Anydesk;
