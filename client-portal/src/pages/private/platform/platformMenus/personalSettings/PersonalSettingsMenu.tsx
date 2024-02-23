import { Dispatch, SetStateAction } from "react";
import { InfoCircleIcon } from "../../../../../assets/icons";
import EnhanceSecurityCard from "../../../../../components/enhanceSecurityCard/EnhanceSecurityCard";
import Input from "../../../../../components/input/Input";
import Upload from "../../../../../components/upload/Upload";
import "./personalSettingsMenu.scss";
import { RightSubDrawerContent } from "../../types";

interface PersonalSettingsMenuProps {
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PersonalSettingsMenu: React.FunctionComponent<
  PersonalSettingsMenuProps
> = ({ setIsRightSubDrawerContent }) => {
  return (
    <div className="personalSettingsMenu">
      <EnhanceSecurityCard variant1={2} />

      <div>
        <p className="menuSectionTitle">Personal</p>
        <Input
          placeholder="Eneter your name"
          title="Name"
          defaultValue="Support"
          type="text"
          disabled
          suffixIcon={
            <div
              className="infoIcon"
              onClick={() => setIsRightSubDrawerContent("edit-name")}
            >
              <InfoCircleIcon />
            </div>
          }
        />
        <Upload placeholder="Upload Profile Picture" />
      </div>

      <div>
        <p className="menuSectionTitle">Contacts</p>
        <Input
          placeholder="Enter your email"
          title="Email"
          defaultValue="support@moneybee.loan"
          type="email"
          disabled
          suffixIcon={
            <div
              className="infoIcon"
              onClick={() => setIsRightSubDrawerContent("confirm-email")}
            >
              <InfoCircleIcon />
            </div>
          }
        />
        <Input
          placeholder="Enter your phonenumber"
          title="Phone number"
          defaultValue="(555) 555-1234"
          type="phone"
          disabled
          suffixIcon={
            <div
              className="infoIcon"
              onClick={() => setIsRightSubDrawerContent("confirm-phone")}
            >
              <InfoCircleIcon />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PersonalSettingsMenu;
