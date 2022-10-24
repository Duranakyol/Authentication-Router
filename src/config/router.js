import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}>
            Home
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />}>
            SignIn
          </Route>
          <Route path="/sign-up" element={<SignUp />}>
            SignUp
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
