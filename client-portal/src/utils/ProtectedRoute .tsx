import { useAppSelector } from '@store/hooks';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  return !user?.is_walkthrough ? <Outlet /> : <Navigate to="/platform" replace />;
};

export default PrivateRoute;