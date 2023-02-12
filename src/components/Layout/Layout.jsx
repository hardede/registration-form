import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-bg_register bg-cover bg-center">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
