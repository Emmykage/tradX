import { Link, useNavigate } from 'react-router-dom'
import './lastStep.scss'
import useDisableWalkThrough from 'api/user/useDisableWalkthrough';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useCookies } from 'react-cookie';

const LastStep = () => {

  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate()
  const { mutate, isPending } = useDisableWalkThrough({
    onSuccess: (data) => {
      // dispatch(updateNotificationList(data));
      // update user data
      // navigate to platform page
      navigate('/platform')
    },
    onError: (error) => { },
  });


  const handleFinishWalkThrough = () =>{
    mutate({
      token: cookies.access_token,
    });
  }
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
            <button className='lastStepFinishButton' onClick={()=>handleFinishWalkThrough()}>Finish</button>
            </Link>
        </div>
       </div>
    </div>
  )
}

export default LastStep