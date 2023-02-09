import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Auth/Login/Login";
import SignUp from "./Auth/SignUp/SignUp";
import Layout from "./Layout/Layout";
import Profile from "./Profile/Profile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
