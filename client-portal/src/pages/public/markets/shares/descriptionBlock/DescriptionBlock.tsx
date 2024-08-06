import ItemDescription from "../components/itemDescription/ItemDescription";
import "./DescriptionBlock.scss";
import { dataShared } from "./data";

const DescriptionBlock = () => {
  return (
    <div className="descriptionContainer">
      <div className="descriptionWrapper">
        {dataShared &&
          dataShared.map((item, index) => (
            <ItemDescription item={item} index={index + item.index} />
          ))}
      </div>
    </div>
  );
};

export default DescriptionBlock;
