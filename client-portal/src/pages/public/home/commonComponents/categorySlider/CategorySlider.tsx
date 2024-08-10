import './categorySlider.scss';

import { ArrowLeftOS, ArrowRightOS } from 'assets/icons';
import { useState } from 'react';
import Slider from 'react-slick';

 interface CategorySliderProps {
  allPairsData: Array<{
    title: string
    subtitle: string
    category: string
    value: string
    change: string
    image: string
  }>,
  topGainersData?: Array<{
    title: string
    subtitle: string
    category: string
    value: string
    change: string
    image: string
  }>,
  losginDownData?: Array<{
    title: string
    subtitle: string
    category: string
    value: string
    change: string
    image: string
  }>,
}



const CategorySlider:React.FC<CategorySliderProps> = ({allPairsData,topGainersData,losginDownData}) => {
    const ArrowButtonPrevious:React.FC<{onClick: any}> = ({  onClick }) => {
        return (
          <button
            onClick={onClick}
            className="categoryPreviousSliderButton"
          >
            <div className='categoryPreviousSliderIconContainer'>
                <ArrowLeftOS/>
                
            </div>
          </button>
        );
      };
    const ArrowButtonNext:React.FC<{onClick: any}>  = ({onClick }) => {
        return (
          <button
          className="categoryNextSliderButton"
            onClick={onClick}
          >
             <div className='categoryNextSliderIconContainer'>
             <ArrowRightOS  height='20' width='20' />
            </div>
          </button>
        );
      };
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        prevArrow: <ArrowButtonPrevious onClick={onclick} />,
        nextArrow: <ArrowButtonNext onClick={onclick} />,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              dots: true,
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ]
      };

      
      const AllPairs = (
        <div className="categorySliderContainer">
          
        
       <Slider {...settings}>
  {allPairsData.map((card, index) => (
    <div key={index} className={`categorySliderCard slider-card-${index + 1}`}>
      {/* top */}
      <div className="categorySliderTopContainer">
        {/* left */}
        <div className="categorySliderTopLeftContainer">
          <h2>{card.title}</h2>
          <span>{card.subtitle}</span>
          <button>{card.category}</button>
        </div>
        {/* right */}
        <div className="categorySliderTopRightContainer">
          <h2>{card.value}</h2>
          <span>{card.change}</span>
        </div>
      </div>
      {/* middle */}
      <div className="categorySliderMiddleContainer">
        <img src={card.image} alt={card.title} />
      </div>
      {/* bottom */}
      <div className="categorySliderBottomContainer">
        <button>Trade</button>
      </div>
    </div>
  ))}
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