import "./loan.scss";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import LoanNavbar from "../../../components/loanNavbar/LoanNavbar";

const Loan = () => {
  return (
    <div className="loan">
      <LoanNavbar />
      <div className="loanTitle">Get a LoanL</div>
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
