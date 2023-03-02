import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/me/profile" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-bg_register bg-cover bg-center">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
