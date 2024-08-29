import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button } from "antd";
import moment from "moment";

import { useNews } from "api/news/useNews";
import Loading from "components/loading";

import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import "./newsMenu.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import {  NewsIcon, SearchIcon2, TimerIcon } from "../../../../../assets/icons";
import { useAppSelector } from "@store/hooks";

import { INews } from "@interfaces";
import NewsModal from "components/newsModal/newModal";

// const filterListButtons = ["Forex", "Stock", "Commodities", "Crypto"];


const titleHandler = (titleKey: string) => {
  switch (titleKey) {
    case "Forex":
      return "Forex";    
    case "all":
      return "All";
    case "Stock":
      return "Stocks";
    case "Commodities":
      return "Commodities";
    case "Crypto":
      return "Crypto";
  }
};

const RenderTab = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [part1, part2] = description.split(" on ");

  return (
    <div className="newsMenuWrapper">
      <p className="newsHeading capitalize">{title}</p>
      <div className="newsIconWrapper">
        <NewsIcon />
      </div>
      <p className="noNews">{part1} on</p>
      <p className="noNews">{part2}</p>
    </div>
  );
};

interface NewsFeedProps {
  articles: INews[];
  label: string;
}

const NewsFeed: React.FC<NewsFeedProps> = ({ articles, label }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<INews | undefined>();

  const handleArticleClick = (article: INews) => {
    setSelectedArticle(article);
    setModalOpen(true);
  };

  return (
    <>
      {articles?.length > 0 ? (
        articles.map((item, index) => (
          <div
            key={index}
            onClick={() => handleArticleClick(item)}
            className="textContainer cursor-pointer"
          >
            <h2>{item?.title?.substring(0, 65)}</h2>
            <p>{item?.description?.substring(0, 190)}...</p>
            <div className="textFooter">
           
                <TimerIcon />
                <span className="text-[#0094FF]" > 15 min Read</span>            
              
            </div>
          </div>
        ))
      ) : (
        <RenderTab title={`${label} News`} description="No News on Stock" />
      )}
      <NewsModal
        open={modalOpen}
        setOpen={setModalOpen}
        closable={true}
        article={selectedArticle}
        label={label}
      />
    </>
  );
};


interface NewsMenuProps {}

const NewsMenu: React.FunctionComponent<NewsMenuProps> = () => {


  const [cookies] = useCookies(["access_token"]);
  const [selectedFeed, setSelectedFeed] = useState('all')
  const {themeSelect} = useAppSelector(state => state.themeBg) 
  const { mutate: mutateNews,    data,    isPending,  } = useNews({    onSuccess: () => { console.log("returnes success")},    onError: () => {},  });

// console.log(data?.results, "look")
  const items = [
    {
    id: "1",
    tab: "all",
    label: "all feed"
    },
    {
      id: "2",
      tab: "Forex",
      label: "forex feed",
      queryParams: {
        country: "us",
        query: "forex trading",
        size: "10",
      }, 
     },
    {
      id: "3",
      tab: "Stock",
      label: "stock feed",
      queryParams: {
        country: "us",
        query: "stock",
        size: "10",
      }, 
    },

 
    {
      id: "4",
      tab: "Commodities",
      label: "Commodities Feed ",
      queryParams: {
        country: "us",
        query: "commodities",
        size: "10",
      }, 
    },
    {
      id: "5",
      tab: "Crypto",
      label: "Crypto Feed",
      queryParams: {
        country: "us",
        query: "cryptocurrency",
        size: "10",
      }, 
    }
  ]

  const handleNewsSelection = (feed: any ) => {
    setSelectedFeed(feed.tab)

    mutateNews({
      token: cookies.access_token,
      queryParams: feed.queryParams
    })
  }

  useEffect(() => {

    mutateNews({
      token: cookies.access_token,
      // queryParams: {
      //   symbol: "btc/usd",
      //   start: "2024-03-05",
      //   end: "2024-03-05",
      //   sort: "desc",
      //   include_content: "true",
      //   exclude_contentless: "true",
      //   limit: "10",
      // },
    });
  }, []);


  if (isPending) {
    return <Loading />;
  }


  return (
    <div className={`${themeSelect} newsMenu`}>
      <div className="payment-methods-filter-btns">
        <ArrowsSlider>
          {items.map((item) => (
            <Button className={`${selectedFeed == item.tab ?  "active" : ""} payment-methods-filter-btn`} key={item.tab}
            onClick={()=> handleNewsSelection(item)}
            >
              {titleHandler(item.tab)}
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

      <div className="news-content">
          {items.map(feed => {
            if(feed.tab == selectedFeed){

              return(
                <>
                <NewsFeed  articles={data?.results || []} label={selectedFeed}/>
                </>
              )
            }
          })}

      
      </div>
    </div>
  );
};

export default NewsMenu;