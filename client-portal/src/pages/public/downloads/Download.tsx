import "./Download.scss";
import {
  EyeIcon,
  NotificationIcon3,
  ProfileIcon2,
  SearchIcon,
} from "../../../assets/icons";
import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const Download = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavigationToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="downloads">
      <nav className={`${toggleMenu ? "nav-top" : ""}`}>
        <div className="nav-items-start">
          <p>Movement</p>
          <p>Bills</p>
        </div>

        <div className="nav-items-end">
          <p>Support</p>
          <SearchIcon />
          <EyeIcon />
          <NotificationIcon3 />
          <ProfileIcon2 />
        </div>
        {toggleMenu && (
          <div className="mobile-nav-items">
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

      <div className="downloads-links">
        <Typography.Title className="download-links-version">
          Download the right version for you
        </Typography.Title>
        <Link to="/downloads/anydesk" className="download-anydesk">
          AnyDesk
        </Link>
        <Link className="download-teamviewer" to="/downloads/teamviewer">
          TeamViewer
        </Link>
      </div>
      <div className="rectangle-download-links"></div>
      <div className="downloads-platforms">All platforms .All devices</div>
      <Row className="row">
        <Col xs={24} sm={12} md={8} lg={6}>
          <img className="windows" src="/downloads/Windows.png" alt="windows" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <img className="macos" src="/downloads/macOS.png" alt="windows" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <img
            className="chrome"
            src="/downloads/Chrome OS.png"
            alt="windows"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <img
            className="group89"
            src="/downloads/Group 89.png"
            alt="windows"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <img className="android" src="/downloads/Android.png" alt="windows" />
        </Col>
      </Row>
    </div>
  );
};

export default Download;
