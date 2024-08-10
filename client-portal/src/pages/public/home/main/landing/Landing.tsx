import './landing.scss'
import HomeGraph from '../../../../../assets/home/homeGraph.png'
import TradingFunctionality from '../../../../../assets/home/tradeFunctionality.png'
import CustomMarker1 from '../Indicators/customMarker1/CustomMarker1'
import CustomMarker2 from '../Indicators/customMarker2/CustomMarker2'

const Landing = () => {
  return (
    <div>
        <div className="landingHeaderTitle">
            <h2>Be The Master with Us</h2>
            <span>Excel in trading and achieve your financial goals</span>
            <button>Start Trading</button>
        </div>
        <div className='bottomGraphImageContainer'>
            <div className='homeGraphContainer'>
                <img src={HomeGraph} alt="" />
                
                <div className='valueGraphIndicator'>
                    <span>+$80</span>
                </div>
                <div className='customMarker1Container'>
                <CustomMarker1/>
                </div>
                <div className='customMarker2Container'>
                    <CustomMarker2/>
                </div>
            </div>
            <div className='homeTradeFunctionality'>
                <img src={TradingFunctionality} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Landing