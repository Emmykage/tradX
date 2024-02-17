import { Col, Row } from "antd";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import "./boostCubes.scss";

interface BoostCubesProps {}

const BoostCubes: React.FunctionComponent<BoostCubesProps> = () => {
  return (
    <div className="boostCubes">
      <MainItemCard variant={3} className="boostCubes-Card">
        <Row>
          <Col span={13}>
            <p className="boostCubes-text">
              Invite your Friends to Trade and receive a Boost Cube
            </p>
            <button className="boostCubes-button">Open Referral Program</button>
          </Col>
          <Col className="img-col" span={11}>
            <img src="/menu-images/svgs/envelope.svg" alt="" />
          </Col>
        </Row>
      </MainItemCard>
      <MainItemCard variant={3} className="boostCubes-Card">
        <Row>
          <Col span={13}>
            <p className="boostCubes-text">
              Make your first USDT Deposit and receive a Boost Cube
            </p>
            <button className="boostCubes-button">Make Deposit</button>
          </Col>
          <Col className="img" span={11}>
            <img src="/menu-images/svgs/tether.svg" alt="" />
          </Col>
        </Row>
      </MainItemCard>
    </div>
  );
};

export default BoostCubes;
