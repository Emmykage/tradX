import { Link } from "react-router-dom";
import { ChatIcon, DownloadIcon } from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./supportMenu.scss";

interface SupportMenuProps {}

const SupportMenu: React.FunctionComponent<SupportMenuProps> = () => {
  return (
    <div className="supportMenu">
      <p className="supportSectionTitle">
        Support, want to get in touch? Here`s how you can reach us.
      </p>

      <MenuListCard
        icon={<ChatIcon />}
        title="Chat"
        subtitle="Our chatbot and support team are here to hep"
      />
      <Link to="/downloads">
        <MenuListCard
          className="secondMenulistCard"
          icon={<DownloadIcon />}
          title="Download"
          subtitle="Our chatbot and support team are here to hep"
        />
      </Link>
    </div>
  );
};

export default SupportMenu;
