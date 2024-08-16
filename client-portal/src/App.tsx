import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";



// import GetLoan from "./pages/private/get-loan/GetLoan";
// import Loan from "./pages/private/loan/Loan";
// import LoanMicroLenders from "./pages/private/loanMicroLenders/LoanMicroLenders";


import getEnv from "./utils/env";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import useMouseIdle from "./hooks/useMouseIdle";

import RequireAuth from "components/requireAuth";
import { useAppDispatch } from "@store/hooks";
import { setIsIdle } from "@store/slices/global";
import useInitializeData from "hooks/useInitializeData";
// import WalkThrough from "pages/private/platform/WalkThrough";
import PrivateRoute from "utils/ProtectedRoute ";

import Platform from "pages/private/platform/Platform";
import Loading from "components/loading";
import { useCookies } from "react-cookie";
import NotFoundPage from "pages/private/platform/platformMenus/notFound/NotFoundPage";
import Trading from "pages/public/trading/Trading";
// import ForexCalculator from "pages/public/trading/ForexProitCalculator/forexCalculator/ForexCalculator";
import TradingConditions from "pages/public/trading/TradingConditions/Index";
import CFDTrading from "pages/public/trading/cfdTrading";
import ForexProfitCalculator from "pages/public/trading/ForexProfitCalculator";






const Commodities = lazy(()=>import("pages/public/markets/commodities/Commodities"))
const Crypto = lazy(()=>import("pages/public/markets/crypto/Crypto"))
const Etf = lazy(()=>import("pages/public/markets/etf/Etf"))
const Bonds = lazy(()=>import("pages/public/markets/bonds/Bonds"))
const Indices = lazy(()=>import("pages/public/markets/indices/Indices"))
const Shares = lazy(()=>import("pages/public/markets/shares/Shares"))
const Ipo = lazy(()=>import("pages/public/markets/ipo/Ipo"))


const TradingPlatform = lazy(()=>import("pages/public/trading/platform"))
const MobileTrading = lazy(()=>import("pages/public/trading/tradingMobile"))
const MetaTradingFour = lazy(()=>import("pages/public/trading/metaTrading4/Index"))
const MetaTradingFive = lazy(()=>import("pages/public/trading/metaTrading5"))
const CopyTrading = lazy(()=>import("pages/public/trading/CopyTrade"))
const CFDTradingCalculator = lazy(()=>import("pages/public/trading/CFDCalculator"))
const CommoditiesProfitCalculator = lazy(()=>import("pages/public/trading/CommoditiesProfitCal/Index"))
const ForexMarginCalculator = lazy(()=>import("pages/public/trading/forexMarginCalculator"))
const EconomicCalendar = lazy(()=>import("pages/public/trading/economicCalendar/Index"))
const CFDAssetList = lazy(()=>import("pages/public/trading/CFDAssetList/Index"))
const ExpirationDates = lazy(()=>import("pages/public/trading/expirationDates/Index"))

// Lazy load components
const Lender = lazy(() => import("./pages/private/lender/Lender"));
const SignIn = lazy(() => import("./pages/public/signIn/SignIn"));
const Welcome = lazy(() => import("./pages/public/welcome/Welcome"));
const Download = lazy(() => import("./pages/public/downloads/Download"));
const Transactions = lazy(() => import("./pages/private/transactions/Transactions"));
const EmailVerification = lazy(() => import("pages/public/emailVerification/EmailVerification"));
const ResetPassword = lazy(() => import("pages/public/resetPassword/ResetPassword"));
const Home = lazy(() => import("pages/public/home/main/Home"));
const StatusDetails = lazy(() => import("./pages/public/statusDetails/StatusDetails"));
const CookieDisclosure = lazy(() => import("pages/public/home/cookieDisclosure/CookieDisclosure"));




interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);


 

  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  console.log(i18n)

  console.log(
    "Envrionment Variable: VITE_API_BASE_URL => ",
    getEnv("VITE_API_BASE_URL")
  );
  useInitializeData();

  useEffect(() => {
    i18n.changeLanguage('ja');
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
    <div data-theme={"dark"}>

    <HashRouter>
      <Suspense fallback={<div className="fullLoadingBackground"><Loading/></div>}>
      <Routes>
        {/* turned of the auth require */}
        <Route element={<RequireAuth  />}>
          <Route path="/platform" element={<Platform />} />
          {/* Private route using PrivateRoute component */}
          <Route path="/welcome" element={<PrivateRoute />}>
              <Route path="/welcome" element={<Welcome />} />
           </Route>
          <Route path="transactions" element={<Transactions />} />
          {/* <Route path="/loan/get-loan" element={<GetLoan />} /> */}
          <Route path="/lender" element={<Lender />} />
          {/* <Route path="/loan" element={<Loan />} /> */}
          {/* <Route path="/loan/microlenders" element={<LoanMicroLenders />} /> */}
          <Route path="/statusDetails" element={<StatusDetails />} />
        </Route>
        
        {/* <Route path="/markets/regulations" element={<Regulation />} />
        <Route path="/markets/cookieDisclosure" element={<CookieDisclosure />} />
        <Route path="/markets/privacyPolciy" element={<PrivacyPolicy />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/markets/Commodities" element={<Commodities />} /> 
        <Route path="/markets/shares" element={<Shares />} /> 
        <Route path="/markets/indices" element={<Indices />} /> 
        <Route path="/markets/etfs" element={<Etf />} /> 
        <Route path="/markets/bonds" element={<Bonds />} /> 
        <Route path="/markets/ipos" element={<Ipo />} /> 
        <Route path="/markets/crypto" element={<Crypto />} /> 


        <Route path="/trading/tradingPlatform" element={<TradingPlatform />} /> 
        <Route path="/trading/MobileTrading" element={<MobileTrading />} /> 
        <Route path="/trading/metaTradingFour" element={<MetaTradingFour />} /> 
        <Route path="/trading/metaTradingFive" element={<MetaTradingFive />} /> 
        <Route path="/trading/copyTrading" element={<CopyTrading />} /> 
        <Route path="/trading/cfdTradingCalculator" element={<CFDTradingCalculator />} /> 
        <Route path="/trading/commoditesProfitCalculator" element={<CommoditiesProfitCalculator />} /> 
        <Route path="/trading/forexProfitCalculator" element={<ForexProfitCalculator />} />
        <Route path="/trading/forexMarginCalculator" element={<ForexMarginCalculator />} /> 
        <Route path="/trading/economicCalendar" element={<EconomicCalendar />} /> 
        <Route path="/trading/cfdAssetList" element={<CFDAssetList />} /> 
        <Route path="/trading/tradingConditions" element={<TradingConditions />} /> 
        <Route path="/trading/expirationDate" element={<ExpirationDates />} />  
        <Route path="/trading/cfdTrading" element={<CFDTrading />} />  



        <Route path="/trading" element={<Trading />} /> 
        <Route path="/downloads" element={<Download />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/password-reset" element={<ResetPassword />} />
       
        
        {/* <Route path="/welcome" element={<WalkThrough tradeFormHeight={2} />} /> */}
        
      <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </Suspense>
    </HashRouter>
    </div>

  );
};

export default App;
