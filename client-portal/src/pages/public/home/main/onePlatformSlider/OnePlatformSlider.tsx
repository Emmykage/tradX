import Slider from 'react-slick'
import './onePlatformSlider.scss'
import {  ArrowLeftOS, ArrowRightOS } from 'assets/icons';

import Forex from '../../../../../assets/onePlatformSlider/forex.png'
import Bonds from '../../../../../assets/onePlatformSlider/bonds.png'
import Commodities from '../../../../../assets/onePlatformSlider/commodites.png'
import Crypto from '../../../../../assets/onePlatformSlider/crypto.png'
import Indices from '../../../../../assets/onePlatformSlider/inidces.png'
import Ipo from '../../../../../assets/onePlatformSlider/ipo.png'
import Stocks from '../../../../../assets/onePlatformSlider/stocks.png'
import React from 'react';

const OnePlatformSlider = () => {

  const ArrowButtonPrevious:React.FC<{onClick: any}> = ({  onClick }) => {
    return (
      <button
        onClick={onClick}
        className="platformPreviousSliderButton"
      >
        <div className='platformPreviousSliderIconContainer'>
            <ArrowLeftOS/>
            
        </div>
      </button>
    );
  };
const ArrowButtonNext:React.FC<{onClick: any}>  = ({onClick }) => {
    return (
      <button
      className="platformNextSliderButton"
        onClick={onClick}
      >
         <div className='platformNextSliderIconContainer'>
         <ArrowRightOS />
        </div>
      </button>
    );
  };

  const settings_3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <ArrowButtonPrevious onClick={onclick}  />,
    nextArrow: <ArrowButtonNext  onClick={onclick}/>,
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:false,
        
      }
    }]
  };
  return (
    <div className='onePlatformSliderContainer'>
      <h2>One Platform, Endless Options</h2>
      {/* slider */}
      <div className="onePlatformSliders">

          
            <Slider {...settings_3}>
            <div className='onePlatformSliderItem'>
                <div className='onePlatformSliderInnerItem'>
                  <h2>Forex</h2>
                  <img src={Forex} alt="Forex" />
                  <button>More Info</button>
                </div>
            </div>
            <div className='onePlatformSliderItem'>
                <div className='onePlatformSliderInnerItem'>
                  <h2>Stocks</h2>
                  <img src={Stocks} alt="Forex" />
                  <button>More Info</button>
                </div>
            </div>
            <div className='onePlatformSliderItem'>
                <div className='onePlatformSliderInnerItem'>
                  <h2>Commodities</h2>
                  <img src={Commodities} alt="Forex" />
                  <button>More Info</button>
                </div>
            </div>
            <div className='onePlatformSliderItem'>
                <div className='onePlatformSliderInnerItem'>
                  <h2>Indices</h2>
                  <img src={Indices} alt="Forex" />
                  <button>More Info</button>
                </div>
            </div>
            <div className='onePlatformSliderItem'>
                <div className='onePlatformSliderInnerItem'>
                  <h2>Crypto</h2>
                  <img src={Crypto} alt="Forex" />
                  <button>More Info</button>
                </div>
            </div>
            <div className='onePlatformSliderItem'>
                <div className='onePlatformSliderInnerItem'>
                  <h2>IPO</h2>
                  <img src={Ipo} alt="Forex" />
                  <button>More Info</button>
                </div>
            </div>
            <div className='onePlatformSliderItem'>
                <div className='onePlatformSliderInnerItem'>
                  <h2>Bonds</h2>
                  <img src={Bonds} alt="Forex" />
                  <button>More Info</button>
                </div>
            </div>
                
            </Slider>
                </div>
      </div>
  )
}

export default OnePlatformSlider