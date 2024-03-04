import { Col, Row } from "antd";
import "./tradingTutorials.scss";

const TradingTutorials = () => {
  return (
    <Row className="tradingTutorials">
      <Col span={12} className="clockContainer">
        <img src="/menu-images/svgs/Clock.svg" alt="" />
        <h2>Fixed Time Trading</h2>
      </Col>
      <Col span={12} className="clockContainerSecond">
        <img src="/menu-images/svgs/FxTutorials.svg" alt="" />
        <h2>Forex Trading</h2>
      </Col>
    </Row>
  );
};

export default TradingTutorials;
