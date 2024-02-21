import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { EyeSlashIcon } from "../../assets/icons";

import { BackgroundImage, backgroundImages } from "./imagesData";
import "./backgroundImageSelector.scss";
import { setAppearanceBackground } from "../../pages/lib/utils";

interface BackgroundImageSelectorProps {}

const BackgroundImageSelector: React.FunctionComponent<
  BackgroundImageSelectorProps
> = () => {
  const [images, setImage] = useState<BackgroundImage[] | []>([]);

  const storedImageId = localStorage.getItem("selectedBackgroundImage");
  const selectedImageId = storedImageId ? parseInt(storedImageId) : "0";

  useEffect(() => {
    setImage(backgroundImages);
  }, []);

  const handleImageClick = (imageId: number) => {
    setAppearanceBackground(imageId.toString());
  };

  return (
    <div className="backgroundImageSelector">
      <p className="selectorTitle">Background image</p>
      <div className="imageList">
        <Row gutter={[12, 12]} justify="start">
          {images?.map((image) => (
            <Col span={8} sm={4} md={8} key={image.id}>
              <div
                className={`imageContainer ${
                  selectedImageId === image.id ? "active" : ""
                }`}
                onClick={() => handleImageClick(image.id)}
              >
                <div className="cardInner">
                  {image.url ? (
                    <img src={image.url} alt={image.alt} />
                  ) : (
                    <EyeSlashIcon />
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BackgroundImageSelector;
