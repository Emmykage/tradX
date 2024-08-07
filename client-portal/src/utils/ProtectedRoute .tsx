import { useAppSelector } from '@store/hooks';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  // const user = {
  //   is_walkthrough_completed: true, // Replace this with the actual value from your context or state
  // };
  return !user?.is_walkthrough ? <Outlet /> : <Navigate to="/platform" replace />;
};

export default PrivateRoute;