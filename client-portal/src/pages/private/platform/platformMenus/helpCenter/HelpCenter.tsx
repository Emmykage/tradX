import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import SearchBar from "../../../../../components/searchBar/SearchBar";
import {
  DepositsIcon,
  HierarchyIcon,
  StatusIcon,
  UserDoubleIcon,
  UserIcon2,
  WithdrawalsIcon,
} from "../../../../../assets/icons";
import "./helpCenter.scss";

interface HelpCenterProps {}

const HelpCenter: React.FunctionComponent<HelpCenterProps> = () => {
  return (
    <div className="helpCenter">
      <SearchBar extraSpacing placeholder="Find the help you need" />

      <p className="helpSectionTitle">User Guide</p>

      <MenuListCard title="Trading platform" icon={<HierarchyIcon />} />
      <MenuListCard title="Profile" icon={<UserIcon2 />} />
      <MenuListCard title="Account types" icon={<UserDoubleIcon />} />
      <MenuListCard title="Deposits" icon={<DepositsIcon />} />
      <MenuListCard title="Withdrawals" icon={<WithdrawalsIcon />} />
      <MenuListCard title="Statuses" icon={<StatusIcon />} />

      <MenuListCard className="showMore" title="Show More" textCenter primary />
    </div>
  );
};

export default HelpCenter;
