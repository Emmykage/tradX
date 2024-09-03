import { Route, Routes, HashRouter } from "react-router-dom";
import Platform from "./pages/private/platform/Platform";
import Lender from "./pages/private/lender/Lender";
import SignIn from "./pages/public/signIn/SignIn";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/platform" element={<Platform />} />
        {/* init  */}
        <Route path="/lender" element={<Lender />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
