import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import { useGetLoggedInUserDetails } from "./hooks/useGetLoggedInUserDetails";
import { PreLoginRoute } from "./components/PreLoginRoute";
import { useIsLoggedIn } from "./hooks/useIsLoggedIn";
import { URL } from "./utils/constants";
import DashboardPage from "./pages/DashboardPage";

const DashboardComponent = () => {
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn) return <DashboardPage />;
  return <Navigate to={URL.LANDING_PAGE} />;
};

function App() {
  useGetLoggedInUserDetails();

  return (
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route
          path="/register"
          element={<PreLoginRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<PreLoginRoute component={<LoginPage />} />}
        />
        <Route path="/dashboard" element={<DashboardComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
