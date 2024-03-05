import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Button } from "antd";
import moment from "moment";

import { useNews } from "api/news/useNews";
import Loading from "components/loading";

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
  const [cookies] = useCookies(["access_token"]);

  const {
    mutate: mutateNews,
    data,
    isPending,
  } = useNews({
    onSuccess: () => {},
    onError: () => {},
  });

  useEffect(() => {
    mutateNews({
      token: cookies.access_token,
      queryParams: {
        symbol: "btc/usd",
        start: "2024-03-05",
        end: "2024-03-05",
        sort: "desc",
        include_content: "true",
        exclude_contentless: "true",
        limit: "10",
      },
    });
  }, []);

  if (isPending) {
    return <Loading />;
  }

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
      {data?.news?.length &&
        data.news.map((item, index) => (
          <div className="textContainer" key={index}>
            <h2>{item.headline}</h2>
            <p>{item?.summary}</p>
            <div className="textFooter">
              <TimerIcon />
              <h3>15 Min Read</h3>
              <li>{item.author}</li>
              <div className="time">
                {moment(item.created_at).format("dd.mm.yy")}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsMenu;
