import { Col, Row } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./marketSubMenuCard.scss";
import { StarRatingBlueIcon } from "../../assets/icons";

const MarketSubMenuCard = ({
  img,
  title,
  rating,
  price,
  total,
}: {
  img: string;
  title: string;
  rating: string;
  price: string;
  total: string;
}) => {
  return (
    <div className="marketSubMenuCard">
      <MainItemCard variant={3} className="marketSubCard">
        <Row className="marketSubRow">
          <Col span={6} className="marketSubCol1">
            <img src={img} alt="" />
          </Col>
          <Col span={1}></Col>
          <Col span={16} className="marketSubCol2">
            <div className="starRating">
              <h2>{title}</h2>
              <div className="starRatingNumber">
                <p>{rating}</p> <StarRatingBlueIcon />
              </div>
            </div>
            <h3>
              ${price} <span>/ Month</span>
            </h3>
            <h4>{total} traders purchased</h4>
          </Col>
        </Row>
      </MainItemCard>
    </div>
  );
};

export default MarketSubMenuCard;
