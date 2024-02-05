import { Col, Row } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import { CheckIcon, PhoneIcon } from "../../assets/icons";
import "./enhanceSecurityStyles.scss";

interface EnhanceSecurityCardProps {}

const EnhanceSecurityCard: React.FunctionComponent<
  EnhanceSecurityCardProps
> = () => {
  return (
    <div className="enhanceSecurityContainer">
      <MainItemCard
        variant={2}
        className="securityEnhancements"
        pointer={false}
      >
        <p className="securityTitle">Enhance your account security</p>
        <p className="securitySubtitle">
          Add extra protection to your account and get a 50% deposit bonus
        </p>
        <Row gutter={[16, 16]} justify="start">
          <Col span={12}>
            <MainItemCard fullHeight className="securityItem">
              <div className="securityItemIcon">
                <PhoneIcon />
              </div>
              <p>Enable two-factor authentication</p>
            </MainItemCard>
          </Col>
          <Col span={12}>
            <MainItemCard fullHeight className="securityItem">
              <div className="securityItemIcon">
                <CheckIcon />
              </div>
              <p>Confirm your email</p>
            </MainItemCard>
          </Col>
        </Row>
      </MainItemCard>
    </div>
  );
};

export default EnhanceSecurityCard;
