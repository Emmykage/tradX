import { ColorSwatchIcon, VolumeCrossIcon } from "../../../../../assets/icons";
import BackgroundImageSelector from "../../../../../components/backgroundImageSelector/BackgroundImageSelector";
import InterfaceScale from "../../../../../components/interfaceScale/InterfaceScale";
import Select from "../../../../../components/select/Select";
import "./appearanceMenu.scss";

interface AppearanceMenuProps {}

const AppearanceMenu: React.FunctionComponent<AppearanceMenuProps> = () => {
  return (
    <div className="appearanceMenu">
      <InterfaceScale />

      <Select
        label="Language"
        defaultValue="english"
        options={[{ value: "english", label: "English" }]}
        icon={<img src="/menu-images/uk-flag.png" />}
      />
      <Select
        label="Sound"
        defaultValue="slient"
        options={[
          { value: "slient", label: "Slient" },
          { value: "gambling", label: "Sambling" },
          { value: "default", label: "Default pack" },
        ]}
        icon={<VolumeCrossIcon />}
      />
      <Select
        label="Color theme"
        defaultValue="dark"
        options={[
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "classic", label: "Classic" },
        ]}
        icon={<ColorSwatchIcon />}
      />

      <BackgroundImageSelector />
    </div>
  );
};

export default AppearanceMenu;
