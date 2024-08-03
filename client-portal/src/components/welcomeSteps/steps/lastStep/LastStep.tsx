import { Link } from 'react-router-dom'
import './lastStep.scss'

const LastStep = () => {
  return (
    <div className='lastStepContainer'>
       <div className='lastStepModal'>
        <div className='lastStepModalHeader'>
            <h2>Do you want to finish training ?</h2>
            <span>You can resume your training later in the Help section.</span>
        </div>
        <div className='lastStepModalButtonContainer'>
            <button className='lastStepCancelButton'>Cancel</button>
            <Link to={'/platform'}>
            <button className='lastStepFinishButton'>Finish</button>
            </Link>
        </div>
       </div>
    </div>
  )
}

export default LastStep