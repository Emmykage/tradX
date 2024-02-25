import useRefreshToken from "api/user/useRefreshToken";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  let location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "refresh_token",
  ]);

  const { mutate } = useRefreshToken({
    onSuccess: (data) => {
      setCookie("access_token", data.access, { maxAge: 270 });
    },
    onError: (error: any) => {
      console.error("error refreshing the token", error?.refresh);
      removeCookie("access_token");
      removeCookie("refresh_token");

      return <Navigate to="/" state={{ from: location }} />;
    },
  });

  useEffect(() => {
    if (cookies?.access_token) {
      const refreshInterval = 4 * 60 * 1000;

      const refresh = () => {
        mutate({ refresh: cookies.refresh_token });
      };

      const tokenPayload = JSON.parse(
        atob(cookies?.access_token?.split(".")[1])
      );
      const tokenExpirationTime = new Date(tokenPayload?.exp * 1000);
      const currentTime = new Date();
      const timeUntilExpiration =
        tokenExpirationTime.getTime() - currentTime.getTime();

      if (timeUntilExpiration <= 24 * 1000) {
        refresh();
      }

      const intervalId = setInterval(() => {
        refresh();
      }, refreshInterval);

      return () => clearInterval(intervalId);
    }
  }, [cookies.access_token]);

  if (!cookies.access_token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
