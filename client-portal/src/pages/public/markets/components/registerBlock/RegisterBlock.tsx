import "./RegisterBlock.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//img
import IphoneOneImg from "../../../../../assets/markets/1.png";
import IphoneOneMobileImg from "../../../../../assets/markets/iphoneOneMobile.png";
import IphoneTwoImg from "../../../../../assets/markets/2.png";
import IphoneTwoMobileImg from "../../../../../assets/markets/iphoneTwoMobile.png";
import LinesImg from "../../../../../assets/markets/lines.png";
import LinesTwoImg from "../../../../../assets/markets/lines2.png";
import TrustPilotImg from "../../../../../assets/markets/trustpilot.png";
import GoogleSvg from "../../../../../assets/markets/google.svg";
import AppleSvg from "../../../../../assets/markets/apple.svg";
import FacebookSvg from "../../../../../assets/markets/facebook.svg";
import useWindowWidth from "hooks/useWindowWidth";

// Defined validation schema for input fields
const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required"),
});

const RegisterBlock = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const windowWidth = useWindowWidth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="registerBlockWrapper">
      <div className="registerBlockContainer">
        <img className="registerBlockLines" src={LinesImg} alt="" />
        <img className="registerBlockLinesTwo" src={LinesTwoImg} alt="" />

        {windowWidth > 728 ? (
          <div className="registerBlockImages">
            <img src={IphoneOneImg} alt="" />
            <img src={IphoneTwoImg} alt="" />
          </div>
        ) : (
          <div className="registerBlockImages">
            <img src={IphoneOneMobileImg} alt="" />
            <img src={IphoneTwoMobileImg} alt="" />
          </div>
        )}

        <div className="registerBlockInputs">
          <div>
            <h2>Ready to trade?</h2>
            <h2>Create an account!</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                className={`${
                  formik.touched.name && formik.errors.name ? "inputError" : ""
                }`}
                placeholder="Enter your email"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
              <input
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "inputError"
                    : ""
                }`}
                placeholder="Enter your password"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}
            </div>
            <button onClick={() => formik.handleSubmit()}>
              Create an Account
            </button>

            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              By creating an account, you agree to our{" "}
              <span>Privacy Policy</span>, <span>Cookie Policy</span> and
              receive marketing emails. Subscriptions can be managed under
              Notifications settings in your account.{" "}
            </label>
          </form>

          <div className="registerBlockIcons">
            <img src={GoogleSvg} alt="" />
            <img src={FacebookSvg} alt="" />
            <img src={AppleSvg} alt="" />
          </div>
          <img
            className="registerBlockTrustPilotImg"
            src={TrustPilotImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterBlock;
