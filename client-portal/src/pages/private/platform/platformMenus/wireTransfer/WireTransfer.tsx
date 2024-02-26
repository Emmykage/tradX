import { useFormik } from "formik";
import * as Yup from "yup";
import { TimerIcon2 } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import "./wireTransfer.scss";

// Defined validation schema for input fields
const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required"),
  swiftCode: Yup.string().required("This field is required"),
  iban: Yup.string().required("This field is required"),
});

const WireTransfer = () => {
  // Initializes Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      swiftCode: "",
      iban: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="wireTransfer">
      <h2>Wire Transfer</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputsContainer">
          <Input
            className={`${
              formik.touched.name && formik.errors.name ? "inputError" : ""
            }`}
            variant={2}
            title="Name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
          <Input
            className={`${
              formik.touched.email && formik.errors.email ? "inputError" : ""
            }`}
            variant={2}
            title="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <Input
            className={`${
              formik.touched.swiftCode && formik.errors.swiftCode
                ? "inputError"
                : ""
            }`}
            variant={2}
            title="Swift Code"
            {...formik.getFieldProps("swiftCode")}
          />
          {formik.touched.swiftCode && formik.errors.swiftCode ? (
            <p>{formik.errors.swiftCode}</p>
          ) : null}
          <Input
            className={`${
              formik.touched.iban && formik.errors.iban ? "inputError" : ""
            }`}
            variant={2}
            title="IBAN"
            {...formik.getFieldProps("iban")}
          />
          {formik.touched.iban && formik.errors.iban ? (
            <p>{formik.errors.iban}</p>
          ) : null}
        </div>
        <div className="deliveryTime">
          <TimerIcon2 />
          <p>Your transfer will arrive in the next 3 days.</p>
        </div>
        <PrimaryButton onClick={formik.handleSubmit} Title="Withdraw" />
      </form>
    </div>
  );
};

export default WireTransfer;
