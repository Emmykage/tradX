import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  let location = useLocation();
  const [cookies] = useCookies(["access_token"]);

  if (!cookies.access_token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
