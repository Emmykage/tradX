import './executiveBounuses.scss'

import ExecutiveImage from '../../../../../assets/home/executiveBonusImage.png' 
import ExecutiveIcon1 from '../../../../../assets/home/executiveIcon1.png' 
import ExecutiveIcon2 from '../../../../../assets/home/executiveIcon2.png' 
import Slider from 'react-slick';
const ExecutiveBonuses = () => {
    const settings_3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.3,
        centerMode:true,
        arrows:false,
        
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
  return (
    <div className='executiveBonusesContainer'>

        {/* left image container */}
        <div className='leftExecutiveContainer'>
            <img src={ExecutiveImage} alt="" />
        </div>
        {/* right slider container */}
        <div className='rightSliderExecutiveContainer'>
        <Slider {...settings_3}>
            <div className='executiveSliderItem'>
                <div className='executiveSliderInnerItem'>
                  <div className='leftSideExecutiveSliderContainer'>
                    <img src={ExecutiveIcon1} alt="" />
                    <p>Club Membership Plan</p>
                    <span>50% OFF</span>
                    <button>Get Bonus</button>
                  </div>
                  <div className='rightSideExecutiveSliderContainer'>
                      <button>EXCLUSIVE</button>
                  </div>
                </div>
            </div>
            <div className='executiveSliderItem'>
                <div className='executiveSliderInnerItem'>
                  <div className='leftSideExecutiveSliderContainer'>
                    <img src={ExecutiveIcon2} alt="" />
                    <p>First Trade Discount</p>
                    <span>20% OFF</span>
                    <button>Get Bonus</button>
                  </div>
                  <div className='rightSideExecutiveSliderContainer'>
                      <button>EXCLUSIVE</button>
                  </div>
                </div>
            </div>
          
            </Slider>
        </div>
    </div>
  )
}

export default ExecutiveBonuses