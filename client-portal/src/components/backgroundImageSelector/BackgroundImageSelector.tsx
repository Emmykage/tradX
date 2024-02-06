import { Col, Row } from "antd";
import "./backgroundImageSelector.scss";
import { EyeSlashIcon } from "../../assets/icons";

interface BackgroundImageSelectorProps {}

const BackgroundImageSelector: React.FunctionComponent<
  BackgroundImageSelectorProps
> = () => {
  const images = [
    { url: "", alt: "no-image" },
    { url: "/background-images/background-1.jpg", alt: "background-image" },
    { url: "/background-images/background-2.jpg", alt: "background-image" },
    { url: "/background-images/background-3.jpg", alt: "background-image" },
    { url: "/background-images/background-4.jpg", alt: "background-image" },
    { url: "/background-images/background-5.jpg", alt: "background-image" },
    { url: "/background-images/background-6.jpg", alt: "background-image" },
    { url: "/background-images/background-7.jpg", alt: "background-image" },
    { url: "/background-images/background-8.jpg", alt: "background-image" },
  ];
  return (
    <div className="backgroundImageSelector">
      <p className="selectorTitle">Background image</p>
      <div className="imageList">
        <Row gutter={[12, 12]} justify="start">
          {images?.map((image, index) => (
            <Col span={8} sm={4} md={8} key={image.alt + index}>
              <div className="imageContainer">
                {image?.url ? (
                  <img src={image.url} alt={image.alt} />
                ) : (
                  <EyeSlashIcon />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BackgroundImageSelector;
