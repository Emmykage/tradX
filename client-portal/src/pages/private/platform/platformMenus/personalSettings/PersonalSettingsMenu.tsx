import React, { Dispatch, SetStateAction } from "react";

import { useAppSelector } from "@store/hooks";
import { UserSliceState } from "@store/slices/user";

import { InfoCircleIcon } from "../../../../../assets/icons";
import EnhanceSecurityCard from "../../../../../components/enhanceSecurityCard/EnhanceSecurityCard";
import Input from "../../../../../components/input/Input";
import UploadProfile from "./UploadProfile";
import "./personalSettingsMenu.scss";
import { RightSubDrawerContent } from "../../types";

interface PersonalSettingsMenuProps {
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PersonalSettingsMenu: React.FunctionComponent<
  PersonalSettingsMenuProps
> = ({ setIsRightSubDrawerContent }) => {
  const { user } = useAppSelector(
    (state: { user: UserSliceState }) => state.user
  );

  return (
    <div className="personalSettingsMenu">
      <EnhanceSecurityCard variant1={3} variant2={3} />

      <div>
        <p className="menuSectionTitle">Personal</p>
        <Input
          placeholder="Enter your name"
          title="Name"
          defaultValue={user?.first_name}
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
        <UploadProfile />
      </div>

      <div>
        <p className="menuSectionTitle">Contacts</p>
        <Input
          placeholder="Enter your email"
          title="Email"
          defaultValue={user?.email}
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
