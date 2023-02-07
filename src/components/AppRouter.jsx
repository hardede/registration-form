import React from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmCode from "./Auth/ConfirmCode/ConfirmCode";
import Login from "./Auth/Login/Login";
import MagicLink from "./Auth/MagicLink/MagicLink";
import SignUp from "./Auth/SignUp/SignUp";
import Layout from "./Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" />
        <Route path="login" >
          <Route index element={<Login />} />
          <Route path="magic_link" element={<MagicLink />} />
        </Route>
        <Route path="/confirm_code" element={<ConfirmCode />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
