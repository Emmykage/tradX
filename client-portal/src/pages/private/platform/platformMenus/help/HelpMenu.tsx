import { ReactNode } from "react";
import "./helpMenu.scss";
import {
  GraduateIcon,
  HelpIcon,
  SupportChartIcon,
} from "../../../../../assets/icons";

interface HelpMenuProps {}

const HelpLink = ({
  icon,
  heading,
  text,
}: {
  icon: ReactNode;
  heading: string;
  text: string;
}) => {
  return (
    <div className="helpLnkContainer">
      <div className="icon">{icon}</div>
      <p className="helpHead">{heading}</p>
      <p className="helpTxt">{text}</p>
    </div>
  );
};

const HelpMenu: React.FunctionComponent<HelpMenuProps> = () => {
  return (
    <div className="helpMenu">
      <div className="flexHelpLnks">
        <HelpLink icon={<HelpIcon />} heading="Support" text="Ask a question" />
        <HelpLink
          icon={<GraduateIcon />}
          heading="Help Center"
          text="Find answers"
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
