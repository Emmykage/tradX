import "./Background.scss";
import { FC } from "react";

const amounts = ["1.174", "1.172", "1.170", "1.168", "1.166", "1.164"];
const times = ["17:52", "17:52:30", "17:53", "17:53:30", "17:54"];

interface BackgroundProps {
  step: number;
}

const Background: FC<BackgroundProps> = ({ step }) => {
  return (
    <div className="w_background" style={{ width: step < 7 ? "100%" : "80%" }}>
      <div className="background_block">
        <div className="w_image_slide">
          <img
            className="image"
            src="welcome-icons/slide_main.png"
            srcSet="
      welcome-icons/slide_main_mobile.png 428w,
      welcome-icons/slide_main_tablet.png 834w,
      welcome-icons/slide_main.png 1200w
    "
            alt=""
          />
        </div>

        <div className="b_right_side">
          <div className="right_side">
            {step === 3 && (
              <div className="step_three">
                <div className="line_block">
                  <img src="welcome-icons/romb.svg" />
                  <div className="line"></div>
                  <div className="amount_romb">1.1698</div>
                  <img
                    className="vector_up"
                    src="welcome-icons/vector_up.png"
                    alt=""
                  />
                  <img
                    className="vector_down"
                    src="welcome-icons/vector_down.png"
                    alt=""
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="step_three">
                <div className="line_block">
                  <img src="welcome-icons/romb.svg" />
                  <div className="line"></div>
                  <div className="amount_romb">1.1698</div>
                  <img
                    className="step_four_image"
                    src="welcome-icons/step_four.png"
                    alt=""
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="step_three">
                <div className="line_block">
                  <img src="welcome-icons/romb.svg" />
                  <div className="line"></div>
                  <div className="amount_romb">1.1698</div>
                  <img
                    className="step_four_image"
                    src="welcome-icons/step_five.png"
                    alt=""
                  />
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="step_three">
                <div className="line_block">
                  <img src="welcome-icons/romb.svg" />
                  <div className="line"></div>
                  <div className="amount_romb">1.1698</div>
                </div>
              </div>
            )}

            {step >= 7 && (
              <div className="step_three">
                <div className="line_block">
                  <img src="welcome-icons/romb.svg" />
                  <div className="line"></div>
                  <div className="amount_romb">1.1698</div>
                </div>
              </div>
            )}

          </div>

          <div className="amount_b">
              <div className="amount">
                {amounts.map((item, index) => (
                  <div key={index + item}>{item}</div>
                ))}
              </div>
          </div>
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
