import './imageCard.scss'
 const ImageCard = ({avatar, name, profit, ROI, style} : {avatar: string,  name: string, profit: string, ROI: string, style: {}}) => (
    <div style={style} className='pic-card'>
        <div className='pic-wrapper'>
        <img src={avatar} alt="pic" />
         </div>
        <div className='pic-info'>
            <p className='name'>{name}</p>
            <p className='fig'>{profit}</p>
            <p className='ROI'>ROI <span>{ROI}</span> </p>
            <button>follow</button>
        </div>
    </div>
)

export default ImageCard