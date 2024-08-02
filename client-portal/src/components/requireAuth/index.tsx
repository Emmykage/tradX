import useRefreshToken from "api/user/useRefreshToken";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setUser } from "@store/slices/user";
import { GlobalStates, setIsIdle } from "@store/slices/global";
import { setWallets } from "@store/slices/wallet";

import Modal from "components/modal/Modal";
import WarningIcon from "assets/icons/WarningIcon";

import "./styles.scss";

const RequireAuth = () => {
  let location = useLocation();
  const dispatch = useAppDispatch();
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "refresh_token",
  ]);

  const { isIdle } = useAppSelector(
    (state: { global: GlobalStates }) => state.global
  );

  const { mutate } = useRefreshToken({
    onSuccess: () => {},
    onError: (error: any) => {
      console.error("error refreshing the token", error?.refresh);
      removeCookie("access_token");
      removeCookie("refresh_token");

      return <Navigate to="/" state={{ from: location }} />;
    },
  });

  const handleKeepLogin = () => {
    mutate(
      { refresh: cookies.refresh_token },
      {
        onSuccess: (data) => {
          setCookie("access_token", data.access, { maxAge: 270 });
          dispatch(setIsIdle(false));
          window.location.reload();
        },
      }
    );
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setWallets([]));
    removeCookie("access_token");
    removeCookie("refresh_token");
    setIsIdle(false);
    window.location.reload();
  };

  useEffect(() => {
    if (cookies?.access_token && !isIdle) {
      const refreshInterval = 4 * 60 * 1000;

      const refresh = () => {
        mutate(
          { refresh: cookies.refresh_token },
          {
            onSuccess: (data) => {
              setCookie("access_token", data.access, { maxAge: 270 });
            },
          }
        );
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

  if (!cookies.access_token && !isIdle) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <>
      <Outlet />
      <Modal rootClassName="idle_warn_modal" open={isIdle} setOpen={() => {}}>
        <div className="idle_warn_modal_content">
          <WarningIcon />
          <p className="info_text">Your account is idle</p>
          <div className="buttons_container">
            <Button onClick={handleKeepLogin}>Reactivate</Button>
            <Button onClick={handleLogout}>Log out</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RequireAuth;
