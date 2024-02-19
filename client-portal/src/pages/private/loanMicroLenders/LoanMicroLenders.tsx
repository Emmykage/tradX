import { useState } from "react";
import {
  EyeIcon,
  NotificationIcon3,
  ProfileIcon2,
  SearchIcon,
} from "../../../assets/icons";
import "./loanMicroLenders.scss";
import { Col, Row } from "antd";

const LoanMicroLenders = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavigationToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="loanMicroLenders">
      <nav className={`${toggleMenu ? "nav-top" : ""}`}>
        <div className="loan-logo"></div>
        <div className="loan-links">
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
          <div className="mobile-nav">
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
      <div className="loanTitle">
        Apply online and get a loan with Micro Lenders
      </div>
      <div className="rectangle-loan-links"></div>
      <div className="loanSubTitle">
        Only trusted companies with excellent reviews.
      </div>
      <Row className="BoxesDiv upperBoxes">
        <Col className="rectangleBox">
          <div className="Elipse"></div>
          <img src="/menu-images/svgs/MoneyMan.svg" alt="MoneyMan" />
        </Col>
        <Col className="rectangleBox">
          <div className="Elipse2"></div>
          <img src="/menu-images/svgs/fintonic.svg" alt="MoneyMan" />
        </Col>
      </Row>
      <Row className="BoxesDiv downsideBoxes">
        <Col className="rectangleBox">
          <div className="Elipse3"></div>
          <img src="/menu-images/svgs/vivus.svg" alt="MoneyMan" />
        </Col>
        <Col className="rectangleBox">
          <div className="Elipse4"></div>
          <img src="/menu-images/svgs/myKredit.svg" alt="MoneyMan" />
        </Col>
      </Row>
    </div>
  );
};

export default LoanMicroLenders;
