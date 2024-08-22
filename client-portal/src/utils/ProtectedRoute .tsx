import { useAppSelector } from '@store/hooks';
import Loading from 'components/loading';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { user, loading } = useAppSelector((state) => state.user);
  console.log(user);
  if (loading) {
    return <div className="fullLoadingBackground"><Loading/></div> // Or null, or a blank div
  }
  return !user?.is_walkthrough ? <Outlet /> :  <Outlet />
  //  <Navigate to="/platform" replace />;
};

export default PrivateRoute;