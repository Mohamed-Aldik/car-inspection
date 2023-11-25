import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import { useGetLoggedInUserDetails } from './hooks/useGetLoggedInUserDetails';
import { useIsLoggedIn } from './hooks/useIsLoggedIn';
import { URL } from './utils/constants';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import { PreLoginRoute } from './components/preLoginRoute';
import { useLayoutEffect, useRef } from 'react';

const DashboardComponent = () => {
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn) return <DashboardPage />;
  return <Navigate to={URL.LANDING_PAGE} />;
};

function App() {
  useGetLoggedInUserDetails();

  const htmlRef = useRef(document.documentElement);

  useLayoutEffect(() => {
    htmlRef.current.style.scrollBehavior = 'smooth';

    return () => {
      htmlRef.current.style.scrollBehavior = '';
    };
  }, []);

  return (
    <Routes>
      <Route path='/'>
        {/* DEFAULT ROUTE */}
        <Route index element={<LandingPage />} />

        {/* PRE LOGIN */}
        <Route path='/register' element={<PreLoginRoute component={<RegistrationPage />} />} />
        <Route path='/login' element={<PreLoginRoute component={<LoginPage />} />} />

        {/* POST LOGIN */}
        <Route path='/dashboard' element={<DashboardComponent />} />

        {/* NOT FOUND */}
        <Route path='404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to={URL.NOT_FOUND} />} />
      </Route>
    </Routes>
  );
}

export default App;
