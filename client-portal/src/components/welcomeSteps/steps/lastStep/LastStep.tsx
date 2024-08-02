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
            <button className='lastStepFinishButton'>Finish</button>
        </div>
       </div>
    </div>
  )
}

export default LastStep