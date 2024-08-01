import "./Background.scss";
import { FC } from "react";

const amounts = ["1.174", "1.172", "1.170", "1.168", "1.166", "1.164"];
const times = ["17:52", "17:52:30", "17:53", "17:53:30", "17:54"];

interface BackgroundProps {
  step: number;
}

const Background: FC<BackgroundProps> = ({ step }) => {
  return (
    <div className="w_background">
      <div className="">
        {step <= 6 && (
          <div className="image">
            <div className="bg_image"></div>
          </div>
        )}

        {step > 6 && (
          <div className="image_shoter">
            <div className="bg_image"></div>
          </div>
        )}

        <div className="image_slide">
          <div className="image"></div>
        </div>

        {step === 3 && (
          <div className="right_side">
            <div className="items_vector">
              <div className="vector_up">
                <img src="welcome-icons/vector_up.png" alt="" />
              </div>
              <div className="vector_down">
                <img src="welcome-icons/vector_down.png" alt="" />
              </div>
            </div>
            <div>
              <img src="welcome-icons/romb.svg" />
            </div>
            <div className="line"></div>
            <div className="amount_romb">1.1698</div>
          </div>
        )}

        {step === 4 && (
          <div className="right_side">
            <div className="step_four_image">
              <img src="welcome-icons/step_four.png" alt="" />
            </div>
            <div>
              <img src="welcome-icons/romb.svg" />
            </div>
            <div className="line"></div>
            <div className="amount_romb">1.1698</div>
          </div>
        )}

        {step === 5 && (
          <div className="right_side">
            <div className="step_five_image">
              <img src="welcome-icons/step_five.png" alt="" />
            </div>
            <div>
              <img src="welcome-icons/romb.svg" />
            </div>
            <div className="line"></div>
            <div className="amount_romb">1.1698</div>
          </div>
        )}

        {step === 6 && (
          <div className="right_side">
            <div>
              <img src="welcome-icons/romb.svg" />
            </div>
            <div className="line"></div>
            <div className="amount_romb">1.1698</div>
          </div>
        )}

        {step >= 7 && (
          <div className="right_side_shoter">
            <div>
              <img src="welcome-icons/romb.svg" />
            </div>
            <div className="line"></div>
            <div className="amount_romb">1.1698</div>
          </div>
        )}

        {step <= 6 && (
          <div className="amount">
            {amounts.map((item, index) => (
              <div key={index + item}>{item}</div>
            ))}
          </div>
        )}

        {step > 6 && (
          <div className="amount_lefter">
            {amounts.map((item, index) => (
              <div key={index + item}>{item}</div>
            ))}
          </div>
        )}
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
