import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './authprovider';

export function ProtectedRoute() {
  const location = useLocation(); 

  const { loggedIn } = useAuth();

  return loggedIn()
    ? <Outlet />
    : (
      <Navigate
        to="/signin"
        replace
        state={{ from: location }}
      />
    );
};