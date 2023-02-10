import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Auth/Login/Login";
import SignUp from "./Auth/SignUp/SignUp";
import Layout from "./Layout/Layout";
import PrivateLayout from "./Layout/PrivateLayout";
import Profile from "./Profile/Profile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/profile" element={<PrivateLayout />}>
        <Route index element={<Profile />} />
      </Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};

export default AppRouter;
