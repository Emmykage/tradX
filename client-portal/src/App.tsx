import { useEffect } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Platform from "./pages/private/platform/Platform";
import Lender from "./pages/private/lender/Lender";
import SignIn from "./pages/public/signIn/SignIn";
import Download from "./pages/public/downloads/Download";
import Transactions from "./pages/private/transactions/Transactions";
// import GetLoan from "./pages/private/get-loan/GetLoan";
// import Loan from "./pages/private/loan/Loan";
// import LoanMicroLenders from "./pages/private/loanMicroLenders/LoanMicroLenders";

import getEnv from "./utils/env";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
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

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="transactions" element={<Transactions />} />
        {/* <Route path="/loan/get-loan" element={<GetLoan />} /> */}
        <Route path="/lender" element={<Lender />} />
        <Route path="/downloads" element={<Download />} />
        {/* <Route path="/loan" element={<Loan />} /> */}
        {/* <Route path="/loan/microlenders" element={<LoanMicroLenders />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default App;
