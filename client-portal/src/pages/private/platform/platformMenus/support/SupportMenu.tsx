import { ChatIcon } from "../../../../../assets/icons";
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
    </div>
  );
};

export default SupportMenu;
