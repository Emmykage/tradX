import { useState } from "react";
import {
  ClassicIcon,
  DarkIcon,
  LightIcon,
  VolumeCrossIcon,
  VolumeIcon,
} from "../../../../../assets/icons";
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
        onBlur={() => setIsLanguageDropdownOpen(false)}
        label="Language"
        defaultValue="english"
        options={[
          {
            value: "english",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/uk-flag.png" />
                </div>
                English
              </div>
            ),
          },
          {
            value: "bahasa-indonesia",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/svgs/IndonesiaFlag.svg" />
                </div>
                Bahasa Indonesia
              </div>
            ),
          },
          {
            value: "Việt Nam",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/svgs/VietnamFlag.svg" />
                </div>
                Việt Nam
              </div>
            ),
          },
          {
            value: "hindhi",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/svgs/IndiaFlag.svg" />
                </div>
                Hindhi
              </div>
            ),
          },
          {
            value: "pyccкий",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/svgs/РусскийFlag.svg" />
                </div>
                Pyccкий
              </div>
            ),
          },
          {
            value: "ภาษาไทย",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/svgs/ภาษาไทยFlag.svg" />
                </div>
                ภาษาไทย
              </div>
            ),
          },
          {
            value: "português ",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/svgs/PortuguêsFlag.svg" />
                </div>
                Português
              </div>
            ),
          },
          {
            value: "bahasa-melayu",
            label: (
              <div className="dropDownMenuItem">
                <div className="dropDownMenuItemIcon">
                  <img src="/menu-images/svgs/BahasaMelayuFlag.svg" />
                </div>
                Bahasa Melayu
              </div>
            ),
          },
        ]}
        height="height"
        // icon={<img src="/menu-images/uk-flag.png" />}
      />
      {!isLanguageDropdownOpen && (
        <>
          <Select
            onClick={() => setIsSoundDropdownOpen(!isSoundDropdownOpen)}
            label="Sound"
            defaultValue="slient"
            options={[
              {
                value: "slient",
                label: (
                  <div className="dropDownMenuItem">
                    <div className="dropDownMenuItemIcon">
                      <VolumeCrossIcon />
                    </div>
                    Slient
                  </div>
                ),
              },
              {
                value: "gambling",
                label: (
                  <div className="dropDownMenuItem">
                    <div className="dropDownMenuItemIcon">
                      <VolumeIcon />
                    </div>
                    Gambling
                  </div>
                ),
              },
              {
                value: "default",
                label: (
                  <div className="dropDownMenuItem">
                    <div className="dropDownMenuItemIcon">
                      <VolumeIcon />
                    </div>
                    Default Pack
                  </div>
                ),
              },
            ]}
            background="background"
          />
          <Select
            onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
            label="Color theme"
            defaultValue="dark"
            options={[
              {
                value: "light",
                label: (
                  <div className="dropDownMenuItem">
                    <div className="dropDownMenuItemIcon">
                      <LightIcon />
                    </div>
                    <div className="dropDownMenuItemText">Light </div>
                  </div>
                ),
              },
              {
                value: "dark",
                label: (
                  <div className="dropDownMenuItem">
                    <div className="dropDownMenuItemIcon">
                      <DarkIcon />
                    </div>
                    <div className="dropDownMenuItemText">Dark </div>
                  </div>
                ),
              },
              {
                value: "classic",
                label: (
                  <div className="dropDownMenuItem">
                    <div className="dropDownMenuItemIcon">
                      <ClassicIcon />
                    </div>
                    <div className="dropDownMenuItemText">Classic </div>
                  </div>
                ),
              },
            ]}
            background="background"
          />
          <BackgroundImageSelector />
        </>
      )}
    </div>
  );
};

export default AppearanceMenu;
