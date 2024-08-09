import './categorySlider.scss';
import OilImage from '../../../../../assets/categorySlider/oil.png'
import Slider from 'react-slick';
import { ArrowLeftOS, ArrowRightOS } from 'assets/icons';
import { useState } from 'react';
const CategorySlider = () => {
    const ArrowButtonPrevious:React.FC<{onClick: any}> = ({  onClick }) => {
        return (
          <button
            onClick={onClick}
            className="aboutUsPreviousSliderButton"
          >
            <div className='aboutPreviousSliderIconContainer'>
                <ArrowLeftOS/>
                
            </div>
          </button>
        );
      };
    const ArrowButtonNext:React.FC<{onClick: any}>  = ({onClick }) => {
        return (
          <button
          className="aboutUsNextSliderButton"
            onClick={onClick}
          >
             <div className='aboutUsNextSliderIconContainer'>
             <ArrowRightOS  height='20' width='20' />
            </div>
          </button>
        );
      };
    
    const settings_3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        prevArrow: <ArrowButtonPrevious onClick={onclick}  />,
        nextArrow: <ArrowButtonNext  onClick={onclick}/>,
        
        slidesToScroll: 1,
         responsive: [{
          breakpoint: 600,
          settings: {
            dots: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll:1,
            arrows:false,
            
          }
        }]
      };


     

      
      const AllPairs = (
        <div className="categorySliderContainer">
          
        
        <Slider {...settings_3}>
        <div className="categorySliderCard">
          
            {/* top */}
            <div className="categorySliderTopContainer">
                {/* left */}
                <div className="categorySliderTopLeftContainer">
                    <h2>UKOIL</h2>
                    <span>Brent Oil</span>
                    <button>COMMODITIES</button>

                </div>
                {/* right */}
                <div className="categorySliderTopRightContainer">
                    <h2>80.90</h2>
                    <span>-2.02%</span>

                </div>

            </div>
            {/* middle */}
            <div className="categorySliderMiddleContainer">
                <img src={OilImage} alt="" />
            </div>
            {/* bottom */}
            <div className="categorySliderBottomContainer">
            <button>Trade</button>
            </div>

        </div>
        <div className="categorySliderCard">
            {/* top */}
            <div className="categorySliderTopContainer">
                {/* left */}
                <div className="categorySliderTopLeftContainer">
                    <h2>UKOIL</h2>
                    <span>Brent Oil</span>
                    <button>COMMODITIES</button>

                </div>
                {/* right */}
                <div className="categorySliderTopRightContainer">
                    <h2>80.90</h2>
                    <span>-2.02%</span>

                </div>

            </div>
            {/* middle */}
            <div className="categorySliderMiddleContainer">
                <img src={OilImage} alt="" />
            </div>
            {/* bottom */}
            <div className="categorySliderBottomContainer">
            <button>Trade</button>
            </div>

        </div>
        <div className="categorySliderCard">
            {/* top */}
            <div className="categorySliderTopContainer">
                {/* left */}
                <div className="categorySliderTopLeftContainer">
                    <h2>UKOIL</h2>
                    <span>Brent Oil</span>
                    <button>COMMODITIES</button>

                </div>
                {/* right */}
                <div className="categorySliderTopRightContainer">
                    <h2>80.90</h2>
                    <span>-2.02%</span>

                </div>

            </div>
            {/* middle */}
            <div className="categorySliderMiddleContainer">
                <img src={OilImage} alt="" />
            </div>
            {/* bottom */}
            <div className="categorySliderBottomContainer">
            <button>Trade</button>
            </div>

        </div>
        </Slider>
        </div>
      )

      const [toggleContent, setToggleContent] = useState(0)

      const toggleContentData = [
          AllPairs,
          <h1>content2</h1>,
          <h1>content3</h1>
      ]
  return (
    <div className='categorySliderPageContainer'>
        <div className='categorySliderTabContainer'>
            <button style={{color:toggleContent === 0 ? 'rgba(255, 24, 2, 1)' : 'rgba(255, 255, 255, 0.6)'}} onClick={()=>setToggleContent(0)}>All Pairs</button>
            <button style={{color:toggleContent === 1 ? 'rgba(255, 24, 2, 1)' : 'rgba(255, 255, 255, 0.6)'}} onClick={()=>setToggleContent(1)}>Top Gainers</button>
            <button style={{color:toggleContent === 2 ? 'rgba(255, 24, 2, 1)' : 'rgba(255, 255, 255, 0.6)'}} onClick={()=>setToggleContent(2)}>Losing Down</button>
        </div>

        {
            toggleContentData[toggleContent]
        }
       
    </div>
  )
}

export default CategorySlider