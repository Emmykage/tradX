import { useEffect } from "react";
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Platform from "./pages/private/platform/Platform";
import Lender from "./pages/private/lender/Lender";
import SignIn from "./pages/public/signIn/SignIn";
import Welcome from "./pages/public/welcome/Welcome";

import Download from "./pages/public/downloads/Download";
import Transactions from "./pages/private/transactions/Transactions";
// import GetLoan from "./pages/private/get-loan/GetLoan";
// import Loan from "./pages/private/loan/Loan";
// import LoanMicroLenders from "./pages/private/loanMicroLenders/LoanMicroLenders";
import EmailVerification from "pages/public/emailVerification/EmailVerification";
import ResetPassword from "pages/public/resetPassword/ResetPassword";

import getEnv from "./utils/env";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import useMouseIdle from "./hooks/useMouseIdle";
import StatusDetails from "./pages/public/statusDetails/StatusDetails";
import RequireAuth from "components/requireAuth";
import { useAppDispatch } from "@store/hooks";
import { setIsIdle } from "@store/slices/global";
import useInitializeData from "hooks/useInitializeData";
import WalkThrough from "pages/private/platform/WalkThrough";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const dispatch = useAppDispatch();

  useInitializeData();

  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  console.log(
    "Envrionment Variable: VITE_API_BASE_URL => ",
    getEnv("VITE_API_BASE_URL")
  );

  useEffect(() => {
    const storedScale = localStorage.getItem("scale");

    if (storedScale) {
      updateScale(parseFloat(storedScale ? storedScale : "1"));
    }
  }, []);

  const updateScale = (scale: number) => {
    const root = document.documentElement;
    root.style.fontSize = `${scale}rem`;
    localStorage.setItem("scale", scale.toString());
  };

  // hook that triggers a callback function when the user is inactuve for 5 minutes
  useMouseIdle(() => {
    dispatch(setIsIdle(true));
  });

  return (
    <HashRouter>
      <Routes>
        {/* turned of the auth require */}
        <Route element={<RequireAuth />}>
          <Route path="/platform" element={<Platform />} />
          <Route path="transactions" element={<Transactions />} />
          {/* <Route path="/loan/get-loan" element={<GetLoan />} /> */}
          <Route path="/lender" element={<Lender />} />
          {/* <Route path="/loan" element={<Loan />} /> */}
          {/* <Route path="/loan/microlenders" element={<LoanMicroLenders />} /> */}
          <Route path="/statusDetails" element={<StatusDetails />} />
        </Route>
        <Route path="/downloads" element={<Download />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/password-reset" element={<ResetPassword />} />
        <Route path="/welcome" element={<Welcome />} />
        {/* <Route path="/welcome" element={<WalkThrough tradeFormHeight={2} />} /> */}
        
      </Routes>
    </HashRouter>
  );
};

export default App;
