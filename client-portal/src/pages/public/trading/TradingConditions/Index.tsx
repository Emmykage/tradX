import Navbar from 'pages/public/home/commonComponents/navbar/Navbar'
import TradeTable from 'pages/public/home/commonComponents/tradeTable/TradeTable'
import Footer from 'pages/public/home/main/footer/Footer'

const TradingConditions = () => {
  return (
    <div className='tradingContainer'>
    <Navbar/>
    <TradeTable/>
    
    <Footer/>
  </div>
  )
}

export default TradingConditions