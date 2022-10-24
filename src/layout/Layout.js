import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedIn } from "../config/hooks";
function AuthLayout() {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (isLoggedIn === false) {
    return <Navigate replace to="/sign-in" />;
  }

  return <Outlet />;
}

export default AuthLayout;
