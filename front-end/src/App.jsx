import React, { useState } from "react";
// import { Button, Alert, Space, Input, Form } from "antd";
// import axios from "axios";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpVarification from "./pages/OtpVarification";
import Login from "./pages/Login";
import EmailVerifyLink from "./pages/EmailVerifyLink";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import NewPass from "./pages/NewPass/NewPass";
import Dashboard from "./pages/Dashboard/Dashboard";
import Adcategory from "./pages/Adcategory/Adcategory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/newpassword/:token" element={<NewPass />} />
      <Route path="/emailverification/:token" element={<EmailVerifyLink />} />
      <Route path="/otpvarification/:email" element={<OtpVarification />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="addcategory" element={<Adcategory />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
