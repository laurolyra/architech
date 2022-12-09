import React, { ReactNode } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Home from '../templates/Home';
import Dashboard from '../templates/Dashboard';

type PrivateRouteProps = {
  children: ReactNode;
};
const MainRoutes = () => {
  const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const authToken = Cookies.get('auth_token');
    return <>{authToken ? children : <Navigate to="/" />}</>;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* <Route path='/settings' element={<Settings/>} /> */}
    </Routes>
  );
};
export default MainRoutes;
