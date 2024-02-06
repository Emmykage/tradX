import { Col, Row } from "antd";
import "./interfaceScale.scss";
import { useState } from "react";

interface InterfaceScaleProps {}

const InterfaceScale: React.FunctionComponent<InterfaceScaleProps> = () => {
  const [activeTab, selectActiveTab] = useState("100");
  return (
    <div className="interfaceScale">
      <p className="interfaceScaleTitle">Interface scale</p>
      <Row gutter={[2, 2]} justify="start">
        <Col span={8}>
          <div
            onClick={() => selectActiveTab("80")}
            className={`interfaceTab one ${activeTab === "80" ? "active" : ""}`}
          >
            80%
          </div>
        </Col>
        <Col span={8}>
          <div
            onClick={() => selectActiveTab("90")}
            className={`interfaceTab two ${activeTab === "90" ? "active" : ""}`}
          >
            90%
          </div>
        </Col>
        <Col span={8}>
          <div
            onClick={() => selectActiveTab("100")}
            className={`interfaceTab three ${
              activeTab === "100" ? "active" : ""
            }`}
          >
            100%
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InterfaceScale;
