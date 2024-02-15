import "./Download.scss";
import {
  EyeIcon,
  NotificationIcon3,
  ProfileIcon2,
  SearchIcon,
} from "../../../assets/icons";
import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="downloads">
      <nav>
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
      </nav>
      <div className="downloads-links">
        <Typography.Title className="download-links-version">
          Download the right version for you
        </Typography.Title>
        <Link to="/downloads/anydesk" className="download-anydesk">
          AnyDesk
        </Link>
        <Link to="/downloads/teamviewer">
          <div className="download-teamviewer">TeamViewerL</div>
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
