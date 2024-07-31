import "./Background.scss";

const amounts = ["1.174", "1.172", "1.170", "1.168", "1.166", "1.164"];
const times = ["17:52", "17:52:30", "17:53", "17:53:30", "17:54"];

const Background = () => {
  return (
    <div className="w_background">
      <div>
        <div className="image">
          <div className="bg_image"></div>
        </div>
        <div className="image_slide">
          <div className="slide_image"></div>
        </div>
        <div className="vector_up">
          <img src="welcome-icons/vector_up.png" alt="" />
        </div>
        <div className="vector_down">
          <img src="welcome-icons/vector_down.png" alt="" />
        </div>
        <div className="amount">
          {amounts.map((item, index) => (
            <div key={index + item}>{item}</div>
          ))}
        </div>
      </div>
      <div className="times">
        {times.map((item, index) => (
          <div className="time-item" key={index + item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
