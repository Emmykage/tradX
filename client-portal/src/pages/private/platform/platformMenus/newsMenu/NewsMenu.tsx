import { Component, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button, Card, Col, Row } from "antd";
import moment from "moment";

import { useNews } from "api/news/useNews";
import Loading from "components/loading";

import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import "./newsMenu.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import { ClockIcon, Dot, NewsIcon, SearchIcon2 } from "../../../../../assets/icons";
import { useAppSelector } from "@store/hooks";

const filterListButtons = ["Forex", "Stock", "Commodities", "Crypto"];

const titleHandler = (titleKey: string) => {
  switch (titleKey) {
    case "Forex":
      return "Forex";
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
      <p className="newsHeading">{title}</p>
      <div className="newsIconWrapper">
        <NewsIcon />
      </div>
      <p className="noNews">{part1} on</p>
      <p className="noNews">{part2}</p>
    </div>
  );
};

const AllNewsFeed = () => (
  <>
  <Card  style={{ width: "100%", backgroundColor: 'transparent', padding: 0 }}>

  <Row gutter={[10, 10]}>
    <Col span={24}> <p className="news-top">Shrinkflation 101: The Economics of Smaller Groceries</p> </Col>
    <Col span={24} > 
    <p className="news-body">
    Have you noticed your grocery products shrinking? Here’s how that gets counted — and what gets missed — in inflation data.</p>
    </Col>
    <Col xs={9} className="news-timer">
      
      <ClockIcon/>
      <span>15 Min Read</span>           
    </Col>
    
    <Col  xs={9} className="news-pub"><Dot/> <span>  New York Times</span></Col>
     <Col xs={5} className="date"> 03.01.24</Col>
  </Row>
 
</Card>
<Card  style={{ width: "100%", backgroundColor: 'transparent', padding: 0 }}>

  <Row gutter={[12, 10]}>
    <Col span={24}> <p className="news-top">Auto Insurance Spike Hampers the Inflation Fight</p> </Col>
    <Col span={24} ><p className="news-body">
      Costlier vehicles and repairs are pushing premiums higher even as the increase in U.S. consumer prices is tapering overall..</p>
    </Col>
    <Col xs={9} className="news-timer"><ClockIcon/> <span>15 Min Read</span></Col>
    
    <Col  xs={9} className="news-pub"><Dot/> <span>  Financial Times</span></Col>
     <Col xs={5} className="date"> 03.01.24</Col>
  </Row>
 
</Card>
<Card  style={{ width: "100%", backgroundColor: 'transparent', padding: 0 , marginBottom: "10px"}}>

  <Row gutter={[10, 10]}>
    <Col span={24}> <p className="news-top">Biden Targets a New Economic Villain: Shrinkflation</p> </Col>
    <Col span={24} > 
      <p className="news-body">
      A Times housing reporter wants to learn more about the pressures of rising housing costs       </p>
    </Col>
    <Col xs={9} className="news-timer"> <ClockIcon/>  <span>15 Min Read</span>  </Col>
    
    <Col  xs={9} className="news-pub"><Dot/> <span>  New York Times</span></Col>
    <Col xs={5} className="date"> 03.01.24</Col>
  </Row>
 
</Card>
</>
)

const CommodityNewsFeed = () => (
  <RenderTab title="Commodities News" description="No News on Commodities"/>

)
const CryptoNewsFeed = () => (
  <RenderTab title="Crypto News" description="No News on Crypto"/>

)
const ForexNewsFeed = () => (
  <RenderTab title="Forex News" description="No News on Forex"/>

)

const StockNewsFeed = () => (
  <RenderTab title="Stock News" description="No News on Stock"/>
)



interface NewsMenuProps {}

const NewsMenu: React.FunctionComponent<NewsMenuProps> = () => {
  const [cookies] = useCookies(["access_token"]);
  const [selectedFeed, setSelectedFeed] = useState('all')
  const {themeSelect} = useAppSelector(state => state.themeBg) 
  const {
    mutate: mutateNews,
    data,
    isPending,
  } = useNews({
    onSuccess: () => {},
    onError: () => {},
  });

  const items = [{
    id: "1",
    tab: "all",
    label: "all feed",
    component: <AllNewsFeed/>
  },
    {
      id: "2",
      tab: "Forex",
      label: "forex feed",
      component: <ForexNewsFeed/>

    },
    {
      id: "3",
      tab: "Stock",
      label: "stock feed",
      component: <StockNewsFeed />
    },

 
    {
      id: "4",
      tab: "Commodities",
      label: "Commodities Feed ",
      component: <CommodityNewsFeed />
    },
    {
      id: "5",
      tab: "Crypto",
      label: "Crypto Feed",
      component: <CryptoNewsFeed/>
    }
  ]

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
    <div className={`${themeSelect} newsMenu`}>
      <div className="payment-methods-filter-btns">
        <ArrowsSlider>
          {filterListButtons.map((feed: string) => (
            <Button className={`${selectedFeed == feed ?  "active" : ""} payment-methods-filter-btn`} key={feed}
            onClick={()=> setSelectedFeed(feed)}
            >
              {titleHandler(feed)}
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
                {feed.component}
                </>
              )
            }
          })}

      
      </div>
     


      {/* {data?.news?.length &&
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
        ))} */}
    </div>
  );
};

export default NewsMenu;
