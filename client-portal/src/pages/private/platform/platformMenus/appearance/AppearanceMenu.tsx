import InterfaceScale from "../../../../../components/interfaceScale/InterfaceScale";
import "./appearanceMenu.scss";

interface AppearanceMenuProps {}

const AppearanceMenu: React.FunctionComponent<AppearanceMenuProps> = () => {
  return (
    <div className="appearanceMenu">
      <InterfaceScale />
    </div>
  );
};

export default AppearanceMenu;
