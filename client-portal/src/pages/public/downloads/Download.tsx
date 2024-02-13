import "./Download.scss";
import { EyeIcon, NotificationIcon, SearchIcon } from "../../../assets/icons";
import { Col, Row } from "antd";

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
          <NotificationIcon />
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13.5" cy="13.5" r="13.5" fill="#1184C5" />
            <path
              d="M8.68457 8.33594H10.0542L13.5479 17.0298L17.0342 8.33594H18.4111L14.0752 19H13.0059L8.68457 8.33594ZM8.23779 8.33594H9.44629L9.64404 14.8398V19H8.23779V8.33594ZM17.6421 8.33594H18.8506V19H17.4443V14.8398L17.6421 8.33594Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
      <div className="downloads-links">
        <div className="download-links-version">
          Download the right version for you
        </div>
        <div className="download-anydesk">AnyDesk</div>
        <div className="download-teamviewer">TeamViewer</div>
      </div>
      <div className="rectangle-download-links"></div>
      <div className="downloads-platforms">All platforms .All devices</div>
      <Row className="row">
        <Col span={6}>
          <img className="windows" src="/downloads/Windows.png" alt="windows" />
        </Col>
        <Col span={6}>
          <img className="macos" src="/downloads/macOS.png" alt="windows" />
        </Col>
        <Col span={6}>
          <img
            className="chrome"
            src="/downloads/Chrome OS.png"
            alt="windows"
          />
        </Col>
        <Col span={6}>
          <img
            className="group89"
            src="/downloads/Group 89.png"
            alt="windows"
          />
        </Col>
        <Col span={6}>
          <img className="android" src="/downloads/Android.png" alt="windows" />
        </Col>
      </Row>
    </div>
  );
};

export default Download;
