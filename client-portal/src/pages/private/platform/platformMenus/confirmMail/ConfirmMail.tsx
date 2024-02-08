import { InfoCircleIcon } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./confirmMail.scss";

interface ConfirmMailProps {}

const ConfirmMail: React.FunctionComponent<ConfirmMailProps> = () => {
  return (
    <div className="confirmMailMenu">
      <Input
        placeholder="Enter your email"
        title="Email"
        defaultValue="support@moneybee.loan"
        type="email"
        suffixIcon={<InfoCircleIcon />}
      />

      <MenuListCard textCenter title="Continue" />
    </div>
  );
};

export default ConfirmMail;
