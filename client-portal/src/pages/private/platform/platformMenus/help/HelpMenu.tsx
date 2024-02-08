import { ReactNode } from "react";
import "./helpMenu.scss";
import {
  GraduateIcon,
  HelpIcon,
  SupportChartIcon,
} from "../../../../../assets/icons";

interface HelpMenuProps {
  setLeftSubDrawer: (value: string | null) => void;
  setIsLeftSubDrawerOpen: (value: boolean) => void;
}

const HelpLink = ({
  icon,
  heading,
  text,
  onClick,
}: {
  icon: ReactNode;
  heading: string;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <div className="helpLnkContainer" onClick={onClick}>
      <div className="icon">{icon}</div>
      <p className="helpHead">{heading}</p>
      <p className="helpTxt">{text}</p>
    </div>
  );
};

const HelpMenu: React.FunctionComponent<HelpMenuProps> = ({
  setLeftSubDrawer,
  setIsLeftSubDrawerOpen,
}) => {
  return (
    <div className="helpMenu">
      <div className="flexHelpLnks">
        <HelpLink
          icon={<HelpIcon />}
          heading="Support"
          text="Ask a question"
          onClick={() => {
            setLeftSubDrawer("support");
            setIsLeftSubDrawerOpen(true);
          }}
        />
        <HelpLink
          icon={<GraduateIcon />}
          heading="Help Center"
          text="Find answers"
          onClick={() => {
            setLeftSubDrawer("help-center");
            setIsLeftSubDrawerOpen(true);
          }}
        />
      </div>
      <HelpLink
        icon={<SupportChartIcon />}
        heading="Support"
        text="Get to know our trading modes"
      />
    </div>
  );
};

export default HelpMenu;
