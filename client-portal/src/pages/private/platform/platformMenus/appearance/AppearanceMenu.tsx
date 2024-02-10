import { useState } from "react";
import { ColorSwatchIcon, VolumeCrossIcon } from "../../../../../assets/icons";
import BackgroundImageSelector from "../../../../../components/backgroundImageSelector/BackgroundImageSelector";
import InterfaceScale from "../../../../../components/interfaceScale/InterfaceScale";
import Select from "../../../../../components/select/Select";
import "./appearanceMenu.scss";

interface AppearanceMenuProps {}

const AppearanceMenu: React.FunctionComponent<AppearanceMenuProps> = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] =
    useState<boolean>(false);
  const [isSoundDropdownOpen, setIsSoundDropdownOpen] =
    useState<boolean>(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] =
    useState<boolean>(false);
  return (
    <div className="appearanceMenu">
      <InterfaceScale />

      <Select
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        label="Language"
        defaultValue="english"
        options={[
          { value: "english", label: "English" },
          { value: "bahasa-indonesia", label: "Bahasa Indonesia" },
          { value: "Việt Nam", label: "Việt Nam" },
          { value: "hindhi", label: "Hindhi" },
          { value: "pyccкий", label: "Русский" },
          { value: "ภาษาไทย", label: "ภาษาไทย" },
          { value: "português ", label: "Português " },
          { value: "bahasa-melayu", label: "Bahasa Melayu" },
        ]}
        icon={<img src="/menu-images/uk-flag.png" />}
      />
      {!isLanguageDropdownOpen && (
        <Select
          onClick={() => setIsSoundDropdownOpen(!isSoundDropdownOpen)}
          label="Sound"
          defaultValue="slient"
          options={[
            { value: "slient", label: "Slient" },
            { value: "gambling", label: "Sambling" },
            { value: "default", label: "Default pack" },
          ]}
          icon={<VolumeCrossIcon />}
        />
      )}
      {!isLanguageDropdownOpen && !isSoundDropdownOpen && (
        <Select
          onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
          label="Color theme"
          defaultValue="dark"
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
            { value: "classic", label: "Classic" },
          ]}
          icon={<ColorSwatchIcon />}
        />
      )}

      {!isLanguageDropdownOpen &&
        !isSoundDropdownOpen &&
        !isThemeDropdownOpen && <BackgroundImageSelector />}
    </div>
  );
};

export default AppearanceMenu;
