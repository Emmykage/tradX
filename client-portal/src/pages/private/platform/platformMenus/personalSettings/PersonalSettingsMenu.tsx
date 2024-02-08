import { InfoCircleIcon } from "../../../../../assets/icons";
import EnhanceSecurityCard from "../../../../../components/enhanceSecurityCard/EnhanceSecurityCard";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import Upload from "../../../../../components/upload/Upload";
import "./personalSettingsMenu.scss";

interface PersonalSettingsMenuProps {
  setIsRightSubDrawerContent: (value: string | null) => void;
}

const PersonalSettingsMenu: React.FunctionComponent<
  PersonalSettingsMenuProps
> = ({ setIsRightSubDrawerContent }) => {
  return (
    <div className="personalSettingsMenu">
      <EnhanceSecurityCard />

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

      <div className="socialButtons">
        <p className="menuSectionTitle">Social</p>
        <MenuListCard
          textCenter
          title="Connect Apple"
          icon={<img src="/social-icons/apple-icon.svg" />}
        />
        <MenuListCard
          textCenter
          title="Connect Facebook"
          icon={<img src="/social-icons/facebook-icon.svg" />}
        />
      </div>
    </div>
  );
};

export default PersonalSettingsMenu;
