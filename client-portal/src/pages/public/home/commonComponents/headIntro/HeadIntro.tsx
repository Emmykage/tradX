import './headIntro.scss'

interface HeadIntroProps{
    title:string;
    detail:string;
    buttonTitle: string;
}
const HeadIntro:React.FC<HeadIntroProps> = ({title,detail,buttonTitle}) => {
    // const title = 'Commodities'
    // const detail = "Speculate on the raw materials driving the global economy. Sign up to trade CFDs on energy markets like Oil and Gas, metals like gold and silver, and soft commodities like corn and cocoa."
    // const buttonTitle = 'Trade Commodities'
  return (
    <div className="headIntroContainer">
        <h2>{title}</h2>
        <p>{detail}</p>
        <button>{buttonTitle}</button>
    </div>
  )
}

export default HeadIntro