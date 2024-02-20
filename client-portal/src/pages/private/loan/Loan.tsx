import { useState } from "react";
import {
  EyeIcon,
  NotificationIcon3,
  ProfileIcon2,
  SearchIcon,
} from "../../../assets/icons";
import "./loan.scss";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const Loan = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavigationToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="loan">
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
      <div className="loanTitle">Get a Loan</div>
      <div className="rectangle-loan-links"></div>
      <Row className="BoxesDiv">
        <Link to="/loan/microlenders">
          <Col className="rectangleBox">
            <div className="Elipse"></div>
            <p>Micro Lenders</p>
          </Col>
        </Link>
        <Link to="/loan/get-loan">
          <Col className="rectangleBox">
            <div className="Elipse2"></div>
            <p>Loan</p>
          </Col>
        </Link>
      </Row>
    </div>
  );
};

export default Loan;
