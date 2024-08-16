import { Link, useNavigate } from 'react-router-dom'
import './lastStep.scss'
import useDisableWalkThrough from 'api/user/useDisableWalkthrough';
import { useAppDispatch, useAppSelector } from '@store/hooks';

import { useCookies } from 'react-cookie';
import { updateWalkthrough } from '@store/slices/user';
import { useTranslation } from 'react-i18next';

const LastStep = () => {

  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);
  const { t } = useTranslation();
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate()
  const { mutate, isPending } = useDisableWalkThrough({
    onSuccess: (data) => {
      dispatch(updateWalkthrough());
      navigate('/platform')
    },
    onError: (error) => {},
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
            <h2>{t("doYouWantToFinishTraining")}</h2>
            <span>{t("resumeTrainingInHelpSection")}</span>
        </div>
        <div className='lastStepModalButtonContainer'>
            <button className='lastStepCancelButton'>{t("cancel")}</button>
            <Link to={'/platform'}>
            <button className='lastStepFinishButton' onClick={()=>handleFinishWalkThrough()}>{t("finish")}</button>
            </Link>
        </div>
       </div>
    </div>
  )
}

export default LastStep