import { useEffect, useState } from "react";
import "./emailVerification.scss";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";
import useEmailVerify from "api/user/useEmailVerify";

interface EmailVerificationProps {}

const EmailVerification: React.FunctionComponent<
  EmailVerificationProps
> = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [statusMsg, setStatusMsg] = useState("");

  const { mutate } = useEmailVerify({
    onSuccess: (data) => {
      setStatus("success");
      setStatusMsg(data.detail);
      setLoading(false);
    },
    onError: () => {
      setStatus("error");
      setStatusMsg("Cannot verify your email, Please try again.");
      setLoading(false);
    },
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const uidb64 = queryParams.get("uidb64") || undefined;
    const token = queryParams.get("token") || undefined;

    console.log("uidb64", uidb64);
    console.log("token", token);
    mutate({ uidb64, token });
  }, [mutate]);

  return (
    <div className="emailVerificationContainer">
      <p className="verificationTitle">
        Please wait while we verify your email
      </p>

      {loading ? <Spin size="large" /> : null}

      {statusMsg ? <p className={`status ${status}`}>{statusMsg}</p> : null}
    </div>
  );
};

export default EmailVerification;
