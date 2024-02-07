import { Input } from "antd";
import { SearchLargeIcon } from "../../assets/icons";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./searchBar.scss";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  placeholder = "Search",
  className,
}) => {
  return (
    <MainItemCard
      className={`searchBar ${className ? className : ""}`}
      variant={2}
    >
      <Input placeholder={placeholder} />
      <div className="searchIcon">
        <SearchLargeIcon />
      </div>
    </MainItemCard>
  );
};

export default SearchBar;
