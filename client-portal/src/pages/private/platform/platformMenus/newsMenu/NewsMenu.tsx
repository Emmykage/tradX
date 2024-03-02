import { Button } from "antd";
import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import "./newsMenu.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import { SearchIcon2, TimerIcon } from "../../../../../assets/icons";

const filterListButtons = ["Forex", "Stocks", "Commodities", "Crypto"];

const titleHandler = (titleKey: string) => {
  switch (titleKey) {
    case "Forex":
      return "Forex";
    case "Stocks":
      return "Stocks";
    case "Commodities":
      return "Commodities";
    case "Crypto":
      return "Crypto";
  }
};

interface NewsMenuProps {}

const NewsMenu: React.FunctionComponent<NewsMenuProps> = () => {
  return (
    <div className="newsMenu">
      <div className="payment-methods-filter-btns">
        <ArrowsSlider>
          {filterListButtons.map((paymentType: string) => (
            <Button className="payment-methods-filter-btn" key={paymentType}>
              {titleHandler(paymentType)}
            </Button>
          ))}
        </ArrowsSlider>
      </div>
      <div className="searchContainer">
        <MainItemCard variant={2}>
          <div className="inputSearch">
            <input type="text" placeholder="Search" />
            <div>
              <SearchIcon2 />
            </div>
          </div>
        </MainItemCard>
      </div>
      <div className="textContainer">
        <h2>Shrinkflation 101: The Economics of Smaller Groceries</h2>
        <p>
          Have you noticed your grocery products shrinking? Here’s how that gets
          counted — and what gets missed — in inflation data.
        </p>
        <div className="textFooter">
          <TimerIcon />
          <h3>15 Min Read</h3>
          <li>New York Times</li>
          <div className="time">03.01.24</div>
        </div>
      </div>
      <div className="textContainer">
        <h2>Auto Insurance Spike Hampers the Inflation Fight</h2>
        <p>
          Costlier vehicles and repairs are pushing premiums higher even as the
          increase in U.S. consumer prices is tapering overall.
        </p>
        <div className="textFooter">
          <TimerIcon />
          <h3>15 Min Read</h3>
          <li>Financial Times</li>
          <div className="time">03.01.24</div>
        </div>
      </div>
    </div>
  );
};

export default NewsMenu;
