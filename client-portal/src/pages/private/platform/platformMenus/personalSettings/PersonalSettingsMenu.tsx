import { Dispatch, SetStateAction } from "react";
import { InfoCircleIcon } from "../../../../../assets/icons";
import EnhanceSecurityCard from "../../../../../components/enhanceSecurityCard/EnhanceSecurityCard";
import Input from "../../../../../components/input/Input";
import Upload from "../../../../../components/upload/Upload";
import "./personalSettingsMenu.scss";
import { RightSubDrawerContent } from "../../types";
import InputOverlay from "./InputOverlay";

interface PersonalSettingsMenuProps {
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PersonalSettingsMenu: React.FunctionComponent<
  PersonalSettingsMenuProps
> = ({ setIsRightSubDrawerContent }) => {
  return (
    <div className="personalSettingsMenu">
      <EnhanceSecurityCard variant1={3} variant2={3} />

      <div>
        <p className="menuSectionTitle">Personal</p>
        <InputOverlay onClick={() => setIsRightSubDrawerContent("edit-name")}>
          <Input
            placeholder="Eneter your name"
            title="Name"
            defaultValue="Support"
            type="text"
            disabled
          />
        </InputOverlay>

        <Upload placeholder="Upload Profile Picture" />
      </div>

      <div>
        <p className="menuSectionTitle">Contacts</p>
        <InputOverlay
          onClick={() => setIsRightSubDrawerContent("confirm-email")}
        >
          <Input
            placeholder="Enter your email"
            title="Email"
            defaultValue="support@moneybee.loan"
            type="email"
            disabled
            suffixIcon={
              <div className="infoIcon">
                <InfoCircleIcon />
              </div>
            }
          />
        </InputOverlay>
        <InputOverlay
          onClick={() => setIsRightSubDrawerContent("confirm-phone")}
        >
          <Input
            placeholder="Enter your phonenumber"
            title="Phone number"
            defaultValue="(555) 555-1234"
            type="phone"
            disabled
            suffixIcon={
              <div className="infoIcon">
                <InfoCircleIcon />
              </div>
            }
          />
        </InputOverlay>
      </div>
    </div>
  );
};

export default PersonalSettingsMenu;
