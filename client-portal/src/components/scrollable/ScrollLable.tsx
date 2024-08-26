import React, { useState } from 'react';
import './ScrollList.scss';

const ScrollList = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
    } else {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div className="scroll-container" onWheel={handleScroll}>
      {items.map((item, index) => (
        <div
          key={index}
          className="item"
          style={{
            transform: `translateY(-${currentIndex * 30}px)`,
          }}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default ScrollList;
