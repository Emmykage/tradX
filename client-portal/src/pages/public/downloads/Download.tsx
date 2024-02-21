import "./Download.scss";
import { Col, Row, Typography } from "antd";
import { useState } from "react";
import { ArrowLeftIcon } from "../../../assets/icons";

const Download = () => {
  const [activeTab, setActiveTab] = useState("anydesk");

  return (
    <div className="downloads">
      <div className="go-back">
        <ArrowLeftIcon />
      </div>
      <div className="downloads-header">
        <Typography.Title className="downloads-header-title">
          Download the right version for you
        </Typography.Title>
        <div className="buttonContent">
          <button>Back</button>
        </div>
      </div>
      <div className="line-bar">
        <div className="rectangle-download-links"></div>
      </div>
      <div className="subTitle">
        <div className="downloads-platforms">All platforms .All devices</div>
      </div>
      {/* AnyDesk and TeamViewer links */}
      <div className="downloads-platforms-links">
        <div className="platform">
          <img
            onClick={() => setActiveTab("anydesk")}
            src="/downloads/AnydeskLogo.svg"
            alt="anydeskLogo"
          />
        </div>
        <div className="platform">
          <img
            onClick={() => setActiveTab("teamviewer")}
            src="/downloads/TeamViewerLogo.svg"
            alt="teamviewerLogo"
          />
        </div>
      </div>
      <div className="downloads-active-bar">
        <div
          className={`active-bar-line anydesk-line ${
            activeTab === "anydesk" && "active-bar"
          }`}
        ></div>
        <div
          className={`active-bar-line teamviewer-line ${
            activeTab === "teamviewer" && "active-bar"
          }`}
        ></div>
      </div>
      {/* Devices list boxes */}
      <Row className="download-devices">
        <Col className="device-container">
          <div className="device-box">
            <img src="/downloads/WindowsLogo.svg" alt="windowsLogo" />
            <div className="elipse-windows"></div>
          </div>
          <p>Windows</p>
        </Col>
        <Col className="device-container">
          <div className="device-box">
            <img src="/downloads/MacosLogo.svg" alt="windowsLogo" />
            <div className="elipse-macos-1"></div>
            <div className="elipse-macos-2"></div>
          </div>
          <p>macOS</p>
        </Col>
        <Col className="device-container">
          <div className="device-box">
            <img src="/downloads/ChromeLogo.svg" alt="windowsLogo" />
            <div className="elipse-chrome"></div>
          </div>
          <p>Chrome OS</p>
        </Col>
        <Col className="device-container">
          <div className="device-box">
            <img src="/downloads/IosLogo.svg" alt="windowsLogo" />
            <div className="elipse-ios"></div>
          </div>
          <p>iOS</p>
        </Col>
        <div className="device-container">
          <div className="device-box">
            <img src="/downloads/AndroidLogo.svg" alt="windowsLogo" />
            <div className="elipse-android-1"></div>
            <div className="elipse-android-2"></div>
          </div>
          <p>Android</p>
        </div>
      </Row>
    </div>
  );
};

export default Download;
