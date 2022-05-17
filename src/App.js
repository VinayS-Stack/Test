import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/UserLogin";
import ProtectedRoutes from "./utils/ProtectedAuth";
import Home from "./components/DashBoard";
import PublicRoutes from "./utils/PublicAuth";
import PageNotFound from "./components/PageNotFound";
import UserAccounts from "./components/UserAccounts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/Dashboard" element={<Home />} />
            <Route path="/UserAccounts" element={<UserAccounts />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<UserLogin />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
