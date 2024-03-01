import React, { Dispatch, SetStateAction } from "react";

import { useAppSelector } from "@store/hooks";
import { UserSliceState } from "@store/slices/user";

import { InfoCircleIcon } from "../../../../../assets/icons";
import EnhanceSecurityCard from "../../../../../components/enhanceSecurityCard/EnhanceSecurityCard";
import Input from "../../../../../components/input/Input";
import UploadProfile from "./UploadProfile";
import "./personalSettingsMenu.scss";
import { RightSubDrawerContent } from "../../types";
import InputOverlay from "./InputOverlay";

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
        <InputOverlay onClick={() => setIsRightSubDrawerContent("edit-name")}>
          <Input
            placeholder="Eneter your name"
            title="Name"
            defaultValue={user?.first_name}
            type="text"
            disabled
          />
        </InputOverlay>

        <UploadProfile />
      </div>

      <div>
        <p className="menuSectionTitle">Contacts</p>
        <InputOverlay
          onClick={() => setIsRightSubDrawerContent("confirm-email")}
        >
          <Input
            placeholder="Enter your email"
            title="Email"
            defaultValue={user?.email}
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
            defaultValue={user?.phone_number}
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
