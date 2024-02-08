import { InfoCircleIcon } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./confirmPhone.scss";

interface ConfirmPhoneProps {}

const ConfirmPhone: React.FunctionComponent<ConfirmPhoneProps> = () => {
  return (
    <div className="confirmPhoneMenu">
      <p className="sectionTitle">
        We do not spam call and do not impose hidden charges. A telephone number
        is only a necessary for the security of your account.
      </p>

      <Input
        placeholder="Enter your phonenumber"
        title="Mobile phone number"
        defaultValue="(555) 555-1234"
        type="phone"
        suffixIcon={<InfoCircleIcon />}
      />

      <MenuListCard textCenter title="Get the code" />
    </div>
  );
};

export default ConfirmPhone;
