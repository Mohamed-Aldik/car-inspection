import { Navigate } from "react-router-dom";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";

interface IProtectedRoute {
  component: JSX.Element;
}

export const PreLoginRoute = ({ component }: IProtectedRoute) => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return component;
};
