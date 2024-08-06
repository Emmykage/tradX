
import { Outlet, Navigate } from 'react-router-dom';



const PrivateRoute = () => {
  const user = {
    is_walkthrough_completed: false, // Replace this with the actual value from your context or state
  };
  return user.is_walkthrough_completed ? <Outlet /> : <Navigate to="/platform" replace />;
};

export default PrivateRoute;