import { Button } from "antd";
import { ArrowRightIcon } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import "./VerificationMandatory.scss";

const VerificationMandatory = () => {
  return (
    <div className="verification-mandatory">
      <div className="buttons">
        <Button className="btn">Back</Button>
      </div>
      <MainItemCard className="trading-platforms-about">
        <div className="about-info">
          <h3>Voluntary and Mandatory Verification</h3>
          <div className="about-info-content">
            <div className="content">
              <p className="text">
                You can verify your account at any convenient time. To do so,
                you need to contact the support service.
                <br />
                <br />
                Open the Help section in the main menu, go to Support, and click
                Open Chat. Then write a message requesting verification.
                <br />
                <br />
                In certain circumstances, verification is mandatory. For
                example, if you make a deposit using a new payment method or
                contact support because you suspect your account has been
                compromised.
                <br />
                <br />
                You will receive a notification and an email stating the
                verification process is activated in any case. Follow the link
                in the email to start the verification process.
              </p>
            </div>
          </div>
        </div>
      </MainItemCard>

      <div className="olymp-trade">
        <ArrowRightIcon width="" height="" color="#0094FF" />
        <div>Verification Timeframe</div>
      </div>
    </div>
  );
};

export default VerificationMandatory;
